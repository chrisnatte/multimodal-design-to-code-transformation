# Figma-JSON-Daten Mapping auf PrimeVue-Komponenten

- [x] **Länge des Inhalts von Roh- und bereinigter Version vergleichen, um die Reduktion darzustellen (prozentuale Reduktion)**
  - **=> massive Reduktion – weniger Tokens / Inhalt bei gleichem semantischem Informationsgehalt.**

## Pipeline

Die Rohdaten kommen als vollständiger Figma-REST-Export (`GET /v1/files/:key/nodes`) und durchlaufen zwei Schritte:

1. **Splitter** (`figma-mockup-data-splitter.ipynb`): falls nötig, wird eine Figma-Seite mit mehreren Mockups (eine `SECTION` mit mehreren `FRAME`-Kindern) in einzelne Dateien pro Mockup zerlegt. Jede Split-Datei wird wieder im Original-Figma-API-Format (`{"nodes": {id: {"document", "components", "componentSets"}}}`) gespeichert – **nicht** als `document`-Dict –, damit die `components`-Lookup-Tabelle für den nächsten Schritt erhalten bleibt.
2. **Cleaner** (`figma-mockup-data-cleaner.ipynb`): entfernt pro Node-Typ alle Attribute, die für das Mapping auf PrimeVue-Komponenten nicht gebraucht werden, anhand einer Whitelist (`KEEP_BY_TYPE`).

## Node-Typen

| Typ          | Funktion                                                                                                            |
|--------------|---------------------------------------------------------------------------------------------------------------------|
| INSTANCE     | Haupt-Mapping-Ziel -> PrimeVue-Komponenten                                                                          |
| FRAME        | Layout-Container ohne Komponenten-Referenz                                                                          |
| TEXT         | Text-Inhalt ohne Komponenten-Referenz                                                                               |
| RECTANGLE    | Einfache gefüllte Fläche (Hintergrund-Panels, Trenner, Bild-Platzhalter)                                            |
| VECTOR       | Icon-/Grafik-Primitive – es werden nur `id`/`name`/`type` behalten, kein Styling                                    |
| *(sonstige)* | Fällt auf ein minimales Keep-Set zurück (`id`, `name`, `type`, `children`, `absoluteBoundingBox`) – z. B. `SECTION` |

## Attribute der Nodes

### Universell für alle Nodes

| Attribut | Funktion                          | Warum benötigt?                                                                                                |
|----------|-----------------------------------|----------------------------------------------------------------------------------------------------------------|
| id       | Eindeutiger Bezeichner / Referenz | Um verschiedene Nodes voneinander zu unterscheiden                                                             |
| name     | Primäres Mapping-Kriterium        | Um den Node anhand seines Namens zu identifizieren – entscheidend für Mapping und Analyse                      |
| type     | Zentrales Mapping-Kriterium       | Um den Node-Typ (z. B. Frame, Group, Component) für Mapping und Analyse zu bestimmen                           |
| children | Hierarchische Struktur            | Um die Eltern-Kind-Beziehungen zwischen Nodes zu erhalten – essenziell für das Verständnis der Design-Struktur |

> **`visible` wird nicht mehr in die bereinigte Ausgabe übernommen.** Es dient nur noch als *Filterkriterium*: Nodes mit `visible: false` werden vor dem Mapping komplett aus dem Baum entfernt (`PRUNE_INVISIBLE = True`). Da alle verbleibenden Nodes danach implizit sichtbar sind, wäre das Attribut in der Ausgabe reine Redundanz.

### Spezifisch für INSTANCE-Nodes

| Attribut                    | Funktion                                                           | Warum benötigt?                                                                                                                                                                                                                                                                                                                         |
|-----------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| componentId                 | Mapping-Kriterium                                                  | Wird beim Cleaning anhand der `components`-Lookup-Tabelle (aus dem Figma-Export) zum **lesbaren Variant-Namen aufgelöst** (z. B. `"Severity=Primary, Disabled=False"`), statt als bedeutungslose ID (`"7:2368"`) stehen zu bleiben. Ist die ID in keiner verfügbaren Lookup-Tabelle enthalten, bleibt die Roh-ID als Fallback erhalten. |
| componentProperties         | Verschiedene Eigenschaften der Komponente                          | Wird von Figmas verschachteltem `{value, type, boundVariables}`-Format auf reine `{Eigenschaft: Wert}`-Paare **abgeflacht**; `#<node-id>`-Suffixe an Property-Keys (z. B. `Text#4293:477`) werden entfernt.                                                                                                                             |
| componentPropertyReferences | Referenz auf andere Nodes für Eigenschaften                        | Um zu verstehen, wie verschiedene Eigenschaften der Komponente mit anderen Nodes verknüpft sind                                                                                                                                                                                                                                         |
| isExposedInstance           | Mapping-Kriterium für exponierte Instanzen                         | Um zu erkennen, ob die Instanz "exposed" ist – relevant für das Mapping auf PrimeVue-Komponenten und deren Eigenschaften                                                                                                                                                                                                                |
| layoutGrow                  | Ob sich die Instance im Auto-Layout streckt (`flex-grow`)          | Ohne dieses Attribut lässt sich z. B. nicht unterscheiden, ob ein Button die volle Breite einer Row einnehmen soll                                                                                                                                                                                                                      |
| layoutAlign                 | Ausrichtung der Instance quer zur Auto-Layout-Achse (`align-self`) | Steuert individuelles Stretch-/Center-/Min-/Max-Verhalten eines einzelnen Kindes                                                                                                                                                                                                                                                        |

**Interne PrimeVue-Sub-Instanzen** (Name beginnt mit `_`, z. B. `_inputtext-content`) werden bewusst **nicht** übersprungen, sondern vollständig mit übernommen, da deren Inhalt individuelle Overrides enthalten kann (z. B. abweichender Text, Status), die für das Mapping relevant sind.

### Spezifisch für FRAME-Nodes

| Attribut                        | Funktion                                                            | Warum benötigt?                                                             |
|---------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------------|
| layoutMode                      | Layout-Richtung (`flex-direction`)                                  | Um die Layout-Richtung (z. B. horizontal, vertikal) des Frames zu verstehen |
| itemSpacing                     | Abstand zwischen Elementen im Layout (`gap-{n}`)                    | Um den Abstand zwischen den Elementen im Frame zu erfassen                  |
| paddingLeft/Right/Top/Bottom    | Innenabstand des Frames (`p-{n}`)                                   | Um den Innenabstand des Frames zu erfassen                                  |
| primaryAxisAlignItems           | Ausrichtung der Elemente entlang der Hauptachse (`justify-content`) | Um zu verstehen, wie Elemente entlang der Hauptachse ausgerichtet sind      |
| counterAxisAlignItems           | Ausrichtung der Elemente entlang der Querachse (`align-items`)      | Um zu verstehen, wie Elemente entlang der Querachse ausgerichtet sind       |
| layoutSizingHorizontal/Vertical | Größenverhalten der Elemente im Layout (fixed, hug, fill)           | Um zu verstehen, wie Elemente im Layout dimensioniert werden                |
| layoutWrap                      | Ob Elemente im Layout umbrechen (`flex-wrap`)                       | Um zu verstehen, ob Elemente im Layout umbrechen                            |
| layoutGrow                      | Ob sich der Frame im Auto-Layout streckt (`flex-grow`)              | s. o. bei INSTANCE                                                          |
| layoutAlign                     | Ausrichtung des Frames quer zur Auto-Layout-Achse (`align-self`)    | s. o. bei INSTANCE                                                          |

### Spezifisch für TEXT-Nodes

| Attribut                    | Funktion                                                                        | Warum benötigt?                                                                    |
|-----------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| characters                  | Textinhalt des Nodes                                                            | Um den eigentlichen Textinhalt zu erfassen                                         |
| componentPropertyReferences | Referenz auf andere Nodes für Eigenschaften                                     | Um zu verstehen, wie der Textinhalt mit anderen Nodes verknüpft ist                |
| style                       | Text-Styling-Information (auf `fontFamily`, `fontWeight`, `fontSize` reduziert) | Feineres Kerning/Line-Height etc. ist für die Komponenten-Zuordnung nicht relevant |

### Zusätzliche Style-Attribute

| Attribut            | Mapping                                                                          | Node-Typen                           |
|---------------------|----------------------------------------------------------------------------------|--------------------------------------|
| fills               | Hintergrundfarbe (nur `SOLID`-Fills; Gradient/Image werden aktuell verworfen)    | FRAME, INSTANCE, RECTANGLE           |
| strokes             | Rahmenfarbe (nur `SOLID`; **Strichstärke wird derzeit nicht mitgeführt**, s. u.) | FRAME                                |
| cornerRadius        | Eckenradius für abgerundete Ecken                                                | FRAME, RECTANGLE                     |
| absoluteBoundingBox | Position und Größe (`x`, `y`, `width`, `height`), auf 1 Nachkommastelle gerundet | alle konfigurierten Typen + Fallback |

Werte, die einem Figma-Default entsprechen (`layoutMode: NONE`, `itemSpacing: 0`, `cornerRadius: 0`, `layoutGrow: 0`, `Padding: 0`, etc.), werden komplett weggelassen, um zusätzliches Rauschen zu vermeiden (`OMIT_WHEN_DEFAULT`).

---

### Bekannte Lücken / offene Punkte

Aus einer Analyse mehrerer realer Mockup-Sets sind Fälle aufgefallen, die aktuell **noch nicht** abgedeckt sind:

| Fall                                             | Auswirkung                                                                                                                                              | Status                                                                                                              |
|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `layoutPositioning: "ABSOLUTE"`                  | Overlay-Elemente (z. B. ein Badge über einem Avatar) werden wie normale Flow-Children behandelt – Layout kann falsch rekonstruiert werden               | offen                                                                                                               |
| `strokeWeight` / `individualStrokeWeights`       | Rahmenfarbe ohne Dicke ist mehrdeutig; Einzelseiten-Rahmen (z. B. Tab-Unterstrich) gehen ganz verloren                                                  | offen                                                                                                               |
| `effects` (`DROP_SHADOW`)                        | Elevation-Information (z. B. Card-Schatten) fehlt komplett                                                                                              | offen                                                                                                               |
| `opacity` ≠ 1                                    | Signal für z. B. deaktivierte Elemente geht verloren                                                                                                    | offen                                                                                                               |
| `fills` vom Typ `IMAGE`                          | Fällt komplett raus (nur `SOLID` wird behalten) – Node hat dann gar keinen `fills`-Key mehr, obwohl visuell ein Bild sitzt                              | offen                                                                                                               |
| `componentId` ohne Treffer in der Lookup-Tabelle | Bleibt als Roh-ID stehen, wenn die referenzierte Komponente nicht im selben Figma-Export liegt (z. B. Komponenten aus einer separaten Bibliotheksdatei) | teilweise gemildert – mehrere `components-*.json`-Dateien lassen sich kombinieren, volle Abdeckung nicht garantiert |

---

### Beispiel

**Roh (Figma-Export):**

```json
{
  "id": "2:5",
  "name": "1 [Password-Eingabe]",
  "type": "FRAME",
  "layoutMode": "VERTICAL",
  "paddingLeft": 24, "paddingRight": 24, "paddingTop": 24, "paddingBottom": 24,
  "absoluteBoundingBox": {"x": 0, "y": 0, "width": 320.456, "height": 180.123},
  "children": [{
    "id": "10:4938", "name": "Column", "type": "FRAME",
    "layoutMode": "VERTICAL", "itemSpacing": 24,
    "children": [
      {
        "id": "10:4744", "name": "password", "type": "INSTANCE",
        "componentId": "7:4468",
        "componentProperties": {
          "Toggle Mask": {"value": "True", "type": "VARIANT", "boundVariables": {}},
          "Password Visible": {"value": "False", "type": "VARIANT", "boundVariables": {}}
        }
      },
      {
        "id": "10:4933", "name": "button", "type": "INSTANCE",
        "componentId": "7:2368",
        "layoutGrow": 1,
        "componentProperties": {
          "Text#4293:477": {"value": "Anmelden", "type": "TEXT", "boundVariables": {}},
          "Severity": {"value": "Primary", "type": "VARIANT", "boundVariables": {}},
          "Disabled": {"value": "False", "type": "VARIANT", "boundVariables": {}},
          "🔲 Outlined": {"value": "False", "type": "VARIANT", "boundVariables": {}},
          "🔤 Text": {"value": "False", "type": "VARIANT", "boundVariables": {}}
        }
      }
    ]
  }]
}
```

**Bereinigt (Output des Cleaner-Notebooks):**

```json
{
  "type": "FRAME",
  "id": "2:5",
  "name": "1 [Password-Eingabe]",
  "absoluteBoundingBox": {"x": 0, "y": 0, "width": 320.5, "height": 180.1},
  "layoutMode": "VERTICAL",
  "paddingBottom": 24, "paddingLeft": 24, "paddingRight": 24, "paddingTop": 24,
  "children": [
    {
      "type": "FRAME",
      "id": "10:4938",
      "name": "Column",
      "itemSpacing": 24,
      "layoutMode": "VERTICAL",
      "children": [
        {
          "type": "INSTANCE",
          "id": "10:4744",
          "name": "password",
          "componentId": "Toggle Mask=True, Password Visible=False",
          "componentProperties": {
            "Toggle Mask": "True",
            "Password Visible": "False"
          }
        },
        {
          "type": "INSTANCE",
          "id": "10:4933",
          "name": "button",
          "componentId": "Severity=Primary, Disabled=False, Outlined=False, Text=False",
          "componentProperties": {
            "Text": "Anmelden",
            "Severity": "Primary",
            "Disabled": "False",
            "🔲 Outlined": "False",
            "🔤 Text": "False"
          },
          "layoutGrow": 1
        }
      ]
    }
  ]
}
```

Reduktion für dieses Beispiel: **~27 %**. Bei vollständigen, verschachtelten Mockups (mit deutlich mehr internen Figma-Metadaten wie `absoluteRenderBounds`, `boundVariables`, `interactions`, `styleOverrideTable` pro Node) liegt die tatsächliche Reduktion in der Praxis deutlich höher, typischerweise zwischen **79 % und 84 %** Content-Länge bzw. **25–30 %** weniger Attribute pro Node.