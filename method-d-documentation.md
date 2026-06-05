# Ansatz D — Hybride LLM-Transformation (Metadaten + Vision)

## 1. Übersicht

Der hybride Ansatz (Ansatz D) kombiniert die Eingabemodalitäten der Ansätze B und C. Das MLLM erhält sowohl den bereinigten Figma-JSON als auch den Screenshot des Mockups gleichzeitig in einem einzigen API-Aufruf. Damit stehen dem Modell strukturelle Metadaten (Komponentenhierarchie, Properties, Layout-Werte) und visuelle Information (Erscheinungsbild, Abstände, Labels, States) parallel zur Verfügung.

**Kernhypothese gegenüber B und C:** Strukturierte Metadaten und visueller Screenshot sind komplementäre Informationsquellen. Figma-JSON ist präzise bei Komponenteneigenschaften, aber blind für visuelle Gestaltung. Screenshots transportieren das visuelle Erscheinungsbild vollständig, aber verlieren explizite API-Properties. Die Kombination beider Quellen sollte die Stärken beider Einzelansätze vereinen und deren Schwächen kompensieren.

**Methodische Position:** Ansatz D ist kein eigenständiger Ansatz neben A, B, C, sondern eine Kombination der beiden V/LLM-basierten Ansätze B und C. Es wird die Frage beantwortet, ob die gleichzeitige Verfügbarkeit beider Eingabemodalitäten zu messbaren Qualitätssteigerungen führt und in welchem Verhältnis dieser Mehrwert zu den höheren Kosten steht.

Stand der Implementierung: Der Prototyp testet drei Kontext-Strategien (D1, D2, D3) in einer gemeinsamen Pipeline. Identisches Modell (`gpt-5.3-codex`), identische Dokumentations-Strategien, identischer Datensatz wie B und C.

### Designprinzipien

| Prinzip                       | Umsetzung                                                                             |
|-------------------------------|---------------------------------------------------------------------------------------|
| Dual-Input                    | JSON und Screenshot im selben API-Call — kein separates Preprocessing                 |
| Konfliktauflösung             | Explizite Prioritätsregel im Prompt: JSON für Struktur, Screenshot für visuelle Treue |
| Modell-Kontrolle              | Identisches Modell wie B und C → Eingabemodalität als einzige Variable                |
| Strategie-Parität             | D1/D2/D3 identisch zu B1/B2/B3 und C1/C2/C3 → vollständig vergleichbar                |
| Reproduzierbarkeit (begrenzt) | Gleicher Prompt → gleicher Kontext, aber Ausgabe ist nicht deterministisch            |

---

## 2. Pipeline-Architektur

```
┌─────────────────────────────────────────────────────┐
│  Cleaned Figma-JSON         PNG-Screenshot           │  Beide Eingaben
└───────────┬─────────────────────────┬───────────────┘
            │                         │
            ▼                         │
┌─────────────────────────┐           │
│  Frame-Preprocessing    │           │  Schritt 0 (nur D)
│  _remove_outer_frame()  │           │  Äußersten Wrapper-Frame entfernen
└───────────┬─────────────┘           │
            │                         │
            ▼                         │
┌─────────────────────────┐           │
│  Komponenten-Erkennung  │           │  D2/D3: JSON → erkannte Komponenten
│  (detect_components)    │           │  D1: entfällt (kein Kontext)
└───────────┬─────────────┘           │
            ▼                         │
┌─────────────────────────────────────────────────────┐
│  Kontext-Builder                                    │  Schritt 1
│  ├─ D1: Kein Kontext              (0 Tokens)        │
│  ├─ D2: RAW-Docs erkannter Komp.  (~5–50k Tokens)   │
│  └─ D3: CLEANED-Docs erkannter K. (~1–10k Tokens)   │
└───────────┬─────────────────────────────────────────┘
            │                         │
            ▼                         ▼
┌─────────────────────────────────────────────────────┐
│  Prompt-Builder                                     │  Schritt 2
│  System: Rolle + Regeln + Konfliktauflösung + Doku  │
│  User:   [image_url-Block] + [JSON-Text-Block]      │  ← Dual-Input
└───────────┬─────────────────────────────────────────┘
            ▼
┌─────────────────────────┐
│  Responses API-Aufruf   │  Schritt 3: gpt-5.3-codex (Zero-Shot)
│  (call_llm_hybrid)      │  Endpunkt: /v1/responses
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Antwort-Parser         │  Schritt 4: output[0].content[0].text
│  (extract_sfc)          │
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Metrik-Erfassung       │  Schritt 5: Tokens, Kosten, Timing, Parse-OK
│  (_metrics_d, Report)   │  → metrics_report_d.json
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Vue 3 SFC mit PrimeVue │  Ausgabe (01-d1.vue / 01-d2.vue / 01-d3.vue)
└─────────────────────────┘
```

Der wesentliche Unterschied zur Pipeline von B und C liegt in Schritt 2: Der User-Content ist ein Array aus Bild-Block und JSON-Text-Block gleichzeitig, in einem einzigen API-Call. Außerdem wird der äußerste FRAME-Wrapper vorab entfernt (Schritt 0), um den JSON-Kontext für das Modell zu entlasten.

---

## 3. Frame-Preprocessing (D-spezifisch)

Ansatz D enthält einen Preprocessing-Schritt, der in B und C nicht vorhanden ist: `_remove_outer_figma_frame()` entfernt den äußersten Wrapper-Frame, wenn er nur ein Kind enthält:

```python
def _remove_outer_figma_frame(figma_root: dict) -> dict:
    if figma_root.get('type') == 'FRAME' and \
       len(figma_root.get('children', [])) == 1:
        return figma_root['children'][0]
    return figma_root
```

**Begründung:** Da der JSON als Text-Block im Prompt übergeben wird und damit Token-Kosten verursacht, reduziert das Entfernen des redundanten Wrapper-Frames unnötige Verschachtelungstiefe. Der Screenshot liefert die gleiche visuelle Information vollständiger, dabei müssen die JSON-Daten nur die Struktur transportieren, nicht redundante Container-Ebenen.

**Wann greift der Schritt:** Bei allen Mockups, deren Figma-Root-Node ein FRAME mit genau einem Kind ist (typisch nach dem Cleaning-Notebook).

---

## 4. Prompt-Architektur

### 4.1 System-Prompt

Der System-Prompt von Ansatz D erweitert den Ansatz-C-Prompt um zwei entscheidende Abschnitte: die explizite Erwähnung beider Eingabequellen und eine Konfliktauflösungsregel.

```
You are an expert Vue 3 and PrimeVue developer.
Transform the given Figma mockup into a complete, working Vue 3 SFC
by combining two inputs:
1) Structured metadata (Figma JSON)
2) Visual evidence (screenshot)

STRICT REQUIREMENTS:
- Use PrimeVue 4 components exclusively for all UI elements visible
  in the screenshot and represented in JSON
- Use <script setup> syntax (no Options API)
- Import every PrimeVue component used: import Button from 'primevue/button'
- Use Tailwind CSS utility classes for layout and spacing
- Use reactive() from Vue for all form/input state
- Map Figma Auto-Layout (HORIZONTAL/VERTICAL) to flex/flex-col
- Output ONLY the Vue SFC — no explanation, no markdown fences, no prose
- Return exactly one complete Vue SFC, starting directly with <template>
  and ending with </script>
- If screenshot and JSON conflict, prefer screenshot for visual appearance
  and JSON for structural intent and component identity
- Before finalizing, verify that the SFC is syntactically valid,
  all used PrimeVue components are imported, and all form/input state
  uses reactive()

INPUT GUIDANCE:
- Use JSON for hierarchy, component detection, and explicit properties
- Use screenshot for labels, visual grouping, spacing, and style cues
- Nodes with name starting with '_' are internal sub-instances (ignore)

PrimeVue DOCUMENTATION:
{context}
```

### 4.2 Konfliktauflösungsregel

Die Regel `"If screenshot and JSON conflict, prefer screenshot for visual appearance and JSON for structural intent and component identity"` ist das zentrale Steuerungselement von Ansatz D. Sie definiert explizit, welche Quelle bei Widersprüchen Vorrang hat:

| Aspekt                                       | Priorität  | Begründung                                                            |
|----------------------------------------------|------------|-----------------------------------------------------------------------|
| Visuelle Erscheinung (Farbe, Größe, Spacing) | Screenshot | Figma-Properties kodieren nicht alle Styling-Details                  |
| Komponentenidentität (Was ist es?)           | JSON       | `type=INSTANCE, name=button` ist präziser als visuell geschätzter Typ |
| Hierarchie und Struktur                      | JSON       | `layoutMode`, `children`-Reihenfolge                                  |
| Labels und Texte                             | Screenshot | Oft lesbarer als verschachtelte Figma-Text-Properties                 |
| Props und Varianten                          | JSON       | `componentProperties` enthält exakte API-Werte                        |

### 4.3 User-Prompt: Dual-Input-Struktur

Der User-Content ist ein Array aus zwei Blöcken (Bild und JSON-Text):

```python
'content': [
    {
        'type': 'input_image',
        'image_url': f'data:image/png;base64,{base64_image}',
        'detail': IMAGE_DETAIL,
    },
    {
        'type': 'input_text',
        'text': f'Transform this mockup into a Vue 3 SFC with PrimeVue.\n'
                f'Use both the screenshot and JSON below.\n\n'
                f'Figma Mockup JSON:\n```json\n{figma_json}\n```',
    },
]
```

Im Gegensatz zu Ansatz B (nur JSON-Text) und Ansatz C (nur Bild) enthält der User-Prompt hier beides gleichzeitig. Das JSON erscheint als Text-Block nach dem Bild.

### 4.4 Prompt-Strategie: Zero-Shot

Identisch mit B und C, sodass kein Few-Shot oder kein Chain-of-Thought verwendet wird.

---

## 5. Responses API vs. Chat Completions API

Ansatz D verwendet die **OpenAI Responses API** (`/v1/responses`) statt der Chat Completions API (`/v1/chat/completions`). Das Payload-Format unterscheidet sich in drei Punkten:

| Aspekt | Chat Completions (B, C) | Responses API (D) |
|---|---|---|
| Endpunkt | `/v1/chat/completions` | `/v1/responses` |
| Nachrichtenfeld | `messages` | `input` |
| Content-Type Bild | `image_url` | `input_image` |
| Content-Type Text | `text` | `input_text` |
| Antwort-Pfad | `choices[0].message.content` | `output[0].content[0].text` |
| Stop-Reason-Pfad | `choices[0].finish_reason` | `output[0].status` |

```python
payload = {
    'model':    API_MODEL,
    'metadata': metadata,
    'input': [
        {'role': 'system', 'content': system_prompt},
        {'role': 'user',   'content': [
            {'type': 'input_image',
             'image_url': f'data:image/png;base64,{b64}',
             'detail': IMAGE_DETAIL},
            {'type': 'input_text',
             'text': user_text},
        ]},
    ],
}
```

Die Responses API wird für Codex-Modelle (`gpt-5.3-codex`) benötigt. Für Standard-GPT-Modelle würde die Chat Completions API mit `image_url` und `text` verwendet.

---

## 6. Kontext-Strategien

Die Strategien D1/D2/D3 sind exakt parallel zu B1/B2/B3 und C1/C2/C3 definiert. Die Komponenten-Erkennung läuft auf dem Figma-JSON. Für D ist das JSON immer verfügbar, da es als Pflichtinput der Pipeline dient.

### 6.1 D1 - Kein Kontext

JSON + Screenshot, keine Dokumentation.

| Eigenschaft    | Wert                      |
|----------------|---------------------------|
| Kontext-Tokens | 0                         |
| JSON-Tokens    | ~2k–20k (mockup-abhängig) |
| Bild-Tokens    | ~85 (low) / ~1k–4k (high) |

**Hypothese:** Stärker als B1 und C1, da das Modell beide Informationsquellen gleichzeitig hat. Falls D1 ≈ C1, liefert der JSON bei fehlendem Doku-Kontext keinen messbaren Mehrwert.

### 6.2 D2 - RAW-Docs erkannter Komponenten

JSON + Screenshot + vollständige Docs der erkannten Komponenten.

| Eigenschaft    | Wert                      |
|----------------|---------------------------|
| Kontext-Tokens | ~5k–50k (mockup-abhängig) |
| JSON-Tokens    | ~2k–20k                   |
| Bild-Tokens    | ~1k–4k                    |

**Hypothese:** D2 ist der teuerste Ansatz im gesamten Vergleich (drei Token-Quellen gleichzeitig), sollte aber auch die beste Qualität liefern.

### 6.3 D3 - CLEANED-Docs erkannter Komponenten

JSON + Screenshot + bereinigte Docs der erkannten Komponenten.

| Eigenschaft    | Wert    |
|----------------|---------|
| Kontext-Tokens | ~1k–10k |
| JSON-Tokens    | ~2k–20k |
| Bild-Tokens    | ~1k–4k  |

**Hypothese:** Bestes Kosten-Qualitäts-Verhältnis innerhalb von Ansatz D, da geringeres Rauschen durch bereinigte Docs, drei Informationsquellen erhalten sind.

### 6.4 Strategie-Vergleich

| Eigenschaft    | D1      | D2           | D3               |
|----------------|---------|--------------|------------------|
| Dokumentation  | keine   | RAW selektiv | CLEANED selektiv |
| JSON im Prompt | ✓       | ✓            | ✓                |
| Screenshot     | ✓       | ✓            | ✓                |
| Gesamt-Tokens  | ~3k–25k | ~10k–75k     | ~4k–35k          |
| Kosten         | gering  | hoch         | mittel           |

---

## 7. Token-Kostenstruktur

Ansatz D hat drei additive Token-Quellen pro API-Aufruf, was ihn zum teuersten Einzelansatz macht:

```
Token-Zusammensetzung pro Aufruf (D2, Schätzung):

  System-Prompt-Base     ~800 Tokens
  Dokumentations-Kontext ~15.000 Tokens   (D2, Ø erkannte Komp.)
  Figma-JSON             ~8.000 Tokens    (Ø nach Frame-Preprocessing)
  Bild (high detail)     ~2.000 Tokens    (abhängig von Bildgröße)
  User-Text              ~50 Tokens
  ─────────────────────────────────────
  Gesamt Input           ~25.850 Tokens
  Output (SFC)           ~400 Tokens
```

**Erwartete Kosten über 30 Mockups × 3 Strategien:**

```
Strategie   Ø Input-Tokens   Gesamt-Kosten (Schätzung)
---------   --------------   -------------------------
D1          ~12k             ~$0.63
D2          ~26k             ~$1.37
D3          ~16k             ~$0.84
```

Für die Evaluation relevant: Falls D3 ähnliche Qualität wie D2 bei deutlich geringeren Kosten liefert, bestätigt das den Wert der Docs-Bereinigung auch im hybriden Kontext.

---

## 8. Metrik-Erfassung

Das Metrik-Schema ist identisch mit Ansatz C, ergänzt um das `image_detail`-Feld:

```python
{
    # Basis
    'input':               'simple-1',
    'output':              '1-d3.vue',
    'complexity':          'simple',
    'strategy':            'd3',
    'image_detail':        'high',
    'duration_ms':         4210.3,
    'sfc_bytes':           840,
    'sfc_lines':           38,
    'ast_depth_approx':    6,
    'parse_ok':            True,

    # LLM-spezifisch
    'input_tokens':        18340,    # Bild + JSON + Doku + Prompt
    'output_tokens':       420,
    'context_tokens':      7200,     # nur Dokumentations-Anteil
    'context_components':  5,
    'stop_reason':         'completed',
    'cost_usd':            0.0382,
    'error':               None,
}
```

**Besonderheit:** `input_tokens` enthält alle drei Token-Quellen (Bild, JSON, Dokumentation) zusammen. Der `context_tokens`-Wert erfasst nur den Dokumentations-Anteil. Der JSON-Anteil ergibt sich implizit als `input_tokens - context_tokens - bild_tokens - system_basis_tokens`.

---

## 9. Stärken und Limitationen

### 9.1 Stärken

| Eigenschaft                            | Bedeutung                                                                             |
|----------------------------------------|---------------------------------------------------------------------------------------|
| **Vollständige Information**           | Beide Quellen gleichzeitig verfügbar, kein Informationsverlust durch Modalitätswahl   |
| **Konfliktauflösung**                  | Explizite Prioritätsregel verhindert unterschiedliche Entscheidungen bei Diskrepanzen |
| **Robustheit bei JSON-Lücken**         | Fehlende oder unvollständige Metadaten werden durch visuelle Information kompensiert  |
| **Robustheit bei visueller Unschärfe** | Pixelähnliche Komponenten (Toggle vs. Checkbox) werden durch JSON-Typ eindeutig       |
| **Strukturpräzision**                  | JSON liefert exakte Hierarchie und Properties, die visuell nicht rekonstruierbar sind |

### 9.2 Limitationen

| Limitation                                  | Auswirkung                                                               | Adressierbar durch               |
|---------------------------------------------|--------------------------------------------------------------------------|----------------------------------|
| **Höchste Kosten**                          | Drei Token-Quellen → teuerster Ansatz                                    | D3 als Kostenkompromiss          |
| **Kontextfenster-Druck bei großen Mockups** | JSON + Bild + Doku + Prompt können 400k annähern                         | Frame-Preprocessing, D3 statt D2 |
| **Prompt-Komplexität**                      | Zwei Quellen mit Konfliktpotenzial erhöhen Instruktionskomplexität       | Präzisere Konfliktregeln         |
| **Nicht-Determinismus**                     | Gleiche Inputs können unterschiedliche Outputs erzeugen                  | Temperature=0                    |
| **Keine Strukturgarantie**                  | `parse_ok=False` möglich                                                 | Retry-Logik                      |
| **Responses API-Bindung**                   | Anderes Format als Chat Completions — höhere Implementierungskomplexität | API-Abstraktion                  |

### 9.3 Hypothesen für den Methodenvergleich

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

## 10. Beispiel-Output

### 10.1 Eingabe

Identisch mit B und C: das Password-Eingabe-Mockup. Ansatz D erhält zusätzlich den Screenshot.

### 10.2 Typischer D-Output

```vue
<template>
  <div class="flex flex-col gap-6 p-6">
    <div class="flex flex-col gap-2">
      <label for="password" class="text-sm font-medium text-gray-700">
        Passwort
      </label>
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

### 10.3 Vergleich A ↔ B ↔ C ↔ D

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

## 11. Position im methodischen Gesamtvergleich

| Aspekt               | A                  | B                | C               | D                  |
|----------------------|--------------------|------------------|-----------------|--------------------|
| Primäre Eingabe      | JSON               | JSON             | Screenshot      | JSON + Screenshot  |
| Modell               | keines             | gpt-5.3-codex    | gpt-5.3-codex   | gpt-5.3-codex      |
| API-Endpunkt         | —                  | Chat Completions | Responses API   | Responses API      |
| Kontext-Strategien   | COMPONENT_MAP      | B1/B2/B3         | C1/C2/C3        | D1/D2/D3           |
| Komponentenerkennung | Name-Matching      | LLM (JSON)       | LLM (Pixel)     | LLM (JSON + Pixel) |
| Reproduzierbarkeit   | 100%               | hoch             | hoch            | hoch               |
| Kosten pro Mockup    | ~$0                | ~$0.001–0.08     | ~$0.01–0.10     | ~$0.02–0.14        |
| Strukturgarantie     | Ja                 | Nein             | Nein            | Nein               |
| Erwarteter Vorteil   | Präzision          | Metadaten-Flex.  | Visuelle Treue  | Beide kombiniert   |
| Erwarteter Nachteil  | Naming-Sprödigkeit | Kein Screenshot  | Pixel-Unschärfe | Höchste Kosten     |

Ansatz D vervollständigt den Methodenvergleich als einziger Ansatz, der beide Eingabemodalitäten gleichzeitig nutzt. Er dient als theoretische Obergrenze für die erreichbare Qualität unter LLM-basierter Transformation: Wenn D nicht signifikant besser ist als das Maximum aus B und C, deutet das darauf hin, dass die Informationen beider Modalitäten für das Modell redundant sind und eine der beiden Eingaben ausreicht.
