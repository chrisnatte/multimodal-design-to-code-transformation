# Evaluation der verschiedenen Ansätze

**Inwieweit unterscheiden sich regel-, metadaten- und visionsbasierte Transformationsverfahren hinsichtlich ihrer Eignung zur automatisierten Generierung von PrimeVue-konformem Benutzeroberflächen aus Figma-Mockups?**

## Unterforschungsfragen

1. **Mapping-Präzision**: Welches Verfahren erzielt die höchste Trefferrate bei der Identifikation und dem framework-spezifischen Mapping von PrimeVue-Komponenten, und inwiefern beeinflusst die strukturelle Qualität des Figma-Designs diese Präzision?

2. **Code-Qualität**: In welchem Maße erfüllen die generierten Ergebnisse die PrimeVue-API-Konventionen – insbesondere hinsichtlich Slot-Nutzung, Prop-Bindung und Passthrough-Attributen – sowie allgemeine Kriterien der Code-Wartbarkeit?

3. **Visuelle Treue**: In welchem Ausmaß erreichen die drei Verfahren visuelle Übereinstimmung mit der Figma-Vorlage, und welche verfahrensspezifischen Klassen von Abweichungen lassen sich identifizieren?

4. **Nacharbeitsaufwand**: Welcher Grad an manueller Nacharbeit ist nach jeder Transformationsmethode erforderlich, und wie skaliert dieser Aufwand mit der Komplexität der Eingabe-Mockups?

5. **Robustheit**: Wie robust verhalten sich die drei Verfahren gegenüber variierender struktureller Qualität der Figma-Eingabedaten?

6. **Effizienz**: Wie unterscheiden sich die drei Verfahren hinsichtlich Verarbeitungszeit, Token-Verbrauch und monetärer Kosten pro Transformation, und in welchem Verhältnis stehen diese Aufwände zur erzielten Ergebnisqualität?

## Metriken

| Metrik                       | UF   | Beschreibung                                                                                                     | Begründung                                                                                                                           |
|------------------------------|------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Component F1-Scores (P,R,F1) | 1    | Precision, Recall und F1 bei der Identifikation von PrimeVue-Komponenten per AST-Vergleich                       | Misst die Genauigkeit der Komponentenidentifikation als Kernfähigkeit aller drei Ansätze                                             |
| Component-Prop Accuracy      | 1, 2 | Anteil der Props pro korrekt identifizierter Komponente, deren Name und Wert mit der Ground Truth übereinstimmen | Misst die Tiefe des Mappings, sodass  zwischen "richtige Komponente, falsche Props" und vollständiger Korrektheit differenziert wird |
| TreeBLEU Score               | 1, 2 | BLEU-Score adaptiert für die Baumstruktur des Vue-Templates                                                      | Bewertet die strukturelle Ähnlichkeit                                                                                                |
| Parse-OK-Rate                | 2    | Anteil der Outputs mit gültigem <template> und <script>-Block                                                    | Basisindikator für strukturelle Integrität                                                                                           |
| Compile Success Rate         | 2    | Anteil der generierten Code-Snippets, die ohne Fehler kompilieren (vue-tsc --noEmit)                             | Misst die technische Korrektheit des generierten Codes, was für die praktische Nutzbarkeit entscheidend ist                          |
| Import-Completeness          | 2    | Anteil der im Template verwendeten PrimeVue-Komponenten, die im Script importiert sind                           | Misst die Vollständigkeit der generierten Code-Snippets hinsichtlich notwendiger Abhängigkeiten                                      |
| CLIP-Similarity              | 3    | Cosine-Similarity der CLIP-Embeddings zwischen Figma-Screenshot und gerendertem Output                           | Erfasst semantische visuelle Ähnlichkeit, robust gegen kleine Positionsverschiebungen                                                |
| Manueller Nacharbeitsaufwand | 4    | Kategoriale Bewertung: Trivial / Moderat / Grundlegend pro generiertem Code                                      | Misst den praktischen Aufwand für die Nachbearbeitung, was für die Effizienz des Verfahrens entscheidend ist                         |
| Degradationsfaktor           | 5    | Verhältnis Score_hard / Score_simple für wichtige Pflichtmetrik (F1, TreeBLEU, CLIP)                             | Quantifiziert Robustheit als relative Qualitätsveränderung über Komplexitätsstufen                                                   |
| Verarbeitungszeit            | 6    | Zeit für die Transformation von Figma zu Vue-Template und Script                                                 | Misst die Effizienz der Verfahren, insbesondere im Hinblick auf die Skalierbarkeit bei komplexeren Designs                           |
| API-Kosten                   | 6    | Token-basierte Kosten pro Mockup-Transformation                                                                  | Quantifiziert die wirtschaftlichen Kosten der Verfahren, insbesondere bei der Skalierung auf größere Projekte                        |

- **Component F1-Score** (AST-Vergleich):
  - Precision: Anteil korrekt identifizierter PrimeVue-Komponenten an allen als PrimeVue identifizierten Komponenten.
  - Recall: Anteil korrekt identifizierter PrimeVue-Komponenten an allen tatsächlich im Figma-Design vorhandenen PrimeVue-Komponenten.
  - F1-Score: Harmonisches Mittel aus Precision und Recall, um eine ausgewogene Bewertung zu ermöglichen.
  - Umsetzung: Import-Zeilen aus generiertem SFC und Ground Truth extrahieren, als Mengen vergleichen. Alternativ: Tag-Scan im <template>-Block.

- **Component-Prop Accuracy**:
  - Berechnung: Anteil der Props, deren Name und Wert mit der Ground Truth übereinstimmen. Unterscheidet zwischen "richtige Komponente, falsche Props" und "richtige Komponente, richtige Props"
  - Umsetzung: Pro korrekt identifizierter Komponente (aus F1-Schritt) die gesetzten Props mit den Ground-Truth-Props abgleichen. Drei Kategorien: korrekt (Name + Wert stimmen), falsch (Name stimmt, Wert abweichend), halluziniert (Prop existiert nicht in Ground Truth). Score = korrekte / (korrekte + falsche + halluzinierte).

- **TreeBLEU Score**:
  - Berechnung: Der <template>-Block wird als Baum geparst (z.B. via beautifulsoup4 oder lxml). Aus dem Baum werden Pfad-n-grams extrahiert (Sequenzen von Tag-Namen entlang der Eltern-Kind-Pfade). Der BLEU-Score wird über diese Pfad-n-grams berechnet statt über flache Token-Sequenzen.
  - Umsetzung: Template-Block aus SFC isolieren, HTML-Parser auf beide (Generiertem Code und Ground Truth) anwenden, Pfade bis Tiefe 4 extrahieren, Standard-BLEU mit nltk.translate.bleu_score berechnen.
  - Literaturanschluss: Adaptiert aus dem Design2Code-Benchmark (Si et al., NAACL 2025).

- **Parse-OK-Rate**:
  - Berechnung: Binäre Prüfung pro Datei: enthält der Output sowohl <template> als auch <script? Aggregiert als Prozentsatz über alle Dateien einer Methode/Strategie.
  - Umsetzung: Bereits in den Pipeline-Reports als parse_ok-Feld vorhanden (Ansatz B/C). Für Ansatz A per Definition immer True. Keine zusätzliche Implementierung nötig.

- **Compile Success Rate**:
  - Berechnung: Binäre Prüfung pro Datei: besteht der generierte SFC vue-tsc --noEmit ohne Fehler? Aggregiert als Prozentsatz.
  - Umsetzung: Subprocess-Aufruf pro generierter .vue-Datei. Setzt eine konfigurierte Vue/TypeScript-Umgebung voraus (via Storybook-Setup bereits vorhanden). Exit-Code 0 = Erfolg, alles andere = Fehlschlag.

- **Import-Completeness**:
    - Berechnung: Berechnung: Alle PrimeVue-Komponentennamen im <template>-Block identifizieren (Tags mit Großbuchstabe, z.B. <Button>, <Password>). Prüfen, ob jeder identifizierte Tag einen korrespondierenden Import im <script setup>-Block hat. Score = importierte / verwendete.
    - Umsetzung: Regex auf dem Template-Block (<([A-Z][a-zA-Z]+)) extrahiert verwendete Tags, Regex auf dem Script-Block (import (\w+) from) extrahiert Imports. Mengenvergleich.

- **CLIP-Similarity**:
  - Berechnung: Cosine-Similarity zwischen den CLIP-Embeddings (ViT-B/32 oder ViT-L/14) des Figma-Original-Screenshots und eines Screenshots des gerenderten Generats. Wertebereich 0–1.
  - Umsetzung: Generierte SFCs in Storybook rendern, per Playwright/Puppeteer screenshotten. Beide Bilder durch CLIP-Encoder (openai/clip-vit-base-patch32 via transformers-Library) embedden. Cosine-Similarity berechnen.
  - Voraussetzung: Render-Pipeline (Storybook + Headless Browser)
  - ~Literaturanschluss: Adaptiert aus der visuellen Evaluierung in Design2Code-Benchmarks (Si et al., NAACL 2025).~

- **Manueller Nacharbeitsaufwand**:
  - Berechnung: Kategoriale Bewertung pro generiertem Code-Snippet:
    - Trivial: Keine oder nur minimale Anpassungen nötig (z.B. kleinere Prop-Wertkorrekturen).
    - Moderat: Deutliche Anpassungen nötig, aber Grundstruktur erkennbar (z.B. Umstrukturierung von Komponenten, Hinzufügen fehlender Imports).
    - Grundlegend: Generierter Code ist unbrauchbar und muss größtenteils neu geschrieben werden.
  - Umsetzung: Manuelle Inspektion einer repräsentativen Stichprobe von generierten SFCs pro Methode/Strategie.

- **Degradationsfaktor**:
  - Berechnung: Für ausgewählte Metriken (F1, TreeBLEU, CLIP) wird der Score für die "einfache" Komplexitätsstufe (simple) und die "schwere" Komplexitätsstufe (hard) berechnet. Der Degradationsfaktor wird als Verhältnis Score_hard / Score_simple berechnet. Werte nahe 1 deuten auf hohe Robustheit hin, während Werte deutlich unter 1 auf eine starke Qualitätsverschlechterung bei höherer Komplexität hinweisen.
  - Umsetzung: Aus den bestehenden per_strategy_complexity-Aufschlüsselungen in den Pipeline-Reports berechenbar. Keine zusätzliche Datenerhebung nötig.

- **Verarbeitungszeit**:
  - Berechnung: Zeit in Sekunden für die vollständige Transformation eines Figma-Mockups in Vue-Template und Script. Für Ansatz A: nur generate_sfc()-Aufruf (Millisekunden). Für Ansatz B/C: API-Latenz inklusive Netzwerk (Sekunden).
  - Umsetzung: Bereits in allen Pipeline-Reports als duration_ms vorhanden. Aggregation als Mittelwert und Median pro Methode/Strategie/Komplexität.
  - ~Literaturanschluss: Standardmetrik für Effizienz in Code-Generierungsstudien (z.B. Chen et al., "Evaluating Large Language Models Trained on Code", NeurIPS 2021).~

- **API-Kosten**:
  - Berechnung: Input-Tokens × Preis_Input + Output-Tokens × Preis_Output pro Mockup. Nur für Ansatz B und C relevant (Ansatz A hat keine API-Kosten).
  - Umsetzung: Bereits in den Pipeline-Reports als cost_usd, input_tokens und output_tokens vorhanden. Aggregation als Summe pro Strategie und Mittelwert pro Mockup.