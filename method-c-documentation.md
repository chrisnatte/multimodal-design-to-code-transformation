# Ansatz C — Vision-LLM-Transformation

## 1. Übersicht

Der visionsbasierte LLM-Ansatz (Ansatz C) ersetzt die strukturierten Figma-Metadaten als primäre Eingabe durch einen **Screenshot** des Mockups. Das LLM erhält ausschließlich das visuelle Bild und — je nach Strategie — PrimeVue-Dokumentation als Kontext, um daraus eine Vue-3-SFC zu generieren. Die Transformationsentscheidungen basieren damit auf visueller Mustererkennung statt auf programmatisch extrahierten Komponenteneigenschaften.

**Kernhypothese gegenüber Ansatz B:** Wenn ein LLM allein aus dem visuellen Erscheinungsbild einer UI auf die zugrunde liegenden Komponenten und deren Konfiguration schließen kann, ist der Ansatz robust gegenüber Änderungen am Figma-Dateiformat, fehlenden Metadaten oder unkonventioneller Benennung — auf Kosten semantischer Präzision.

**Direkter Vergleich mit Ansatz B:** Identische Modellmenge über OpenRouter (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview — dieselbe `API_MODELS`-Konfiguration wie in Ansatz B, siehe dortige Kapitel 1 und 10.3), identische Dokumentations-Strategien (C1/C2/C3 ↔ B1/B2/B3), identischer Datensatz, sodass die primär unabhängige Variable die Eingabemodalität bleibt (Figma-JSON vs. PNG-Screenshot), das Modell ist innerhalb dieser Vergleichsmenge aber selbst eine weitere Dimension.

Der Prototyp testet drei Kontext-Strategien (C1, C2, C3) in einer gemeinsamen Pipeline, für jedes der drei Modelle aus `API_MODELS` und (analog zu Ansatz A/B) für die konfigurierbare `TYPE`/`VARIANT`-Datensatzauswahl. Die Komponenten-Erkennung für C2/C3 nutzt die Figma-JSON-Dateien als reinen Preprocessing-Schritt zur Kontext-Selektion — das JSON erscheint nicht im LLM-Prompt. Zusätzlich existiert wie in Ansatz B eine weitere Konfigurationsmöglichkeit `PROMPT_STRATEGY` (`'zero_shot'`/`'few_shot'`) — bei C wird das Few-Shot-Set aus drei Referenz-**Screenshots** (nicht JSON) mit zugehörigen SFCs gebildet (siehe Kapitel 4.3).

### Designprinzipien

| Prinzip                       | Umsetzung                                                                                                     |
|-------------------------------|---------------------------------------------------------------------------------------------------------------|
| Visuelle Eingabe              | Screenshot als primäre Informationsquelle — kein strukturiertes JSON                                          |
| Modell-Vergleich              | Dieselbe Modellmenge (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) über OpenRouter wie in Ansatz B |
| Strategie-Parität             | Identische Kontext-Strategien wie B → direkte Vergleichbarkeit                                                |
| Methodische Sauberkeit        | JSON nur für Kontext-Selektion, nie als LLM-Eingabe                                                           |
| Reproduzierbarkeit (begrenzt) | `temperature=0.0` reduziert Varianz, Ausgabe bleibt aber nicht-deterministisch                                |

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
│  (detect_components)    │  C1: entfällt (kein Doku-Kontext)
└───────────┬─────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Kontext-Builder                                    │  Schritt 1
│  ├─ C1: Kein Doku-Kontext         (0 Tokens)        │  Reines Modell-Vorwissen
│  ├─ C2: RAW-Docs erkannter Komp.  (~5–50k Tokens)   │  Vollständige Doku, selektiv
│  └─ C3: CLEANED-Docs erkannter K. (~1–10k Tokens)   │  Bereinigte Doku, selektiv
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Prompt-Builder (build_messages)                     │  Schritt 2: System-Message +
│                                                       │  optionale Few-Shot-Turns
│                                                       │  (Screenshot + SFC je Stufe) +
│                                                       │  Doku-Block + Bild-/Text-Block
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Vision API-Aufruf                                   │  Schritt 3: OpenRouter, je Modell
│  (call_llm_vision)                                   │  aus API_MODELS (Claude Sonnet 5,
│                                                       │  GPT-5.6-Terra, Gemini 3.1 Pro Prev.)
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Antwort-Parser         │  Schritt 4: SFC aus Antwort extrahieren
│  (extract_sfc)          │  identisch mit Ansatz B (längster Template-Block + Trim)
└───────────┬─────────────┘
            ▼
┌───────────────────────────────────────────────────────────┐
│  Metrik-Erfassung                                         │  Schritt 5: Tokens, Kosten, Cache,
│  (_metrics_c, resumable CSV-Report)                       │  Timing, Parse-OK
│  → results/results_c_<type>_<variant>_<prompt_strategy>.csv│
└───────────┬─────────────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe: <mockup>-<c1|c2|c3>-<modell>-<run>.vue
└─────────────────────────┘
```

Der grundlegende Architektur-Unterschied zu Ansatz B liegt in Schritt 2/3: Statt des Figma-JSON-Texts wird ein Base64-kodierter Bild-Block an die API übergeben (`_image_block`, siehe Kapitel 4.2). Ansonsten läuft Ansatz C über exakt dieselbe OpenRouter-Infrastruktur (`call_llm_vision` ist strukturell identisch zu Ansatz B's `call_llm`) — Vor- und Nachverarbeitungsschritte sind weitgehend identisch.

---

## 3. Screenshot-Vorbereitung

### 3.1 Export aus Figma

Screenshots werden vorab aus Figma exportiert. Der Ablagepfad ist an die `TYPE`-Konfiguration gekoppelt (`SCREENSHOTS_DIR = f'dataset/images/{TYPE}'`, nicht mehr das ursprünglich dokumentierte `dataset/components/`):

```
dataset/images/
  components/            # TYPE='components': je Komplexitätsstufe ein Unterordner
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
  uis/                   # TYPE='uis': flach, ohne Komplexitäts-Unterordner
    1.png
    2.png
    ...
  few-shot-examples/      # Few-Shot-Referenzbilder (Kapitel 3.3)
    few-shot-example-simple-composite.png
    few-shot-example-medium-composite.png
    few-shot-example-hard-composite.png
```

Bei `TYPE='uis'` sind die Screenshots **variantenunabhängig** (dieselbe Datei dient sowohl für `VARIANT='pretty'` als auch `'messy'`) und daher rein nach Index benannt, ohne Komplexitäts-Unterordner. Eine Hilfsfunktion `_screenshot_key()` übersetzt die `FIGMA_DATA`-Schlüssel (`'{variant}-{index}'` bei `TYPE='uis'`) auf die entsprechenden `SCREENSHOTS`-Schlüssel, indem sie das Variant-Präfix entfernt.

**Empfohlene Export-Parameter:** PNG-Format, 2× Skalierung (ausreichende Auflösung für höhere `image_detail`-Stufen, ohne übermäßige Token-Kosten).

Alternativ über die Figma REST API:

```
GET /v1/images/{file_key}?ids={node_ids}&format=png&scale=2
```

### 3.2 Base64-Kodierung

Die Pipeline lädt alle PNG-Dateien beim Start und kodiert sie als Base64-Strings im Arbeitsspeicher. Der Schlüsselaufbau unterscheidet sich je nach `TYPE`:

```python
SCREENSHOTS: dict[str, str] = {}

for input_file in screenshot_input_files:
    with open(input_file, 'rb') as f:
        if TYPE == 'uis':
            key = input_file.stem.lower()
        else:
            key = f'{input_file.parent.name}-{input_file.stem}'.lower()

        SCREENSHOTS[key] = base64.b64encode(f.read()).decode('utf-8')
```

Ein vorgelagerter Assert-Block stellt sicher, dass für jeden `FIGMA_DATA`-Eintrag (über `_screenshot_key()` übersetzt) auch tatsächlich ein Screenshot vorliegt und umgekehrt — fehlende Zuordnungen brechen den Notebook-Lauf frühzeitig ab, statt erst mitten in der Pipeline einen `KeyError` zu erzeugen.

### 3.3 Few-Shot-Screenshots

Zusätzlich zu den regulären Mockup-Screenshots lädt die Pipeline (analog zu den Few-Shot-JSON-Beispielen in Ansatz B) drei Referenz-Screenshots — je einen pro Komplexitätsstufe — aus `dataset/images/few-shot-examples/`:

```python
for png_file in sorted(FEW_SHOT_SCREENSHOTS_DIR_PATH.glob('few-shot-example-*-composite.png')):
    key = png_file.stem.removeprefix('few-shot-example-').removesuffix('-composite')  # 'simple' | 'medium' | 'hard'
    FEW_SHOT_SCREENSHOTS[key] = base64.b64encode(png_file.read_bytes()).decode('utf-8')
```

Ist `PROMPT_STRATEGY='few_shot'` aktiv, aber eine der drei erwarteten Dateien fehlt, bricht die Pipeline mit einer expliziten Fehlermeldung ab. Details zur Verwendung dieser Bilder im Prompt siehe Kapitel 4.3.

### 3.4 Image-Detail-Parameter

Der `IMAGE_DETAIL`-Parameter steuert den Trade-off zwischen Bildqualität und Token-Kosten:

| Detail   | Token-Kosten | Empfehlung |
|----------|--------------|------------|
| `low`    | ~85 Tokens fix | Schnelltests, einfache Mockups |
| `high`   | variabel (~1k–4k Tokens je nach Bildgröße) | Höchste visuelle Genauigkeit |
| `auto`   | variabel, Provider entscheidet anhand der Bildgröße | **Aktueller Default** |

`IMAGE_DETAIL` ist wie in Ansatz B ein globaler Konfigurationswert und wird 1:1 in jeden `image_url`-Content-Block übernommen (`_image_block`, Kapitel 4.2) sowie pro Zeile in der Ergebnis-CSV protokolliert (Feld `image_detail`, siehe Kapitel 7.1). Für Sensitivitätsanalysen kann weiterhin explizit zwischen `low`/`high`/`auto` gewechselt werden; für das Hauptexperiment ist derzeit `auto` aktiv.

---

## 4. Prompt-Architektur

### 4.1 System-Prompt

Der System-Prompt (`SYSTEM_INSTRUCTIONS`) für Ansatz C unterscheidet sich von Ansatz B weiterhin darin, dass der Abschnitt `FIGMA JSON DATA STRUCTURE` entfällt und stattdessen zwei visionsspezifische Abschnitte hinzukommen: `WHAT TO ANALYZE IN THE SCREENSHOT` und neu ein `IMAGE INTERPRETATION GUIDE`. Wie bei Ansatz B enthält der System-Prompt **keinen** eingebetteten Dokumentations-Kontext, dieser wird als separater, cache-markierter User-Block übergeben (siehe Kapitel 4.2).

```
You are an expert Vue 3 and PrimeVue developer.
Analyze the given Figma mockup UI screenshot and transform it into a complete, working
Vue 3 Single File Component with PrimeVue 4 components. Use the provided PrimeVue
documentation if given as reference for component usage and props.

STRICT REQUIREMENTS:
- Use PrimeVue 4 components exclusively for all UI elements visible in the screenshot
- Use <script setup> syntax (no Options API)
- Import every PrimeVue component used: import Button from 'primevue/button'
- Use Tailwind CSS utility classes for layout and spacing
- Use ref() from Vue for all form/input state
- Infer layout direction (row/column), spacing, and alignment visually from the image; map to flex/flex-col, gap-*, p-*/px-*/py-* using the closest sensible Tailwind scale value
- Infer component variants (e.g. severity, size, outlined/filled) from visual styling (color, border, fill) — do not invent props that aren't visually supported
- Output ONLY the Vue SFC — no explanation, no markdown fences, no prose
- Return exactly one complete Vue SFC, starting directly with <template> and ending with </script>
- If a region of the image is ambiguous, low-resolution, or partially occluded, use the closest valid structural mapping supported by what IS visible; do not invent unsupported behavior
- Treat the transformation as incomplete until all eligible non-ignored nodes are represented in the output
- Before finalizing, verify that the SFC is syntactically valid, all used PrimeVue components are imported, and all form/input state uses ref()
- Assume PrimeVue Aura theme as baseline for styling; do not generate custom theme CSS unless explicitly required by Figma mockup UI screenshot

WHAT TO ANALYZE IN THE SCREENSHOT:
- Identify all UI components (inputs, buttons, tables, cards, dialogs, etc.)
- Detect the layout structure (rows, columns, nested containers, spacing)
- Extract all text content (labels, placeholders, button labels, headings)
- Identify component states (disabled, selected, checked, invalid, etc.)
- Recognize component variants (outlined, filled, severity colors, sizes)
- Map the visual hierarchy to a PrimeVue component structure

IMAGE INTERPRETATION GUIDE:
- Repeated visual patterns (cards, list rows, form fields) usually correspond to one reusable PrimeVue component instance each
- Icons should be mapped to PrimeIcons (pi pi-*) by closest visual match
- Text content shown in the image must be transcribed exactly as rendered, not paraphrased or translated
```

Der System-Prompt trägt zusätzlich einen Cache-Breakpoint (`cache_control: {'type': 'ephemeral'}`), da er über alle Aufrufe hinweg identisch ist. State wird über **`ref()`** statt `reactive()` gebunden (analog zu Ansatz B), zusätzlich gibt es eine explizite Theme-Vorgabe (Aura, keine Custom-Theme-CSS) sowie explizite Anweisungen zum Umgang mit mehrdeutigen, niedrig aufgelösten oder teilweise verdeckten Bildbereichen. Der Block `PrimeVue DOCUMENTATION: {context}` ist **nicht** Teil des System-Prompts — siehe Kapitel 4.2.

### 4.2 Dokumentations-Kontext und Bild-/Text-Block

Wie in Ansatz B (Kapitel 3.2/3.3 dort) wird der Dokumentations-Kontext, sofern vorhanden (C2/C3), als eigener User-Content-Block vor dem eigentlichen Bild übergeben:

```
PrimeVue documentation for reference:
{context}
```

Danach folgt der Bild-Block, erzeugt über eine kleine Hilfsfunktion, die für alle Modelle über OpenRouter einheitlich funktioniert:

```python
def _image_block(base64_png: str) -> dict:
    """OpenAI-compatible image content block (works via OpenRouter for all models)."""
    return {
        'type': 'image_url',
        'image_url': {
            'url': f'data:image/png;base64,{base64_png}',
            'detail': IMAGE_DETAIL,
        },
    }
```

Abschließend folgt ein knapper Text-Block mit der eigentlichen Aufgabenstellung:

```
Transform the following Figma mockup UI screenshot into a Vue 3 Single File Component using PrimeVue components.
```

Der komplette User-Content für einen reinen C1-Aufruf besteht damit aus zwei Blöcken (Bild + Task-Text); bei C2/C3 kommt der Doku-Block als drittes, vorangestelltes Element hinzu. Bei Ansatz B ist der entsprechende Content ein reiner Text-Block; bei Ansatz C ist es eine Liste aus Bild- und Text-Blöcken — das bleibt der technische Kernunterschied zwischen den beiden Ansätzen.

### 4.3 Prompt-Strategie: konfigurierbar zwischen Zero-Shot und Few-Shot

Wie in Ansatz B (dortige Kapitel 3.4) ist Ansatz C **nicht** auf reines Zero-Shot-Prompting beschränkt. Dieselbe Konfigurationsachse `PROMPT_STRATEGY` (`'zero_shot'`/`'few_shot'`) steuert auch hier den Prompt-Aufbau, mit demselben aktuellen Default **`'few_shot'`**.

Bei `PROMPT_STRATEGY='few_shot'` baut `build_few_shot_turns()` drei User/Assistant-Turns auf — diesmal jedoch mit **Screenshots** statt JSON als Few-Shot-Eingabe. Für jede Komplexitätsstufe (`simple`, `medium`, `hard`) wird ein Referenz-Screenshot (`FEW_SHOT_SCREENSHOTS`, siehe Kapitel 3.3) mit dem zugehörigen handgeschriebenen Referenz-SFC (`FEW_SHOT_VUE_EXAMPLES`) gepaart:

```python
def build_few_shot_turns() -> list[dict]:
    turns: list[dict] = []
    for level in ('simple', 'medium', 'hard'):
        screenshot = FEW_SHOT_SCREENSHOTS.get(level)
        vue_code = FEW_SHOT_VUE_EXAMPLES.get(level)
        ...
        turns.append({'role': 'user', 'content': [_image_block(screenshot), {'type': 'text', 'text': USER_PROMPT}]})
        turns.append({'role': 'assistant', 'content': [{'type': 'text', 'text': f"```vue\n{vue_code}\n```"}]})

    if turns:
        turns[-1]['content'][-1]['cache_control'] = {'type': 'ephemeral'}  # Breakpoint 2
    return turns
```

Die drei Referenz-SFCs sind inhaltlich identisch mit den in Ansatz B verwendeten Few-Shot-Beispielen (gleiche `:pt`-Passthrough-Muster, `<script setup lang="ts">`, `ref()`-State) — nur die Eingabeseite unterscheidet sich (Screenshot statt JSON). Der Cache-Breakpoint auf dem letzten Few-Shot-Block deckt damit auch die Bild-Tokens der drei Referenzscreenshots ab.

Bei `PROMPT_STRATEGY='zero_shot'` bleibt `FEW_SHOT_TURNS` leer, und der Prompt entspricht wieder der reinen Zero-Shot-Logik:

**Zero-Shot (nur bei `PROMPT_STRATEGY='zero_shot'`):** Kein Few-Shot, kein Chain-of-Thought. Das LLM schließt ausschließlich aus dem Screenshot und dem optionalen Dokumentations-Kontext.

**Bei (`'few_shot'`)** ist zu beachten, dass neben der Eingabemodalität (JSON vs. Screenshot) auch der mitgelieferte Dokumentations-Kontext und die Stilkonditionierung durch die Few-Shot-Beispiele als zusätzliche Variablen wirken; die im Übersichtskapitel genannte "einzige unabhängige Variable ist die Eingabemodalität" gilt strenggenommen nur für den Zero-Shot-Fall.

### 4.4 Message-Aufbau und Prompt-Caching

Der Nachrichtenaufbau (`build_messages`) folgt exakt demselben Vier-Block-Schema mit drei Cache-Breakpoints wie in Ansatz B (siehe dortige Kapitel 3.5), lediglich Block 4 besteht bei C aus Bild- **und** Text-Content statt nur Text:

1. System-Message (Anweisungen) → **Breakpoint 1**, über alle Aufrufe identisch
2. Few-Shot-Turns (nur bei `PROMPT_STRATEGY='few_shot'`) → **Breakpoint 2** auf dem letzten Block, deckt auch die drei Few-Shot-Screenshots ab
3. Doku-Kontext-Block (nur C2/C3) → **Breakpoint 3**, wiederholt sich pro Komponenten-Kombination
4. Mockup-Screenshot + Task-Text → nie gecacht, ändert sich bei jedem Aufruf

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

**Hypothese:** C1 testet, wie gut die jeweiligen Modelle (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) PrimeVue-Komponenten allein aus ihrem visuellen Erscheinungsbild identifizieren. Da alle drei Modelle über nennenswerte multimodale/Coding-Fähigkeiten verfügen, sollte die Baseline höher sein als bei einem generischen, nicht-multimodalen Modell, ob und wie stark sich die drei Modelle dabei unterscheiden, ist Teil der Auswertung.

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

`call_llm_vision` ruft, wie Ansatz B's `call_llm`, die **OpenRouter Chat-Completions-API** auf und funktioniert modellagnostisch für alle drei konfigurierten Modelle. Der Payload-Aufbau ist strukturell identisch mit Ansatz B (Kapitel 5.1 dort), der `messages`-Parameter enthält lediglich zusätzlich die Bild-Content-Blöcke:

```python
payload = json.dumps({
    'model':       model_id,               # z.B. 'anthropic/claude-sonnet-5'
    'temperature': API_TEMPERATURE,        # 0.0
    'max_tokens':  API_MAX_TOKENS,         # 8192
    'reasoning':   {'effort': API_REASONING_EFFORT},   # 'medium'
    'metadata':    {'strategy': strategy, 'mockup_key': key, 'model': model_id},
    'usage':       {'include': True},
    'session_id':  f'{model_id}/{strategy}/{PROMPT_STRATEGY}',
    'messages':    messages,               # inkl. image_url-Blöcken, siehe Kapitel 4.2
}).encode('utf-8')
```

`metadata` enthält aktuell `strategy`, `mockup_key` und `model`. Die zusätzliche `session_id` gruppiert Cache-Treffer pro Modell/Strategie/Prompt-Strategie-Kombination.

Die Funktion gibt, analog zu Ansatz B, ein um OpenRouter-spezifische Felder erweitertes Dictionary zurück (Provider, Cache-Nutzung, Kostenaufschlüsselung, `native_finish_reason`, `refusal`); für die vollständige Feldliste siehe Ansatz B Kapitel 5.1. Fehlerbehandlung (HTTP- und Netzwerkfehler) ist wortgleich mit Ansatz B implementiert.

### 6.2 Kein separater Responses-API-Pfad mehr

Eine Unterscheidung zwischen OpenAI Responses API und Chat Completions API (gesteuert über ein Modell-abhängiges Flag) **existiert im aktuellen Code nicht mehr**. Seit der Umstellung auf OpenRouter (Kapitel 1) läuft die gesamte Pipeline über einen einzigen, einheitlichen OpenAI-kompatiblen Chat-Completions-Endpunkt (`https://openrouter.ai/api/v1/chat/completions`), der von OpenRouter providerübergreifend (OpenAI, Anthropic, Google) bereitgestellt wird. Eine modellabhängige Endpunkt-Umschaltung ist damit nicht mehr nötig.

### 6.3 SFC-Extraktion

Identisch mit Ansatz B (dortige Kapitel 5.2): `extract_sfc` sucht alle Code-Blöcke, filtert auf `<template>`-haltige Kandidaten, wählt den **längsten** Treffer und schneidet ihn über `_trim_to_last_close_tag` auf das letzte `</style>`/`</script>` zurück. Rückgabewert ist ein Tupel `(sfc, extraction_ok)`; `parse_ok` wird wie bei Ansatz B separat in `generate_sfc_c` berechnet.

---

## 7. Metrik-Erfassung

Ansatz C verwendet dasselbe Metrik-Schema (`_metrics_c`) wie Ansatz B (`_metrics_b`, siehe dortige Kapitel 6), inkl. sämtlicher OpenRouter-spezifischer Felder:

```python
_metrics_c = {
    'provider': '',
    'model': '',
    'model_reported': '',

    'generation_id': '',

    'context_tokens': 0,
    'context_components': 0,

    'duration': 0,

    'input_tokens': 0,
    'output_tokens': 0,
    'total_tokens': 0,
    'cached_tokens': 0,
    'cache_write_tokens': 0,
    'reasoning_tokens': 0,

    'cost_usd': 0,
    'cost_prompt_usd': 0,
    'cost_completion_usd': 0,

    'sfc_bytes': 0,
    'sfc_lines': 0,

    'extraction_ok': False,
    'parse_ok': False,
    'truncated': False,

    'stop_reason': '',
    'native_finish_reason': '',
    'refusal': 0,
}
```

**Änderungen gegenüber Ansatz A:**

- `duration` hält die rohe API-Latenz in **Sekunden**; erst beim Schreiben in die Ergebnis-CSV wird sie mit `round(duration * 1000, 4)` in Millisekunden umgerechnet (Feldname dort: `duration`, siehe Kapitel 7.1).

**Besonderheit gegenüber Ansatz A/B:** `input_tokens` enthält sowohl die Bild-Tokens als auch die Text-Tokens (System-Prompt + Dokumentation + Task-Text) — eine providerseitige Trennung ist über die OpenRouter-API nicht direkt verfügbar. `context_tokens` gibt nur den Dokumentations-Anteil separat an, sodass sich der Bild-Token-Anteil näherungsweise so einordnen lässt:

```
Bild-Tokens ≈ input_tokens - context_tokens - system_prompt_tokens - user_text_tokens
```

### 7.1 Persistenz: Resumable CSV-Report (analog Ansatz B)

Wie in Ansatz B wird kein aggregiertes JSON-Report-Objekt geschrieben, sondern pro Datei/Modell/Strategie-Kombination eine Zeile in eine CSV persistiert:

```python
RESULTS_CSV_PATH = Path('results') / (
    f'results_c_{TYPE}_{VARIANT + "_" if VARIANT else ""}{PROMPT_STRATEGY}.csv'
)
```

Beispiel: `results/results_c_uis_messy_few_shot.csv`. Das Feldschema (`RESULT_FIELDNAMES`) ist bis auf die Methode identisch mit Ansatz B — `image_detail` ist hier (anders als bei B, wo das Feld ungenutzt bleibt) mit dem tatsächlichen `IMAGE_DETAIL`-Wert (`'low'`/`'high'`/`'auto'`) belegt:

```python
RESULT_FIELDNAMES = [
    'input', 'output',
    'type', 'variant', 'prompt_strategy',
    'temperature', 'reasoning_effort', 'image_detail',
    'strategy', 'complexity',
    'provider', 'model', 'model_reported',
    'run', 'attempt', 'generation_id',
    'context_tokens', 'context_components',
    'duration',
    'input_tokens', 'output_tokens', 'total_tokens',
    'cached_tokens', 'cache_write_tokens', 'reasoning_tokens',
    'cost_usd', 'cost_prompt_usd', 'cost_completion_usd',
    'extraction_ok', 'parse_ok', 'truncated',
    'sfc_bytes', 'sfc_lines',
    'stop_reason', 'native_finish_reason', 'refusal', 'error',
    'created_at',
]
```

Resumability funktioniert wie bei Ansatz B über das Tupel `(model, strategy, input, variant, run)`. Die Output-Datei je Mockup/Strategie/Modell/Lauf folgt demselben Namensschema:

```
<OUTPUT_DIR>/c/<prompt_strategy>/<complexity>/<mockup>-<c1|c2|c3>-<model_name>-<run_id>.vue
```

z.B. `dataset/storybook/src/code/uis/messy/c/few_shot/simple/1-c1-claude-sonnet-5-1.vue`. Das ursprünglich dokumentierte einfache Schema (`01-c1.vue`, ohne Modell- und Prompt-Strategie-Dimension) ist damit überholt.

---

## 8. Stärken und Limitationen

### 8.1 Stärken

| Eigenschaft                            | Bedeutung                                                                       |
|----------------------------------------|---------------------------------------------------------------------------------|
| **Format-Unabhängigkeit**              | Funktioniert unabhängig vom Figma-Datenmodell oder API-Version                  |
| **Visuelles Verständnis**              | Erkennt Layout-Muster, die im JSON nicht explizit kodiert sind                  |
| **Semantische HTML-Elemente**          | Kann visuelle Hierarchien auf `<h1>`, `<p>`, `<label>` abbilden                 |
| **Robustheit bei fehlenden Metadaten** | Funktioniert auch wenn Figma-Properties unvollständig oder unkonventionell sind |
| **Kein Preprocessing-Aufwand**         | Kein Cleaning-Notebook, kein AST-Parser notwendig                               |

### 8.2 Limitationen

| Limitation                                    | Auswirkung                                                                                                                                                                                                      | Adressierbar durch                                                       |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **Pixelbasierte Unschärfe**                   | Ähnlich aussehende Komponenten (Toggle vs. kleiner Button) können verwechselt werden                                                                                                                            | Höhere Bildauflösung, `image_detail='high'`                              |
| **Kein Zugriff auf Komponenteneigenschaften** | Severity-Farben, disabled-States, genaue Prop-Werte nur visuell schätzbar                                                                                                                                       | Kein direktes Äquivalent — inhärente Grenze                              |
| **Halluzinierung von Props**                  | Geschätzte Props können von tatsächlichen API-Werten abweichen                                                                                                                                                  | Dokumentations-Kontext (C2/C3)                                           |
| **Nicht-Determinismus**                       | Gleicher Screenshot kann unterschiedliche Outputs erzeugen                                                                                                                                                      | `temperature=0.0` (aktiv, reduziert aber eliminiert nicht)               |
| **Token-Kosten durch Bild**                   | Bild-Tokens (~1k–4k, abhängig von `image_detail`) kommen fix zu Text-Tokens hinzu                                                                                                                               | `image_detail='low'` für schnelle Tests                                  |
| **Kontext-Selektion visuell blind**           | Komponenten-Erkennung für C2/C3 basiert auf JSON — kann vom visuellen Inhalt abweichen                                                                                                                          | Vollständige Doku (C2) als Fallback                                      |
| **Keine programmatische Metrik-Erfassung**    | Coverage-Metriken wie in Ansatz A sind ohne AST nicht berechenbar; die zuvor geplante `ast_depth_approx`-Schätzung ist im aktuellen Code entfernt                                                               | LLM-as-Judge, manueller Vergleich                                        |
| **Few-Shot / Zero-Shot**                      | `PROMPT_STRATEGY='few_shot'` (Default) konditioniert das Modell zusätzlich auf drei Referenz-Screenshots/-SFCs — die Eingabemodalität ist dann nicht mehr die einzige Variable gegenüber Ansatz B (Kapitel 4.3) | `PROMPT_STRATEGY='zero_shot'` setzen für den reinen Modalitäts-Vergleich |

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
        v-model="password"
        placeholder="Passwort eingeben"
        toggle-mask
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

<script setup lang="ts">
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')
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

Ansatz C hat eine zusätzliche Kostendimension gegenüber B: die Bild-Tokens. Wie bei Ansatz B (dortige Kapitel 9) lässt sich die Kostenstruktur nicht mehr auf eine einzelne feste Preistabelle reduzieren, da drei unterschiedliche Modelle über OpenRouter durchlaufen werden. Die grundsätzliche Tendenz bleibt jedoch gültig:

```
Strategie   Kontext-Tokens   Bild-Tokens (ca., abhängig von image_detail)
---------   --------------   -----------------------------------------------
C1          0                ~85 (low) bis ~1k–4k (high/auto)
C2          5k–50k           ~85 (low) bis ~1k–4k (high/auto)
C3          1k–10k           ~85 (low) bis ~1k–4k (high/auto)
```

Die Bild-Tokens sind bei höheren `image_detail`-Stufen nicht vernachlässigbar und machen bei C1 den Großteil der Kosten aus. Die tatsächlichen Kosten pro Mockup werden — wie bei Ansatz B — pro Zeile in der Ergebnis-CSV erfasst (`cost_usd`, `cost_prompt_usd`, `cost_completion_usd`, `context_tokens`, `image_detail`); ein Vergleich verschiedener `image_detail`-Stufen oder Modelle ist darüber direkt auswertbar, ohne dass die Pipeline selbst fixe Kostenschätzungen vorhalten muss.

---

## 11. Prompt-Anpassung

### 11.1 Neue Komponenten

Identisch mit Ansatz B: neue `.md`-Datei in `primevue/component-documentation/raw/` ablegen — Cleaning-Notebook ausführen (erzeugt automatisch die bereinigte Version in `primevue/component-documentation/cleaned/`) — `KNOWN_COMPONENTS` erkennt die neue Komponente beim nächsten Pipeline-Lauf. Der zuvor dokumentierte Pfad `dataset/primevue-docs/` entspricht nicht der tatsächlichen Verzeichnisstruktur.

### 11.2 Prompt-Tuning

Spezifisch für Ansatz C: Falls das Modell visuelle Elemente falsch klassifiziert, können Hinweise im Abschnitt `WHAT TO ANALYZE IN THE SCREENSHOT` oder im neuen `IMAGE INTERPRETATION GUIDE` (Kapitel 4.1) präzisiert werden:

```python
SYSTEM_INSTRUCTIONS = """...
WHAT TO ANALYZE IN THE SCREENSHOT:
...
- [Neue Analysehinweise]   ← z.B. "Distinguish Toggle switches from Checkboxes
                              by their pill-shaped track"
...
"""
```

Änderungen gelten wie bei Ansatz B für alle drei Kontext-Strategien (C1/C2/C3) und beide Prompt-Strategien (Zero-Shot/Few-Shot) gleichzeitig.

### 11.3 Modell-Wechsel bzw. -Erweiterung

Wie in Ansatz B (dortige Kapitel 10.3) sind die Modelle nicht mehr in einer einzelnen `API_MODEL`-Variable zentralisiert, sondern als Dictionary `API_MODELS`:

```python
API_MODELS = {
    'claude-sonnet-5':         'anthropic/claude-sonnet-5',
    'gpt-5.6-terra':           'openai/gpt-5.6-terra',
    'gemini-3.1-pro-preview':  'google/gemini-3.1-pro-preview',
}
```

Diese Definition ist aktuell **wortgleich in beide Notebooks (B und C) einkopiert**, nicht über ein gemeinsames Modul geteilt — bei einer Modell-Änderung muss `API_MODELS` daher weiterhin manuell in beiden Notebooks synchron gehalten werden, um die Modell-Menge zwischen Ansatz B und C vergleichbar zu halten. Ein Code-Eingriff darüber hinaus ist nicht nötig, da `call_llm_vision` modellagnostisch über OpenRouter arbeitet (Kapitel 6.1).

---

## 12. Position im methodischen Gesamtvergleich

| Aspekt                   | Ansatz A (Regelbasiert)         | Ansatz B (Metadaten-LLM)                                                           | Ansatz C (Vision-LLM)                                                              |
|--------------------------|---------------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| Primäre Eingabe          | Figma-JSON                      | Figma-JSON                                                                         | PNG-Screenshot                                                                     |
| Modell                   | keines                          | 3 Modelle über OpenRouter (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) | dieselbe Modellmenge wie B                                                         |
| Prompt-Strategie         | –                               | konfigurierbar: Zero-Shot / Few-Shot (Default: Few-Shot)                           | konfigurierbar: Zero-Shot / Few-Shot (Default: Few-Shot), Few-Shot mit Screenshots |
| Entscheidungslogik       | Deterministisch                 | Probabilistisch (Metadaten)                                                        | Probabilistisch (Pixel)                                                            |
| Kontext-Strategien       | `COMPONENT_MAP`/`FRAME_MAP`     | B1 (kein Doku-Kontext) / B2 (RAW) / B3 (CLEANED)                                   | C1 (kein Doku-Kontext) / C2 (RAW) / C3 (CLEANED)                                   |
| Komponentenerkennung     | Name-Matching                   | LLM aus JSON-Struktur                                                              | LLM aus visuellem Erscheinungsbild                                                 |
| Prop-Extraktion          | Exakt aus `componentProperties` | LLM aus JSON + Doku                                                                | LLM aus Pixel + Doku                                                               |
| Reproduzierbarkeit       | 100%                            | ~hoch (`temperature=0.0`)                                                          | ~hoch (`temperature=0.0`), tendenziell etwas höhere Varianz                        |
| Externe Abhängigkeiten   | Keine                           | OpenRouter-API                                                                     | OpenRouter-API                                                                     |
| Kosten pro Mockup        | ~$0                             | modellabhängig, in Ergebnis-CSV erfasst (`cost_usd` u.a.)                          | modellabhängig + Bild-Tokens, in Ergebnis-CSV erfasst                              |
| Strukturgarantie         | Ja (deterministischer AST)      | Nein (`parse_ok`/`extraction_ok`-Flags)                                            | Nein (`parse_ok`/`extraction_ok`-Flags)                                            |
| Erwarteter Hauptvorteil  | Präzision, Kosten               | Metadaten-Flexibilität, Semantik                                                   | Visuelle Treue, Format-Unabhängigkeit                                              |
| Erwarteter Hauptnachteil | Sprödigkeit bei Naming          | Token-Kosten (B2), Varianz                                                         | Pixel-Unschärfe, höhere Prop-Varianz                                               |

Ansatz C bildet das dritte Glied im Methodenvergleich und testet die Grenze, wie viel semantische Information aus einer visuellen Darstellung allein extrahierbar ist. Die direkte Vergleichbarkeit mit Ansatz B — dieselbe Modellmenge, dieselben Kontext-Strategien, derselbe Datensatz — macht C/B-Differenzen zu einem Maß für den Informationsgehalt von Figma-Metadaten gegenüber visuellen Darstellungen. Bei aktivem Default `PROMPT_STRATEGY='few_shot'` (Kapitel 4.3) ist zu berücksichtigen, dass zusätzlich zur Eingabemodalität auch die Stilkonditionierung durch die Few-Shot-Beispiele in den Vergleich einfließt; für eine methodisch reine Modalitäts-Gegenüberstellung sollte `PROMPT_STRATEGY='zero_shot'` verwendet werden.