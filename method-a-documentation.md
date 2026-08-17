# Ansatz A — Regelbasierte Transformation

## 1. Übersicht

Der regelbasierte Ansatz (Ansatz A) bildet die deterministische Baseline. Dieser verzichtet vollständig auf Modelle des maschinellen Lernens und stützt sich ausschließlich auf:

- **Strikte Mapping-Regeln** zwischen Figma-Komponenten und PrimeVue-Komponenten
- **Namenskonventionen** als primäres Identifikationskriterium
- **Heuristiken zur AST-Transformation** für Layout- und Slot-Erkennung

Die zentrale Eigenschaft dieser Methode ist ihre vollständige Nachvollziehbarkeit: Jede einzelne Transformationsentscheidung lässt sich auf eine explizite Regel zurückführen.

Stand der Implementierung: Der aktuelle Prototyp mappt regelbasiert sowohl primitive Figma-`INSTANCE`-Komponenten (`COMPONENT_MAP`, 17 Einträge) als auch zusammengesetzte, framebasierte Strukturen (`FRAME_MAP`, 8 Strategien, z.B. `Tabs`, `Dialog`, `DataTable`). Die Pipeline läuft über alle drei Komplexitätsstufen (Simple, Medium, Hard) und erfasst pro Mockup automatisch Coverage- und Timing-Metriken.

Der Input-Datensatz ist über zwei Konfigurationsparameter steuerbar:

- `TYPE`: `'components'` (isolierte Einzelkomponenten) oder `'uis'` (vollständige Mockup-Kompositionen)
- `VARIANT`: `'messy'` oder `'pretty'` — nur für `TYPE='uis'` relevant und dient dem robustheitsbezogenen Vergleich (vgl. UF5-Hypothese in Kapitel 9.3)

Jeder Pipeline-Lauf wird über eine `RUN_ID` identifiziert; Ergebnisse mehrerer Läufe werden persistiert, um Timing-Werte über Wiederholungen hinweg vergleichbar zu machen (siehe Kapitel 8).

### Designprinzipien

| Prinzip                           | Umsetzung                                                         |
|-----------------------------------|-------------------------------------------------------------------|
| Determinismus                     | Identische Eingabe erzeugt identische Ausgabe — keine Stochastik  |
| Transparenz                       | Jede Regel ist in `COMPONENT_MAP`/`FRAME_MAP` als Code hinterlegt |
| Modularität                       | Komponenten-Spezifikationen sind unabhängig erweiterbar           |
| Trennung der Verantwortlichkeiten | AST-Aufbau, Mapping und Code-Generierung sind getrennt            |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────┐
│  Cleaned Figma-JSON     │  Eingabe (Output des Cleaning-Notebooks)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  AST-Parser             │  Schritt 1: rekursive Knotenanalyse
│  (transform_node)       │  Routing: INSTANCE → FRAME → TEXT
└───────────┬─────────────┘
            ▼
┌─────────────────────────────────────────────────┐
│  Mapping-Engine                                 │  Schritt 2
│  ├─ INSTANCE → COMPONENT_MAP (17 Komponenten)   │  Namens-Lookup + Property-Mapping
│  ├─ INSTANCE → FRAME_MAP-Fallback               │  Compound-Komponenten als INSTANCE
│  └─ FRAME   → FRAME_MAP (8 Strategien)          │  Slot-basierte Compound-Komponenten
└───────────┬─────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Layout-Engine          │  Schritt 3: FRAME → Tailwind-Utility-Klassen
│  (frame_to_classes)     │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Code-Generator         │  Schritt 4: AST → formatierte Vue 3 SFC
│  (render_ast)           │  + automatische Import-Sammlung
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Metrik-Erfassung       │  Schritt 5: Timing, Coverage, AST-Tiefe
│  (_metrics, CSV-Report) │  pro Mockup → results/results_a_<type>_<variant>.csv
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

Die Implementierung verwendet zwei Mapping-Ebenen:

- `COMPONENT_MAP` für primitive PrimeVue-Komponenten (z.B. `Button`, `InputText`, `Password`)
- `FRAME_MAP` für zusammengesetzte Komponenten, die über FRAME-Strategien aufgebaut werden (z.B. `Card`, `Tabs`, `DataTable`)

Aktueller Umfang (Code-Stand im Notebook):

- `COMPONENT_MAP`: 17 direkte Komponenten + Alias `calendar → datepicker`
- `FRAME_MAP`: 8 strategiebasierte Komponenten (`card`, `dialog`, `tabs`, `datatable`, `select`, `popover`, `breadcrumb`, `accordion`)

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

| Feld                           | Funktion                                                                     |
|--------------------------------|------------------------------------------------------------------------------|
| `primevue`                     | PrimeVue-Komponentenname (Tag-Name im generierten Code)                      |
| `props`                        | 1:1-Mappings von Figma-Properties auf PrimeVue-Props                         |
| `variant_resolver`             | Auflösung mehrerer Boolean-Properties auf eine Enum-Prop                     |
| `skip`                         | Properties, die ignoriert werden (rein visuell oder redundant)               |
| `slot_strategy`                | Wie Children behandelt werden (`drop`, `default`)                            |
| `extra_attrs`                  | Zusätzliche Attribute (z.B. `v-model`-Bindings)                              |
| `inherit_placeholder_from_sub` | Sonderfall: Platzhalter aus interner Sub-Instance ziehen                     |
| `overlay_badge_child`          | Sonderfall: Avatar mit Badge in OverlayBadge wrappen                         |
| `icon_only_prop`               | Sonderfall: Button Icon-Only unterdrückt die `label`-Prop im Post-Processing |
| `parse_value_from`             | Sonderfall: ProgressBar-Zahlenwert aus Prozentstring extrahieren             |

**Abgedeckte Komponenten (17):**

| Komponente     | Instanzen im Datensatz | Besonderheiten                                        |
|----------------|------------------------|-------------------------------------------------------|
| `button`       | 52×                    | Variant-Resolver, Icon-Only-Post-Processing, Rounded  |
| `inputtext`    | 17×                    | Placeholder via Float-Label-Property                  |
| `tag`          | 21×                    | Severity: `Warn` und `Warning` beide auf `warn`       |
| `avatar`       | 15×                    | OverlayBadge-Wrapping bei Show Badge=True             |
| `divider`      | 14×                    | Drei Enum-Props (layout, type, align)                 |
| `checkbox`     | 13×                    | Binary-Default, Label als separates Element           |
| `radiobutton`  | 13×                    | Value aus Label-Property, Gruppen-v-model             |
| `progressbar`  | 6×                     | `Value`=VARIANT steuert `showValue`; Zahl aus `Text#` |
| `skeleton`     | 4×                     | Keine Properties — einfaches Self-Closing-Tag         |
| `inputnumber`  | 4×                     | `Horizontal with Step` → `horizontal`                 |
| `toggleswitch` | 4×                     | PrimeVue v4-Name (ehem. InputSwitch)                  |
| `password`     | 3×                     | Placeholder aus `_inputtext-content`-Sub-Instance     |
| `textarea`     | 3×                     | Placeholder aus `_textarea-content`-Sub-Instance      |
| `slider`       | 3×                     | Orientation, Range, Disabled                          |
| `datepicker`   | 3×                     | Zwei Enum-Props (view, selectionMode)                 |
| `menu`         | 1×                     | Model-Array als Platzhalter                           |
| `overlaybadge` | 1×                     | Wird nur als Child von Avatar erzeugt                 |

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
- `type`: Steuert die Konvertierung der Werte. `boolean` und `number` werden via Dynamic-Binding (`:prop="..."`), `text` und `enum` als statisches Attribut ausgegeben
- `value_map`: Optionales Wörterbuch für Wert-Übersetzung. `None` als Zielwert bedeutet "weglassen" (Default-Wert)
- `omit_when`: Wenn der konvertierte Wert diesem entspricht, wird die Prop weggelassen — reduziert Boilerplate für Standard-Konfigurationen

**Beispiel** (Button-Severity):

```python
'Severity': {
    'target': 'severity',
    'type': 'enum',
    'value_map': {
        'Primary':   None,           # Default → keine severity-Prop nötig
        'Plain':     None,           # Text-Variante, kein Severity
        'Secondary': 'secondary',
        'Success':   'success',
        'Info':      'info',
        'Warning':   'warn',         # Achtung: Figma "Warning" → PrimeVue "warn"
        'Help':      'help',
        'Danger':    'danger',
        'Contrast':  'contrast',
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

Die Regeln werden in der angegebenen Reihenfolge ausgewertet; die erste Übereinstimmung gewinnt. Greift keine Regel, wird die `variant`-Prop weggelassen (PrimeVue verwendet dann den Default). Properties wie `⥰ Rounded`, die eigenständige Boolean-Props in PrimeVue sind, werden direkt in `props` gemappt statt über den Variant-Resolver.

### 4.4 Skip-Properties und Icon-Filtering

Figma exportiert für jede Komponente Properties, die rein für die Visualisierung im Design-Tool relevant sind (`State: Idle`, `Hover`, `Focus`) oder die intern für die Component-Composition genutzt werden (`Show Right Icon`, `Right Icon`). Diese werden explizit in `skip` aufgelistet:

```python
UNIVERSAL_SKIP = {'State', 'Hover', 'Focus', 'Pressed', 'Active'}

COMPONENT_MAP['button']['skip'] = UNIVERSAL_SKIP | {
    'Show Right Icon#1644:1387', 'Show Left Icon#1644:0',
    'Right Icon#1644:4161', 'Left Icon#1644:2774', 'Icon#1690:0',
}
```

Zusätzlich werden Standalone-Icon-Instances (PrimeIcons wie `chevron-down`, `times`, `search` etc.) über ein separates `ICON_SKIP_INSTANCES`-Set herausgefiltert, bevor sie den Mapping-Prozess erreichen. Diese Instances repräsentieren Figma-interne Darstellungen von Icons, die PrimeVue automatisch über `icon`-Props rendert, und erzeugen sonst fälschlich Unmapped-Einträge:

```python
ICON_SKIP_INSTANCES = {
    'chevron-down', 'chevron-up', 'chevron-right', 'chevron-left',
    'times', 'ellipsis-h', 'search', 'check', 'plus', 'minus',
    'trash', 'pen-to-square', 'clone', 'flag', 'inbox', 'folder',
    'user', 'shield', 'angle-left', 'angle-right', 'cart-plus',
    'calendar', 'clock', 'arrow-up-right', 'arrow-circle-left',
    'times-circle', 'user-edit',
}
```

Der Abgleich erfolgt normalisiert (`ICON_SKIP_NORM`, via `_normalize_name()`), da `ICON_SKIP_INSTANCES` Bindestrich-Namen aus Figma enthält, `_normalize_name()` diese Trennzeichen aber entfernt.

### 4.5 Framebasierte Strategien (`FRAME_MAP`)

Für zusammengesetzte Komponenten reicht ein reines Property-Mapping nicht aus. Hierfür nutzt die Implementierung `FRAME_MAP` + `STRATEGY_DISPATCH`.

| Strategie    | Zielkomponente | Kernidee                                                             |
|--------------|----------------|----------------------------------------------------------------------|
| `card`       | `Card`         | `header`/`content`/`footer` als Slots, `body` transparent            |
| `slot_map`   | `Dialog`       | Namensbasierte Slot-Zuordnung inkl. `v-model:visible`                |
| `tabs`       | `Tabs`         | Extraktion von Headern und Panels → `TabList`/`TabPanels`            |
| `datatable`  | `DataTable`    | Spalten aus `thead`, Body-Templates aus erster `tbody`-Zeile         |
| `select`     | `Select`       | Label/Placeholder aus `_select-input`, Optionen aus `_select-option` |
| `popover`    | `Popover`      | Entschachtelung verschachtelter `popover`-Frames                     |
| `breadcrumb` | `Breadcrumb`   | `model` aus `_breadcrumb-item`-Instanzen                             |
| `accordion`  | `Accordion`    | Panels aus `_accordion-panel` inkl. Header/Content                   |

### 4.6 INSTANCE-FRAME-Dualität

Ein und dieselbe Compound-Komponente kann je nach Figma-Datei sowohl als INSTANCE- als auch als FRAME-Node auftreten (z.B. `tabs` in `medium/06.json` als INSTANCE, in `medium/02.json` als FRAME). Die Implementierung behandelt diesen Sonderfall durch einen FRAME_MAP-Fallback in `_transform_instance`:

```python
spec = COMPONENT_MAP.get(name_key)
if not spec:
    if name_key in FRAME_MAP:          # Compound-Komponente als INSTANCE
        return _transform_frame(node)  # → an Frame-Routing delegieren
    _metrics['instances_unmapped'] += 1
    return UINode(...)                  # rote Debug-Box
```

Dies funktioniert, weil INSTANCE- und FRAME-Nodes dieselbe `children`-Struktur besitzen — die Strategie-Funktionen greifen in beiden Fällen identisch.

---

## 5. AST-Transformation

### 5.1 Routing nach Node-Typ

Die Funktion `transform_node()` ist der Einstiegspunkt und verteilt Knoten anhand ihres `type`-Feldes. Nodes mit `_`-Präfix werden vorab herausgefiltert:

```python
def transform_node(figma_node):
    if raw_name.startswith('_'):
        return None                        # interne Sub-Instance → verwerfen
    if figma_node['type'] == 'INSTANCE':
        return _transform_instance(figma_node)
    elif figma_node['type'] == 'FRAME':
        return _transform_frame(figma_node)
    elif figma_node['type'] == 'TEXT':
        return _transform_text(figma_node)
    return None                            # VECTOR, RECTANGLE etc. → verwerfen
```

### 5.2 Behandlung von INSTANCEs

Eine Figma-INSTANCE entspricht einer Komponenten-Instanziierung. Die Verarbeitung läuft in sechs Schritten ab:

1. **Icon-Filtering**: Standalone Icons (`ICON_SKIP_INSTANCES`) werden sofort verworfen
2. **COMPONENT_MAP-Lookup**: Normalisierter Name wird nachgeschlagen. Fehlschlag → FRAME_MAP-Fallback → ggf. rote Debug-Box + Metrik-Inkrement
3. **Property-Resolution**: `apply_property_rules()` extrahiert die PrimeVue-Props
4. **Extra-Attribute**: `v-model`-Bindings, Boolean-Flags wie `showButtons`
5. **Inheritance**: Bei Komponenten wie `Password` wird der Placeholder aus der internen `_inputtext-content`-Sub-Instanz gezogen
6. **Post-Processing**: Icon-Only-Unterdrückung (Button), ProgressBar-Zahlenwert-Parsing

Nicht gemappte `INSTANCE`-Knoten werden bewusst als auffälliger Fallback ausgegeben, um Mapping-Lücken sichtbar zu machen:

```html
<div class="border border-dashed border-red-400 p-2">
  <!-- Unmapped INSTANCE: 'unbekannte-komponente' -->
</div>
```

### 5.3 Behandlung von FRAMEs — Dreistufiges Routing

Die Funktion `_transform_frame()` implementiert eine dreistufige Routing-Kaskade:

```python
def _transform_frame(node):
    norm = _normalize_name(node['name'])

    # Stufe 1: Transparente Wrapper (z.B. 'screen') → Kind durchreichen
    if norm in TRANSPARENT_FRAMES:
        return transform_node(first_child)

    # Stufe 2: FRAME_MAP → Compound-Komponente via Strategie-Funktion
    spec = FRAME_MAP.get(norm)
    if spec:
        _metrics['frames_compound'] += 1
        return STRATEGY_DISPATCH[spec['strategy']](node, spec)

    # Stufe 3: Fallback → <div> mit Tailwind-Klassen
    _metrics['frames_fallback'] += 1
    return UINode(tag='div', classes=frame_to_classes(node), ...)
```

Passthrough-FRAMEs (kein Layout, nur ein Kind) werden transparent durchgereicht und zählen nicht als Fallback — das verhindert unnötige Wrapper-Divs im Output.

### 5.4 Sonderfälle der Komposition

#### Sub-Instances mit Präfix `_`

Figma exportiert für viele Komponenten interne Sub-Instances wie `_inputtext-content` oder `_inputnumber-button`. Diese repräsentieren Implementierungsdetails der Figma-Komponente und haben keine eigenständige Entsprechung in PrimeVue. Konvention: Alle Nodes mit `_`-Präfix werden im Output verworfen. Die Strategie-Funktionen greifen dennoch gezielt auf sie zu (z.B. `_accordion-header` für den Header-Text), umgehen dabei aber den regulären `transform_node`-Pfad.

#### Avatar mit OverlayBadge

Wenn ein `avatar` die Property `Show Badge: true` hat und ein `overlaybadge`-Child enthält, wird die Reihenfolge im Output umgekehrt: Der `<OverlayBadge>` wird der äußere Container, und das `<Avatar>` wird sein Default-Slot-Inhalt:

```html
<OverlayBadge value="8" severity="primary">
  <Avatar label="B" size="xlarge" shape="circle" />
</OverlayBadge>
```

#### Button Icon-Only

Wenn `Icon Only=True`, wird die `label`-Prop im Post-Processing entfernt. Das ist kein eigener Prop (`:iconOnly` existiert in PrimeVue v4 nicht), sondern ein Signal an den Generator, das Label zu unterdrücken. Die Property wird über `icon_only_prop` in der Spec referenziert.

#### ProgressBar-Zahlenwert

Die Figma-Property `Value` ist eine VARIANT (`True`/`False`), die `showValue` steuert — nicht der numerische Wert. Dieser steckt in `Text#4271:24` als Prozentstring (`"25%"`) und wird über `parse_value_from` im Post-Processing extrahiert:

```python
pct_text = str(_extract_value(figma_props[pct_key])).replace('%', '').strip()
dynamic['value'] = str(int(float(pct_text)))    # "25%" → :value="25"
```

#### Compound-FRAMEs über Strategien

Wenn ein normalisierter Frame-Name in `FRAME_MAP` enthalten ist, wird nicht der generische Layout-Fallback genutzt, sondern eine spezialisierte Transformationsstrategie (z.B. `_strategy_tabs`, `_strategy_datatable`). Dadurch entstehen korrekte PrimeVue-Kompositionsstrukturen statt flacher `<div>`-Container.

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
| `counterAxisAlignItems: MAX`                                   | `items-end`       |                        |
| `primaryAxisAlignItems: CENTER`                                | `justify-center`  |                        |
| `primaryAxisAlignItems: MAX`                                   | `justify-end`     |                        |
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
- **Named-Slot-Rendering**: UINodes mit gesetztem `slot`-Feld werden in `<template #slotname>...</template>` gewrappt

### 7.2 SFC-Struktur

Der Generator produziert immer eine vollständige Single-File-Component mit zwei Sektionen:

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

Die State-Variablen werden aus dem AST gesammelt (`collect_refs`) und im `_state`-Objekt initialisiert. Der Mechanismus erkennt sowohl `v-model` als auch `v-model:visible` (Dialog-Sonderfall) und weitere `v-model:`-Varianten. Variablennamen werden aus den Figma-IDs abgeleitet, mit `n`-Präfix versehen (gegen führende Ziffern) und Sonderzeichen ersetzt.

Außerdem entfernt `generate_sfc_a` automatisch den äußeren Canvas-Wrapper-Frame (ein einzelner `<div class="flex flex-col p-6">` ohne weitere Props, der rein als Figma-Mockup-Rahmen dient), sodass der Output direkt mit der eigentlichen Komponente beginnt.

Der Pipeline-Lauf iteriert über alle Mockups und erzeugt dabei parallel einen Report in `results/results_a_<type>_<variant>.csv` mit Laufzeit-, Coverage- und Strukturmetriken pro Datei (siehe Kapitel 8).

---

## 8. Metrik-Erfassung

Die Pipeline erfasst pro Mockup automatisch Metriken für die spätere Evaluation. Ein Teil der Zähler wird in einem modulweiten `_metrics`-Dictionary geführt, das zu Beginn jedes `generate_sfc_a()`-Aufrufs über `_reset_metrics()` zurückgesetzt wird:

```python
def _reset_metrics():
    global _metrics
    _metrics = {
        'instances_mapped':   0,
        'instances_unmapped': 0,
        'frames_compound':    0,
        'frames_fallback':    0,
    }
```

`pv_components_unique`, `state_refs_count` und `ast_depth_max` werden erst am Ende von `generate_sfc_a()` (nach dem Rendering) in dasselbe Dictionary geschrieben.

Inkrement-Stellen im Code:

| Zähler                 | Inkrementiert in      | Auslöser                           |
|------------------------|-----------------------|------------------------------------|
| `instances_mapped`     | `_transform_instance` | COMPONENT_MAP-Treffer              |
| `instances_unmapped`   | `_transform_instance` | Weder COMPONENT_MAP noch FRAME_MAP |
| `frames_compound`      | `_transform_frame`    | FRAME_MAP + Strategie-Dispatch     |
| `frames_fallback`      | `_transform_frame`    | Generischer `<div>`-Fallback       |
| `pv_components_unique` | `generate_sfc_a`      | Größe des Import-Sets              |
| `state_refs_count`     | `generate_sfc_a`      | Anzahl gesammelter v-model-Refs    |
| `ast_depth_max`        | `generate_sfc_a`      | Rekursive AST-Tiefenberechnung     |

Timing wird über `time.perf_counter()` unmittelbar um den `generate_sfc_a()`-Aufruf gemessen (kein Datei-I/O), was Vergleichbarkeit mit Methode B/C sicherstellt, wo analog nur die API-Antwortzeit gemessen wird.

### 8.1 Persistenz: Resumable CSV-Report

Anders als ein reiner In-Memory-Report werden die Metriken pro Datei direkt zeilenweise in eine CSV geschrieben (nicht als aggregiertes JSON). Der Pfad ergibt sich aus der aktiven Konfiguration:

```python
RESULTS_CSV_PATH = Path('results') / f'results_a_{TYPE}{"_" + VARIANT if VARIANT else ""}.csv'
```

Beispiel: `results/results_a_uis_pretty.csv`. Das Format spiegelt bewusst das CSV-Schema von Ansatz B (`results_b_*.csv`), um beide Methoden später gemeinsam auszuwerten.

Jede Zeile enthält neben den Kern-Metriken zusätzliche Lauf- und Konfigurationsinformationen:

```python
RESULT_FIELDNAMES = [
    'input', 'output',
    'type', 'variant',
    'strategy', 'complexity',
    'run',
    'duration',
    'sfc_bytes', 'sfc_lines',
    'instances_mapped', 'instances_unmapped', 'instances_total', 'mapping_coverage',
    'frames_compound', 'frames_fallback',
    'pv_components_unique', 'state_refs_count', 'ast_depth_max',
    'error',
    'created_at',
]
```

- `type` / `variant`: die aktive `TYPE`/`VARIANT`-Konfiguration (siehe Kapitel 1)
- `strategy`: konstant `'a'`, dient beim Zusammenführen mit Methode B/C als Unterscheidungsmerkmal
- `run`: die `RUN_ID` des aktuellen Durchlaufs, ermöglicht mehrere Wiederholungen für stabilere Timing-Werte
- `error`: `None` bei Erfolg, sonst die Exception-Nachricht — Fehlversuche werden dennoch als Zeile persistiert
- `created_at`: ISO-Zeitstempel der Verarbeitung

Der Lauf ist **resumable**: Vor der Verarbeitung liest `_load_completed_keys()` die vorhandene CSV und ermittelt alle bereits erfolgreich verarbeiteten `(input, run)`-Kombinationen. Bereits abgeschlossene Dateien werden übersprungen, zuvor fehlgeschlagene (`error` gesetzt) werden erneut versucht. Jede neue Zeile wird sofort über `_append_result()` angehängt, sodass ein Abbruch mitten im Lauf keinen Datenverlust verursacht.

Eine aggregierte `per_complexity`-Auswertung (z.B. avg_coverage pro Schwierigkeitsstufe für UF5) wird von der Pipeline selbst nicht mehr berechnet — die `complexity`-Spalte in der CSV liefert dafür aber die Datenbasis für eine nachgelagerte Auswertung.

---

## 9. Stärken und Limitationen

### 9.1 Stärken

| Eigenschaft                         | Bedeutung                                                                                        |
|-------------------------------------|--------------------------------------------------------------------------------------------------|
| **Vollständige Reproduzierbarkeit** | Identische Inputs liefern identische Outputs — keine Stochastik                                  |
| **Audit-Fähigkeit**                 | Jede Mapping-Entscheidung ist auf eine konkrete Regel zurückführbar                              |
| **Erweiterbarkeit**                 | Neue Komponenten werden durch Hinzufügen eines Eintrags in `COMPONENT_MAP`/`FRAME_MAP` abgedeckt |
| **Performance**                     | Keine API-Calls, keine GPU — Verarbeitungszeit im Millisekunden-Bereich                          |
| **Kein Daten-Footprint**            | Keine Trainingsdaten, keine API-Schlüssel, keine Token-Kosten                                    |

### 9.2 Limitationen

| Limitation                                           | Auswirkung                                                                                     | Adressierbar durch                                  |
|------------------------------------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **Strikte Namenskonvention und harte Property-Keys** | Kleine Benennungsabweichungen (inkl. IDs in Property-Namen wie `Text#4293:477`) brechen Regeln | Ansatz B (toleranteres Mapping)                     |
| **Keine semantische Interpretation**                 | "Button" und "Schaltfläche" werden nicht zusammengeführt                                       | Ansatz B / C                                        |
| **Begrenzte Node-Typ-Unterstützung**                 | `VECTOR`, `RECTANGLE` usw. werden verworfen; visuelle Details gehen verloren                   | Ansatz C                                            |
| **Generierte Script-Platzhalter unvollständig**      | `:options`, `:model` oder `:value="items"` werden referenziert, aber nicht initialisiert       | Nachgelagerte Vervollständigung / Generator-Upgrade |
| **Text-Semantik nur rudimentär**                     | Textknoten werden pauschal als `<span>` gerendert — kein `<h1>`, `<p>`, `<label>`              | Ausbau semantischer Heuristiken / Ansatz B / C      |
| **Kein Passthrough (`:pt`)**                         | PrimeVue-Passthrough-Attribute für Fein-Styling werden nicht erzeugt                           | Ansatz B (Doku-Kontext ermöglicht Prop-Mapping)     |

### 9.3 Hypothesen für den Methodenvergleich

Aus den Designeigenschaften lassen sich folgende erwartete Stärken / Schwächen ableiten, die im Evaluations-Kapitel der Arbeit empirisch zu überprüfen sind:

- **Erwartete Stärke bei UF1 (Mapping-Präzision)** auf *Clean*-Designs: höchste Trefferrate, da das Mapping direkt aus den Figma-Metadaten erfolgt
- **Erwartete Stärke bei UF2 (Code-Qualität)**: konsistenteste Code-Struktur, da deterministisch
- **Erwartete Schwäche bei UF3 (Visual Fidelity)**: Semantik-Lücke (`span` statt `h1`) und fehlende `:pt`-Attribute reduzieren die visuelle Treue
- **Erwartete Schwäche bei UF5 (Robustheit)** auf *Messy*-Designs: starker Performance-Einbruch erwartet, sobald Naming-Conventions oder Auto-Layout-Disziplin fehlen
- **Erwartete Stärke bei Effizienz**: deutlich schnellste Verarbeitungszeit aller drei Verfahren

---

## 10. Beispiel-Output

### 10.1 Eingabe: Password-Eingabe-Mockup (bereinigt)

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

### 10.2 Ausgabe: Generierte Vue-3-SFC

Der äußere Wrapper-Frame (`p-6`) wird automatisch entfernt — der Output beginnt direkt mit dem Column-Frame:

```vue
<template>
  <div class="flex flex-col gap-6">
    <Password
      v-model="_state.n10_4744"
      placeholder="Passwort eingeben"
      :toggleMask="true"
    />
    <Button label="Anmelden" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const _state = reactive({ n10_4744: null })
</script>
```

### 10.3 Beobachtungen am Beispiel

| Transformation                                                                  | Entscheidungsgrundlage                               |
|---------------------------------------------------------------------------------|------------------------------------------------------|
| `password` → `<Password>`                                                       | `COMPONENT_MAP['password']['primevue']`              |
| `Toggle Mask: True` → `:toggleMask="true"`                                      | Property-Regel mit `type: 'boolean'`                 |
| `Placeholder#4275:140: "Passwort eingeben"` → `placeholder="Passwort eingeben"` | `inherit_placeholder_from_sub: '_inputtext-content'` |
| `Severity: Primary` → *(weggelassen)*                                           | `value_map: {'Primary': None}`                       |
| `Text#4293:477: "Anmelden"` → `label="Anmelden"`                                | Property-Regel mit `type: 'text'`                    |
| `layoutMode: VERTICAL, itemSpacing: 24` → `class="flex flex-col gap-6"`         | Layout-Engine                                        |
| `id: 10:4744` → `v-model="_state.n10_4744"`                                     | ID-Sanitization für JS-Identifier                    |

---

## 11. Coverage-Diagnose als Evaluationsmetrik

Das Notebook enthält eine automatische Coverage-Diagnose auf Basis aller Input-Dateien.

```
Mapped instances:   <gesamt>
  <name>            <anzahl>x

Unmapped instances: <gesamt>
Coverage: <wert>%
```

Diese Metrik dient zwei Zwecken:

1. **Entwicklungsunterstützung**: Sie zeigt sofort, welche Komponenten in `COMPONENT_MAP`/`FRAME_MAP` noch fehlen
2. **Evaluations-Indikator für UF1**: Die Coverage ist eine direkt nutzbare Kennzahl für die Mapping-Präzision des regelbasierten Ansatzes

Die Diagnose unterscheidet zwischen Children, die innerhalb von Drop-Strategy-Komponenten liegen (werden bewusst ignoriert), und Top-Level-Instanzen (zählen für die Coverage). Damit wird verhindert, dass interne Icon-Sub-Instances die Bewertung verzerren.

Ergänzend dazu schreibt die Pipeline pro Datei folgende Kennzahlen in den Report:

- `instances_mapped`, `instances_unmapped`, `mapping_coverage`
- `frames_compound`, `frames_fallback`
- `pv_components_unique`, `state_refs_count`, `ast_depth_max`
- `duration_ms`, `sfc_bytes`, `sfc_lines`

---

## 12. Erweiterung der Mapping-Konfiguration

Neue Komponenten werden in vier Schritten hinzugefügt:

1. **Inventur**: Aus den Cleaning-Output-Daten die Property-Liste der neuen Komponente ablesen (siehe `figma-mockup-data-cleaner`-Notebook und `dataset/figma-data/cleaned/component_inventory.json`)
2. **PrimeVue-Doku konsultieren**: Welche Props akzeptiert die Ziel-Komponente?
3. **Regelblock in `COMPONENT_MAP` ergänzen** nach dem dokumentierten Schema
4. **Mit Mockup testen**: Coverage-Diagnose sollte 100% erreichen

Für framebasierte Komponenten gilt analog:

1. Eintrag in `FRAME_MAP` anlegen (`primevue`, `strategy`, optional `slot_map`/`extra_attrs`)
2. Strategie-Funktion implementieren (oder bestehende wiederverwenden)
3. In `STRATEGY_DISPATCH` registrieren
4. Mit Mockup + Report-Metriken validieren (`frames_compound` sollte steigen)

**Vorlage für eine neue primitive Komponente:**

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

**Vorlage für eine neue Compound-Komponente:**

```python
FRAME_MAP['neue_compound'] = {
    'primevue': 'NeueCompound',
    'strategy': 'neue_compound',
    'slot_map': {'header': 'header', 'content': None},
}

def _strategy_neue_compound(figma_node, spec):
    # Slot-Analyse und UINode-Aufbau
    return UINode(tag='NeueCompound', is_component=True, ...)

STRATEGY_DISPATCH['neue_compound'] = _strategy_neue_compound
```

---

## 13. Position im methodischen Gesamtvergleich

| Aspekt                   | Methode A (Regelbasiert)                 | Methode B (Metadaten-LLM)       | Methode C (Vision-LLM)            |
|--------------------------|------------------------------------------|---------------------------------|-----------------------------------|
| Eingabe                  | Figma-JSON                               | Figma-JSON + Doku-Kontext       | Figma-PNG + Doku-Kontext          |
| Entscheidungslogik       | Deterministisch                          | Probabilistisch                 | Probabilistisch                   |
| Erweiterbarkeit          | Manuell, regelbasiert                    | Prompt-Engineering, Fine-Tuning | Prompt-Engineering, Fine-Tuning   |
| Reproduzierbarkeit       | 100%                                     | Modell-abhängig                 | Modell-abhängig                   |
| Externe Abhängigkeiten   | Keine                                    | LLM-API                         | Multimodale LLM-API               |
| Erwarteter Hauptvorteil  | Präzision auf Clean-Designs              | Sprachflexibilität              | Visuelles Verständnis             |
| Erwarteter Hauptnachteil | Sprödigkeit bei Naming-Abweichungen      | Token-Kosten, Latenz            | Token-Kosten, Pixel-Approximation |
| Kosten pro Mockup        | ~0 (CPU im ms-Bereich)                   | API-Tokens (Input + Output)     | API-Tokens (Bild + Output)        |
| Metrik-Erfassung         | Inline, resumable CSV (20 Felder/Mockup) | Inline + Token-Zählung          | Inline + Token-Zählung            |

Die regelbasierte Methode A bildet im Gesamtvergleich das untere Ende der Verständnis-Komplexität, aber das obere Ende der Vorhersagbarkeit. Diese Eigenschaft macht sie zur idealen Baseline: Abweichungen der LLM-basierten Methoden lassen sich gegen einen festen Referenzpunkt messen.