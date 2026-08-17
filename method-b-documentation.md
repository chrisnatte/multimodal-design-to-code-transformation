# Ansatz B — LLM-basierte Transformation (Metadaten)

## 1. Übersicht

Der metadatenbasierte LLM-Ansatz (Ansatz B) überführt die regelbasierte Transformationslogik von Ansatz A in einen probabilistischen Prozess: Statt expliziter Mapping-Regeln erhält ein Large Language Model den bereinigten Figma-JSON und — je nach Strategie — PrimeVue-Dokumentation als Kontext und generiert die Vue-3-SFC direkt. Die Transformationsentscheidungen sind damit im Modell implizit und nicht mehr als Code-Regeln explizit formuliert.

**Kernhypothese gegenüber Ansatz A:** Ein LLM kann durch seinen natürlichsprachlichen Kontext Naming-Variationen, implizite Semantik und unbekannte Muster tolerieren, die den regelbasierten Ansatz zum Fehlschlag bringen würden.

**Interne Kernhypothese (B1 → B2 → B3):** Die drei Strategien messen zwei unabhängige Effekte: (1) Wie viel bringt Dokumentation als Kontext überhaupt? (B1 vs. B2). (2) Wie viel bringt das Bereinigen der Docs? (B2 vs. B3).

Stand der Implementierung: Der Prototyp testet drei Kontext-Strategien (B1, B2, B3) in einer gemeinsamen Pipeline, denselben Input-Datensatz wie Ansatz A vorausgesetzt (`TYPE`/`VARIANT`-Konfiguration, siehe Ansatz-A-Doku Kapitel 1). Die Pipeline läuft nicht gegen ein einzelnes festes Modell, sondern gegen die **OpenRouter-API** (`https://openrouter.ai/api/v1/chat/completions`), die mehrere Provider (OpenAI, Anthropic, Google) über ein einheitliches, OpenAI-kompatibles Schema anspricht. Aktuell werden drei Modelle in derselben Pipeline durchlaufen:

```python
API_MODELS = {
    'claude-sonnet-5':         'anthropic/claude-sonnet-5',
    'gpt-5.6-terra':           'openai/gpt-5.6-terra',
    'gemini-3.1-pro-preview':  'google/gemini-3.1-pro-preview',
}
```

Jede Kombination aus Modell × Kontext-Strategie (B1/B2/B3) × Mockup wird durchlaufen. Das Modell ist damit **nicht mehr die kontrollierte Variable** zwischen Ansatz B und C, sondern selbst eine zu vergleichende Dimension innerhalb Ansatz B.

Zusätzlich zur Kontext-Strategie existiert eine zweite Konfigurationsmöglichlkeit: `PROMPT_STRATEGY` (`'zero_shot'` oder `'few_shot'`) — siehe Kapitel 3.4.

### Designprinzipien

| Prinzip                       | Umsetzung                                                                                |
|-------------------------------|------------------------------------------------------------------------------------------|
| Sprachliche Flexibilität      | LLM toleriert Naming-Abweichungen ohne explizite Regeln                                  |
| Kontext-Steuerung             | Qualität und Kosten werden über den Dokumentations-Kontext gesteuert                     |
| Vergleichbarkeit              | Identische Eingaben, identische Output-Struktur wie Ansatz A                             |
| Modell-Vergleich              | Mehrere Modelle (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) über OpenRouter |
| Reproduzierbarkeit (begrenzt) | `temperature=0.0` reduziert Varianz, Ausgabe bleibt aber nicht-deterministisch           |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────┐
│  Cleaned Figma-JSON     │  Eingabe (identisch mit Ansatz A)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Komponenten-Erkennung  │  B2/B3: Figma-JSON → erkannte Komponenten
│  (detect_components)    │  B1: entfällt (kein Doku-Kontext)
└───────────┬─────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Kontext-Builder                                    │  Schritt 1
│  ├─ B1: Kein Doku-Kontext         (0 Tokens)        │  Reines Modell-Vorwissen
│  ├─ B2: RAW-Docs erkannter Komp.  (~5–50k Tokens)   │  Vollständige Doku, selektiv
│  └─ B3: CLEANED-Docs erkannter K. (~1–10k Tokens)   │  Bereinigte Doku, selektiv
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Prompt-Builder                                      │  Schritt 2: System-Message
│  (build_messages)                                    │  + optionale Few-Shot-Turns
│                                                       │  + Doku-Block + User-Block
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  LLM API-Aufruf                                      │  Schritt 3: OpenRouter, je Modell
│  (call_llm)                                          │  aus API_MODELS (Claude Sonnet 5,
│                                                       │  GPT-5.6-Terra, Gemini 3.1 Pro Prev.)
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Antwort-Parser         │  Schritt 4: SFC aus Antwort extrahieren
│  (extract_sfc)          │  längster Template-Codeblock / Fallback
└───────────┬─────────────┘
            ▼
┌───────────────────────────────────────────────────────────┐
│  Metrik-Erfassung                                         │  Schritt 5: Tokens, Kosten, Cache,
│  (_metrics_b, resumable CSV-Report)                       │  Timing, Parse-OK
│  → results/results_b_<type>_<variant>_<prompt_strategy>.csv│
└───────────┬─────────────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe: <mockup>-<b1|b2|b3>-<modell>-<run>.vue
└─────────────────────────┘
```

Im Gegensatz zu Ansatz A gibt es keine explizite IR-Schicht. Das LLM erzeugt den Ziel-Code direkt aus dem Quell-JSON — die "Transformation" findet im Modell statt, nicht in einem programmatisch aufgebauten AST. Jede Kombination aus Modell (aus `API_MODELS`) × Kontext-Strategie (B1/B2/B3) × Mockup wird in der Pipeline durchlaufen (siehe Kapitel 6.1).

---

## 3. Prompt-Architektur

Der Prompt ist die zentrale Steuerungsebene von Ansatz B. Er besteht aus zwei Teilen:

### 3.1 System-Prompt

Der System-Prompt (`SYSTEM_INSTRUCTIONS`) definiert die Rolle des LLMs, den Output-Kontrakt und die Transformationsregeln. Er enthält **keinen** eingebetteten Dokumentations-Kontext, dieser wird als separater, cache-markierter User-Block übergeben (siehe unten):

```
You are an expert Vue 3 and PrimeVue developer.
Analyse the given Figma mockup JSON data and transform it into a complete, working
Vue 3 Single File Component with PrimeVue 4 components. Use the provided PrimeVue
documentation if given as reference for component usage and props.

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
- Treat the transformation as incomplete until all eligible non-ignored nodes are represented in the output
- Before finalizing, verify that the SFC is syntactically valid, all used PrimeVue components are imported, and all form/input state uses ref()
- Assume PrimeVue Aura theme as baseline for styling; do not generate custom theme CSS unless explicitly required by Figma mockup JSON data

FIGMA JSON DATA STRUCTURE:
- type=INSTANCE, name=<component>: a PrimeVue component instance
- componentProperties: Figma design properties to map to PrimeVue props
- type=FRAME: layout container → <div> with Tailwind classes
- type=TEXT: standalone text → <span> or semantic element
- Nodes with name starting with '_' are internal sub-instances (ignore them)
```

Der System-Prompt trägt zusätzlich einen Cache-Breakpoint (`cache_control: {'type': 'ephemeral'}`), da er über alle Aufrufe hinweg identisch ist und sich damit für Prompt-Caching eignet (siehe Kapitel 3.5).

### 3.2 Dokumentations-Kontext als separater User-Block

Sofern eine Kontext-Strategie (B2/B3) Dokumentation liefert, wird diese als eigener, dem Mockup vorangestellter User-Content-Block übergeben:

```
PrimeVue documentation for reference:
{context}
```

Dieser Block trägt ebenfalls einen eigenen Cache-Breakpoint, da derselbe Doku-Kontext (dieselbe Komponentenmenge) über mehrere Mockups hinweg wiederkehren kann. Bei B1 entfällt der Block vollständig, die Nachricht besteht hierbei nur aus dem Mockup-Block.

### 3.3 User-Prompt (Mockup)

Der abschließende User-Block enthält das Figma-JSON des zu transformierenden Mockups:

```
Transform the following Figma mockup JSON data into a Vue 3 Single File Component using PrimeVue components.

Figma mockup JSON data:
```json
{figma_json}
```
```

Dieser Block wird **nie** gecacht, da er sich bei jedem Aufruf ändert.

### 3.4 Prompt-Strategie: konfigurierbar zwischen Zero-Shot und Few-Shot

Bei `PROMPT_STRATEGY = 'few_shot'` baut `build_few_shot_turns()` drei fest hinterlegte Beispiele, je eines pro Komplexitätsstufe (`simple`, `medium`, `hard`) aus `FEW_SHOT_EXAMPLES`, als abwechselnde User/Assistant-Turns vor der eigentlichen Anfrage auf:

```python
def build_few_shot_turns() -> list[dict]:
    turns: list[dict] = []
    for level in ('simple', 'medium', 'hard'):
        example = FEW_SHOT_EXAMPLES.get(level)
        ...
        turns.append({'role': 'user', 'content': [{'type': 'text', 'text': example_user_text}]})
        turns.append({'role': 'assistant', 'content': [{'type': 'text', 'text': f"```vue\n{example['vue_code']}\n```"}]})

    if turns:
        turns[-1]['content'][-1]['cache_control'] = {'type': 'ephemeral'}  # Breakpoint 2
    return turns
```

Die drei Few-Shot-Beispiele zeigen fertige, handgeschriebene Referenz-SFCs (u.a. mit `:pt`-Passthrough-Klassen, `<script setup lang="ts">`, `ref()`-State) für je eine Komplexitätsstufe, dieselben Stufen, die auch im Evaluations-Datensatz verwendet werden.

Bei `PROMPT_STRATEGY = 'zero_shot'` bleibt `FEW_SHOT_TURNS` leer und der Prompt entspricht (abgesehen vom in 3.1/3.2 beschriebenen Kontext-Aufbau) der Zero-Shot-Logik.

B1 bezieht sich nur noch auf das Fehlen von *API-Dokumentation*, nicht auf das Fehlen jeglichen Kontexts. Ebenso ist die folgende Konsequenz-Aussage für die Evaluation nur noch für `PROMPT_STRATEGY='zero_shot'` uneingeschränkt gültig:

**Konsequenz für die Evaluation (nur bei Zero-Shot uneingeschränkt gültig):** Abweichungen zwischen B-Output und Ground Truth sind ausschließlich auf das Kontext-Verständnis des Modells zurückzuführen, nicht auf Beispiel-Überanpassung. Bei `PROMPT_STRATEGY='few_shot' ist ein Teil der Qualität stattdessen auf Stil-Konditionierung durch die drei Referenzbeispiele zurückzuführen, was bei der Interpretation der Ergebnisse zu berücksichtigen ist.

### 3.5 Message-Aufbau und Prompt-Caching

`build_messages()` setzt die vollständige Nachrichtenliste aus vier Teilen zusammen, mit drei Cache-Breakpoints (`cache_control: {'type': 'ephemeral'}`) nach dem statischen Präfix:

1. System-Message (Anweisungen) → **Breakpoint 1**, über alle Aufrufe identisch
2. Few-Shot-Turns (nur bei `PROMPT_STRATEGY='few_shot'`) → **Breakpoint 2** auf dem letzten Block
3. Doku-Kontext-Block (nur B2/B3) → **Breakpoint 3**, wiederholt sich pro Komponenten-Kombination
4. Mockup-JSON-Block → nie gecacht, ändert sich bei jedem Aufruf

`cache_control` wird von OpenRouter für Provider ausgewertet, die explizites Caching benötigen (Anthropic, Gemini), und ist für Provider mit automatischem Caching (OpenAI) wirkungslos, aber unschädlich.

---

## 4. Kontext-Strategien

Die drei Strategien unterscheiden sich ausschließlich im Dokumentations-Kontext, der in den System-Prompt eingebettet wird. Alle anderen Parameter (Modell, Prompt-Struktur, Parsinglogik, max_tokens) sind identisch. Dieses Design erlaubt die Isolation zweier Effekte:

- **Effekt 1 (B1 → B2):** Bringt Dokumentation überhaupt einen Mehrwert gegenüber reinem Modell-Vorwissen?
- **Effekt 2 (B2 → B3):** Verbessert die Bereinigung der Docs (Reduktion auf Import + Basic + Props) die Qualität?

### 4.1 B1 — Kein Kontext (reines Modell-Vorwissen)

Das LLM erhält keine PrimeVue-Dokumentation und muss ausschließlich auf sein Vortraining zurückgreifen.

```python
if strategy == 'b1':
    return '', []  # No context for B1
```

**Hinweis:** "Kein Kontext" bezieht sich hier ausschließlich auf den Dokumentations-Kontext. Bei `PROMPT_STRATEGY='few_shot'` erhält B1 dennoch dieselben drei Few-Shot-Referenzbeispiele wie B2/B3, "reines Modell-Vorwissen" gilt also nur für den Docs-Anteil, nicht für den gesamten Prompt.

| Eigenschaft       | Wert                               |
|-------------------|------------------------------------|
| Kontext-Tokens    | 0                                  |
| Kosten pro Mockup | minimal (nur Figma-JSON + Prompt)  |
| LLM-Wissen        | nur aus Vortraining                |
| Selektionsfehler  | keine (kein Kontext = kein Fehler) |

**Hypothese:** B1 dient als Baseline für den Informationswert der Dokumentation. Die getesteten Modelle (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) haben PrimeVue mutmaßlich in ihren Trainingsdaten und erzeugen auch ohne expliziten Kontext verwendbaren Code. Die Frage ist, ob die Qualität signifikant unter B2/B3 liegt, und ob sich dieser Effekt zwischen den Modellen unterscheidet.

### 4.2 B2 — RAW-Docs erkannter Komponenten

Die Komponenten-Erkennung (`detect_components`) scannt das Figma-JSON vorab und ermittelt, welche Komponenten vorkommen. Die **vollständigen, unbereinigten** `.md`-Dateien dieser Komponenten werden als Kontext übergeben:

```python
docs = RAW_DOCS
detected = detect_components(figma_node)
for comp in sorted(detected):
    if comp in docs:
        context_parts.append(f'# {comp}\n\n{docs[comp]}')
```

| Eigenschaft       | Wert                                       |
|-------------------|--------------------------------------------|
| Kontext-Tokens    | ~5.000–50.000 (mockup-abhängig)            |
| Kosten pro Mockup | variabel, höher als B3                     |
| LLM-Wissen        | vollständige Doku erkannter Komponenten    |
| Selektionsfehler  | möglich bei Komponentenerkennung           |

**Hypothese:** B2 liefert die umfassendsten Informationen pro Komponente, enthält aber auch Rauschen (Accessibility-Abschnitte, Theming-Details, multiple Beispiele), das die Aufmerksamkeit des Modells verringern kann.

### 4.3 B3 — CLEANED-Docs erkannter Komponenten

Dieselbe Selektionslogik wie B2, aber mit den **bereinigten** Docs (nur Import + Basic + (Template + Advanced ) + Props):

```python
docs = CLEANED_DOCS
detected = detect_components(figma_node)
for comp in sorted(detected):
    if comp in docs:
        context_parts.append(f'# {comp}\n\n{docs[comp]}')
```

| Eigenschaft       | Wert                                       |
|-------------------|--------------------------------------------|
| Kontext-Tokens    | ~1.000–10.000 (mockup-abhängig)            |
| Kosten pro Mockup | variabel, deutlich günstiger als B2        |
| LLM-Wissen        | Import, Basic-Beispiel, Props-Tabelle      |
| Selektionsfehler  | identisch mit B2 (selbe Erkennung)         |

**Hypothese:** B3 enthält weniger Rauschen als B2 und fokussiert die Modell-Aufmerksamkeit auf die API-relevanten Informationen. Bei gleichem oder besserem Output wäre das ein Beleg dafür, dass die Bereinigung die Token-Effizienz steigert.

#### Komponenten-Erkennungslogik (B2 und B3)

```python
KNOWN_COMPONENTS = set(CLEANED_DOCS.keys())

DOC_ALIASES = {
    'calendar':    'datepicker',
    'overlaybadge':'badge',
}

def detect_components(figma_node, found=None):
    """Sammelt alle PrimeVue-Komponentennamen im Figma-JSON."""
    name = figma_node.get('name', '')
    t    = figma_node.get('type', '')
    norm = _normalize(name)
    norm = DOC_ALIASES.get(norm, norm)

    if name.startswith('_'):
        return found

    if t in ('INSTANCE', 'FRAME') and norm in KNOWN_COMPONENTS:
        found.add(norm)

    for child in figma_node.get('children', []) or []:
        detect_components(child, found)
```

`DOC_ALIASES` übersetzt bekannte Figma-Aliasnamen auf den kanonischen Doc-Dateinamen (`overlaybadge → badge`, `calendar → datepicker`). `KNOWN_COMPONENTS` wird nur aus den bereinigten (`CLEANED_DOCS`) Dateinamen gebildet, ein vorgelagerter Assert beim Laden der Dokumentation (Kapitel 1.2 im Notebook) stellt sicher, dass `RAW_DOCS` und `CLEANED_DOCS` exakt dieselben Schlüsselmenge besitzen, sodass beide Quellen hier austauschbar sind.


### 4.4 Strategie-Vergleich

| Eigenschaft          | B1 (kein Kontext) | B2 (RAW selektiv)       | B3 (CLEANED selektiv) |
|----------------------|-------------------|-------------------------|-----------------------|
| Dokumentation        | keine             | vollständig pro Komp.   | bereinigt pro Komp.   |
| Kontext-Tokens       | 0                 | ~5k–50k                 | ~1k–10k               |
| Komponentenerkennung | nein              | ja                      | ja (identisch)        |
| Signal-Rausch        | kein Rauschen     | hoch (viele Abschnitte) | niedrig (fokussiert)  |
| Kosten               | minimal           | mittel                  | gering                |
| Gemessener Effekt    | Baseline          | Doku-Wert               | Bereinigungs-Wert     |

---

## 5. LLM-Transformation

### 5.1 API-Aufruf

Die Funktion `call_llm` führt pro Mockup einen API-Aufruf gegen **OpenRouter** durch. OpenRouter bietet ein einheitliches, OpenAI-kompatibles Schema für mehrere Provider, sodass `call_llm` unverändert für alle drei konfigurierten Modelle (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview) funktioniert:

```python
payload = json.dumps({
    'model':       model_id,               # z.B. 'anthropic/claude-sonnet-5'
    'temperature': API_TEMPERATURE,        # 0.0
    'max_tokens':  API_MAX_TOKENS,         # 8192
    'reasoning':   {'effort': API_REASONING_EFFORT},   # 'medium'
    'metadata':    {'strategy': strategy, 'mockup_key': key, 'model': model_id},
    'usage':       {'include': True},
    'session_id':  f'{model_id}/{strategy}/{PROMPT_STRATEGY}',
    'messages':    messages,
}).encode('utf-8')
```

`max_tokens` wurde auf **8192** gesetzt und zusätzlich steuert `reasoning.effort` das Reasoning-Budget für Modelle, die dies unterstützen, und `session_id` gruppiert Cache-Treffer pro Modell/Strategie/Prompt-Strategie-Kombination.

Die Funktion gibt ein Dictionary zurück, das die OpenRouter-spezifischen Zusatzfelder (Provider, Cache-Nutzung, Kostenaufschlüsselung) enthält:

```python
{
    'provider':             str,    # tatsächlich ausführender Provider
    'model':                str,    # vom Provider gemeldeter Modellname

    'generation_id':        str,    # OpenRouter-Generation-ID

    'content':              str,    # Rohtext der LLM-Antwort

    'input_tokens':         int,
    'output_tokens':        int,
    'total_tokens':         int,

    'cached_tokens':        int,    # aus Prompt-Cache bediente Tokens
    'cache_write_tokens':   int,    # neu ins Cache geschriebene Tokens
    'reasoning_tokens':     int,

    'cost_usd':             float,
    'cost_prompt_usd':      float,
    'cost_completion_usd':  float,

    'stop_reason':          str,    # OpenRouter-normalisierter finish_reason
    'native_finish_reason': str,    # Provider-natives Finish-Signal
    'refusal':               str | None,

    'duration':             float,  # API-Antwortzeit in Sekunden
}
```

`stop_reason` und zusätzlich `native_finish_reason` sind Indikatoren für abgeschnittene Outputs, `native_finish_reason in {'MAX_TOKENS', 'length'}` wird in der Pipeline direkt als `truncated`-Flag erfasst (siehe Kapitel 6).

Fehlerbehandlung: Sowohl HTTP-Fehler (`urllib.error.HTTPError`, inkl. Auslesen des OpenRouter-Fehlerkörpers) als auch Netzwerkfehler (`urllib.error.URLError`) werden abgefangen und in eine einheitliche `RuntimeError`-Meldung überführt:

```python
except urllib.error.HTTPError as e:
    error_text = e.read().decode('utf-8', errors='ignore')
    detail = json.loads(error_text).get('error', {}).get('message', error_text)
    raise RuntimeError(f'OpenRouter API Fehler {e.code}: {detail}') from e
except urllib.error.URLError as e:
    raise RuntimeError(f'Netzwerkfehler: {e.reason}') from e
```

### 5.2 SFC-Extraktion

LLMs geben den Code nicht immer in identischer Form aus. `extract_sfc` sucht **alle** Code-Blöcke (mit oder ohne `vue`-Annotation), filtert auf Blöcke, die `<template>` enthalten, und wählt bei mehreren Treffern den **längsten** Kandidaten, das reduziert das Risiko, versehentlich einen unvollständigen Zwischen-Codeblock zu erwischen, falls das Modell mehrere Codeblöcke ausgibt:

```python
def extract_sfc(raw: str) -> tuple[str, bool]:
    """Returns (sfc, extraction_ok)."""
    blocks = re.findall(r'```(?:vue)?\s*\n(.+?)```', raw, re.DOTALL)
    candidates = [b.strip() for b in blocks if '<template>' in b]

    if candidates:
        longest = max(candidates, key=len)
        return _trim_to_last_close_tag(longest), True

    if '<template>' in raw:
        start = raw.index('<template>')
        return _trim_to_last_close_tag(raw[start:].strip()), True

    return f'<!-- SFC-Extraktion failed -->\n<!-- RAW:\n{raw[:500]}\n-->', False


def _trim_to_last_close_tag(sfc: str) -> str:
    for tag in ('</style>', '</script>'):
        idx = sfc.rfind(tag)
        if idx != -1:
            return sfc[: idx + len(tag)]
    return sfc
```

Der extrahierte Text wird zusätzlich über `_trim_to_last_close_tag` auf das letzte `</style>` bzw. `</script>` zurückgeschnitten, um nachgestellten Text nach dem eigentlichen SFC zu entfernen. `extract_sfc` gibt ein Tupel `(sfc, extraction_ok)` zurück, `extraction_ok` markiert, ob überhaupt ein `<template>`-haltiger Block gefunden wurde.

**`extraction_ok` vs. `parse_ok`:** `extraction_ok` (aus `extract_sfc`) prüft nur, ob ein Template-Block gefunden wurde. `parse_ok` wird separat in `generate_sfc_b` berechnet und prüft zusätzlich, ob **sowohl** `<template>` **als auch** `<script` im extrahierten SFC vorhanden sind (feinere Metrik für die Strukturintegrität des Outputs).

---

## 6. Metrik-Erfassung

Ansatz B erweitert die Metrik-Struktur von Ansatz A um LLM-spezifische Felder. Das `_metrics_b`-Dictionary wird zu Beginn jedes `generate_sfc_b()`-Aufrufs über `_reset_metrics_b()` zurückgesetzt:

```python
_metrics_b = {
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

- `duration` hält die rohe API-Latenz in **Sekunden**; erst beim Schreiben in die Ergebnis-CSV wird sie mit `round(duration * 1000, 4)` in Millisekunden umgerechnet (Feldname dort: `duration`, siehe Kapitel 6.1). Die API-Latenz (Sekundenbereich) dominiert gegenüber der reinen Transformationslogik aus Ansatz A (Millisekundenbereich).

### 6.1 Persistenz: Resumable CSV-Report (analog Ansatz A)

Wie in Ansatz A wird kein aggregiertes JSON-Report-Objekt mehr geschrieben. Stattdessen persistiert die Pipeline pro Datei/Modell/Strategie-Kombination eine Zeile in eine CSV:

```python
RESULTS_CSV_PATH = Path('results') / (
    f'results_b_{TYPE}_{VARIANT + "_" if VARIANT else ""}{PROMPT_STRATEGY}.csv'
)
```

Beispiel: `results/results_b_uis_pretty_few_shot.csv`. Das Dateischema (`RESULT_FIELDNAMES`) umfasst neben den `_metrics_b`-Feldern zusätzliche Lauf- und Konfigurationsinformationen:

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

Wichtige Felder im Überblick:

- `model`: der interne Kurzname aus `API_MODELS` (z.B. `'gpt-5.6-terra'`); `model_reported`: der von OpenRouter tatsächlich zurückgemeldete Modellname (kann bei Provider-Routing abweichen)
- `prompt_strategy`, `temperature`, `reasoning_effort`, `image_detail`: die zum Zeitpunkt des Laufs aktiven globalen API-Parameter (`image_detail` ist für Ansatz B aktuell ungenutzt, da kein Bild-Input — relevant erst für Ansatz C)
- `attempt`: für künftige Retry-Logik reserviert, aktuell immer `1` (es findet noch kein automatischer Retry bei Fehlern statt)
- `run`: die `RUN_ID`, ermöglicht mehrere Wiederholungen für stabilere Metriken

Die Pipeline ist **resumable**, allerdings mit einem erweiterten Schlüssel gegenüber Ansatz A: Da nun mehrere Modelle in derselben Pipeline laufen, umfasst der Completed-Key das Tupel `(model, strategy, input, variant, run)` statt nur `(input, run)`. Bereits erfolgreich verarbeitete Kombinationen werden übersprungen, Fehlversuche (`error` gesetzt) werden erneut versucht.

Die Output-Datei je Mockup/Strategie/Modell/Lauf wird unter folgendem Namensschema abgelegt:

```
<OUTPUT_DIR>/b/<prompt_strategy>/<complexity>/<mockup>-<b1|b2|b3>-<model_name>-<run_id>.vue
```

z.B. `dataset/storybook/src/code/uis/pretty/b/few_shot/simple/01-b1-claude-sonnet-5-1.vue`. Das ursprünglich dokumentierte einfache Schema (`01-b1.vue`) berücksichtigte weder die Prompt-Strategie noch die Modell-Dimension und ist damit überholt (siehe auch Kapitel 8).

Eine strategie- bzw. modellübergreifende Aggregation (z.B. `avg_cost_usd` pro Strategie × Komplexität, wird von der Pipeline selbst nicht berechnet. Die CSV enthält mit `model`, `strategy` und `complexity` alle nötigen Spalten für eine nachgelagerte Auswertung, analog zu Ansatz A.

---

## 7. Stärken und Limitationen

### 7.1 Stärken

| Eigenschaft                  | Bedeutung                                                                            |
|------------------------------|--------------------------------------------------------------------------------------|
| **Sprachliche Flexibilität** | Versteht Naming-Variationen und informelle Komponentennamen ohne explizite Regeln    |
| **Semantisches Verständnis** | Kann `<span>` vs. `<h1>` vs. `<p>` situationsgerecht wählen                          |
| **Keine Mapping-Pflege**     | Neue PrimeVue-Komponenten brauchen kein neues Regelwerk — nur eine aktualisierte Doc |
| **Implizites Slot-Wissen**   | Das Modell kennt PrimeVue-Slot-Strukturen aus dem Vortraining und der Dokumentation  |
| **Kontext-Steuerbarkeit**    | Qualität vs. Kosten über Strategie steuerbar ohne Code-Änderungen                    |

### 7.2 Limitationen

| Limitation                                 | Auswirkung                                                                                                                                                                                                                                                         | Adressierbar durch                                                                               |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Nicht-Determinismus**                    | Gleicher Input kann unterschiedliche Outputs erzeugen                                                                                                                                                                                                              | Temperature=0 (annähernder Determinismus)                                                        |
| **Token-Kosten**                           | B2 kostet deutlich mehr pro Mockup als B1/B3                                                                                                                                                                                                                       | Strategie-Wahl, Prompt-Komprimierung                                                             |
| **Halluzinierung von Props**               | LLM kann nicht-existente PrimeVue-Props generieren                                                                                                                                                                                                                 | PrimeVue-API-Konformitäts-Metrik (Evaluation)                                                    |
| **Kontextfenster-Grenzen**                 | Sehr große Mockups könnten mit B2-Kontext das 128k-Fenster annähern                                                                                                                                                                                                | B3 als Fallback                                                                                  |
| **Abgeschnittene Outputs**                 | Bei komplexen Mockups kann `max_tokens=8192` nicht ausreichen → `truncated=True`                                                                                                                                                                                   | `max_tokens` weiter erhöhen                                                                      |
| **Keine Strukturgarantien**                | `parse_ok=False` möglich wenn LLM Prosa oder unvollständigen Code ausgibt                                                                                                                                                                                          | Retry-Logik (Feld `attempt` ist vorbereitet, aber noch ungenutzt), robustere Parsing-Heuristiken |
| **Keine programmatische Metrik-Erfassung** | `instances_mapped`/`frames_compound` wie in A sind ohne AST nicht direkt berechenbar; auch die zuvor geplante `ast_depth_approx`-Schätzung ist im aktuellen Code entfernt                                                                                          | LLM-as-Judge oder manueller Vergleich                                                            |
| **Few-Shot / Zero-Shot**                   | `PROMPT_STRATEGY='few_shot'` (Default) konditioniert das Modell auf die drei mitgelieferten Referenzbeispiele — die ursprünglich angestrebte methodische Reinheit des Zero-Shot-Vergleichs (Kapitel 3.4) gilt nur noch bei expliziter Umstellung auf `'zero_shot'` | `PROMPT_STRATEGY='zero_shot'` setzen für den reinen Kontext-Vergleich                            |

### 7.3 Hypothesen für den Methodenvergleich

**Extern (A ↔ B):**

- **Erwartete Stärke bei UF1 (Mapping-Präzision) gegenüber Messy-Designs**: Bessere Robustheit als A bei Naming-Abweichungen, da das LLM semantisch schließt
- **Erwartete Schwäche bei UF2 (Code-Qualität)**: Höhere Varianz als A; halluzinierte Props wahrscheinlicher als bei regel-deterministischem Output
- **Erwartete Stärke bei UF3 (Visual Fidelity)**: Semantische HTML-Elemente (`<h1>`, `<label>`) möglich statt universalem `<span>` aus Ansatz A

**Intern (B1 ↔ B2 ↔ B3):**

- **B1 vs. B2**: B2 sollte signifikant besser bei Prop-Genauigkeit sein (explizite API-Info). Falls B1 ≈ B2, hat das jeweilige Modell ausreichendes Vortraining über PrimeVue
- **B2 vs. B3**: B3 sollte mindestens gleichwertig sein — bei höherer Token-Effizienz. Falls B3 > B2, bestätigt das den Wert der Docs-Bereinigung (weniger Rauschen = besserer Fokus)
- **Kosten-Rangfolge**: B1 < B3 < B2 (gesichert durch Design)

---

## 8. Beispiel-Output

Dieselbe Password-Eingabe wie in Ansatz A — zeigt, worin sich ein typischer B-Output von A unterscheidet.

### 8.1 Eingabe (identisch mit Ansatz A)

```json
{
  "type": "FRAME", "name": "1 [Password-Eingabe]",
  "layoutMode": "VERTICAL", "paddingLeft": 24, ...
  "children": [{
    "type": "FRAME", "name": "Column", "layoutMode": "VERTICAL", "itemSpacing": 24,
    "children": [
      { "type": "INSTANCE", "name": "password",
        "componentProperties": { "Toggle Mask": {"value": "True"} },
        "children": [{ "name": "_inputtext-content",
          "componentProperties": { "Placeholder#4275:140": {"value": "Passwort eingeben"} }}]
      },
      { "type": "INSTANCE", "name": "button",
        "componentProperties": { "Text#4293:477": {"value": "Anmelden"} }}
    ]
  }]
}
```

### 8.2 Typischer B-Output

```vue
<template>
  <div class="flex flex-col gap-6 p-6">
    <div class="flex flex-col gap-2">
      <label for="password" class="text-sm font-medium">Passwort</label>
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
      type="submit"
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

### 8.3 Vergleich A ↔ B

| Aspekt             | Ansatz A                 | Ansatz B (typisch)                                                                         |
|--------------------|--------------------------|--------------------------------------------------------------------------------------------|
| State-Variable     | `_state.n10_4744: null`  | `password` (`ref('')`) ← semantischer Name                                                 |
| Label              | *(nicht generiert)*      | `<label for="password">Passwort</label>`                                                   |
| HTML-Semantik      | `<span>`                 | `<label>`, `type="submit"` etc.                                                            |
| Zusatz-Props       | exakt nach Mapping-Regel | `:feedback="false"`, `class="w-full"`                                                      |
| äußerer Wrapper    | automatisch entfernt     | modell-abhängig (manchmal erhalten)                                                        |
| Reproduzierbarkeit | 100% identisch           | geringe Varianz zwischen Aufrufen (`temperature=0.0` reduziert, eliminiert sie aber nicht) |

---

## 9. Kosten-Qualitäts-Analyse als Evaluationsmetrik

Ansatz B fügt dem Evaluations-Framework eine Wirtschaftlichkeits-Dimension hinzu, die bei Ansatz A nicht existiert. Die Gegenüberstellung der drei Strategien bildet einen eigenständigen Teilbefund für die Thesis.

**Kostenstruktur pro Strategie:** Die Pipeline durchläuft drei unterschiedliche Modelle über OpenRouter (Kapitel 1), sodass sich die Kostenstruktur nicht auf eine einzelne, feste Preistabelle reduzieren lässt, die tatsächlichen USD-Kosten hängen zusätzlich vom gewählten Modell ab und variieren je nach Provider-Preisliste. Die Grundtendenz (Kontext-Tokens je Strategie) bleibt jedoch modellunabhängig gültig:

```
Strategie   Kontext-Quelle             Kontext-Tokens (ca.)
---------   --------------------------  ---------------------
B1          Kein Doku-Kontext          0
B2          RAW-Docs (erkannt)         5k–50k
B3          CLEANED-Docs (erkannt)     1k–10k
```

Die tatsächlichen Kosten pro Mockup — inkl. Cache-Rabatten durch die in Kapitel 3.5 beschriebenen Breakpoints, werden pro Zeile in der Ergebnis-CSV erfasst (`cost_usd`, `cost_prompt_usd`, `cost_completion_usd`, dazu `cached_tokens`/`cache_write_tokens`) und lassen sich dort je Modell auswerten, statt sie hier als fixe Schätzwerte zu pflegen.

**Für die Evaluation relevante Befunde:**

- Falls B1 ≈ B2 ≈ B3 bei Qualität: das jeweilige Modell hat ausreichendes Vorwissen, expliziter Kontext ist überflüssig → Dokumentations-Kosten sind verschwendet
- Falls B2 > B1 aber B3 ≈ B2: Bereinigung lohnt sich — gleiche Qualität bei ~80% weniger Tokens
- Falls B2 > B3 > B1: Dreistufige Hierarchie — jede Informationsschicht bringt messbaren Mehrwert
- Zusätzlich modellübergreifend interessant: Unterscheiden sich diese Effekte je nach Modell (Claude Sonnet 5 / GPT-5.6-Terra / Gemini 3.1 Pro Preview)?

---

## 10. Prompt-Anpassung

### 10.1 Neue Komponenten

Neue PrimeVue-Komponenten erfordern ausschließlich aktualisierte `.md`-Dateien in beiden Doc-Verzeichnissen:

1. RAW-Datei in `primevue/component-documentation/raw/` ablegen
2. Cleaning-Notebook ausführen → erzeugt bereinigte Version automatisch
3. `KNOWN_COMPONENTS` erkennt die neue Komponente beim nächsten Pipeline-Lauf

### 10.2 Prompt-Tuning

Falls der LLM-Output systematisch von der PrimeVue-API abweicht:

```python
SYSTEM_INSTRUCTIONS = """...
STRICT REQUIREMENTS:
...
- [Neue Regel hinzufügen]   ← Constraint-Ergänzung
...
"""
```

Änderungen am System-Prompt gelten für alle drei Kontext-Strategien (B1/B2/B3) und beide Prompt-Strategien (Zero-Shot/Few-Shot) gleichzeitig, da `SYSTEM_INSTRUCTIONS` global definiert ist.

### 10.3 Modell-Wechsel bzw. -Erweiterung

Die Modelle sind als Dictionary `API_MODELS` festgelegt, das die Pipeline durchläuft **alle** darin enthaltenen Modelle nacheinander:

```python
API_MODELS = {
    'claude-sonnet-5':         'anthropic/claude-sonnet-5',
    'gpt-5.6-terra':           'openai/gpt-5.6-terra',
    'gemini-3.1-pro-preview':  'google/gemini-3.1-pro-preview',
}
```

Der Dictionary-Key ist der interne Kurzname (taucht als `model`-Spalte in der Ergebnis-CSV auf, siehe Kapitel 6.1), der Wert die OpenRouter-Modell-ID. Ein Modell hinzuzufügen oder zu entfernen genügt, um es in den nächsten Pipeline-Lauf ein- oder auszuschließen — ein Code-Eingriff über `API_MODELS` hinaus ist nicht nötig, da `call_llm` modellagnostisch über OpenRouter arbeitet (Kapitel 5.1).

---

## 11. Position im methodischen Gesamtvergleich

| Aspekt                   | Ansatz A (Regelbasiert)             | Ansatz B (Metadaten-LLM)                                                                                                | Ansatz C (Vision-LLM)            |
|--------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Eingabe                  | Figma-JSON                          | Figma-JSON + Doku-Kontext (B2/B3) + optional Few-Shot                                                                   | Figma-PNG + Doku-Kontext         |
| Modell                   | keines                              | 3 Modelle über OpenRouter (Claude Sonnet 5, GPT-5.6-Terra, Gemini 3.1 Pro Preview)                                      | mit Ansatz B abzugleichen        |
| Prompt-Strategie         | –                                   | konfigurierbar: Zero-Shot / Few-Shot (Default: Few-Shot)                                                                | –                                |
| Entscheidungslogik       | Deterministisch                     | Probabilistisch                                                                                                         | Probabilistisch                  |
| Kontext-Steuerung        | `COMPONENT_MAP`/`FRAME_MAP`         | B1 (kein Doku-Kontext) / B2 (RAW) / B3 (CLEANED)                                                                        | Dokumentations-Kontext           |
| Erweiterbarkeit          | Manuell, regelbasiert               | `.md`-Datei ergänzen → fertig; Modell per `API_MODELS`-Eintrag ergänzen                                                 | `.md`-Datei ergänzen → fertig    |
| Reproduzierbarkeit       | 100%                                | ~hoch (`temperature=0.0`, aber weiterhin LLM-Varianz)                                                                   | ~hoch                            |
| Externe Abhängigkeiten   | Keine                               | OpenRouter-API                                                                                                          | mit Ansatz B abzugleichen        |
| Kosten pro Mockup        | ~$0                                 | modellabhängig, pro Zeile in Ergebnis-CSV erfasst (`cost_usd` u.a.), grobe Größenordnung B1 < B3 < B2 (siehe Kapitel 9) | mit Ansatz B abzugleichen        |
| Metrik-Erfassung         | 20 Felder, resumable CSV            | ~34 Felder, resumable CSV, inkl. Tokens, Cache- und Kostenaufschlüsselung                                               | mit Ansatz B abzugleichen        |
| Strukturgarantie         | Ja (deterministischer AST)          | Nein (`parse_ok`/`extraction_ok`-Flags nötig)                                                                           | Nein                             |
| Erwarteter Hauptvorteil  | Präzision, Kosten, Geschwindigkeit  | Sprachflexibilität, Semantik                                                                                            | Visuelles Verständnis            |
| Erwarteter Hauptnachteil | Sprödigkeit bei Naming-Abweichungen | Token-Kosten (B2), Varianz                                                                                              | Pixel-Approximation, hohe Kosten |

Ansatz B bildet das mittlere Glied im Methodenvergleich: flexibler als A durch natürlichsprachliches Kontext-Verständnis, aber ohne die visuelle Eingabe von C. Die interne B1/B2/B3-Varianz liefert zusätzlich einen eigenständigen Befund darüber, wie viel (a) Dokumentations-Kontext und (b) Dokumentations-Bereinigung für LLM-basierte Transformationen tatsächlich bringen.