# Ansatz D — Hybride LLM-Transformation (Metadaten + Vision)

## 1. Übersicht

Der hybride Ansatz (Ansatz D) kombiniert die Eingabemodalitäten der Ansätze B und C. Das MLLM erhält sowohl den bereinigten Figma-JSON als auch den Screenshot des Mockups gleichzeitig in einem einzigen API-Aufruf. Damit stehen dem Modell strukturelle Metadaten (Komponentenhierarchie, Properties, Layout-Werte) und visuelle Information (Erscheinungsbild, Abstände, Labels, States) parallel zur Verfügung.

**Kernhypothese gegenüber B und C:** Strukturierte Metadaten und visueller Screenshot sind komplementäre Informationsquellen. Figma-JSON ist präzise bei Komponenteneigenschaften, aber blind für visuelle Gestaltung. Screenshots transportieren das visuelle Erscheinungsbild vollständig, aber verlieren explizite API-Properties. Die Kombination beider Quellen sollte die Stärken beider Einzelansätze vereinen und deren Schwächen kompensieren.

**Methodische Position:** Ansatz D ist kein eigenständiger Ansatz neben A, B, C, sondern eine Kombination der beiden MLLM-basierten Ansätze B und C. Es wird die Frage beantwortet, ob die gleichzeitige Verfügbarkeit beider Eingabemodalitäten zu messbaren Qualitätssteigerungen führt und in welchem Verhältnis dieser Mehrwert zu den höheren Kosten steht.

Der Prototyp testet drei Kontext-Strategien (D1, D2, D3) in einer gemeinsamen Pipeline, für denselben Input-Datensatz und dieselbe `TYPE`/`VARIANT`-Konfiguration wie Ansatz A/B/C. Wie B und C läuft die Pipeline über die **OpenRouter-API** und durchläuft dieselben drei Modelle:

```python
API_MODELS = {
    'claude-sonnet-5':         'anthropic/claude-sonnet-5',
    'gpt-5.6-terra':           'openai/gpt-5.6-terra',
    'gemini-3.1-pro-preview':  'google/gemini-3.1-pro-preview',
}
```

Ebenfalls wie B und C existiert die Konfigurationsachse `PROMPT_STRATEGY` (`'zero_shot'`/`'few_shot'`, aktuell standardmäßig `'few_shot'`), bei D bestehen die drei Few-Shot-Beispiele aus **beiden** Modalitäten gleichzeitig (Screenshot **und** Figma-JSON je Komplexitätsstufe, siehe Kapitel 3.4).

### Designprinzipien

| Prinzip                       | Umsetzung                                                                                                 |
|-------------------------------|-----------------------------------------------------------------------------------------------------------|
| Dual-Input                    | JSON und Screenshot im selben API-Call — kein separates Preprocessing                                     |
| Konfliktauflösung             | Explizite Prioritätsregel im Prompt: JSON für Struktur, Screenshot für visuelle Treue                     |
| Modell-Vergleich              | Dieselbe Modellmenge (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) über OpenRouter wie B und C |
| Strategie-Parität             | D1/D2/D3 identisch zu B1/B2/B3 und C1/C2/C3 → vollständig vergleichbar                                    |
| Reproduzierbarkeit (begrenzt) | `temperature=0.0` reduziert Varianz, Ausgabe bleibt aber nicht-deterministisch                            |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────────────────────────────────┐
│  Cleaned Figma-JSON         PNG-Screenshot           │  Beide Eingaben
└───────────┬─────────────────────────┬───────────────┘
            │                         │
            ▼                         │
┌─────────────────────────┐           │
│  Komponenten-Erkennung  │           │  D2/D3: JSON → erkannte Komponenten
│  (detect_components)    │           │  D1: entfällt (kein Doku-Kontext)
└───────────┬─────────────┘           │
            ▼                         │
┌─────────────────────────────────────────────────────┐
│  Kontext-Builder                                    │  Schritt 1
│  ├─ D1: Kein Doku-Kontext         (0 Tokens)        │
│  ├─ D2: RAW-Docs erkannter Komp.  (~5–50k Tokens)   │
│  └─ D3: CLEANED-Docs erkannter K. (~1–10k Tokens)   │
└───────────┬─────────────────────────────────────────┘
            │                         │
            ▼                         ▼
┌─────────────────────────────────────────────────────┐
│  Prompt-Builder (build_messages)                     │  Schritt 2: System-Message +
│                                                       │  optionale Few-Shot-Turns
│                                                       │  (Screenshot + JSON + SFC je Stufe) +
│                                                       │  Doku-Block + Bild-Block + JSON-Text-Block
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Hybrid API-Aufruf                                   │  Schritt 3: OpenRouter, je Modell
│  (call_llm_hybrid)                                   │  aus API_MODELS (Claude Sonnet 5,
│                                                       │  GPT-5.6-Terra, Gemini 3.1 Pro Prev.)
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Antwort-Parser         │  Schritt 4: SFC aus Antwort extrahieren
│  (extract_sfc)          │  identisch mit Ansatz B/C (längster Template-Block + Trim)
└───────────┬─────────────┘
            ▼
┌───────────────────────────────────────────────────────────┐
│  Metrik-Erfassung                                         │  Schritt 5: Tokens, Kosten, Cache,
│  (_metrics_d, resumable CSV-Report)                       │  Timing, Parse-OK
│  → results/results_d_<type>_<variant>_<prompt_strategy>.csv│
└───────────┬─────────────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe: <mockup>-<d1|d2|d3>-<modell>-<run>.vue
└─────────────────────────┘
```

Der wesentliche Unterschied zur Pipeline von B und C liegt in Schritt 2: Der User-Content enthält Bild-Block **und** JSON-Text-Block gleichzeitig, in einem einzigen API-Call. Das Figma-JSON wird unverändert, wie bei Ansatz B, als vollständiger Baum in den Prompt übernommen.

---

## 3. Prompt-Architektur

### 3.1 System-Prompt

Der System-Prompt (`SYSTEM_INSTRUCTIONS`) von Ansatz D vereint die Anweisungen aus Ansatz B (JSON-Struktur) und Ansatz C (visuelle Analyse) und ergänzt sie um die Konfliktauflösungsregel. Wie bei B und C enthält er **keinen** eingebetteten Dokumentations-Kontext, dieser wird als separater, cache-markierter User-Block übergeben (siehe Kapitel 3.3).

```
You are an expert Vue 3 and PrimeVue developer.
Analyze the provided Figma mockup (both JSON data and UI screenshot) and transform it into
a complete, working Vue 3 Single File Component with PrimeVue 4 components. Use the provided
PrimeVue documentation if given as reference for component usage and props.

STRICT REQUIREMENTS:
- Use PrimeVue 4 components exclusively for UI elements
- Use <script setup> syntax (no Options API)
- Import every PrimeVue component used: import Button from 'primevue/button'
- Use Tailwind CSS utility classes for layout and spacing
- Use ref() from Vue for all form/input state
- Map Figma Auto-Layout (HORIZONTAL/VERTICAL) to flex/flex-col
- Map itemSpacing to gap-*, padding values to p-*/px-*/py-*
- Output ONLY the Vue SFC — no explanation, no markdown fences, no prose
- Return exactly one complete Vue SFC, starting directly with <template> and ending with </script>
- If required details are missing or ambiguous, do not invent unsupported behavior; use the closest valid structural mapping supported by the Figma JSON
- If a region of the image is ambiguous, low-resolution, or partially occluded, use the closest valid structural mapping supported by what IS visible; do not invent unsupported behavior
- Treat the transformation as incomplete until all eligible non-ignored nodes are represented in the output
- Before finalizing, verify that the SFC is syntactically valid, all used PrimeVue components are imported, and all form/input state uses ref()
- Assume PrimeVue Aura theme as baseline for styling; do not generate custom theme CSS unless explicitly required by Figma mockup JSON data and ui screenshot
- If screenshot and JSON conflict, prefer screenshot for visual appearance and JSON for structural intent and component identity

FIGMA JSON DATA STRUCTURE:
- type=INSTANCE, name=<component>: a PrimeVue component instance
- componentProperties: Figma design properties to map to PrimeVue props
- type=FRAME: layout container → <div> with Tailwind classes
- type=TEXT: standalone text → <span> or semantic element
- Nodes with name starting with '_' are internal sub-instances (ignore them)

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

Gegenüber den Einzel-Prompts von B und C ist dieser Prompt eine Vereinigung: `FIGMA JSON DATA STRUCTURE` (aus B) und `WHAT TO ANALYZE IN THE SCREENSHOT` / `IMAGE INTERPRETATION GUIDE` (aus C) stehen nebeneinander, ergänzt um die Konfliktregel und die Aura-Theme-Vorgabe. State wird wie bei B/C über `ref()` statt `reactive()` gebunden.

### 3.2 Konfliktauflösungsregel

Die Regel `"If screenshot and JSON conflict, prefer screenshot for visual appearance and JSON for structural intent and component identity"` ist das zentrale Steuerungselement von Ansatz D. Sie definiert explizit, welche Quelle bei Widersprüchen Vorrang hat:

| Aspekt                                       | Priorität  | Begründung                                                            |
|----------------------------------------------|------------|-----------------------------------------------------------------------|
| Visuelle Erscheinung (Farbe, Größe, Spacing) | Screenshot | Figma-Properties kodieren nicht alle Styling-Details                  |
| Komponentenidentität (Was ist es?)           | JSON       | `type=INSTANCE, name=button` ist präziser als visuell geschätzter Typ |
| Hierarchie und Struktur                      | JSON       | `layoutMode`, `children`-Reihenfolge                                  |
| Labels und Texte                             | Screenshot | Oft lesbarer als verschachtelte Figma-Text-Properties                 |
| Props und Varianten                          | JSON       | `componentProperties` enthält exakte API-Werte                        |

### 3.3 Dokumentations-Kontext und Dual-Input-Struktur

Der User-Content besteht, abhängig von der Kontext-Strategie, aus bis zu drei Blöcken. Sofern eine Kontext-Strategie (D2/D3) Dokumentation liefert, wird sie als eigener, gecachter Text-Block vorangestellt:

```
PrimeVue documentation for reference:
{context}
```

Danach folgt der Bild-Block (identisch zu Ansatz C's `_image_block`):

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

Abschließend folgt der Text-Block mit dem eigentlichen Figma-JSON:

```
Transform the following Figma mockup JSON data and the provided UI screenshot into a Vue 3 Single File Component using PrimeVue components.

Figma mockup JSON data:
```json
{figma_json}
```
```

Der komplette User-Content besteht bei D1 damit aus zwei Blöcken (Bild + JSON-Text), bei D2/D3 aus drei Blöcken (Doku + Bild + JSON-Text). Im Gegensatz zu Ansatz B (nur JSON-Text) und Ansatz C (nur Bild + kurzer Task-Text) enthält der User-Prompt hier **beide Eingabemodalitäten gleichzeitig**, wobei das JSON unverändert übergeben wird.

### 3.4 Prompt-Strategie: konfigurierbar zwischen Zero-Shot und Few-Shot

Wie bei B und C ist Ansatz D nicht auf reines Zero-Shot-Prompting beschränkt. Dieselbe Konfigurationsachse `PROMPT_STRATEGY` (`'zero_shot'`/`'few_shot'`) steuert auch hier den Prompt-Aufbau, mit demselben aktuellen Default **`'few_shot'`**.

Bei `PROMPT_STRATEGY='few_shot'` baut `build_few_shot_turns()` drei User/Assistant-Turns auf — jeder Turn enthält, anders als bei B (nur JSON) oder C (nur Screenshot), **beide Modalitäten gleichzeitig**: den Referenz-Screenshot und das zugehörige Figma-JSON als Text, gefolgt vom handgeschriebenen Referenz-SFC:

```python
def build_few_shot_turns() -> list[dict]:
    turns: list[dict] = []
    for level in ('simple', 'medium', 'hard'):
        screenshot = FEW_SHOT_SCREENSHOTS.get(level)
        example = FEW_SHOT_EXAMPLES.get(level)
        ...
        example_user_text = USER_TEXT_TEMPLATE.format(figma_json=example['figma_json'])
        turns.append({'role': 'user', 'content': [_image_block(screenshot), {'type': 'text', 'text': example_user_text}]})
        turns.append({'role': 'assistant', 'content': [{'type': 'text', 'text': f"```vue\n{example['vue_code']}\n```"}]})

    if turns:
        turns[-1]['content'][-1]['cache_control'] = {'type': 'ephemeral'}  # Breakpoint 2
    return turns
```

Die drei Referenzbeispiele (`FEW_SHOT_EXAMPLES` für das JSON/SFC-Paar, `FEW_SHOT_SCREENSHOTS` für die Bilder) sind dieselben, die auch in Ansatz B und C verwendet werden — Ansatz D kombiniert lediglich beide Quellen pro Turn.

Bei `PROMPT_STRATEGY='zero_shot'` bleibt `FEW_SHOT_TURNS` leer, und der Prompt entspricht der reinen Zero-Shot-Logik. Wie bei B und C gilt: Im aktuellen Default (`'few_shot'`) ist neben der Doppel-Modalität zusätzlich eine Stilkonditionierung durch die drei Referenzbeispiele zu berücksichtigen.

### 3.5 Message-Aufbau und Prompt-Caching

`build_messages()` setzt die vollständige Nachrichtenliste analog zu B/C aus vier Teilen mit drei Cache-Breakpoints zusammen:

1. System-Message (Anweisungen) → **Breakpoint 1**, über alle Aufrufe identisch
2. Few-Shot-Turns (nur bei `PROMPT_STRATEGY='few_shot'`) → **Breakpoint 2** auf dem letzten Block, deckt Screenshots **und** JSON-Beispiele ab
3. Doku-Kontext-Block (nur D2/D3) → **Breakpoint 3**, wiederholt sich pro Komponenten-Kombination
4. Bild-Block + Mockup-JSON-Text-Block → nie gecacht, ändert sich bei jedem Aufruf

---

## 4. Technische Implementierung

### 4.1 API-Aufruf (Hybrid)

`call_llm_hybrid` ruft, strukturell identisch zu Ansatz B's `call_llm` und Ansatz C's `call_llm_vision`, die **OpenRouter Chat-Completions-API** auf und funktioniert modellagnostisch für alle drei konfigurierten Modelle:

```python
payload = json.dumps({
    'model':       model_id,               # z.B. 'anthropic/claude-sonnet-5'
    'temperature': API_TEMPERATURE,        # 0.0
    'max_tokens':  API_MAX_TOKENS,         # 8192
    'reasoning':   {'effort': API_REASONING_EFFORT},   # 'medium'
    'metadata':    {'strategy': strategy, 'mockup_key': key, 'model': model_id},
    'usage':       {'include': True},
    'session_id':  f'{model_id}/{strategy}/{PROMPT_STRATEGY}',
    'messages':    messages,               # inkl. image_url- und JSON-Text-Blöcken
}).encode('utf-8')
```

Die Funktion gibt dasselbe um OpenRouter-spezifische Felder erweiterte Dictionary zurück wie `call_llm`/`call_llm_vision` (Provider, Cache-Nutzung, Kostenaufschlüsselung, `native_finish_reason`, `refusal`); für die vollständige Feldliste siehe Ansatz B Kapitel 5.1. Fehlerbehandlung (HTTP- und Netzwerkfehler) ist wortgleich mit Ansatz B/C implementiert.

### 4.2 Kein separater Responses-API-Pfad mehr

Eine Unterscheidung zwischen OpenAI Responses API (`/v1/responses`, Felder `input`/`input_image`/`input_text`) und Chat Completions API existiert im aktuellen Code **nicht**. Ansatz D läuft — wie B und C — über den einzigen, einheitlichen OpenAI-kompatiblen Chat-Completions-Endpunkt von OpenRouter (`https://openrouter.ai/api/v1/chat/completions`), der providerübergreifend (OpenAI, Anthropic, Google) funktioniert. Die ursprünglich dokumentierte Payload-Struktur mit `input`-Feld, `input_image`- und `input_text`-Content-Typen sowie dem Antwort-Pfad `output[0].content[0].text` entspricht damit nicht mehr der Implementierung; Content-Blöcke heißen wie bei B/C `image_url` und `text`, die Antwort liegt unter `choices[0].message.content`.

### 4.3 SFC-Extraktion

Identisch mit Ansatz B/C (dortige Kapitel 5.2): `extract_sfc` sucht alle Code-Blöcke, filtert auf `<template>`-haltige Kandidaten, wählt den **längsten** Treffer und schneidet ihn über `_trim_to_last_close_tag` auf das letzte `</style>`/`</script>` zurück. Rückgabewert ist ein Tupel `(sfc, extraction_ok)`; `parse_ok` wird separat in `generate_sfc_d` berechnet.

---

## 5. Kontext-Strategien

Die Strategien D1/D2/D3 sind exakt parallel zu B1/B2/B3 und C1/C2/C3 definiert. Die Komponenten-Erkennung läuft auf dem Figma-JSON. Für D ist das JSON immer verfügbar, da es als Pflichtinput der Pipeline dient.

### 5.1 D1 — Kein Kontext

JSON + Screenshot, keine Dokumentation.

```python
if strategy == 'd1':
    return '', []  # No documentation context for D1
```

| Eigenschaft    | Wert                                   |
|----------------|----------------------------------------|
| Kontext-Tokens | 0                                      |
| JSON-Tokens    | ~2k–20k (mockup-abhängig)              |
| Bild-Tokens    | ~85 (`low`) bis ~1k–4k (`high`/`auto`) |

**Hypothese:** Stärker als B1 und C1, da das Modell beide Informationsquellen gleichzeitig hat. Falls D1 ≈ C1, liefert das JSON bei fehlendem Doku-Kontext keinen messbaren Mehrwert.

### 5.2 D2 — RAW-Docs erkannter Komponenten

JSON + Screenshot + vollständige Docs der erkannten Komponenten.

| Eigenschaft    | Wert                                   |
|----------------|----------------------------------------|
| Kontext-Tokens | ~5k–50k (mockup-abhängig)              |
| JSON-Tokens    | ~2k–20k                                |
| Bild-Tokens    | ~85 (`low`) bis ~1k–4k (`high`/`auto`) |

**Hypothese:** D2 ist tendenziell der teuerste Ansatz im gesamten Vergleich (drei Token-Quellen gleichzeitig), sollte aber auch die beste Qualität liefern.

### 5.3 D3 — CLEANED-Docs erkannter Komponenten

JSON + Screenshot + bereinigte Docs der erkannten Komponenten.

| Eigenschaft    | Wert                                   |
|----------------|----------------------------------------|
| Kontext-Tokens | ~1k–10k                                |
| JSON-Tokens    | ~2k–20k                                |
| Bild-Tokens    | ~85 (`low`) bis ~1k–4k (`high`/`auto`) |

**Hypothese:** Bestes Kosten-Qualitäts-Verhältnis innerhalb von Ansatz D, da geringeres Rauschen durch bereinigte Docs bei erhaltenen drei Informationsquellen.

### 5.4 Strategie-Vergleich

| Eigenschaft    | D1      | D2           | D3               |
|----------------|---------|--------------|------------------|
| Dokumentation  | keine   | RAW selektiv | CLEANED selektiv |
| JSON im Prompt | ✓       | ✓            | ✓                |
| Screenshot     | ✓       | ✓            | ✓                |
| Kosten         | gering  | hoch         | mittel           |

---

## 6. Token-Kostenstruktur

Ansatz D hat drei additive Token-Quellen pro API-Aufruf (System-Prompt, Figma-JSON, Bild, plus optional Dokumentation), was ihn tendenziell zum teuersten Einzelansatz macht. Da die Pipeline — wie B und C — drei unterschiedliche Modelle über OpenRouter durchläuft, lässt sich die Kostenstruktur nicht auf eine einzelne feste Preistabelle reduzieren; die tatsächlichen USD-Kosten hängen zusätzlich vom gewählten Modell ab. Die grundsätzliche Token-Zusammensetzung bleibt jedoch modellunabhängig gültig:

```
Token-Zusammensetzung pro Aufruf (D2, grobe Schätzung):

  System-Prompt-Base     ~900 Tokens    (JSON- + Bild-Anweisungen kombiniert)
  Dokumentations-Kontext ~5k–50k Tokens (D2, abhängig von erkannten Komponenten)
  Figma-JSON             ~2k–20k Tokens (kein Frame-Preprocessing, siehe Kapitel 2)
  Bild                   ~85–4k Tokens  (abhängig von image_detail)
  User-Text              ~50 Tokens
```

Die tatsächlichen Kosten pro Mockup werden — wie bei Ansatz B/C — pro Zeile in der Ergebnis-CSV erfasst (`cost_usd`, `cost_prompt_usd`, `cost_completion_usd`, dazu `cached_tokens`/`cache_write_tokens`) und lassen sich dort je Modell und Strategie auswerten, statt sie hier als fixe Schätzwerte zu pflegen.

Für die Evaluation relevant: Falls D3 ähnliche Qualität wie D2 bei deutlich geringeren Kosten liefert, bestätigt das den Wert der Docs-Bereinigung auch im hybriden Kontext.

---

## 7. Metrik-Erfassung

Ansatz D verwendet dasselbe Metrik-Schema (`_metrics_d`) wie Ansatz B/C (siehe dortige Kapitel 6), inkl. sämtlicher OpenRouter-spezifischer Felder:

```python
_metrics_d = {
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

- `duration` hält die rohe API-Latenz in **Sekunden**; erst beim Schreiben in die Ergebnis-CSV wird sie mit `round(duration * 1000, 4)` in Millisekunden umgerechnet (siehe Kapitel 7.1).

**Besonderheit gegenüber Ansatz A/B/C:** `input_tokens` enthält alle drei Token-Quellen zusammen (Bild, JSON, Dokumentation, System-Prompt). Eine providerseitige Trennung ist über die OpenRouter-API nicht direkt verfügbar. `context_tokens` gibt nur den Dokumentations-Anteil separat an, sodass sich der verbleibende Bild-/JSON-Anteil näherungsweise so einordnen lässt:

```
Bild-Tokens + JSON-Tokens ≈ input_tokens - context_tokens - system_prompt_tokens - user_text_tokens
```

### 7.1 Persistenz: Resumable CSV-Report (analog Ansatz B/C)

Wie bei Ansatz B/C wird kein aggregiertes JSON-Report-Objekt geschrieben, sondern pro Datei/Modell/Strategie-Kombination eine Zeile in eine CSV persistiert:

```python
RESULTS_CSV_PATH = Path('results') / (
    f'results_d_{TYPE}_{VARIANT + "_" if VARIANT else ""}{PROMPT_STRATEGY}.csv'
)
```

Beispiel: `results/results_d_uis_messy_few_shot.csv`. Das Feldschema (`RESULT_FIELDNAMES`) ist identisch mit Ansatz B/C (siehe dortige Kapitel 6.1). Resumability funktioniert über das Tupel `(model, strategy, input, variant, run)`. Die Output-Datei je Mockup/Strategie/Modell/Lauf folgt demselben Namensschema:

```
<OUTPUT_DIR>/d/<prompt_strategy>/<complexity>/<mockup>-<d1|d2|d3>-<model_name>-<run_id>.vue
```

z.B. `dataset/storybook/src/code/uis/messy/d/few_shot/simple/1-d1-claude-sonnet-5-1.vue`.

---

## 8. Stärken und Limitationen

### 8.1 Stärken

| Eigenschaft                            | Bedeutung                                                                             |
|----------------------------------------|---------------------------------------------------------------------------------------|
| **Vollständige Information**           | Beide Quellen gleichzeitig verfügbar, kein Informationsverlust durch Modalitätswahl   |
| **Konfliktauflösung**                  | Explizite Prioritätsregel verhindert unterschiedliche Entscheidungen bei Diskrepanzen |
| **Robustheit bei JSON-Lücken**         | Fehlende oder unvollständige Metadaten werden durch visuelle Information kompensiert  |
| **Robustheit bei visueller Unschärfe** | Pixelähnliche Komponenten (Toggle vs. Checkbox) werden durch JSON-Typ eindeutig       |
| **Strukturpräzision**                  | JSON liefert exakte Hierarchie und Properties, die visuell nicht rekonstruierbar sind |

### 8.2 Limitationen

| Limitation                                  | Auswirkung                                                                                                               | Adressierbar durch                                                                              |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Höchste Kosten**                          | Drei Token-Quellen (JSON, Bild, ggf. Doku) → tendenziell teuerster Ansatz                                                | D3 als Kostenkompromiss, `image_detail='low'`                                                   |
| **Kontextfenster-Druck bei großen Mockups** | JSON + Bild + Doku + Prompt können bei D2 das Kontextfenster des jeweiligen Modells annähern                             | Frame-übergreifende Vorverarbeitung (aktuell nicht implementiert, siehe Kapitel 2), D3 statt D2 |
| **Prompt-Komplexität**                      | Zwei Quellen mit Konfliktpotenzial erhöhen Instruktionskomplexität                                                       | Präzisere Konfliktregeln                                                                        |
| **Nicht-Determinismus**                     | Gleiche Inputs können unterschiedliche Outputs erzeugen                                                                  | `temperature=0.0` (aktiv, reduziert aber eliminiert nicht)                                      |
| **Keine Strukturgarantie**                  | `parse_ok=False` möglich, wenn LLM Prosa oder unvollständigen Code ausgibt                                               | Retry-Logik (aktuell ungenutzt, Feld `attempt`)                                                 |
| **Few-Shot / Zero-Shot**                    | `PROMPT_STRATEGY='few_shot'` (Default) konditioniert das Modell zusätzlich auf drei Referenzbeispiele beider Modalitäten | `PROMPT_STRATEGY='zero_shot'` setzen für den reinen Kontext-Vergleich                           |

### 8.3 Hypothesen für den Methodenvergleich

**D vs. B (gleicher Kontext, D hat zusätzlich Screenshot):**
- D ≥ B bei UF3 (Visual Fidelity): Screenshot liefert visuelle Informationen, die JSON nicht enthält
- D ≈ B bei UF1 (Mapping-Präzision): JSON-basierte Komponentenerkennung ist in beiden identisch
- D > B bei Labels: Screenshot ermöglicht direkte Texterkennung ohne Property-Parsing

**D vs. C (gleicher Kontext, D hat zusätzlich JSON):**
- D > C bei UF1: JSON liefert exakte Komponentenidentität, die visuell mehrdeutig sein kann
- D > C bei UF2 (Prop Accuracy): Explizite `componentProperties` im JSON reduzieren Halluzinierung
- D ≈ C bei UF3: Screenshot-Anteil identisch — visueller Output sollte ähnlich sein

**Intern (D1 ↔ D2 ↔ D3):**
- Analoges Muster wie B und C erwartet: D3 liefert bei geringerem Token-Aufwand als D2 vergleichbare Qualität, da bereinigte Docs das Rauschen reduzieren ohne relevante API-Information zu verlieren

---

## 9. Beispiel-Output

### 9.1 Eingabe

Identisch mit B und C: das Password-Eingabe-Mockup. Ansatz D erhält Figma-JSON **und** Screenshot gleichzeitig.

### 9.2 Typischer D-Output

```vue
<template>
  <div class="flex flex-col gap-6 p-6">
    <div class="flex flex-col gap-2">
      <label for="password" class="text-sm font-medium text-gray-700">
        Passwort
      </label>
      <Password
        id="password"
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

### 9.3 Vergleich A ↔ B ↔ C ↔ D

| Aspekt               | A               | B                 | C                 | D                           |
|----------------------|-----------------|-------------------|-------------------|-----------------------------|
| Eingabe              | JSON            | JSON              | Screenshot        | JSON + Screenshot           |
| Komponentenerkennung | Name-Matching   | LLM aus JSON      | LLM aus Bild      | LLM aus JSON + Bild         |
| Prop-Werte           | exakt           | aus JSON + Doku   | visuell geschätzt | aus JSON (Priorität)        |
| Labels               | nicht generiert | aus JSON          | aus Screenshot    | aus Screenshot (Priorität)  |
| Konflikt JSON ↔ Bild | —               | —                 | —                 | Screenshot > JSON (visuell) |
| HTML-Semantik        | `<span>`        | situationsgerecht | situationsgerecht | situationsgerecht           |
| Reproduzierbarkeit   | 100%            | hoch              | hoch              | hoch                        |

---

## 10. Position im methodischen Gesamtvergleich

| Aspekt               | A                           | B                                                                                  | C                                                        | D                                                                                         |
|----------------------|-----------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Primäre Eingabe      | JSON                        | JSON                                                                               | Screenshot                                               | JSON + Screenshot                                                                         |
| Modell               | keines                      | 3 Modelle über OpenRouter (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) | dieselbe Modellmenge wie B                               | dieselbe Modellmenge wie B/C                                                              |
| API-Endpunkt         | —                           | OpenRouter Chat Completions                                                        | OpenRouter Chat Completions                              | OpenRouter Chat Completions                                                               |
| Prompt-Strategie     | –                           | konfigurierbar: Zero-Shot / Few-Shot (Default: Few-Shot)                           | konfigurierbar: Zero-Shot / Few-Shot (Default: Few-Shot) | konfigurierbar: Zero-Shot / Few-Shot (Default: Few-Shot), Few-Shot mit beiden Modalitäten |
| Kontext-Strategien   | `COMPONENT_MAP`/`FRAME_MAP` | B1/B2/B3                                                                           | C1/C2/C3                                                 | D1/D2/D3                                                                                  |
| Komponentenerkennung | Name-Matching               | LLM (JSON)                                                                         | LLM (Pixel)                                              | LLM (JSON + Pixel)                                                                        |
| Reproduzierbarkeit   | 100%                        | ~hoch (`temperature=0.0`)                                                          | ~hoch (`temperature=0.0`)                                | ~hoch (`temperature=0.0`)                                                                 |
| Kosten pro Mockup    | ~$0                         | modellabhängig, in Ergebnis-CSV erfasst                                            | modellabhängig + Bild-Tokens, in Ergebnis-CSV erfasst    | modellabhängig + Bild- und JSON-Tokens, tendenziell höchste Kosten                        |
| Strukturgarantie     | Ja (deterministischer AST)  | Nein (`parse_ok`/`extraction_ok`-Flags)                                            | Nein (`parse_ok`/`extraction_ok`-Flags)                  | Nein (`parse_ok`/`extraction_ok`-Flags)                                                   |
| Erwarteter Vorteil   | Präzision                   | Metadaten-Flexibilität, Semantik                                                   | Visuelle Treue, Format-Unabhängigkeit                    | Beide kombiniert                                                                          |
| Erwarteter Nachteil  | Sprödigkeit bei Naming      | Token-Kosten, Varianz                                                              | Pixel-Unschärfe, höhere Prop-Varianz                     | Höchste Kosten, Prompt-Komplexität                                                        |

Ansatz D vervollständigt den Methodenvergleich als einziger Ansatz, der beide Eingabemodalitäten gleichzeitig nutzt. Er dient als theoretische Obergrenze für die erreichbare Qualität unter LLM-basierter Transformation: Wenn D nicht signifikant besser ist als das Maximum aus B und C, deutet das darauf hin, dass die Informationen beider Modalitäten für das Modell redundant sind und eine der beiden Eingaben ausreicht. Bei aktivem Default `PROMPT_STRATEGY='few_shot'` (Kapitel 3.4) ist zu berücksichtigen, dass zusätzlich zur Dual-Modalität auch die Stilkonditionierung durch die Few-Shot-Beispiele in den Vergleich einfließt.