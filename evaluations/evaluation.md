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

### UF1: Mapping-Präzision

| Metrik                       | Definition                                                                                                                                                                                                                                                                                          | Begründung                                                                                                                                                                                                                                                                                                                                                             |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | Component F1-Scores (P,R,F1) | Multiset-Vergleich der im `<template>` verwendeten PrimeVue-Komponenten gegen die Ground Truth. Precision = Anteil korrekt identifizierter an allen generierten Komponenten; Recall = Anteil korrekt identifizierter an allen in der Ground Truth vorhandenen Komponenten; F1 = harmonisches Mittel | Precision und Recall sind die etablierten Kennzahlen für Erkennung und Klassifikation von UI-Elementen. Ein hoher Recall zeigt, dass keine kritischen Elemente übersehen wurden, hohe Precision, dass die erkannten Elemente tatsächlich zutreffen; der F1-Score fasst beides zu einem Wert zusammen und steht für eine insgesamt erfolgreiche Nachbildung des Designs |
| ~~(TreeBLEU)~~               | BLEU-Score adaptiert für die Baumstruktur des Vue-Templates                                                                                                                                                                                                                                         | Bewertet die strukturelle Ähnlichkeit                                                                                                                                                                                                                                                                                                                                  |
| Component-Prop Accuracy      | Anteil der Props pro korrekt identifizierter Komponente, deren Name und Wert mit der Ground Truth übereinstimmen                                                                                                                                                                                    | Misst die Tiefe des Mappings, sodass  zwischen "richtige Komponente, falsche Props" und vollständiger Korrektheit differenziert wird                                                                                                                                                                                                                                   |


#### Berechnung der Component F1-Scores

- Grundgrößen:
  - Mockup i mit $G_i$ = Multiset der PrimeVue-Komponenten in der generierten SFC, extrahiert aus dem äußeren `<template>`-Block per Tiefen-verfolgender Suche (robust gegenüber verschachtelten Named-Slot-Templates wie `<template #incrementbuttonicon>...</template>`, die ein naiver nicht-gieriger Regex `<template>(.*?)</template>` fälschlich als Blockende interpretieren würde), anschließend Tag-Scan `<([A-Za-z][A-Za-z0-9]*)` über diesen Block
  - $R_i$ = Multiset der PrimeVue-Komponenten in der Ground Truth, analog extrahiert
  - Für eine Komponente c bezeichnet $g_i(c)$ die Anzahl in $G_i$ und $r_i(c)$ die Anzahl in $R_i$

Vergleich erfolgt als Multiset-Vergleich, nicht als Mengenvergleich, sodass gilt, wenn die generierte SFC drei Button-Instanzen und die Ground Truth nur eine enthält, muss dies als Precision-Verlust erfasst werden. Ein reiner Set-Vergleich würde diesen Fall fälschlich als perfekten Treffer werten.

**True Positives:** Pro Komponententyp zählt das Minimum aus generierter und erwarteter Häufigkeit:

$$
TP_i = \sum_{c} \min\big(g_i(c),\ r_i(c)\big)
$$

**Precision, Recall, F1 pro Mockup:**

$$
P_i = \frac{TP_i}{|G_i|} = \frac{TP_i}{\sum_c g_i(c)}
\qquad\qquad
R_i = \frac{TP_i}{|R_i|} = \frac{TP_i}{\sum_c r_i(c)}
$$

$$
F1_i = \frac{2 \cdot P_i \cdot R_i}{P_i + R_i} = \frac{2 \cdot TP_i}{|G_i| + |R_i|}
$$

**Randfallbehandlung** (als vorrangig geprüfter Sonderfall, nicht als unabhängige Einzelregeln):

- $|G_i| = |R_i| = 0$ (weder generierte noch erwartete PrimeVue-Komponenten) $\Rightarrow P_i := R_i := F1_i := 1$ (korrekt leer = perfekter Treffer)
- sonst, falls $|G_i| = 0$ (kein Output oder keine PrimeVue-Komponente erkannt) $\Rightarrow P_i := 0$
- sonst, falls $|R_i| = 0$ $\Rightarrow R_i := 0$ (im Testdatensatz nicht erwartet, aber zur Vermeidung einer Division durch 0 abgefangen)

**Aggregation über alle Mockups** - Berechnet werden sowohl das Makro- als auch das Mikro-Mittel:

$$
F1_{macro} = \frac{1}{N}\sum_{i=1}^{N} F1_i
\qquad\qquad
F1_{micro} = \frac{2 \cdot \sum_i TP_i}{\sum_i |G_i| + \sum_i |R_i|}
$$

mit $P_{macro}$, $R_{macro}$ und $P_{micro}$, $R_{micro}$ analog definiert (arithmetisches Mittel der
Pro-Mockup-Werte bzw. globale Summe von $TP$, $|G|$, $|R|$ vor der Quotientenbildung).

**Leitmetrik:** $F1_{macro}$, da UF1 nach der Eignung der *Methode* fragt und nicht nach der Gesamtmenge korrekt erkannter Komponenten über den Datensatz. Beim Mikro-Mittel würden`hard`-Mockups mit vielen Komponenten das Ergebnis dominieren und die Aussage für einfache Mockups verdecken. $F1_{micro}$ wird als Kontrollgröße mitgeführt, sodass eine deutliche Abweichung zwischen beiden Werten selbst ein berichtenswerter Befund (z. B. ein Ansatz versagt spezifisch bei komponentenreichen Mockups) darstellt. Da ohnehin nach Komplexitätsstufe ausgewertet wird, wird $F1_{macro}$ zusätzlich getrennt nach `simple`/`medium`/`hard` berechnet.

**Normalisierung:** Tag-Namen werden case-insensitiv gegen den Komponentenkatalog abgeglichen (`tag.lower()` gegen eine kanonische Lookup-Tabelle), damit z. B. `Button` und `button` nicht als unterschiedliche Komponenten gezählt werden. Diese Normalisierung ist einfacher als die`_normalize()`-Funktion aus der Komponentenerkennung für den Dokumentations-Kontext der B/C/D- Pipelines (dort werden zusätzlich Leerzeichen/Bindestriche/Unterstriche entfernt) — für PascalCase-Komponentennamen ohne interne Trennzeichen ist der Unterschied in der Praxis vernachlässigbar, methodisch sind es aber zwei getrennte Implementierungen.

**Zusatzerfassung:** Tags im Template, die weder auf einen bekannten PrimeVue-Komponentennamen noch auf ein natives HTML-Element passen, werden zusätzlich in zwei Kategorien erfasst (nicht Teil der F1-Berechnung, aber pro Mockup gespeichert): PascalCase-Tags ohne Katalogeintrag (`unrecognized_components` — Halluzination oder Katalog-Lücke) und native HTML-Elemente (`native_elements` — Rohbasis für die spätere Fallback-Rate aus UF2).

#### Berechnung der Component-Prop Accuracy

**Abhängigkeit von der F1-Berechnung:** Component-Prop Accuracy ist **konditional** auf die per Component-F1 gefundenen True Positives: Nur für Komponenten, die sowohl generiert als auch in der Ground Truth vorhanden sind, lassen sich Props sinnvoll vergleichen. Komponenten, die nur in $G_i$ (halluziniert) oder nur in $R_i$ (übersehen) vorkommen, tragen keine Prop-Information bei und werden hier nicht gewertet, da dieser Fehler bereits durch $P_i$/$R_i$ erfasst ist.
 
**Instanzmapping:** Component-F1 zählt pro Typ nur Häufigkeiten ($TP_i = \sum_c \min(g_i(c), r_i(c))$), ohne festzulegen, welche konkrete generierte Instanz zu welcher Ground-Truth-Instanz gehört. Für den Prop-Vergleich wird diese Zuordnung zusätzlich benötigt. Da Formularreihenfolge und Layout-Struktur zwischen Generat und Referenz in aller Regel korrespondieren, wird die Zuordnung über die **Dokumentreihenfolge** vorgenommen: Für jeden Komponententyp $c$ wird die $k$-te Instanz von $c$ in Traversierungsreihenfolge des generierten Templates mit der $k$-ten Instanz von $c$ in der Ground Truth gepaart, für $k = 1, \ldots, m_i(c)$ mit $m_i(c) = \min(g_i(c), r_i(c))$. Die restlichen Instanzen (die bereits als FP bzw. FN in Component-F1 eingehen) werden nicht gepaart und fließen nicht in die Prop-Bewertung ein.
 
Implementiert über `zip(gen_list, gt_list)` in `compute_prop_accuracy()`: Pythons `zip()` bricht beim kürzeren der beiden Iterables ab, wodurch $m_i(c) = \min(g_i(c), r_i(c))$ implizit erzwungen wird, ohne separate Berechnung. `gen_list`/`gt_list` stammen aus `extract_component_instances()`, das dieselbe tiefenrobuste Template-Block-Extraktion (`extract_template_block()`, siehe Component-F1) und dieselbe case-insensitive Komponentenerkennung gegen `PRIMEVUE_COMPONENTS_NORM` verwendet wie die F1-Berechnung — die Instanzreihenfolge innerhalb jedes Typs entspricht damit exakt der Dokumentreihenfolge im `<template>`-Block.
 
*Einschränkung:* Diese ordnungsbasierte Zuordnung kann bei stark abweichender struktureller Reihenfolge (z. B. vertauschte Formularfelder) falsch sein. Eine über Ähnlichkeit optimierte Zuordnung (bipartites Matching) wäre robuster, ist aber nicht implementiert.
 
**Prop-Extraktion.** Für jede gepaarte Instanz wird der Attribut-String des öffnenden Tags in drei Kategorien von Props zerlegt (`parse_props()`):
 
- **statische Props** (`label="Speichern"`) — Wert bereits ein Literal, direkt vergleichbar
- **dynamische Props** (`:severity="btnColor"`) — Wert ist ein JS-Ausdruck, der sowohl ein Literal (`:modal="true"`) als auch eine Variablenreferenz sein kann
- **Boolean-Shorthand** (`showButtons`, `binary`) — Attribut ohne Wert, wird auf den Platzhalterwert `'__boolean__'` normalisiert `v-model="x"` und `v-model:propName="x"` werden auf die Prop-Namen `:modelValue` bzw. `:<propName>` normalisiert (dynamischer Prop-Typ), da PrimeVue-Komponenten intern über `modelValue`/`update:modelValue` binden. Strukturdirektiven (`v-if`, `v-for`, `v-else`, …) sowie `class`, `style`, `id`, `ref`, `key` werden ausgeschlossen (`SKIP_PROPS`), da sie keine PrimeVue-Props sind.
 
**Wertnormalisierung.** Vor dem Vergleich werden Werte normalisiert (`normalize_prop_value()`): Anführungszeichen werden entfernt, Booleans auf Kleinschreibung vereinheitlicht, numerische Werte auf eine kanonische Fließkommadarstellung gebracht, und der Boolean-Shorthand-Platzhalter `'__boolean__'` wird auf `'true'` aufgelöst. Das verhindert, dass rein syntaktische Abweichungen (`"true"` vs. `true`, `1` vs. `1.0`) als inhaltlicher Fehler gewertet werden.
 
**Variablengebundene dynamische Props.** Für Props, deren Wert an eine lokale Variable statt an ein Literal gebunden ist (`:severity="statusSeverity"`), ist ein Wertvergleich auf Quelltextebene nicht aussagekräftig, da Variablennamen zwischen Generat und Referenz unabhängig voneinander vergeben werden. `is_literal_expr()` prüft dafür, ob ein dynamischer Prop-Ausdruck ein Literal ist (Zahl, Boolean, String) oder eine Variablen-/Ausdrucksreferenz. Ist mindestens einer der beiden Werte (generiert oder Ground Truth) keine literale Konstante, wird der Prop als **`unresolved`** eingeordnet — weder als korrekt noch als falsch gewertet.
 
Eine Rückverfolgung auf den Initialwert der referenzierten Variable (`const statusSeverity = ref(<Literal>)` im `<script setup>`-Block) ist nicht implementiert; `unresolved` ist damit ein bewusst konservativer Kompromiss, der die schwerwiegendste Fehlklassifikation (fälschlich „falsch" statt „nicht beurteilbar")verhindert, ohne die Komplexität einer Skript-Block-Auflösung einzuführen. Der Anteil `unresolved` wird pro Mockup und aggregiert mitgeführt, damit erkennbar bleibt, wie groß der Anteil der Props ist, für den keine belastbare Aussage getroffen werden konnte.
 
**Kategorisierung pro Prop.** Für jeden Prop-Namen $p$, der in der Ground-Truth-Instanz $r$ oder der generierten Instanz $g$ vorkommt:
 
$$
\text{cat}(p) =
\begin{cases}
\textbf{fehlend} & p \in \text{props}(r) \ \wedge\ p \notin \text{props}(g) \\
\textbf{nicht auflösbar} & p \in \text{props}(r) \cap \text{props}(g) \ \wedge\ p \text{ dynamisch} \ \wedge\ \neg\big(\text{literal}(v_g(p)) \wedge \text{literal}(v_r(p))\big) \\
\textbf{korrekt} & p \in \text{props}(r) \cap \text{props}(g) \ \wedge\ \text{norm}(v_g(p)) = \text{norm}(v_r(p)) \\
\textbf{falsch} & p \in \text{props}(r) \cap \text{props}(g) \ \wedge\ \text{norm}(v_g(p)) \neq \text{norm}(v_r(p)) \\
\textbf{halluziniert} & p \in \text{props}(g) \ \wedge\ p \notin \text{props}(r)
\end{cases}
$$
 
wobei $v_g(p)$, $v_r(p)$ die Rohwerte, $\text{norm}(\cdot)$ die Wertnormalisierung und$\text{literal}(\cdot)$ das Ergebnis von `is_literal_expr()` bezeichnet.
 
**Aggregation pro Mockup.** Über alle gepaarten Instanzen eines Mockups werden die Kategorien zu $K_i$ (korrekt), $F_i$ (falsch), $H_i$ (halluziniert), $M_i$ (fehlend), $U_i$ (nicht auflösbar) aufsummiert. Zwei getrennte Kennzahlen, **beide ohne $U_i$ im Nenner**, da `unresolved`-Props weder als Bestätigung noch als Widerlegung der Korrektheit zählen dürfen:
 
$$
\text{PropAcc}_i = \frac{K_i}{K_i + F_i + H_i}
\qquad\qquad
\text{MissingRate}_i = \frac{M_i}{M_i + K_i + F_i}
$$
 
$\text{PropAcc}_i$ ist precision-artig (Anteil der *gesetzten* Props, die korrekt sind), $\text{MissingRate}_i$ erfasst separat die Vollständigkeit (Anteil der in der Ground Truth vorhandenen Props, die im Generat fehlen). Ein fehlender Prop ist ein qualitativ anderer Fehler als ein falsch gesetzter oder halluzinierter — deshalb keine gemeinsame Kennzahl.
 
**Randfallbehandlung:** Ist der jeweilige Nenner $0$ (z. B. keine per F1 gematchten Komponenten im Mockup, oder alle gematchten Komponenten sind propless), wird der Wert nicht berechnet (`None`) statt fälschlich als perfekt (`1.0`) oder vollständig fehlerhaft (`0.0`) gewertet. Mockups mit `None` werden von der jeweiligen Aggregation ausgeschlossen, nicht als Extremwert gezählt — analog zur konditionalen Auswertung aus UF2.
 
**Aggregation über den Datensatz.** Wie bei Component-F1 werden Makro- und Mikro-Mittel berechnet:
 
$$
\text{PropAcc}_{macro} = \frac{1}{|\mathcal{I}|}\sum_{i \in \mathcal{I}} \text{PropAcc}_i
\qquad\qquad
\text{PropAcc}_{micro} = \frac{\sum_i K_i}{\sum_i (K_i + F_i + H_i)}
$$
 
mit $\mathcal{I}$ = Menge der Mockups mit definiertem $\text{PropAcc}_i$; $\text{MissingRate}_{macro}$und $\text{MissingRate}_{micro}$ sind analog über die jeweils definierten Mockups gebildet. Leitmetrik ist $\text{PropAcc}_{macro}$, aus denselben Gründen wie bei Component-F1 (UF1): gleichgewichtete Aussage über die Methode statt Dominanz komponentenreicher Mockups.

### UF2: Code-Qualität und PrimeVue-Konformität

| Stufe | Grund                   | Metrik                       | Definition                                                                                             | Begründung                                                                                                     |
|-------|-------------------------|------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| 0     | Strukturelle Integrität | Parse-OK-Rate                | Anteil der Outputs mit gültigem <template> und <script>-Block                                          | Basisindikator für strukturelle Integrität                                                                     |
| 1     | Technische Korrektheit  | Compile Success Rate         | Anteil der generierten Code-Snippets, die ohne Fehler kompilieren (vue-tsc --noEmit)                   | Misst die technische Korrektheit des generierten Codes, was für die praktische Nutzbarkeit entscheidend ist    |
| 2     | Vollständigkeit         | Import-Completeness          | Anteil der im Template verwendeten PrimeVue-Komponenten, die im Script importiert sind                 | Misst die Vollständigkeit der generierten Code-Snippets hinsichtlich notwendiger Abhängigkeiten                |
| 3     | Framework-Konformität   | PrimeVue-API-Conformity      | Anteil der generierten Komponenten, die PrimeVue-API-Konventionen (Slots, Props, Passthrough) erfüllen | Misst die Einhaltung der Framework-spezifischen Konventionen, entscheidend für Wartbarkeit und Erweiterbarkeit |
| 4     | Wartbarkeit             | Arbitrary Value Usage ( AVU) |                                                                                                        |                                                                                                                |
| 4     | Wartbarkeit             | Code Duplication Rate (CDR)  |                                                                                                        |                                                                                                                |
| 4     | Wartbarkeit             | Cyclomatic Complexity (CC)   |                                                                                                        |                                                                                                                |
| 4     | Wartbarkeit             | Lines of Code (LOC)          |                                                                                                        |                                                                                                                |
| 4     | Wartbarkeit             | Comment Density (CD)         |                                                                                                        |                                                                                                                |

**Teilemetriken for PrimeVue-API-Conformity:**

| Teilmetrik | Definition | Begründung |
|------------|------------|------------|

**Teilemetriken for Wartbarkeit:**

| Teilemetrik | Definition | Begründung |
|-------------|------------|------------|

### UF3: Visuelle Treue

| Metrik          | Definition | Begründung |
|-----------------|------------|------------|
| CLIP-Similarity |            |            |
| 

### UF4: Nacharbeitsaufwand

### UF5: Robustheit

### UF6: Effizienz

| Metrik            | Definition | Begründung |
|-------------------|------------|------------|
| Verarbeitungszeit |            |            |
| Token-Verbrauch   |            |            |
| API-Kosten        |            |            |

---

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