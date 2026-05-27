# Ansatz C — Vision-LLM-Transformation

## 1. Übersicht

Der visionsbasierte LLM-Ansatz (Ansatz C) ersetzt die strukturierten Figma-Metadaten als primäre Eingabe durch einen **Screenshot** des Mockups. Das LLM erhält ausschließlich das visuelle Bild und — je nach Strategie — PrimeVue-Dokumentation als Kontext, um daraus eine Vue-3-SFC zu generieren. Die Transformationsentscheidungen basieren damit auf visueller Mustererkennung statt auf programmatisch extrahierten Komponenteneigenschaften.

**Kernhypothese gegenüber Ansatz B:** Wenn ein LLM allein aus dem visuellen Erscheinungsbild einer UI auf die zugrunde liegenden Komponenten und deren Konfiguration schließen kann, ist der Ansatz robust gegenüber Änderungen am Figma-Dateiformat, fehlenden Metadaten oder unkonventioneller Benennung — auf Kosten semantischer Präzision.

**Direkter Vergleich mit Ansatz B:** Identisches Modell (`gpt-5.3-codex`), identische Dokumentations-Strategien (C1/C2/C3 ↔ B1/B2/B3), identischer Datensatz — einzige unabhängige Variable ist die Eingabemodalität (Figma-JSON vs. PNG-Screenshot).

Stand der Implementierung: Der Prototyp testet drei Kontext-Strategien (C1, C2, C3) in einer gemeinsamen Pipeline. Die Komponenten-Erkennung für C2/C3 nutzt die Figma-JSON-Dateien als reinen Preprocessing-Schritt zur Kontext-Selektion — das JSON erscheint nicht im LLM-Prompt.

### Designprinzipien

| Prinzip                       | Umsetzung                                                                 |
|-------------------------------|---------------------------------------------------------------------------|
| Visuelle Eingabe              | Screenshot als primäre Informationsquelle — kein strukturiertes JSON      |
| Modell-Kontrolle              | Dasselbe Modell (gpt-5.3-codex) in Ansatz B und C                        |
| Strategie-Parität             | Identische Kontext-Strategien wie B → direkte Vergleichbarkeit            |
| Methodische Sauberkeit        | JSON nur für Kontext-Selektion, nie als LLM-Eingabe                       |
| Reproduzierbarkeit (begrenzt) | Gleicher Prompt → gleicher Kontext, aber Ausgabe ist nicht deterministisch |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────────────────────────────────┐
│  PNG-Screenshot (Figma-Export)                      │  Primäre Eingabe
└───────────┬─────────────────────────────────────────┘
            │
┌───────────┴─────────────────────────────────────────┐
│  Cleaned Figma-JSON (Preprocessing)                 │  Nur für Kontext-Selektion (C2/C3)
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Komponenten-Erkennung  │  C2/C3: JSON → erkannte Komponenten → Doc-Auswahl
│  (detect_components)    │  C1: entfällt (kein Kontext)
└───────────┬─────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Kontext-Builder                                    │  Schritt 1
│  ├─ C1: Kein Kontext              (0 Tokens)        │  Reines Modell-Vorwissen
│  ├─ C2: RAW-Docs erkannter Komp.  (~5–50k Tokens)   │  Vollständige Doku, selektiv
│  └─ C3: CLEANED-Docs erkannter K. (~1–10k Tokens)   │  Bereinigte Doku, selektiv
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Prompt-Builder         │  Schritt 2: System + User Prompt (Bild-Block)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Vision API-Aufruf      │  Schritt 3: gpt-5.3-codex (Zero-Shot)
│  (call_llm_vision)      │  Payload: [image_url-Block, text-Block]
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Antwort-Parser         │  Schritt 4: SFC aus Antwort extrahieren
│  (extract_sfc)          │  identisch mit Ansatz B
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Metrik-Erfassung       │  Schritt 5: Tokens, Kosten, Timing, Parse-OK
│  (_metrics_c, Report)   │  → metrics_report_c.json
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe (01-c1.vue / 01-c2.vue / 01-c3.vue)
└─────────────────────────┘
```

Der grundlegende Architektur-Unterschied zu Ansatz B liegt in Schritt 3: Statt dem Figma-JSON-Text wird ein Base64-kodiertes Bild an die API übergeben. Die Vor- und Nachverarbeitungsschritte sind weitgehend identisch.

---

## 3. Screenshot-Vorbereitung

### 3.1 Export aus Figma

Screenshots werden vorab aus Figma exportiert und in der Verzeichnisstruktur `dataset/components/{complexity}/{id}.png` abgelegt — analog zur JSON-Struktur:

```
dataset/components/
  simple/
    1.png
    2.png
    ...
  medium/
    1.png
    ...
  hard/
    1.png
    ...
```

**Empfohlene Export-Parameter:** PNG-Format, 2× Skalierung (ausreichende Auflösung für `detail=high`, ohne übermäßige Token-Kosten).

Alternativ über die Figma REST API:

```
GET /v1/images/{file_key}?ids={node_ids}&format=png&scale=2
```

### 3.2 Base64-Kodierung

Die Pipeline lädt alle PNG-Dateien beim Start und kodiert sie als Base64-Strings im Arbeitsspeicher:

```python
SCREENSHOTS: dict[str, str] = {}

for png_file in screenshot_files:
    key = f'{png_file.parent.name}-{png_file.stem}'.lower()
    SCREENSHOTS[key] = base64.b64encode(
        png_file.read_bytes()
    ).decode('utf-8')
```

### 3.3 Image-Detail-Parameter

Der `IMAGE_DETAIL`-Parameter steuert den Trade-off zwischen Bildqualität und Token-Kosten:

| Detail   | Token-Kosten | Empfehlung |
|----------|--------------|------------|
| `low`    | ~85 Tokens fix | Schnelltests, einfache Mockups |
| `high`   | variabel (~1k–4k Tokens je nach Bildgröße) | Hauptexperiment |

Für die Evaluation wird `high` empfohlen, um das volle visuelle Potenzial des Modells zu nutzen. `low` eignet sich als Kostenvariante für Sensitivitätsanalysen.

---

## 4. Prompt-Architektur

### 4.1 System-Prompt

Der System-Prompt für Ansatz C unterscheidet sich von Ansatz B in zwei zentralen Punkten: der Abschnitt `FIGMA JSON STRUCTURE` entfällt (kein JSON im Prompt), und ein neuer Abschnitt `WHAT TO ANALYZE` leitet das Modell bei der visuellen Analyse an.

```
You are an expert Vue 3 and PrimeVue developer.
Analyze the provided UI mockup screenshot and transform it into a complete,
working Vue 3 Single File Component.

STRICT REQUIREMENTS:
- Use PrimeVue 4 components exclusively for all UI elements visible in the screenshot
- Use <script setup> syntax (no Options API)
- Import every PrimeVue component used: import Button from 'primevue/button'
- Use Tailwind CSS utility classes for layout and spacing
- Use reactive() from Vue for all form/input state
- Map visual rows/columns to flex/flex-col with appropriate gap-* classes
- Output ONLY the Vue SFC — no explanation, no markdown fences, no prose
- Return exactly one complete Vue SFC, starting directly with <template>
  and ending with </script>
- Before finalizing, verify that the SFC is syntactically valid, all used
  PrimeVue components are imported, and all form/input state uses reactive()

WHAT TO ANALYZE IN THE SCREENSHOT:
- Identify all UI components (inputs, buttons, tables, cards, dialogs, etc.)
- Detect the layout structure (rows, columns, nested containers, spacing)
- Extract all text content (labels, placeholders, button labels, headings)
- Identify component states (disabled, selected, checked, invalid, etc.)
- Recognize component variants (outlined, filled, severity colors, sizes)
- Map the visual hierarchy to a PrimeVue component structure

PrimeVue DOCUMENTATION:
{context}       ← strategie-abhängiger Kontext (C1: leer / C2: RAW / C3: CLEANED)
```

### 4.2 User-Prompt: Bild-Block + Text-Block

Der User-Prompt enthält für Ansatz C ein Array aus zwei Content-Blöcken — das ist der technische Kernunterschied zu Ansatz B:

```python
'messages': [
    {'role': 'system', 'content': system_prompt},
    {'role': 'user', 'content': [
        {
            'type': 'image_url',
            'image_url': {
                'url':    f'data:image/png;base64,{base64_image}',
                'detail': IMAGE_DETAIL,   # 'low' oder 'high'
            }
        },
        {
            'type': 'text',
            'text': 'Analyze this UI mockup screenshot and generate a Vue 3 SFC with PrimeVue.',
        },
    ]},
]
```

Bei Ansatz B ist `content` ein einfacher String. Bei Ansatz C ist es eine Liste — das ist die einzige Änderung am API-Aufruf zwischen den beiden Ansätzen.

### 4.3 Prompt-Strategie: Zero-Shot

Identisch mit Ansatz B: kein Few-Shot, kein Chain-of-Thought. Das LLM schließt ausschließlich aus dem Screenshot und dem optionalen Dokumentations-Kontext.

---

## 5. Kontext-Strategien

Die drei Strategien sind exakt parallel zu Ansatz B definiert. Die Komponenten-Erkennung für C2/C3 läuft vorab auf den Figma-JSON-Dateien und wird einmalig als `DETECTED_COMPONENTS`-Dictionary gecacht — sie erscheint nicht im LLM-Prompt.

### 5.1 C1 — Kein Kontext (reines Modell-Vorwissen)

Das LLM erhält nur den Screenshot, keine Dokumentation.

```python
if strategy == 'c1':
    return '', []
```

| Eigenschaft       | Wert                             |
|-------------------|----------------------------------|
| Kontext-Tokens    | 0                                |
| Bild-Tokens       | ~85 (low) / ~1k–4k (high)       |
| LLM-Wissen        | nur aus Vortraining              |
| Selektionsfehler  | keine                            |

**Hypothese:** C1 testet, wie gut das Modell PrimeVue-Komponenten allein aus ihrem visuellen Erscheinungsbild identifiziert. Da `gpt-5.3-codex` auf UI-Entwicklung spezialisiert ist, sollte die Baseline höher sein als bei einem generischen Modell.

### 5.2 C2 — RAW-Docs erkannter Komponenten

Dieselbe Selektionslogik wie B2, aber mit gecachten Erkennungsergebnissen:

```python
docs     = RAW_DOCS
detected = DETECTED_COMPONENTS.get(key, set())
```

| Eigenschaft       | Wert                               |
|-------------------|------------------------------------|
| Kontext-Tokens    | ~5.000–50.000 (mockup-abhängig)    |
| Bild-Tokens       | ~85 (low) / ~1k–4k (high)         |
| Selektionsfehler  | aus JSON-Erkennung; visuell-blind  |

**Wichtiger Methodenaspekt:** Die Kontext-Selektion basiert auf den Figma-JSON-Metadaten, nicht auf dem, was das Modell im Bild sieht. Wenn das Modell im Screenshot eine Komponente erkennt, die im JSON nicht vorkommt (oder umgekehrt), kann die Doku fehlen oder überflüssig sein. Dieser Effekt ist methodisch interessant und separat messbar.

### 5.3 C3 — CLEANED-Docs erkannter Komponenten

```python
docs     = CLEANED_DOCS
detected = DETECTED_COMPONENTS.get(key, set())
```

| Eigenschaft       | Wert                               |
|-------------------|------------------------------------|
| Kontext-Tokens    | ~1.000–10.000 (mockup-abhängig)    |
| Bild-Tokens       | ~85 (low) / ~1k–4k (high)         |
| Selektionsfehler  | identisch mit C2                   |

### 5.4 Strategie-Vergleich

| Eigenschaft         | C1 (kein Kontext)   | C2 (RAW selektiv)     | C3 (CLEANED selektiv) |
|---------------------|---------------------|-----------------------|------------------------|
| Dokumentation       | keine               | vollständig pro Komp. | bereinigt pro Komp.    |
| Kontext-Tokens      | 0                   | ~5k–50k               | ~1k–10k                |
| Bild-Tokens (high)  | ~1k–4k              | ~1k–4k                | ~1k–4k                 |
| Gemessener Effekt   | Baseline            | Doku-Wert             | Bereinigungs-Wert      |

---

## 6. Technische Implementierung

### 6.1 API-Aufruf (Vision)

```python
def call_llm_vision(system_prompt, user_text, base64_image) -> dict:
    payload = {
        'model':      API_MODEL,
        'max_tokens': MAX_TOKENS,
        'metadata': {
            'method':     METHOD,
            'strategy':   strategy,
            'mockup_key': key,
            'complexity': complexity,
        },
        'messages': [
            {'role': 'system', 'content': system_prompt},
            {'role': 'user', 'content': [
                {'type': 'image_url',
                 'image_url': {'url': f'data:image/png;base64,{base64_image}',
                               'detail': IMAGE_DETAIL}},
                {'type': 'text', 'text': user_text},
            ]},
        ],
    }
```

Das `metadata`-Dictionary wird mit jedem API-Aufruf mitgesendet und erscheint im OpenAI-Dashboard — filterbar nach `strategy`, `complexity`, `mockup_key`.

### 6.2 Responses API vs. Chat Completions API

Die Pipeline unterstützt beide OpenAI-Endpunkte über ein Flag:

```python
if _USE_RESPONSES_API:
    payload['input'] = payload.pop('messages')
    url = API_URL_RESPONSES
else:
    url = API_URL_CHAT
```

Für `gpt-5.3-codex` (Codex-Modell) wird die Responses API verwendet, für Standard-GPT-Modelle die Chat Completions API.

### 6.3 SFC-Extraktion

Identisch mit Ansatz B — `extract_sfc` behandelt drei Ausgabeformate in Prioritätsreihenfolge: `` ```vue `` -Block, generischer Code-Block mit `<template>`, direkte SFC-Ausgabe.

---

## 7. Metrik-Erfassung

Ansatz C erweitert das Metrik-Schema von Ansatz B um das `image_detail`-Feld, das für Sensitivitätsanalysen relevant ist:

```python
{
    # Basis
    'input':               'simple-1',
    'output':              '1-c3.vue',
    'complexity':          'simple',
    'strategy':            'c3',
    'image_detail':        'high',       # ← zusätzlich gegenüber Ansatz B
    'duration_ms':         3812.4,
    'sfc_bytes':           720,
    'sfc_lines':           34,
    'ast_depth_approx':    6,
    'parse_ok':            True,

    # LLM-spezifisch
    'input_tokens':        2840,         # inkl. Bild-Tokens
    'output_tokens':       398,
    'context_tokens':      1200,         # nur Dokumentations-Tokens
    'context_components':  4,
    'stop_reason':         'stop',
    'cost_usd':            0.0143,
    'error':               None,
}
```

**Besonderheit:** `input_tokens` enthält sowohl die Bild-Tokens als auch die Text-Tokens (System-Prompt + Dokumentation + User-Text). Eine Trennung ist über die OpenAI-API nicht direkt möglich — `context_tokens` gibt jedoch den Dokumentations-Anteil separat an, sodass die Bild-Token-Kosten implizit berechnet werden können:

```
Bild-Tokens ≈ input_tokens - context_tokens - system_prompt_tokens - user_text_tokens
```

---

## 8. Stärken und Limitationen

### 8.1 Stärken

| Eigenschaft                         | Bedeutung                                                                    |
|-------------------------------------|------------------------------------------------------------------------------|
| **Format-Unabhängigkeit**           | Funktioniert unabhängig vom Figma-Datenmodell oder API-Version               |
| **Visuelles Verständnis**           | Erkennt Layout-Muster, die im JSON nicht explizit kodiert sind               |
| **Semantische HTML-Elemente**       | Kann visuelle Hierarchien auf `<h1>`, `<p>`, `<label>` abbilden             |
| **Robustheit bei fehlenden Metadaten** | Funktioniert auch wenn Figma-Properties unvollständig oder unkonventionell sind |
| **Kein Preprocessing-Aufwand**      | Kein Cleaning-Notebook, kein AST-Parser notwendig                            |

### 8.2 Limitationen

| Limitation                                      | Auswirkung                                                                                | Adressierbar durch                            |
|-------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------|
| **Pixelbasierte Unschärfe**                     | Ähnlich aussehende Komponenten (Toggle vs. kleiner Button) können verwechselt werden     | Höhere Bildauflösung, `detail=high`           |
| **Kein Zugriff auf Komponenteneigenschaften**   | Severity-Farben, disabled-States, genaue Prop-Werte nur visuell schätzbar                | Kein direktes Äquivalent — inhärente Grenze   |
| **Halluzinierung von Props**                    | Geschätzte Props können von tatsächlichen API-Werten abweichen                           | Dokumentations-Kontext (C2/C3)                |
| **Nicht-Determinismus**                         | Gleicher Screenshot kann unterschiedliche Outputs erzeugen                               | Temperature=0                                 |
| **Token-Kosten durch Bild**                     | Bild-Tokens (~1k–4k bei `high`) kommen fix zu Text-Tokens hinzu                         | `detail=low` für schnelle Tests               |
| **Kontext-Selektion visuell blind**             | Komponenten-Erkennung für C2/C3 basiert auf JSON — kann vom visuellen Inhalt abweichen  | Vollständige Doku (C2) als Fallback            |
| **Keine programmatische Metrik-Erfassung**      | Coverage-Metriken wie in Ansatz A sind ohne AST nicht berechenbar                       | LLM-as-Judge, manueller Vergleich             |

### 8.3 Hypothesen für den Methodenvergleich

**Extern (A/B ↔ C):**

- **Erwartete Stärke bei UF3 (Visual Fidelity):** C erzeugt den optisch ähnlichsten Output, da das Modell das visuelle Erscheinungsbild direkt als Ziel hat — nicht eine abstrakte Komponentenstruktur
- **Erwartete Schwäche bei UF1 (Mapping-Präzision):** Pixelbasierte Komponentenerkennung ist fehleranfälliger als metadatenbasiertes Mapping — besonders bei ähnlich aussehenden Komponenten
- **Erwartete Schwäche bei UF2 (Code-Qualität):** Prop-Werte werden geschätzt statt aus Metadaten extrahiert — höhere Halluzinierungsrate erwartet
- **Erwartete Stärke bei UF5 (Robustheit):** C ist robust gegenüber Figma-Naming-Abweichungen, weil das JSON im Transformationsprozess keine Rolle spielt

**Intern (C1 ↔ C2 ↔ C3):**

- **C1 vs. C2:** Stärker als der analoge Effekt bei B1→B2 erwartet, weil visuelle Komponentenerkennung mehr auf Dokumentation angewiesen ist als textbasierte
- **C2 vs. C3:** Ähnlicher Effekt wie B2→B3 — Bereinigung reduziert Rauschen ohne Informationsverlust
- **Vergleich B ↔ C bei gleicher Strategie:** Wenn B2 ≈ C2 bei Qualität, liefern Metadaten und Bild äquivalenten Informationsgehalt — ein zentraler Befund der Arbeit

---

## 9. Beispiel-Output

### 9.1 Eingabe: Screenshot des Password-Eingabe-Mockups

Das Modell sieht: ein weißes Panel mit einem Passwortfeld (mit Augen-Icon), einem Button "Anmelden" und einem Label "Passwort" darüber.

### 9.2 Typischer C-Output

```vue
<template>
  <div class="flex flex-col gap-6 p-6 max-w-md">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium text-gray-700">Passwort</label>
      <Password
        v-model="form.password"
        placeholder="Passwort eingeben"
        :toggleMask="true"
        :feedback="false"
        class="w-full"
      />
    </div>
    <Button
      label="Anmelden"
      class="w-full"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const form = reactive({
  password: '',
})
</script>
```

### 9.3 Vergleich A ↔ B ↔ C

| Aspekt                    | Ansatz A                          | Ansatz B (typisch)                     | Ansatz C (typisch)                      |
|---------------------------|-----------------------------------|----------------------------------------|-----------------------------------------|
| Eingabe                   | Figma-JSON                        | Figma-JSON + Doku                      | Screenshot + Doku                       |
| Komponentenerkennung      | Deterministisch aus Metadaten     | LLM aus Metadaten                      | LLM aus Pixeln                          |
| Prop-Werte                | Exakt aus `componentProperties`   | Aus JSON + Doku interpretiert          | Visuell geschätzt                       |
| Label-Erkennung           | Nicht generiert                   | Aus JSON extrahiert                    | Aus Screenshot gelesen                  |
| Typografische Semantik    | Immer `<span>`                    | Situationsgerecht (`<h1>`, `<label>`)  | Situationsgerecht, visuell abgeleitet   |
| Zusatz-Props              | Nur gemappte Regeln               | Doku-gestützt                          | Visuell geschätzt, teils halluziniert   |
| Reproduzierbarkeit        | 100%                              | Geringe Varianz                        | Geringe bis mittlere Varianz            |

---

## 10. Kosten-Qualitäts-Analyse

Ansatz C hat eine zusätzliche Kostendimension gegenüber B: die Bild-Tokens.

```
Strategie   Kontext-Tokens   Bild-Tokens (high)   Gesamt/Mockup (ca.)
---------   --------------   ------------------   -------------------
C1          0                ~1k–4k               ~$0.005–0.02
C2          5k–50k           ~1k–4k               ~$0.025–0.16
C3          1k–10k           ~1k–4k               ~$0.01–0.04
```

Die Bild-Tokens sind bei `detail=high` nicht vernachlässigbar und machen bei C1 den Großteil der Kosten aus. Ein zusätzlicher Vergleich C-`detail=high` vs. C-`detail=low` ist über den `image_detail`-Parameter im Metrik-Report einfach durchführbar.

---

## 11. Prompt-Anpassung

### 11.1 Neue Komponenten

Identisch mit Ansatz B: neue `.md`-Datei in `dataset/primevue-docs/` ablegen — Cleaning-Notebook ausführen — Pipeline erkennt automatisch.

### 11.2 Prompt-Tuning

Spezifisch für Ansatz C: Falls das Modell visuelle Elemente falsch klassifiziert, können Hinweise im Abschnitt `WHAT TO ANALYZE` präzisiert werden:

```python
SYSTEM_PROMPT_TEMPLATE = """...
WHAT TO ANALYZE IN THE SCREENSHOT:
...
- [Neue Analysehinweise]   ← z.B. "Distinguish Toggle switches from Checkboxes
                              by their pill-shaped track"
...
"""
```

### 11.3 Modell-Wechsel

```python
API_MODEL = 'gpt-5.3-codex'
# Muss synchron mit Ansatz B gehalten werden — beide Ansätze
# müssen dasselbe Modell verwenden für methodische Vergleichbarkeit
```

---

## 12. Position im methodischen Gesamtvergleich

| Aspekt                   | Ansatz A (Regelbasiert)             | Ansatz B (Metadaten-LLM)              | Ansatz C (Vision-LLM)                   |
|--------------------------|-------------------------------------|---------------------------------------|-----------------------------------------|
| Primäre Eingabe          | Figma-JSON                          | Figma-JSON                            | PNG-Screenshot                          |
| Modell                   | keines                              | gpt-5.3-codex                         | gpt-5.3-codex (identisch)              |
| Entscheidungslogik       | Deterministisch                     | Probabilistisch (Metadaten)           | Probabilistisch (Pixel)                 |
| Kontext-Strategien       | `COMPONENT_MAP`/`FRAME_MAP`         | C1 (kein) / C2 (RAW) / C3 (CLEANED)  | C1 (kein) / C2 (RAW) / C3 (CLEANED)   |
| Komponentenerkennung     | Name-Matching                       | LLM aus JSON-Struktur                 | LLM aus visuellem Erscheinungsbild      |
| Prop-Extraktion          | Exakt aus `componentProperties`     | LLM aus JSON + Doku                   | LLM aus Pixel + Doku                   |
| Reproduzierbarkeit       | 100%                                | ~hoch                                 | ~hoch, leicht höhere Varianz           |
| Externe Abhängigkeiten   | Keine                               | OpenAI-API                            | OpenAI-API                             |
| Kosten pro Mockup        | ~$0                                 | C1: ~$0 / C2: ~$0.08 / C3: ~$0.02    | C1: ~$0.01 / C2: ~$0.10 / C3: ~$0.03  |
| Strukturgarantie         | Ja (deterministischer AST)          | Nein (`parse_ok`-Flag)                | Nein (`parse_ok`-Flag)                 |
| Erwarteter Hauptvorteil  | Präzision, Kosten                   | Metadaten-Flexibilität, Semantik      | Visuelle Treue, Format-Unabhängigkeit   |
| Erwarteter Hauptnachteil | Sprödigkeit bei Naming              | Token-Kosten (C2), Varianz            | Pixel-Unschärfe, höhere Prop-Varianz   |

Ansatz C bildet das dritte Glied im Methodenvergleich und testet die Grenze, wie viel semantische Information aus einer visuellen Darstellung allein extrahierbar ist. Die direkte Vergleichbarkeit mit Ansatz B — gleiches Modell, gleiche Strategien, gleicher Datensatz — macht C/B-Differenzen zu einem sauberen Maß für den Informationsgehalt von Figma-Metadaten gegenüber visuellen Darstellungen.
