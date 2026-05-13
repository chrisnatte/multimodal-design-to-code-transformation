# Ansatz A - regelbasierte Transformation

## 1. Übersicht

Der regelbasierte Ansatz (Ansatz A) bildet die deterministische Baseline. Dieser verzichtet vollständig auf Modelle des maschinellen Lernens und stützt sich ausschließlich auf:

- **Strikte Mapping-Regeln** zwischen Figma-Komponenten und PrimeVue-Komponenten
- **Namenskonventionen** als primäres Identifikationskriterium
- **Heuristiken zur AST-Transformation** für Layout- und Slot-Erkennung

Die zentrale Eigenschaft dieser Methode ist ihre vollständige Nachvollziehbarkeit: Jede einzelne Transformationsentscheidung lässt sich auf eine explizite Regel zurückführen.

### Designprinzipien

| Prinzip                           | Umsetzung                                                        |
|-----------------------------------|------------------------------------------------------------------|
| Determinismus                     | Identische Eingabe erzeugt identische Ausgabe — keine Stochastik |
| Transparenz                       | Jede Regel ist in `COMPONENT_MAP` als Code hinterlegt            |
| Modularität                       | Komponenten-Spezifikationen sind unabhängig erweiterbar          |
| Trennung der Verantwortlichkeiten | AST-Aufbau, Mapping und Code-Generierung sind getrennt           |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────┐
│  Cleaned Figma-JSON     │  Eingabe (Output des Cleaning-Notebooks)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  AST-Parser             │  Schritt 1: rekursive Knotenanalyse
│  (transform_node)       │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Mapping-Engine         │  Schritt 2: Namens-Lookup in COMPONENT_MAP
│  (apply_property_rules) │             + Property-Mapping pro Komponente
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Layout-Engine          │  Schritt 3: FRAME → Tailwind-Utility-Klassen
│  (frame_to_classes)     │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Code-Generator         │  Schritt 4: AST → formatierte Vue 3 SFC
│  (render_ast)           │             + automatische Import-Sammlung
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe
└─────────────────────────┘
```

Jeder Pipeline-Schritt ist isoliert testbar und liefert ein festes Zwischenergebnis. Die Trennung von AST-Aufbau und Code-Generierung ist die zentrale Architekturentscheidung, sodass sich dieser Ansatz von naiver String-Konkatenation unterscheidet und somit zukünftige Erweiterungen wie alternative Ausgabe-Frameworks ohne Änderung der Mapping-Logik möglich macht.

---

## 3. Intermediate Representation (IR)

Die zentrale Datenstruktur zwischen Parser und Code-Generator ist die Klasse `UINode`:

```python
class UINode:
    tag: str                              # 'Button', 'div', etc.
    props: dict                           # statische Props (label="X")
    dynamic_props: dict                   # Vue-Bindings (:disabled="true")
    classes: list[str]                    # Tailwind-Klassen
    children: list                        # weitere UINodes oder Strings
    slot: str | None                      # falls Kind eines Komponenten-Slots
    is_component: bool                    # PrimeVue-Komponente vs. HTML-Element
    self_closing: bool
    figma_id: str | None                  # Tracking für Debugging
    figma_name: str | None
```

Die IR ist bewusst minimalistisch gehalten und entkoppelt die Eingabestruktur (Figma) vollständig von der Ausgabestruktur (Vue). Dadurch kann die Mapping-Logik unabhängig vom Code-Output entwickelt und validiert werden.

---

## 4. Mapping-Konfiguration

### 4.1 Struktur der `COMPONENT_MAP`

Die zentrale Konfiguration ist ein Dictionary, in dem jeder Figma-Komponentenname auf eine Spezifikation abgebildet wird:

```python
COMPONENT_MAP['button'] = {
    'primevue': 'Button',
    'props': { ... },
    'variant_resolver': { ... },
    'skip': { ... },
    'slot_strategy': 'drop',
}
```

| Feld                           | Funktion                                                                   |
|--------------------------------|----------------------------------------------------------------------------|
| `primevue`                     | PrimeVue-Komponentenname (Tag-Name im generierten Code)                    |
| `props`                        | 1:1-Mappings von Figma-Properties auf PrimeVue-Props                       |
| `variant_resolver`             | Auflösung mehrerer Boolean-Properties auf eine Enum-Prop                   |
| `skip`                         | Properties, die ignoriert werden (rein visuell oder redundant)             |
| `slot_strategy`                | Wie Children behandelt werden (`drop`, `default`, `header_content_footer`) |
| `extra_attrs`                  | Zusätzliche Attribute (z.B. `v-model`-Bindings)                            |
| `inherit_placeholder_from_sub` | Sonderfall: Platzhalter aus interner Sub-Instance ziehen                   |
| `overlay_badge_child`          | Sonderfall: Avatar mit Badge in OverlayBadge wrappen                       |

### 4.2 Property-Mapping-Regeln

Jede einzelne Property in `props` hat das folgende Schema:

```python
'Figma-Property-Name': {
    'target': 'primevue_prop_name',
    'type': 'text' | 'boolean' | 'enum' | 'number',
    'value_map': {'figma_value': 'primevue_value' | None},  # optional
    'omit_when': value,                                      # optional
}
```

**Bedeutung der Felder:**

- `target`: Name der PrimeVue-Prop im generierten Code
- `type`: Steuert die Konvertierung der Werte. `boolean` und `number` werden via dynamic-binding (`:prop="..."`), `text` und `enum` als statisches Attribut ausgegeben
- `value_map`: Optionales Wörterbuch für Wert-Übersetzung. `None` als Zielwert bedeutet "weglassen" (Default-Wert)
- `omit_when`: Wenn der konvertierte Wert diesem entspricht, wird die Prop weggelassen — reduziert Boilerplate für Standard-Konfigurationen

**Beispiel** (Button-Severity):

```python
'Severity': {
    'target': 'severity',
    'type': 'enum',
    'value_map': {
        'Primary':   None,           # Default → keine severity-Prop nötig
        'Secondary': 'secondary',
        'Success':   'success',
        'Info':      'info',
        'Warning':   'warn',         # Achtung: Figma "Warning" → PrimeVue "warn"
        'Danger':    'danger',
    },
}
```

### 4.3 Variant-Resolver

PrimeVue-Komponenten haben oft eine `variant`-Prop, die in Figma als mehrere Booleans modelliert ist (z.B. `Outlined`, `Text`, `Link` beim Button). Der Variant-Resolver löst diese auf:

```python
'variant_resolver': {
    'inputs': ['🔲 Outlined', '🔤 Text', 'Link'],
    'target': 'variant',
    'rules': [
        {'when': {'🔲 Outlined': 'True'}, 'result': 'outlined'},
        {'when': {'🔤 Text':     'True'}, 'result': 'text'},
        {'when': {'Link':        'True'}, 'result': 'link'},
    ],
}
```

Die Regeln werden in der angegebenen Reihenfolge ausgewertet; die erste Übereinstimmung gewinnt. Greift keine Regel, wird die `variant`-Prop weggelassen (PrimeVue verwendet dann den Default).

### 4.4 Skip-Properties

Figma exportiert für jede Komponente eine Vielzahl von Properties, die rein für die Visualisierung im Design-Tool relevant sind (`State: Idle`, `Hover`, `Focus`) oder die intern für die Component-Composition genutzt werden (`Show Right Icon`, `Right Icon`). Diese werden explizit in `skip` aufgelistet:

```python
UNIVERSAL_SKIP = {'State', 'Hover', 'Focus', 'Pressed', 'Active'}

COMPONENT_MAP['button']['skip'] = UNIVERSAL_SKIP | {
    'Show Right Icon#1644:1387', 'Show Left Icon#1644:0',
    'Right Icon#1644:4161', 'Left Icon#1644:2774', 'Icon#1690:0',
}
```

Die explizite Aufzählung ist ein Designprinzip — sie macht sichtbar, welche Information bewusst ignoriert wird, statt durch stillschweigende Defaults zu verschwinden.

---

## 5. AST-Transformation

### 5.1 Routing nach Node-Typ

Die Funktion `transform_node()` ist der Einstiegspunkt und verteilt Knoten anhand ihres `type`-Feldes:

```python
def transform_node(figma_node):
    if figma_node['type'] == 'INSTANCE':
        return _transform_instance(figma_node)
    elif figma_node['type'] == 'FRAME':
        return _transform_frame(figma_node)
    elif figma_node['type'] == 'TEXT':
        return _transform_text(figma_node)
    # VECTOR, RECTANGLE etc. werden aktuell verworfen
    return None
```

### 5.2 Behandlung von INSTANCEs

Eine Figma-INSTANCE entspricht einer Komponenten-Instanziierung. Die Verarbeitung läuft in fünf Schritten ab:

1. **Namenskonventions-Lookup**: Der Figma-Name wird normalisiert (`_normalize_name()`: Lowercase, Leerzeichen/Bindestriche/Unterstriche entfernen) und in `COMPONENT_MAP` nachgeschlagen
2. **Property-Resolution**: `apply_property_rules()` extrahiert die PrimeVue-Props
3. **Extra-Attribute**: `v-model`-Bindings, Boolean-Flags wie `showButtons`
4. **Inheritance** (Sonderfall): Bei Komponenten wie `Password` wird der Placeholder aus der internen `_inputtext-content`-Sub-Instanz gezogen
5. **Slot-Behandlung**: Je nach `slot_strategy` werden Children gerendert oder verworfen

### 5.3 Sonderfälle der Komposition

#### Sub-Instances mit Präfix `_`

Figma exportiert für viele Komponenten interne Sub-Instances wie `_inputtext-content` oder `_inputnumber-button`. Diese repräsentieren Implementierungsdetails der Figma-Komponente und haben keine eigenständige Entsprechung in PrimeVue (PrimeVue rendert diese internen Strukturen selbst). Konvention: Alle Instances mit `_`-Präfix werden im Output verworfen.

#### Avatar mit OverlayBadge

Wenn ein `avatar` die Property `Show Badge: true` hat und ein `overlaybadge`-Child enthält, wird die Reihenfolge im Output umgekehrt: Der `<OverlayBadge>` wird der äußere Container, und das `<Avatar>` wird sein Default-Slot-Inhalt. Das entspricht der korrekten PrimeVue-API:

```html
<OverlayBadge value="8" severity="primary">
  <Avatar label="B" size="xlarge" shape="circle" />
</OverlayBadge>
```

#### Wrapper-FRAMEs

Reine Layout-Container ohne Komponenten-Bezug (Figma-Frames mit Namen wie `Column`, `Row`, `content`) werden in `<div>`-Elemente mit Tailwind-Klassen übersetzt. Wenn ein Frame keine eigenen Layout-Klassen hat *und* nur ein Kind, wird er transparent durchgereicht — das verhindert unnötige Wrapper-Divs im Output.

---

## 6. Layout-Engine

Die Funktion `frame_to_classes()` übersetzt Figma-Auto-Layout-Properties in Tailwind-Utility-Klassen:

| Figma-Property                                                 | Tailwind-Output   | Bedingung              |
|----------------------------------------------------------------|-------------------|------------------------|
| `layoutMode: HORIZONTAL`                                       | `flex`            | immer                  |
| `layoutMode: VERTICAL`                                         | `flex flex-col`   | immer                  |
| `itemSpacing: 16`                                              | `gap-4`           | px-Mapping             |
| `paddingLeft = paddingRight = paddingTop = paddingBottom = 24` | `p-6`             | symmetrisch            |
| `paddingLeft = paddingRight = 16`                              | `px-4`            | horizontal symmetrisch |
| `counterAxisAlignItems: CENTER`                                | `items-center`    |                        |
| `primaryAxisAlignItems: SPACE_BETWEEN`                         | `justify-between` |                        |

Die Spacing-Map (`TAILWIND_SPACING`) deckt die häufigsten Werte ab und nutzt für unübliche Werte arbitrary values (`p-[18px]`). Damit ist sichergestellt, dass auch nicht-standardkonforme Abstände im Output erhalten bleiben.

**Beispiel-Transformation:**

```python
# Eingabe (Figma-Frame):
{
    'type': 'FRAME', 'name': 'Column',
    'layoutMode': 'VERTICAL',
    'itemSpacing': 24,
    'paddingLeft': 16, 'paddingRight': 16,
    'paddingTop': 24, 'paddingBottom': 24,
    'counterAxisAlignItems': 'CENTER',
}

# Ausgabe (Klassen):
['flex flex-col', 'gap-6', 'px-4', 'py-6', 'items-center']
```

---

## 7. Code-Generator

Die Funktion `render_ast()` traversiert den AST rekursiv und produziert formatierte Vue-Template-Strings. Sie sammelt parallel alle benötigten PrimeVue-Imports.

### 7.1 Heuristiken für Formatierung

- **Selbstschließende Tags** für Komponenten ohne Children
- **Multi-Line-Attribute** wenn mehr als zwei Attribute *oder* Gesamtlänge über 60 Zeichen
- **Inline-Text** für Komponenten mit genau einem String-Child
- **Einrückung** durch zwei Leerzeichen pro Verschachtelungsebene

### 7.2 SFC-Struktur

Der Generator produziert immer eine vollständige Single-File-Component mit drei Sektionen:

```vue
<template>
  ...
</template>

<script setup>
import { reactive } from 'vue'        // nur wenn v-model-State existiert
import Button from 'primevue/button'  // automatisch gesammelte Imports
import Password from 'primevue/password'

const _state = reactive({ n10_4744: null })  // automatische State-Initialisierung
</script>
```

Die State-Variablen werden aus dem AST gesammelt und im `_state`-Objekt initialisiert. Variablennamen werden aus den Figma-IDs abgeleitet, mit `n`-Präfix versehen (gegen führende Ziffern) und Sonderzeichen ersetzt.

---

## 8. Stärken und Limitationen

### 8.1 Stärken

| Eigenschaft                         | Bedeutung                                                                            |
|-------------------------------------|--------------------------------------------------------------------------------------|
| **Vollständige Reproduzierbarkeit** | Identische Inputs liefern identische Outputs — keine Stochastik                      |
| **Audit-Fähigkeit**                 | Jede Mapping-Entscheidung ist auf eine konkrete Regel zurückführbar                  |
| **Erweiterbarkeit**                 | Neue Komponenten werden durch Hinzufügen eines Eintrags in `COMPONENT_MAP` abgedeckt |
| **Performance**                     | Keine API-Calls, keine GPU — Verarbeitungszeit im Millisekundenbereich               |
| **Kein Daten-Footprint**            | Keine Trainingsdaten, keine API-Schlüssel, keine Token-Kosten                        |

### 8.2 Limitationen

| Limitation                                              | Auswirkung                                                                                     | Adressierbar durch                              |
|---------------------------------------------------------|------------------------------------------------------------------------------------------------|-------------------------------------------------|
| **Strikte Namenskonvention**                            | Bei abweichenden Naming-Patterns versagt das Mapping                                           | Ansatz B (LLM kann Variationen tolerieren)      |
| **Keine semantische Interpretation**                    | "Button" und "Schaltfläche" werden nicht als gleichwertig erkannt                              | Ansatz B / C                                    |
| **Manuelle Pflege der Mapping-Tabelle**                 | Jede neue Komponente benötigt eine Regel                                                       | Inkrementell / aufwendig                        |
| **Eingeschränkte Layout-Heuristik**                     | Nur Auto-Layout-Frames werden korrekt übersetzt; absolut-positionierte Elemente fallen durch   | Ansatz C (Vision-LLM versteht visuelles Layout) |
| **Kein Verständnis für unkonventionelle Kompositionen** | Wird Avatar+Badge ohne offizielle OverlayBadge-Composition modelliert, scheitert die Erkennung | Ansatz B / C                                    |

### 8.3 Hypothesen für den Methodenvergleich

Aus den Designeigenschaften lassen sich folgende erwartete Stärken / Schwächen ableiten, die im Evaluations-Kapitel der Arbeit empirisch zu überprüfen sind:

- **Erwartete Stärke bei UF1 (Mapping-Präzision)** auf *Clean*-Designs: höchste Trefferrate, da das Mapping direkt aus den Figma-Metadaten erfolgt
- **Erwartete Stärke bei UF2 (Code-Qualität)**: konsistenteste Code-Struktur, da deterministisch
- **Erwartete Schwäche bei UF5 (Robustheit)** auf *Messy*-Designs: starker Performance-Einbruch erwartet, sobald Naming-Conventions oder Auto-Layout-Disziplin fehlen
- **Erwartete Stärke bei Effizienz**: deutlich schnellste Verarbeitungszeit aller drei Verfahren

---

## 9. Beispiel-Output

### 9.1 Eingabe: Password-Eingabe-Mockup (bereinigt)

```json
{
  "type": "FRAME",
  "name": "1 [Password-Eingabe]",
  "layoutMode": "VERTICAL",
  "paddingLeft": 24, "paddingRight": 24,
  "paddingTop": 24, "paddingBottom": 24,
  "children": [{
    "type": "FRAME", "name": "Column",
    "layoutMode": "VERTICAL", "itemSpacing": 24,
    "children": [
      {
        "type": "INSTANCE", "id": "10:4744", "name": "password",
        "componentProperties": {
          "Toggle Mask": {"value": "True", "type": "VARIANT"}
        },
        "children": [
          {
            "type": "INSTANCE", "name": "_inputtext-content",
            "componentProperties": {
              "Text Config": {"value": "Placeholder", "type": "VARIANT"},
              "Placeholder#4275:140": {"value": "Passwort eingeben", "type": "TEXT"}
            }
          }
        ]
      },
      {
        "type": "INSTANCE", "name": "button",
        "componentProperties": {
          "Text#4293:477": {"value": "Anmelden", "type": "TEXT"},
          "Severity": {"value": "Primary", "type": "VARIANT"}
        }
      }
    ]
  }]
}
```

### 9.2 Ausgabe: Generierte Vue-3-SFC

```vue
<template>
  <div class="flex flex-col p-6">
    <div class="flex flex-col gap-6">
      <Password
        v-model="_state.n10_4744"
        placeholder="Passwort eingeben"
        :toggleMask="true"
       />
      <Button label="Anmelden" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const _state = reactive({ n10_4744: null })
</script>
```

### 9.3 Beobachtungen am Beispiel

| Transformation                                                                  | Entscheidungsgrundlage                               |
|---------------------------------------------------------------------------------|------------------------------------------------------|
| `password` → `<Password>`                                                       | `COMPONENT_MAP['password']['primevue']`              |
| `Toggle Mask: True` → `:toggleMask="true"`                                      | Property-Regel mit `type: 'boolean'`                 |
| `Placeholder#4275:140: "Passwort eingeben"` → `placeholder="Passwort eingeben"` | `inherit_placeholder_from_sub: '_inputtext-content'` |
| `Severity: Primary` → *(weggelassen)*                                           | `value_map: {'Primary': None}`                       |
| `Text#4293:477: "Anmelden"` → `label="Anmelden"`                                | Property-Regel mit `type: 'text'`                    |
| `layoutMode: VERTICAL, padding: 24` → `class="flex flex-col p-6"`               | Layout-Engine                                        |
| `id: 10:4744` → `v-model="_state.n10_4744"`                                     | ID-Sanitization für JS-Identifier                    |

---

## 10. Coverage-Diagnose als Evaluationsmetrik

Das Notebook enthält in Zelle 10 eine automatische Coverage-Diagnose:

```
Gemappte Instances:      6
  password                    1x
  button                      1x
  avatar                      1x
  overlaybadge                1x
  slider                      1x
  inputnumber                 1x

Ungemappte Instances:    0
Coverage: 100.0%
```

Diese Metrik dient zwei Zwecken:

1. **Entwicklungsunterstützung**: Sie zeigt sofort, welche Komponenten in `COMPONENT_MAP` noch fehlen
2. **Evaluations-Indikator für UF1**: Die Coverage ist eine direkt nutzbare Kennzahl für die Mapping-Präzision des regelbasierten Ansatzes

Die Diagnose unterscheidet zwischen Children, die innerhalb von Drop-Strategy-Komponenten liegen (werden bewusst ignoriert), und Top-Level-Instanzen (zählen für die Coverage). Damit wird verhindert, dass interne Icon-Sub-Instances die Bewertung verzerren.

---

## 11. Erweiterung der Mapping-Konfiguration

Neue Komponenten werden in vier Schritten hinzugefügt:

1. **Inventur**: Aus den Cleaning-Output-Daten die Property-Liste der neuen Komponente ablesen (siehe `figma-mockup-data-cleaner`-Notebook und `dataset/figma-data/cleaned/component_invetory.json`)
2. **PrimeVue-Doku konsultieren**: Welche Props akzeptiert die Ziel-Komponente?
3. **Regelblock in `COMPONENT_MAP` ergänzen** nach dem dokumentierten Schema
4. **Mit Mockup testen**: Coverage-Diagnose sollte 100% erreichen

**Vorlage für eine neue Komponenten-Regel:**

```python
COMPONENT_MAP['neue_komponente'] = {
    'primevue': 'NeueKomponente',
    'props': {
        'Figma-Property-1': {'target': 'prop1', 'type': 'text'},
        'Figma-Property-2': {
            'target': 'prop2', 'type': 'enum',
            'value_map': {'FigmaWert': 'primevue_wert'},
        },
    },
    'skip': UNIVERSAL_SKIP | {'weitere_zu_ignorierende_props'},
    'slot_strategy': 'drop',  # oder 'default' wenn Children gerendert werden
}
```

---

## 12. Position im methodischen Gesamtvergleich

| Aspekt                   | Methode A (Regelbasiert)            | Methode B (Metadaten-LLM)       | Methode C (Vision-LLM)            |
|--------------------------|-------------------------------------|---------------------------------|-----------------------------------|
| Eingabe                  | Figma-JSON                          | Figma-JSON + Doku-Kontext       | Figma-PNG + Doku-Kontext          |
| Entscheidungslogik       | Deterministisch                     | Probabilistisch                 | Probabilistisch                   |
| Erweiterbarkeit          | Manuell, regelbasiert               | Prompt-Engineering, Fine-Tuning | Prompt-Engineering, Fine-Tuning   |
| Reproduzierbarkeit       | 100%                                | Modell-abhängig                 | Modell-abhängig                   |
| Externe Abhängigkeiten   | Keine                               | LLM-API                         | Multimodale LLM-API               |
| Erwarteter Hauptvorteil  | Präzision auf Clean-Designs         | Sprachflexibilität              | Visuelles Verständnis             |
| Erwarteter Hauptnachteil | Sprödigkeit bei Naming-Abweichungen | Token-Kosten, Latenz            | Token-Kosten, Pixel-Approximation |

Die regelbasierte Methode A bildet im Gesamtvergleich das untere Ende der Verständnis-Komplexität, aber das obere Ende der Vorhersagbarkeit. Diese Eigenschaft macht sie zur idealen Baseline: Abweichungen der LLM-basierten Methoden lassen sich gegen einen festen Referenzpunkt messen.
