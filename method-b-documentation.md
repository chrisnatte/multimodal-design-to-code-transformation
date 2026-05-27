# Ansatz B — LLM-basierte Transformation (Metadaten)

## 1. Übersicht

Der metadatenbasierte LLM-Ansatz (Ansatz B) überführt die regelbasierte Transformationslogik von Ansatz A in einen probabilistischen Prozess: Statt expliziter Mapping-Regeln erhält ein Large Language Model den bereinigten Figma-JSON und — je nach Strategie — PrimeVue-Dokumentation als Kontext und generiert die Vue-3-SFC direkt. Die Transformationsentscheidungen sind damit im Modell implizit und nicht mehr als Code-Regeln explizit formuliert.

**Kernhypothese gegenüber Ansatz A:** Ein LLM kann durch seinen natürlichsprachlichen Kontext Naming-Variationen, implizite Semantik und unbekannte Muster tolerieren, die den regelbasierten Ansatz zum Fehlschlag bringen würden.

**Interne Kernhypothese (B1 → B2 → B3):** Die drei Strategien messen zwei unabhängige Effekte: (1) Wie viel bringt Dokumentation als Kontext überhaupt? (B1 vs. B2). (2) Wie viel bringt das Bereinigen der Docs? (B2 vs. B3).

Stand der Implementierung: Der Prototyp testet drei Kontext-Strategien (B1, B2, B3) in einer gemeinsamen Pipeline. Alle drei nutzen dasselbe Modell (GPT-5.3-Codex / GPT-5.4), denselben Prompt und denselben Input-Datensatz wie Ansatz A, was einen direkten Methodenvergleich ermöglicht. GPT-5.3-Codex / GPT-5.4 wird auch in Ansatz C eingesetzt — damit ist das Modell die kontrollierte Variable und die Eingabemodalität die einzige unabhängige Variable zwischen den Ansätzen.

### Designprinzipien

| Prinzip                       | Umsetzung                                                                                   |
|-------------------------------|---------------------------------------------------------------------------------------------|
| Sprachliche Flexibilität      | LLM toleriert Naming-Abweichungen ohne explizite Regeln                                     |
| Kontext-Steuerung             | Qualität und Kosten werden über den Dokumentations-Kontext gesteuert                        |
| Vergleichbarkeit              | Identische Eingaben, identische Output-Struktur wie Ansatz A                                |
| Modell-Kontrolle              | Dasselbe Modell (GPT-5.3-Codex / GPT-5.4) in Ansatz B und C → Eingabemodalität als Variable |
| Reproduzierbarkeit (begrenzt) | Gleicher Prompt → gleicher Kontext, aber Ausgabe ist nicht deterministisch                  |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────┐
│  Cleaned Figma-JSON     │  Eingabe (identisch mit Ansatz A)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Komponenten-Erkennung  │  B2/B3: Figma-JSON → erkannte Komponenten
│  (detect_components)    │  B1: entfällt (kein Kontext)
└───────────┬─────────────┘
            ▼
┌─────────────────────────────────────────────────────┐
│  Kontext-Builder                                    │  Schritt 1
│  ├─ B1: Kein Kontext              (0 Tokens)        │  Reines Modell-Vorwissen
│  ├─ B2: RAW-Docs erkannter Komp.  (~5–50k Tokens)   │  Vollständige Doku, selektiv
│  └─ B3: CLEANED-Docs erkannter K. (~1–10k Tokens)   │  Bereinigte Doku, selektiv
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Prompt-Builder         │  Schritt 2: System + User Prompt
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  LLM API-Aufruf         │  Schritt 3: GPT-5.3-Codex / GPT-5.4 (Zero-Shot)
│  (call_llm)             │  → Antwort mit rohem Vue-Code
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Antwort-Parser         │  Schritt 4: SFC aus Antwort extrahieren
│  (extract_sfc)          │  Template / Code-Block / Fallback
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Metrik-Erfassung       │  Schritt 5: Tokens, Kosten, Timing, Parse-OK
│  (_metrics_b, Report)   │  → metrics_report_b.json
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe (01-b1.vue / 01-b2.vue / 01-b3.vue)
└─────────────────────────┘
```

Im Gegensatz zu Ansatz A gibt es keine explizite IR-Schicht. Das LLM erzeugt den Ziel-Code direkt aus dem Quell-JSON — die "Transformation" findet im Modell statt, nicht in einem programmatisch aufgebauten AST.

---

## 3. Prompt-Architektur

Der Prompt ist die zentrale Steuerungsebene von Ansatz B. Er besteht aus zwei Teilen:

### 3.1 System-Prompt

Der System-Prompt definiert die Rolle des LLMs, den Output-Kontrakt und die Transformationsregeln. Er enthält außerdem den strategie-abhängigen Dokumentations-Kontext:

```
You are an expert Vue 3 and PrimeVue developer.
Transform the given Figma design JSON into a complete, working Vue 3 SFC.

STRICT REQUIREMENTS:
- Use PrimeVue 4 components exclusively for UI elements
- Use <script setup> syntax (no Options API)
- Import every PrimeVue component used: import Button from 'primevue/button'
- Use Tailwind CSS utility classes for layout and spacing
- Use reactive() from Vue for all form/input state
- Map Figma Auto-Layout (HORIZONTAL/VERTICAL) to flex/flex-col
- Map itemSpacing to gap-*, padding values to p-*/px-*/py-*
- Output ONLY the Vue SFC — no explanation, no markdown fences, no prose
- Return exactly one complete Vue SFC, starting directly with <template>
  and ending with </script>
- If required details are missing or ambiguous, do not invent unsupported
  behavior; use the closest valid structural mapping
- Treat the transformation as incomplete until all eligible non-ignored
  nodes are represented in the output
- Before finalizing, verify that the SFC is syntactically valid, all used
  PrimeVue components are imported, and all form/input state uses reactive()

FIGMA JSON STRUCTURE:
- type=INSTANCE, name=<component>: a PrimeVue component instance
- componentProperties: Figma design properties → map to PrimeVue props
- type=FRAME: layout container → <div> with Tailwind classes
- type=TEXT: standalone text → <span> or semantic element
- Nodes with name starting with '_' are internal sub-instances (ignore them)

PrimeVue DOCUMENTATION:
{context}       ← strategie-abhängiger Kontext (B1: leer / B2: RAW / B3: CLEANED)
```

Bei B1 (kein Kontext) wird `{context}` durch den Hinweis `(No documentation provided use pretrained knowledge)` ersetzt.

### 3.2 User-Prompt

Der User-Prompt enthält ausschließlich das Figma-JSON des zu transformierenden Mockups:

```
Transform this Figma mockup into a Vue 3 SFC with PrimeVue.
Use the PrimeVue documentation above to select the correct components and props.

Figma Mockup JSON:
{figma_json}
```

### 3.3 Prompt-Strategie: Zero-Shot

Ansatz B verwendet **Zero-Shot**-Prompting — der Prompt enthält weder Beispiele (Few-Shot) noch explizite Denkanweisungen (Chain-of-Thought). Diese Entscheidung dient der methodischen Reinheit des Vergleichs: Das LLM soll ausschließlich aus Figma-JSON und (je nach Strategie) Dokumentation transformieren, ohne durch Beispiele auf eine bestimmte Stilistik konditioniert zu werden.

**Konsequenz für die Evaluation:** Abweichungen zwischen B-Output und Ground Truth sind ausschließlich auf das Kontext-Verständnis des Modells zurückzuführen, nicht auf Beispiel-Überanpassung.

---

## 4. Kontext-Strategien

Die drei Strategien unterscheiden sich ausschließlich im Dokumentations-Kontext, der in den System-Prompt eingebettet wird. Alle anderen Parameter (Modell, Prompt-Struktur, Parsinglogik, max_tokens) sind identisch. Dieses Design erlaubt die Isolation zweier Effekte:

- **Effekt 1 (B1 → B2):** Bringt Dokumentation überhaupt einen Mehrwert gegenüber reinem Modell-Vorwissen?
- **Effekt 2 (B2 → B3):** Verbessert die Bereinigung der Docs (Reduktion auf Import + Basic + Props) die Qualität?

### 4.1 B1 — Kein Kontext (reines Modell-Vorwissen)

Das LLM erhält keine PrimeVue-Dokumentation und muss ausschließlich auf sein Vortraining zurückgreifen.

```python
if strategy == 'b1':
    return '', []   # Leerer Kontext, keine Komponenten
```

| Eigenschaft       | Wert                               |
|-------------------|------------------------------------|
| Kontext-Tokens    | 0                                  |
| Kosten pro Mockup | minimal (nur Figma-JSON + Prompt)  |
| LLM-Wissen        | nur aus Vortraining                |
| Selektionsfehler  | keine (kein Kontext = kein Fehler) |

**Hypothese:** B1 dient als Baseline für den Informationswert der Dokumentation. GPT-5.3-Codex / GPT-5.4 hat PrimeVue in seinen Trainingsdaten und erzeugt auch ohne expliziten Kontext verwendbaren Code — die Frage ist, ob die Qualität signifikant unter B2/B3 liegt.

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
KNOWN_COMPONENTS = set(RAW_DOCS.keys()) | set(CLEANED_DOCS.keys())

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

`DOC_ALIASES` übersetzt bekannte Figma-Aliasnamen auf den kanonischen Doc-Dateinamen (`overlaybadge → badge`, `calendar → datepicker`). `KNOWN_COMPONENTS` entspricht der Menge aller `.md`-Dateinamen.


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

Die Funktion `call_llm` führt einen einzigen OpenAI-API-Aufruf durch. Das Modell ist `GPT-5.3-Codex / gpt-5.4` — dieselbe Modellgeneration, die auch in Ansatz C (Vision) eingesetzt wird, was die modellseitige Variable im Methodenvergleich kontrolliert.

```python
payload = {
    'model':      'GPT-5.3-Codex / gpt-5.4',
    'max_tokens': 4096,
    'messages': [
        {'role': 'system', 'content': system_prompt},
        {'role': 'user',   'content': user_prompt},
    ],
}
```

Die Funktion gibt ein Dictionary zurück:
```python
{
    'content':      str,     # Rohtext der LLM-Antwort
    'input_tokens': int,     # tatsächlich verbrauchte Input-Tokens
    'output_tokens':int,     # generierte Output-Tokens
    'stop_reason':  str,     # 'stop' | 'length' | ...
    'duration':     float,   # API-Antwortzeit in Sekunden
}
```

`stop_reason == 'length'` ist ein Indikator für abgeschnittene Outputs — ein Qualitätsindikator, der im Metrik-Report erfasst wird.

Fehlerbehandlung: HTTP-Fehler werden abgefangen und der Response-Body wird ausgelesen, um die genaue OpenAI-Fehlermeldung im Report zu erfassen:

```python
except urllib.error.HTTPError as e:
    error_body = json.loads(e.read().decode('utf-8'))
    raise RuntimeError(
        f"OpenAI API Fehler {e.code}: {error_body.get('error', {}).get('message', str(e))}"
    )
```

### 5.2 SFC-Extraktion

LLMs geben den Code nicht immer in identischer Form aus. `extract_sfc` behandelt drei Fälle in Prioritätsreihenfolge:

```python
def extract_sfc(raw: str) -> str:
    # 1. Code-Block mit Sprach-Annotation (häufigster Fall)
    m = re.search(r'```vue\s*\n(.+?)```', raw, re.DOTALL)
    if m: return m.group(1).strip()

    # 2. Generischer Code-Block mit <template>-Inhalt
    m = re.search(r'```\s*\n(.+?)```', raw, re.DOTALL)
    if m and '<template>' in m.group(1):
        return m.group(1).strip()

    # 3. Direkte SFC-Ausgabe (beginnt mit <template>)
    if '<template>' in raw:
        return raw[raw.index('<template>'):].strip()

    # Fallback: Fehler-Kommentar
    return f'<!-- SFC-Extraktion fehlgeschlagen -->\n<!-- RAW:\n{raw[:500]}\n-->'
```

**`parse_ok`-Flag:** Als Boolean gesetzt, wenn `<template>` und `<script` beide im extrahierten SFC vorhanden sind. Wird als Primärmetrik für die Strukturintegrität des Outputs erfasst.

---

## 6. Metrik-Erfassung

Ansatz B erweitert die Metrik-Struktur von Ansatz A um LLM-spezifische Felder. Das `_metrics_b`-Dictionary wird zu Beginn jedes `generate_sfc_b()`-Aufrufs zurückgesetzt.

```python
{
    # Basis
    'input':               '01.json',
    'output':              '01-b1.vue',
    'complexity':          'simple',
    'strategy':            'b1',
    'duration_ms':         2143.5,      # API-Latenz dominiert
    'sfc_bytes':           680,
    'sfc_lines':           31,
    'ast_depth_approx':    5,
    'parse_ok':            True,

    # LLM-spezifisch
    'input_tokens':        4230,        # tatsächlich verbrauchte Tokens
    'output_tokens':       412,
    'context_tokens':      0,           # B1: 0, B2/B3: variabel
    'context_components':  0,           # B1: 0, B2/B3: Anzahl erkannter Docs
    'stop_reason':         'stop',
    'cost_usd':            0.0037,
    'error':               None,
}
```

**Besonderheiten gegenüber Ansatz A:**

`duration_ms` misst hier die API-Latenz des LLM-Aufrufs (Sekunden-Bereich), nicht die reine Transformationslogik wie in Ansatz A (Millisekunden-Bereich). Beide Werte werden im Report erfasst, aber in der Auswertung getrennt betrachtet.

`ast_depth_approx` wird nicht durch AST-Traversal berechnet (kein programmatischer AST), sondern über Tag-Zählung im Quelltext geschätzt:

```python
def _ast_depth_approx(sfc: str) -> int:
    depth, max_depth = 0, 0
    in_template = False
    for line in sfc.splitlines():
        if '<template>' in line:
            in_template = True
        if not in_template:
            continue
        depth += line.count('<') - line.count('</') - line.count('/>')
        max_depth = max(max_depth, depth)
    return max(0, max_depth)
```

### Report-Aggregation

Der Report enthält zwei Aggregationsebenen — pro Strategie und pro Strategie × Komplexität:

```json
{
  "method": "B",
  "model": "GPT-5.3-Codex / gpt-5.4",
  "per_strategy": {
    "b1": { "avg_input_tokens": 4200,  "total_cost_usd": 0.11, ... },
    "b2": { "avg_input_tokens": 18000, "total_cost_usd": 1.31, ... },
    "b3": { "avg_input_tokens": 6500,  "total_cost_usd": 0.42, ... }
  },
  "per_strategy_complexity": {
    "b3": {
      "simple": { "avg_cost_usd": 0.008, ... },
      "medium": { "avg_cost_usd": 0.014, ... },
      "hard":   { "avg_cost_usd": 0.022, ... }
    }
  }
}
```

Die `per_strategy_complexity`-Aufschlüsselung zeigt, wie die Kosten mit der Mockup-Komplexität steigen — ein Robustheits-Indikator für UF5.

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

| Limitation                                 | Auswirkung                                                                           | Adressierbar durch                            |
|--------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------|
| **Nicht-Determinismus**                    | Gleicher Input kann unterschiedliche Outputs erzeugen                                | Temperature=0 (annähernder Determinismus)     |
| **Token-Kosten**                           | B2 kostet deutlich mehr pro Mockup als B1/B3                                         | Strategie-Wahl, Prompt-Komprimierung          |
| **Halluzinierung von Props**               | LLM kann nicht-existente PrimeVue-Props generieren                                   | PrimeVue-API-Konformitäts-Metrik (Evaluation) |
| **Kontextfenster-Grenzen**                 | Sehr große Mockups könnten mit B2-Kontext das 128k-Fenster annähern                  | B3 als Fallback                               |
| **Abgeschnittene Outputs**                 | Bei komplexen Mockups kann `max_tokens=4096` nicht ausreichen → `stop_reason=length` | `max_tokens` erhöhen                          |
| **Keine Strukturgarantien**                | `parse_ok=False` möglich wenn LLM Prosa oder unvollständigen Code ausgibt            | Retry-Logik, robustere Parsing-Heuristiken    |
| **Keine programmatische Metrik-Erfassung** | `instances_mapped`/`frames_compound` wie in A sind ohne AST nicht direkt berechenbar | LLM-as-Judge oder manueller Vergleich         |

### 7.3 Hypothesen für den Methodenvergleich

**Extern (A ↔ B):**

- **Erwartete Stärke bei UF1 (Mapping-Präzision) gegenüber Messy-Designs**: Bessere Robustheit als A bei Naming-Abweichungen, da das LLM semantisch schließt
- **Erwartete Schwäche bei UF2 (Code-Qualität)**: Höhere Varianz als A; halluzinierte Props wahrscheinlicher als bei regel-deterministischem Output
- **Erwartete Stärke bei UF3 (Visual Fidelity)**: Semantische HTML-Elemente (`<h1>`, `<label>`) möglich statt universalem `<span>` aus Ansatz A

**Intern (B1 ↔ B2 ↔ B3):**

- **B1 vs. B2**: B2 sollte signifikant besser bei Prop-Genauigkeit sein (explizite API-Info). Falls B1 ≈ B2, hat GPT-4o ausreichendes Vortraining über PrimeVue
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
        v-model="form.password"
        placeholder="Passwort eingeben"
        :toggleMask="true"
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

<script setup>
import { reactive } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const form = reactive({
  password: '',
})
</script>
```

### 8.3 Vergleich A ↔ B

| Aspekt              | Ansatz A                         | Ansatz B (typisch)                       |
|---------------------|----------------------------------|------------------------------------------|
| State-Variable      | `_state.n10_4744: null`          | `form.password: ''` ← semantischer Name  |
| Label               | *(nicht generiert)*              | `<label for="password">Passwort</label>` |
| HTML-Semantik       | `<span>`                         | `<label>`, `type="submit"` etc.          |
| Zusatz-Props        | exakt nach Mapping-Regel         | `:feedback="false"`, `class="w-full"`    |
| äußerer Wrapper     | automatisch entfernt             | modell-abhängig (manchmal erhalten)      |
| Reproduzierbarkeit  | 100% identisch                   | geringe Varianz zwischen Aufrufen        |

---

## 9. Kosten-Qualitäts-Analyse als Evaluationsmetrik

Ansatz B fügt dem Evaluations-Framework eine Wirtschaftlichkeits-Dimension hinzu, die bei Ansatz A nicht existiert. Die Gegenüberstellung der drei Strategien bildet einen eigenständigen Teilbefund für die Thesis.

**Kostenstruktur pro Strategie (GPT-4o-Preise):**

```
Strategie   Kontext-Quelle             Kontext-Tokens   Ø Kosten/Mockup
---------   --------------------------  ---------------  ---------------
B1          Kein Kontext               0                ~$0.001
B2          RAW-Docs (erkannt)         5k–50k           ~$0.02–0.15
B3          CLEANED-Docs (erkannt)     1k–10k           ~$0.005–0.03
```

**Für die Evaluation relevante Befunde:**

- Falls B1 ≈ B2 ≈ B3 bei Qualität: GPT-4o hat ausreichendes Vorwissen, expliziter Kontext ist überflüssig → Dokumentations-Kosten sind verschwendet
- Falls B2 > B1 aber B3 ≈ B2: Bereinigung lohnt sich — gleiche Qualität bei ~80% weniger Tokens
- Falls B2 > B3 > B1: Dreistufige Hierarchie — jede Informationsschicht bringt messbaren Mehrwert

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
SYSTEM_PROMPT_TEMPLATE_ZERO_SHOT = """...
STRICT REQUIREMENTS:
...
- [Neue Regel hinzufügen]   ← Constraint-Ergänzung
...
"""
```

Änderungen am System-Prompt gelten für alle drei Strategien gleichzeitig.

### 10.3 Modell-Wechsel

Der Modell-Name ist in `API_MODEL` zentralisiert:

```python
API_MODEL = 'GPT-5.3-Codex / gpt-5.4'
# Alternativ für Kostensenkung:
# API_MODEL = 'gpt-5.4-mini'
```

Ein Modell-Wechsel wirkt sich auf alle Strategien gleichermaßen aus. Wichtig: Bei Modell-Wechsel muss auch Ansatz C auf dasselbe Modell umgestellt werden, um die Modell-Variable kontrolliert zu halten.

---

## 11. Position im methodischen Gesamtvergleich

| Aspekt                   | Ansatz A (Regelbasiert)             | Ansatz B (Metadaten-LLM)              | Ansatz C (Vision-LLM)               |
|--------------------------|-------------------------------------|---------------------------------------|-------------------------------------|
| Eingabe                  | Figma-JSON                          | Figma-JSON + Doku-Kontext             | Figma-PNG + Doku-Kontext            |
| Modell                   | keines                              | GPT-5.3-Codex / GPT-5.4               | GPT-5.3-Codex / GPT-5.4 (identisch) |
| Entscheidungslogik       | Deterministisch                     | Probabilistisch                       | Probabilistisch                     |
| Kontext-Steuerung        | `COMPONENT_MAP`/`FRAME_MAP`         | B1 (kein) / B2 (RAW) / B3 (CLEANED)   | Dokumentations-Kontext              |
| Erweiterbarkeit          | Manuell, regelbasiert               | `.md`-Datei ergänzen → fertig         | `.md`-Datei ergänzen → fertig       |
| Reproduzierbarkeit       | 100%                                | ~hoch (geringe LLM-Varianz)           | ~hoch                               |
| Externe Abhängigkeiten   | Keine                               | OpenAI-API                            | OpenAI-API                          |
| Kosten pro Mockup        | ~$0                                 | B1: ~$0.001 / B2: ~$0.08 / B3: ~$0.02 | ~$0.05–0.15 (Bild-Tokens)           |
| Metrik-Erfassung         | 12 Werte (Coverage, Tiefe, Timing)  | 14 Werte + Tokens + Kosten            | 14 Werte + Tokens + Kosten          |
| Strukturgarantie         | Ja (deterministischer AST)          | Nein (`parse_ok`-Flag nötig)          | Nein                                |
| Erwarteter Hauptvorteil  | Präzision, Kosten, Geschwindigkeit  | Sprachflexibilität, Semantik          | Visuelles Verständnis               |
| Erwarteter Hauptnachteil | Sprödigkeit bei Naming-Abweichungen | Token-Kosten (B2), Varianz            | Pixel-Approximation, hohe Kosten    |

Ansatz B bildet das mittlere Glied im Methodenvergleich: flexibler als A durch natürlichsprachliches Kontext-Verständnis, aber ohne die visuelle Eingabe von C. Die interne B1/B2/B3-Varianz liefert zusätzlich einen eigenständigen Befund darüber, wie viel (a) Dokumentations-Kontext und (b) Dokumentations-Bereinigung für LLM-basierte Transformationen tatsächlich bringen.
