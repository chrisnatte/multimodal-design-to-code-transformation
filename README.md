# Multimodale Design-to-Code-Transformation: Analyse, Entwicklung und Vergleich von regel-, metadaten- und visionsbasierten Ansätzen zur automatisierten Generierung von PrimeVue-Benutzeroberflächen aus Figma-Mockups
von _Christopher Nattefort_

Dieses Repository enthält Datensätze, Implementierungen der Ansätze A bis D und Evaluationen zur automatisierten Generierung von PrimeVue-konformen Vue-Oberflächen aus Figma-Mockups.

## Schnellorientierung

- `dataset/`: Eingabedaten (Figma, Storybook, Bilder)
- `primevue/`: PrimeVue-Dokumentation und extrahierte API-Typen
- `method-*-documentation.md`: Beschreibung der Ansätze A-D
- `method-*-implementation.ipynb`: Notebook-Implementierungen der Ans#tze A-D
- `evaluations/`: Alle ausgewerteten Kennzahlen als CSV/JSON + Ergebnisberichte
- `results/`: Generierte Code-Ergebnisse je Ansatz/Subset
- `figures/`: Exportierte Abbildungen für die Auswertung

## Repo-Struktur

```text
|- dataset/
|  |- figma-data/
|  |  |- cleaned/               # bereinigte Daten
|  |  |- raw/                   # rohe Figma-Exporte
|  |  |- split/                 # Datensatz-Splits
|  |  |- README.md              # Details zum Datensatz
|  |- images/                   # Bilder von den Mockups
|  |- storybook/                # Vue/PrimeVue Storybook für Rendering/Evaluation
|  |  |- src/                   # Storybook-Quellcode
|  |  |  |- code/               # generierte Vue-Dateien (unterteilt nach Ansatz/Komplexität/Variante)
|  |  |  |   |- components/     # generierte Komponenten-Vue-Dateien
|  |  |  |   |- uis/            # generierte UI-Vue-Dateien
|  |  |  |- stories/            # generierte Stories für Ground Truth und generierte Ergebnisse
|
|- figures/                     # finale Diagramme/Grafiken
|
|- primevue/
|  |- component-documentation/
|  |  |- raw/                       # unbearbeitete PrimeVue-Doku
|  |  |- cleaned/                   # bereinigte PrimeVue-Doku
|  |  |- cleaning_report.json       # Report der Doku-Bereinigung
|  |- component-types/
|  |  |- primevue-api-types-v1.json # extrahierte API-Typen aus TypScript-Definitionen

|- evaluations/
|  |- evaluation.md                     # Methodik der Evaluation
|  |- evaluation_results.md             # zusammengefasste Ergebnisse
|  |- components/                       # Metriken für Komponenten-Datensatz
|  |- uis/                              # Metriken für UI-Datensatz (pretty/messy)
|  |- visual_fidelity_snapshots/        # DOM-Snapshots für Visual Fidelity Evaluation
|  |- stories_manifest_components.json  # Manifest der Stories für Komponenten
|  |- stories_manifest_uis.json         # Manifest der Stories für UIs
|
|- results/                     # Generierte CSV-Ergebnisse je Ansatz (A/B/C/D)
|
|- evaluation-analysis.ipynb                                    # Analyse der Evaluationsergebnisse
|- evaluation_code_quality_maintainability.ipynb                # Code-Qualität/Wartbarkeit
|- evaluation_component_prop_accuracy.ipynb                     # Prop-Accuracy
|- evaluation_f1_scores.ipynb                                   # Component-Mapping (Precision/Recall/F1)
|- evaluation_visual_fidelity.ipynb                             # visuelle Treue
|- evaluation_visual_fidelity_helper_render_and_extract.ipynb
|
|- figma-api-node-exporter.ipynb                # Exportiert Figma-API-Daten in JSON
|- figma-mockup-data-cleaner.ipynb              # Bereinigt Figma-API-Daten
|- figma-mockup-data-cleanup-analysis.ipynb     # Analysiert die Bereinigung der Figma-Daten
|- figma-mockup-data-splitter.ipynb             # Teilt den Komponenten-Mockups-Dateien in einzelne Mockup-Dateien auf
|
|- method-a-documentation.md        # Dokumentation Ansatz A
|- method-a-implementation.ipynb    # Implementierung Ansatz A
|- method-b-documentation.md        # Dokumentation Ansatz B
|- method-b-implementation.ipynb    # Implementierung Ansatz B
|- method-c-documentation.md        # Dokumentation Ansatz C
|- method-c-implementation.ipynb    # Implementierung Ansatz C
|- method-d-documentation.md        # Dokumentation Ansatz D
|- method-d-implementation.ipynb    # Implementierung Ansatz D
|
|- primevue-component-documentation-downloader.ipynb    # Lädt die PrimeVue-Dokumentation herunter
|- primevue-component-documentation-cleaner.ipynb       # Bereinigt die PrimeVue-Dokumentation
|- primevue-component-types-extraction.ipynb            # Extrahiert die API-Typen aus den PrimeVue TypeScript-Definitionen
|
|- storybook-generate-stories.ipynb         # Generiert automatisiert Storybook-Stories für Ground Truth und generierte Ergebnisse
```