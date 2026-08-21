# Evaluationsergebnisse
 
Vergleich der vier Transformationsansätze zur automatisierten Generierung von PrimeVue-Vue-Komponenten aus Figma-Mockups:
 
- **Ansatz A** – regelbasiert (deterministisches Mapping, kein MLLM)
- **Ansatz B** – Metadaten-MLLM (Figma-JSON als Eingabe)
- **Ansatz C** – Vision-MLLM (Screenshot als Eingabe)
- **Ansatz D** – Hybrid (Figma-JSON + Screenshot)

Die Ergebnisse sind je Unterforschungsfrage nach **Komponenten-Datensatz (K-DS)** und **Benutzeroberflächen-Datensatz (BO-DS)** getrennt aufgeführt. Beim BO-DS wird zwischen der sauberen (*Pretty*) und der unstrukturierten (*Messy*) Variante unterschieden.
 
Hinweis zur statistischen Basis: Die Werte der MLLM-Ansätze (B, C, D) sind Mittelwerte über 18 Konfigurationen (3 Modelle × 2 Prompt-Strategien × 3 Kontext-Strategien). Ansatz A ist deterministisch und beruht auf einer einzigen Konfiguration (keine Standardabweichung, keine Prompt-/Kontext-Varianten). Bei sehr knappen Abständen (z. B. A vs. B/D beim K-DS-F1) sollte daraus keine belastbare Rangfolge abgeleitet werden.

---
 
## UF1: Mapping-Präzision
 
### 1.1 F1-Score
 
#### Komponenten-Datensatz
 
- Ansatz A, B und D liegen mit ~92 % F1-Score (macro) praktisch gleichauf (A 91,34 %, B 91,79 %, D 91,96 %); nur der visionsbasierte Ansatz C fällt mit 86,85 % spürbar ab und weist zugleich die größte Streuung auf (Standardabweichung 5,93 % gegenüber 2,28–2,72 % bei B/D)
  - Ursache: Ansatz C hat keine Figma-JSON-Daten zur genauen Identifikation der PrimeVue-Komponenten und muss allein aus dem Screenshot ableiten
  - Präzision (macro) bei allen Ansätzen hoch zwischen 94,82 % und 96,07 %; der Recall trennt die Ansätze: A/B/D bei 90,14–91,57 %, C nur bei 84,45 %
  - Recall beim hybriden Ansatz D mit 91,57 % am besten
- Über die Kontext-Strategien hinweg liegen die Strategien 2 (rohe Doku) und 3 (bereinigte Doku) am besten und nahezu gleichauf (90–93 %); Strategie 1 (ohne Doku) fällt v. a. bei C stark ab (79,96 % gegenüber 89,77 % / 90,83 %)
  - Der MLLM-Aufruf mit PrimeVue-Kontext bringt also rund +3 % gegenüber dem Aufruf ohne Doku, besonders stark bei C mit 10 bis 11 %, da er ohne Metadaten die Doku am dringendsten benötigt
- Der F1-Score fällt mit steigender Komplexität: von *simple* zu *hard* sinkt er bei allen Ansätzen (A 95,67 % → 87,03 %, B 95,29 % → 85,05 %, C 89,04 % → 82,81 %, D 95,37 % → 85,01 %). Der Degradationsfaktor *hard* liegt zwischen 0,89 (D) und 0,93 (C)
- Kleiner Unterschied zwischen Zero- und Few-Shot: Few-Shot verbessert den F1-Score um ~1,7–1,8 % (B +1,79, C +1,79, D +1,68 Prozent)

Zusammengefasst über die drei MLLM-Modelle:
  - Der metadatenbasierte (B) und der hybride (D) Ansatz erzielen die höchsten Werte über alle drei Modelle hinweg (91–93 %) und liegen bei Gemini 3.1 Pro Preview mit jeweils 93 % gleichauf
  - Der visionsbasierte Ansatz (C) ist durchgängig am schwächsten (85–89 %)

*Zugehörige Diagramme: UF1: F1-Score je Ansatz (Komponenten-Datensatz); UF1: F1-Score je MLLM-Modell und Ansatz (Komponenten-Datensatz); UF1: F1-Score je Kontext-Strategie und Ansatz (Komponenten-Datensatz); UF5: F1-Score nach Komplexität (Komponenten-Datensatz); UF1: F1-Score Zero-Shot vs. Few-Shot (Komponenten-Datensatz)*
 
#### Benutzeroberflächen-Datensatz
 
- **Pretty-Version:** Die MLLM-basierten Ansätze B und D mit Figma-JSON-Daten (90,31 % / 89,73 %) schneiden besser ab als der regel- und der visionsbasierte Ansatz (A 85,27 %, C 85,00 %)
  - Präzision insgesamt geringer als beim K-DS: B und C bei 88,82 und 87,67, A bei 83,09 %, D bei 89,18 %
  - Recall beim metadatenbasierten Ansatz B mit 91,81 % am besten
- **Messy-Version:** Drastischer Einbruch beim regelbasierten Ansatz A auf **0 %** bei F1-Score, Präzision und Recall —> es wird keine einzige Komponente korrekt gemappt. Die MLLM-basierten Ansätze liegen dagegen zwischen 80,50 % (B) und 84,39 % (C)
  - Klarer Vorteil der MLLM-basierten Ansätze: Sie verarbeiten auch untrainierte und unstrukturierte Daten (gegenüber der Pretty-Version) dank ihres umfangreichen Trainings, Wissenskorpus und ihrer Generalität noch recht gut
  - Präzision bleibt vergleichbar mit der Pretty-Version (~90 %)
  - Recall geringer: B 74,12 %, D 77,02 %, C 80,44 % —> der vergleichsweise hohe Wert bei Ansatz C ist bemerkenswert (nahe am Pretty-Wert), da es für den rein visionsbasierten Ansatz eigentlich keinen prinzipiellen Unterschied zwischen den beiden Varianten geben sollte
- Nach Modellen: Claude-Sonnet-5 schneidet beim BO-DS im Mittel am besten ab `(86,92 % gegenüber 86,09 % bei GPT-5.6-Terra und 81,90 % bei Gemini 3.1 Pro Preview)`
  - Pretty: B und D fast immer gleichauf zwischen 88 und 92 %; C durchgängig niedriger, zwischen 81 (bei Gemini 3.1 Pro Preview) und 87 % (bei GPT-5.6-Terra)
  - Messy: Der visionsbasierte Ansatz C ist hier im Schnitt am besten mit ~84 %
- Beim BO-DS sind geringere Unterschiede zwischen den verschiedenen Kontext-Strategien zu erkennen als beim K-DS
- Minimal größerer Unterschied zwischen Zero- und Few-Shot als beim K-DS: bei Pretty +3,3–4,7 %, bei Messy deutlich größer mit +3,5 bis +9,8 % (B +9,79, C +8,02, D +3,48)

*Zugehörige Diagramme: UF5: F1-Score Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF1: F1-Score je MLLM-Modell und Ansatz (Benutzeroberflächen-Datensatz); UF1: F1-Score je Kontext-Strategie und Ansatz (Benutzeroberflächen-Datensatz); UF1: F1-Score Zero-Shot vs. Few-Shot (Benutzeroberflächen-Datensatz)*
 
#### Fazit UF1 - F1-Score
 
Bei den sauberen Daten (K-DS und BO-DS Pretty) sind der metadatenbasierte (B) und der hybride (D) Ansatz am stärksten und liegen eng beieinander; der visionsbasierte Ansatz (C) bleibt aufgrund der fehlenden Figma-JSON-Daten zurück. Der entscheidende Befund ist die Robustheit: Der regelbasierte Ansatz A bricht bei unstrukturierten Mockups (Messy) vollständig auf 0 % ein, während die MLLM-basierten Ansätze auch dort auf 80–84 % kommen. Kontext-Dokumentation bringt einen moderaten, aber klaren Zugewinn (v.a. für C), und Few-Shot hilft durchgängig leicht, am stärksten bei den unstrukturierten Messy-Mockups.
 
### 1.2 Prop-Genauigkeit (Prop Accuracy)
 
#### Komponenten-Datensatz
 
- Der regelbasierte Ansatz A hat die höchste Prop-Genauigkeit mit 52,41 %, zugleich aber die mit Abstand höchste Missing Rate mit 63,25 % (~+24 % gegenüber den MLLM-basierten Ansätzen) —> er lässt Props also eher weg, als sie falsch zu setzen
- Ansatz B folgt mit der zweithöchsten Genauigkeit (50,03 %) und der geringsten Missing Rate (36,83 %)
- Danach D (47,72 %) und C (43,90 %)
- Die Genauigkeit steigt teils *mit* der Komplexität: von *simple* zu *hard* bei C von 40,80 % auf 44,85 % (Degradationsfaktor 1,12) und bei A von 50,29 % auf 52,68 % (Faktor 1,05); bei B und D fällt sie dagegen leicht

*Zugehörige Diagramme: UF1: Prop Accuracy je Ansatz (Komponenten-Datensatz); UF1: Missing Rate je Ansatz (Komponenten-Datensatz); UF1: Prop Accuracy je MLLM-Modell und Ansatz (Komponenten-Datensatz); UF5: Prop Accuracy nach Komplexität (Komponenten-Datensatz)*
 
#### Benutzeroberflächen-Datensatz
 
- Beim BO-DS liegen die MLLM-basierten Ansätze vorne. In der Pretty-Version ist Ansatz B erneut vorn mit 47,23 % Genauigkeit und der geringsten Missing Rate (31,18 %)
- In der Messy-Version liegt der visionsbasierte Ansatz C knapp vorn mit 43,83 % (Missing Rate 38,16 %), vor Ansatz D mit 43,40 % (38,29 %)
- Ansatz A ist in der Messy-Version nicht auswertbar (keine korrekt gemappte Komponente, siehe UF1-F1 = 0), daher liegt hier keine Prop-Genauigkeit vor

*Zugehörige Diagramme: UF5: Prop Accuracy Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF5: Missing Rate Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF1: Prop Accuracy je MLLM-Modell und Ansatz (Benutzeroberflächen-Datensatz)*
 
#### Fazit UF1 – Prop-Genauigkeit
 
Die Prop-Genauigkeit liegt insgesamt deutlich niedriger als der F1-Score (~40–52 % gegenüber ~80–92 %): Die richtige Komponente wird zuverlässig erkannt, aber ihre Props nur in etwa der Hälfte der Fälle korrekt gesetzt. Bemerkenswert ist der Zielkonflikt zwischen Genauigkeit und Abdeckung: Ansatz A erreicht beim K-DS zwar die höchste Genauigkeit, dies aber durch eine sehr hohe Missing Rate (lässt Props schlicht weg). Beim BO-DS drehen sich die Verhältnisse, dort führen die MLLM-basierten Ansätze (B bei Pretty, C bei Messy).
 
---

## UF2: Code-Qualität & Wartbarkeit
 
#### Komponenten-Datensatz
 
- **Struktur (Parse-OK):** Alle Ergebnisse konnten geparst werden, außer bei Ansatz B, der mit 99,81 % knapp darunter liegt (A, C, D jeweils 100 %)
- **Kompilierung:** Bei Ansatz A konnten alle Ergebnisse kompiliert werden (100 %); bei den MLLM-basierten Ansätzen liegt die Compile Success Rate zwischen 97,22 % (B) und 98,33 % (D)
- **Imports:** Bei allen Mockups wurden alle Imports für die PrimeVue-Komponenten vollständig hinzugefügt (Import Completeness 100 % bei allen Ansätzen)
- **PrimeVue-API-Konformität:** Slot-Korrektheit durchgängig sehr hoch (~99–100 %); Prop-Validitätsrate (PVR) (~77–85 %) und Binding-Korrektheit niedriger (~77-83); Passthrough-Korrektheit nur für die MLLM-Ansätze definiert (A nutzt den Passthrough-Mechanismus nicht) zwischen 92,78 % (C) und 99,24 (B)
- **Wartbarkeit:** LOC-Ratio bei A mit 71,55 deutlich unter 100 % (kürzer als die Referenz), bei D mit 111,96 % am höchsten; Code-Duplizierung (CDR) Arbitrary Value Usage (AVU) bei C am geringsten 4,07 %, 3,27 %; AVU mit 9,91 % bei B am höchsten; CDR mit 7,71 bei Ansatz A im Vergleich zu 4,07 % (A) und 6,41 % (D) am höchsten; Comment Density bei D mit 0,54 % am höchsten und bei B mit 0,38 % am niedrigsten

#### Benutzeroberflächen-Datensatz
 
- **Kompilierung:** In der Pretty-Version zwischen 93,33 % (D) und 96,67 % (B); in der Messy-Version niedriger, zwischen 90,00 % (D) und 93,33 % (B) —> komplette Mockups produzieren also etwas häufiger nicht kompilierbaren Code als Einzelkomponenten
- **Imports:** In der Messy-Version ist die Import Completeness für Ansatz A nicht auswertbar (keine korrekt erkannten Komponenten), bei allen anderen bei 100 %
- **API-Konformität:** 
  - Bei der Pretty-Version ist PVR zwischen 80,95 (B) und 89,94 (A) hoch, Slot-Korrektheit bei A und C auf 100 % und bei B und D bei 99,5 %, bei Binding-Korrektheit liegt Ansatz A mit 85,53 % im Vergleich zu 75 % bei den MLLM-basierten Ansätze vorne
  - Bei der Messy-Version ist Ansatz A durchgängig nicht auswertbar (`NaN`); bei den MLLM-Ansätzen bleibt die Slot-Korrektheit hoch (~99–100 %), während PVR zwischen 79,20 (B) und 84,91 (C) und Binding-Korrektheit zwischen 73,01 (C) und 75,52 (B) auch hier schwach bleiben, PT bei Ansatz C mit 87,50 % im Vergleich zu 97,05 % (D) und 98,49 (B) schwach
  - Ansatz C am stabilsten bei PVR 85,30 % Pretty, 84,91 % Messy; Anastz B am stabilsten bei Binding-Korrektheit 75,52 % Messy, 75,79 % Pretty und PT-Korrektheit 98,49 % Messy, 100 % Pretty
- **Wartbarkeit:** 
  - In der Pretty-Version hat Ansatz A bei AVU einen hohen Wert mit 12,59 % im Vergleich zu 7,52 % (B), 4,95 % (D) und 2,99 % (C), sowie eine hohe CDR mit 14,88 % im Vergleich zu den MLLM-basierten Ansätze zwischen 8,24 % (D) und 8,81 % (B); LOC bei Ansatz A auch sehr gering mit 63,09 % im Vergleich zu 95,58 % (B), 91,78 % (C) und 95,72 % (D) -> Ansatz A produziert also kürzeren bzw. fehlenden, aber stark duplizierten Code
  - In der Messy-Version fällt bei Ansatz A eine stark erhöhte Code-Duplizierung mit 44,13 % auf (deutlich über den MLLM-Ansätzen mit ca. 7 %) —> passend zum Bild aus UF1/UF5, wonach der regelbasierte Ansatz mit unsauberen Mockups schlecht zurechtkommt + AVU bei 0 %, CD bei 0 % und LOC bei 84,09 % (unter den MLLM-Ansätzen mit 88–95 %)
- **Robustheit:** 
  - Alle Ansätze bei K-DS eine hohe Robustheit bei PVR für steigende Komplexität zwischen 94,6 % (B) und 99,5 % (C) [96,3 % (A), 98,2 % (D]
  - Ansatz A bricht bei Messy auf 0 % ein (nicht auswertbar), während die MLLM-basierten Ansätze hier nur leicht abfallen (PVR zwischen 98,1 % (B) und 99,7 (C/D))

*Zugehörige Diagramme: Übersichtstabellen; UF2: Struktur, Kompilierung & Imports je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF2: PrimeVue-API-Konformität je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF2: Wartbarkeit – AVU, CDR & Comment Density je Ansatz; UF2: LOC-Ratio je Ansatz*
 
#### Fazit UF2
 
Auf technischer Ebene (Parsen, Kompilieren, Imports) liefern alle Ansätze durchweg hohe Werte, mit leichten Einbußen der MLLM-Ansätze beim Kompilieren des BO-DS. Bei der PrimeVue-API-Konformität ist Slot-Korrektheit unkritisch, PVR und Binding-Korrektheit bleiben das gemeinsame schwächste Glied. Ansatz A führt hier jedoch überall, wo er auswertbar ist (K-DS, BO-DS Pretty), da seine deterministischen Regeln strukturell nicht von der API abweichen können. Bei der Wartbarkeit kehrt sich dieser Vorteil um: A ist auf dem K-DS noch moderat, weist aber schon auf BO-DS Pretty die höchste Duplizierung und den niedrigsten LOC-Ratio auf und bricht bei Messy vollständig ein (CDR 44,13 %, AVU/CD 0 %). Die Robustheit bestätigt dieses Bild während die PVR-Robustheit bei steigender Komplexität für alle Ansätze hoch bleibt (94,6–99,5 %), fällt diese von Pretty zu Messy bei A auf 0 % (nicht auswertbar), während sie bei den MLLM-Ansätzen mit 98,1–99,7 % nahezu stabil bleibt. Der visionsbasierte Ansatz C erzeugt dabei über beide Datensätze hinweg tendenziell den schlanksten, stabilsten Code.
 
---
 
## UF3: Visuelle Treue
  
#### Komponenten-Datensatz
 
- Die MLLM-basierten Ansätze erreichen höhere Element-Match-Raten (EMR) zwischen 92,78 % (B) und 93,94 % (D), gegenüber 89,61 % bei Ansatz A
- Ansatz A liegt bei der Übereinstimmung von Positionen und Größen der Elemente deutlich vorne: Mean IoU 91,61 % gegenüber 85,76–86,17 % bei den MLLM-Ansätzen
  - Positions-Übereinstimmung bei A 94,07 %, bei den MLLM-Ansätzen 88,83–89,25 %
  - Größen-, Style- und Text-Übereinstimmung praktisch gleichauf: ~95,89–96,1 % (Größe), ~97,7–98,2 % (Style) bzw. ~99,5–99,8 % (Text)
  - IoU und Positions-Übereinstimmung (A: 94,07% gegenüber 88,83-89,25%) sind intern konsistent (niedrigerer IoU-Wert bei den MLLM-Ansätzen geht mit ebenso niedrigerer Positions-Übereinstimmung einher)
- Mit steigender Komplexität sinkt die EMR bei allen vier Ansätzen (A 96,1 % → 84,6 %, B 97,3 % → 89,6 %, C 97,1 % → 90,8 %, D 97,3 % → 90,1 %); Degradationsfaktor *hard* zwischen 0,88 (A) und 0,94 (C) —> Ansatz A degradiert damit auch bei der visuellen Treue am stärksten

*Zugehörige Diagramme: UF3: Element-Match-Rate je Ansatz (Komponenten-Datensatz); UF3: Visuelle Teilmetriken je Ansatz (Komponenten-Datensatz)*
 
#### Benutzeroberflächen-Datensatz
 
- **Der auffälligste Befund von UF3:** Ansatz A bricht bereits in der Pretty-Version auf eine EMR von nur 36,41 % ein —> deutlich unter den MLLM-basierten Ansätzen mit 59,63–65,47 %. In der Messy-Version fällt A auf 18,01 %, während die MLLM-Ansätze mit 58,90–62,04 % nahezu auf Pretty-Niveau bleiben
  - Mean IoU für A bricht dabei auf 5,84 % (Pretty) bzw. 2,66 % (Messy) ein, gegenüber 17,93–22,60 % bei den MLLM-Ansätzen —> praktisch keine geometrische Überlappung mehr
  - UF3 bestätigt damit auf struktureller/geometrischer Ebene, was UF1 bereits für die reine Komponentenerkennung zeigt: Ansatz A produziert bei vollständigen Benutzeroberflächen ein DOM, das sich fundamental von der Referenz unterscheidet —> nicht erst bei Messy, sondern bereits bei sauber strukturierten Pretty-Mockups
- Selbst die MLLM-Ansätze erzielen auf dem BO-DS deutlich niedrigere IoU-Werte (17,93–22,60 %) als auf dem K-DS (85,76–86,17 %) —> die geometrisch exakte Reproduktion vollständiger, verschachtelter Layouts bleibt für alle vier Ansätze erheblich schwieriger als bei Einzelkomponenten; die relative Größenordnung unterscheidet die Ansätze aber deutlich (A: 29,26 / 41,35 % Size-Similarity gegenüber 70,22–72,31 % / 70,94-74,48 % bei den MLLM-Ansätzen)
- **Robustheitsindex (EMR Messy / EMR Pretty):** A nur 0,49 (EMR halbiert sich von Pretty zu Messy), B 0,91, D 0,98, C sogar 1,07 —> C verbessert sich von Pretty zu Messy leicht, plausibel angesichts der unveränderten Eingabemodalität (Screenshot) bei visuell identischen Pretty-/Messy-Mockups

*Zugehörige Diagramme: UF3/UF5: Element-Match-Rate Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF3: Visuelle Teilmetriken je Ansatz (Benutzeroberflächen-Datensatz)*
 
#### Fazit UF3
 
Bei der strukturellen/semantischen Übereinstimmung (EMR) sind die MLLM-basierten Ansätze überlegen, auf dem Komponenten-Datensatz moderat, auf dem Benutzeroberflächen-Datensatz dramatisch. Der regelbasierte Ansatz A punktet dafür auf dem Komponenten-Datensatz bei der exakten geometrischen Platzierung (IoU, Position) deutlich, trifft die Boxen präziser, erkennt aber insgesamt weniger Elemente. Beim Benutzeroberflächen-Datensatz kippt dieser Vorteil vollständig: A erreicht selbst auf sauber strukturierten (Pretty-)Mockups nur 36,41 % EMR, gut die Hälfte der 59,63 bis 65,47 % der MLLM-Ansätze, und bricht bei Messy auf 18,01 % ein (rund ein Drittel des MLLM-Niveaus von 58,90 bis 62,04 %), während die MLLM-Ansätze zwischen beiden Varianten nahezu stabil bleiben. UF3 bestätigt damit unabhängig von UF1, auf Ebene der tatsächlich gerenderten Ausgabe statt der reinen Code-Struktur, die geringe Robustheit des regelbasierten Ansatzes gegenüber der strukturellen Komplexität vollständiger Benutzeroberflächen.
 
---

## UF4: Nacharbeitsaufwand

#### Benutzeroberflächen-Datensatz

- Ansatz A hat häufig aufgrund der strikten Regeln bezüglich der Slots von den PrimeVue-Komponenten bei beiden Datensätzen doppelte Slots mit dem gleichen Namen erzeugt, wenn es mehrere Elemente in diesem laut Mockup geben sollte. Diese Slots müssen dann manuell entfernt werden, da die PrimeVue-API keine doppelten Slots zulässt. Die MLLM-basierten Ansätze erzeugen diese doppelten Slots nicht, da sie die Slots korrekt benennen und die zugehörigen Elemente dort gruppieren. `[components/a/hard/{7,8}-a.vue; components/a/medium/{1,5,6,7,10}-a.vue; uis/a/pretty/5-a.vue]`
- Außerdem wurden standardmäßig die `ref`-Attribute für die Dialog-Sichtbarkeit auf `false` beim Ansatz A gesetzt und nicht angezeigt wurden. Dies führt bei Ansatz A zu einem zusätzlichen manuellen Nacharbeitsschritt, um die Dialoge für die korrekte Auswertung anzuzeigen. `[components/a/hard/{1,5,9}-a.vue, uis/a/pretty/2-a.vue]`
- Eine falsche Benennung der Textarea-PrimeVue-Komponente anstelle von `Textarea` -> `InputTextarea`. `[components/b/zero_shot/medium/9-b2-gpt-5.6-terra-1.vue]`
- Statische Assets wurden teils falsch verlinkt oder keine existierende Pfade mit Bildern generiert, sodass diese manuell korrigiert werden mussten. `[components/c/few_shot/medium/1-c2-gpt-5.6-terra-1.vue; components/c/zero_shot/hard/3-c2-gpt-5.6-terra-1.vue; gt/hard/8.vue; gt/medium/{1,5}.vue]`
- Falscher Aufruf der DatePicker-`show`-Methode. `[components/c/zero_shot/hard/3-c2-gpt-5.6-terra-1.vue; components/d/few_shot/hard/4-d3-gpt-5.6-terra-1.vue; components/d/zero_shot/hard/3-d1-gpt-5.6-terra-1.vue; components/d/zero_shot/hard/4-d3-gpt-5.6-terra-1.vue]`
- 
---

## UF5: Robustheit
 
- Der visionsbasierte Ansatz C zeigt die höchste Robustheit gegenüber wechselnder struktureller Qualität, da sich seine Eingabe (Screenshot) zwischen Pretty- und Messy-Variante nicht ändert, anders als bei den metadatenbasierten Ansätzen, deren Figma-JSON sich strukturell stark ändert. Der EMR-Robustheitsindex liegt bei C mit 1,07 sogar über 1 —> die EMR verbessert sich von Pretty zu Messy leicht. Bei B liegt er bei 0,91, bei D bei 0,98. Dass keiner der drei Werte exakt bei 1,0 liegt, ist dabei nicht durch einen echten strukturbedingten Qualitätsverlust zu erklären, sondern durch die probabilistische Natur der MLLM-Ausgabe: Selbst bei (nahezu) identischem Input liefert das Modell aufgrund des Samplings nicht bei jedem Lauf exakt dasselbe Ergebnis. Die verbleibende Abweichung von wenigen Prozentpunkten entspricht damit im Wesentlichen der reinen Modell-Streuung und nicht einer Sensitivität gegenüber der Eingabestruktur
- Der regelbasierte Ansatz A ist mit Abstand am wenigsten robust: Sein F1-Robustheitsindex ist 0,00 (vollständiger Einbruch bei Messy), sein EMR-Robustheitsindex liegt bei nur 0,49 (EMR halbiert sich von Pretty zu Messy)
- Beim F1-Robustheitsindex liegt Ansatz C mit 0,99 am höchsten, dicht gefolgt von den metadaten- und hybridbasierten Ansätzen (B 0,89, D 0,92)
- Die EMR-Robustheit ist über alle MLLM-Ansätze hinweg hoch (0,91–1,07) —> die visuelle Übereinstimmung bricht bei unsauberen Mockups also kaum ein, während sie bei Ansatz A einbricht (0,49), nur eben nicht ganz so vollständig wie bei F1 (0,00)

#### Fazit UF5
 
Robustheit und Eingabeart hängen eng zusammen: Je weniger ein Ansatz von der sauberen Layer-Struktur des Figma-Designs abhängt, desto stabiler bleibt er. Der visionsbasierte Ansatz C ist deshalb am robustesten, der regelbasierte Ansatz A am anfälligsten (kompletter Kollaps bei F1, EMR-Halbierung). Die relevanten Kennzahlen sind über UF1 (F1), UF1.2 (Prop-Genauigkeit) und UF3 (EMR) jeweils in den Pretty-vs-Messy- und Degradations-/Robustheitsauswertungen abgebildet.
 
---

## UF6: Effizienz
 
#### Komponenten-Datensatz
 
- Verarbeitungszeit: ~0,3 Sekunden bei Ansatz A gegenüber 13–14 Sekunden bei den MLLM-basierten Ansätzen (B 13,5 s, C 14,4 s, D 13,6 s im Mittel)
- Token-Verbrauch (Input): Der visionsbasierte Ansatz C verbraucht mit ~15.200 Input-Tokens am wenigsten, gegenüber ~24.100 (B) und ~26.300 (D)
  - Damit ist C auch am günstigsten (~0,04 USD pro Transformation gegenüber 0,05 USD bei B und 0,06 USD bei D)
#### Benutzeroberflächen-Datensatz
 
- Verarbeitungszeit: ~1,4–1,5 Sekunden bei Ansatz A gegenüber ~26–31 Sekunden bei den MLLM-basierten Ansätzen (Pretty ~30,7–30,9 s; Messy ~26,4–29,6 s)
- Token-Verbrauch (Input): C erneut am sparsamsten mit ~31.800 (Pretty) bzw. ~4.700 (Messy) Tokens, gegenüber ~77.000–80.000 (Pretty) bzw. ~34.600–37.500 (Messy) bei B und D
  - Kosten entsprechend: C ~0,10 USD (Pretty) / ~0,04 USD (Messy), gegenüber ~0,18 USD (Pretty) / ~0,09–0,10 USD (Messy) bei B und D

#### Übergreifend
 
- Token-Verbrauch und damit Kosten unterscheiden sich deutlich zwischen den Kontext-Strategien: Die rohe Doku (Strategie 2) hat die größte Kontextlänge und ist am teuersten; die bereinigte Doku (Strategie 3) liefert bei etwa halben Kosten vergleichbare oder bessere Qualität
- Ein klarer Zusammenhang „höhere Kosten → besserer F1-Score" lässt sich **nicht** bestätigen —> teurere Konfigurationen erzielen keine systematisch besseren Ergebnisse

*Zugehörige Diagramme: UF6: Verarbeitungszeit je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF6: Token-Verbrauch je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF6: Kosten je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF6: Kosten je Kontext-Strategie und Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF6: Kosten vs. F1-Score (Komponenten-/Benutzeroberflächen-Datensatz)*
 
#### Fazit UF6
 
Der regelbasierte Ansatz A ist um Größenordnungen schneller und praktisch kostenlos, da er kein MLLM aufruft. Unter den MLLM-basierten Ansätzen ist der visionsbasierte Ansatz C durchgängig der effizienteste (wenigste Tokens, geringste Kosten) bei gleichzeitig konkurrenzfähiger Qualität, während der hybride Ansatz D durch die doppelte Eingabe (Metadaten + Screenshot) am teuersten ist. Innerhalb der Kontext-Strategien ist die bereinigte Doku (Strategie 3) klar wirtschaftlicher als die rohe Doku (Strategie 2). Ein Kosten-Qualitäts-Zusammenhang besteht nicht; mehr Aufwand kauft keine bessere Ergebnisqualität.
 
---

## Besondere Erkenntnisse
 
Übergreifende, besonders auffällige Befunde aus der Gesamtauswertung:
 
1. **Der totale Zusammenbruch von Ansatz A bei „Messy"-UIs:** Auf sauberen UIs ist der regelbasierte Ansatz konkurrenzfähig (F1 0,85). Auf unstrukturierten UIs fällt er auf exakt 0,0: Precision, Recall und F1 alle null. Es wird keine einzige Komponente korrekt gemappt. Das setzt sich durch die gesamte Auswertung fort: Prop-Genauigkeit und alle Stufe-3-Metriken sind dort `NaN` (nicht auswertbar, weil es keine korrekte Instanz gibt), der Robustheitsindex ist 0,0. Das ist qualitativ anders als bei den MLLM-Ansätzen, die selbst auf Messy noch bei 0,80–0,84 F1 liegen (Robustheitsindex 0,89–0,99). Kernaussage: **Der regelbasierte Ansatz ist vollständig von sauberer Layer-Struktur abhängig, fehlt diese, ist er unbrauchbar, nicht nur schwächer.**
2. **Die Präzisions- und Vollständigkeits-Metriken erzählen gegensätzliche Geschichten:** Bei F1 (Komponentenerkennung) liegen alle Ansätze eng beieinander (0,87–0,92 auf Komponenten). Bei der Prop-Genauigkeit brechen die Werte aber auf 0,44–0,52 ein —> die richtige Komponente wird zuverlässig erkannt, aber ihre Props werden nur in etwa der Hälfte der Fälle korrekt gesetzt. Interessant ist die Rollenverteilung: A hat die höchste Prop-Genauigkeit (0,52), aber auch die mit Abstand höchste Missing Rate (0,63) —> lässt Props einfach weg, statt sie falsch zu setzen. Die MLLM-Ansätze setzen mehr Props (Missing Rate ~0,37–0,43), treffen dafür öfter den falschen Wert. Das ist ein klassischer Precision/Coverage-Trade-off, der bei reiner F1-Betrachtung unsichtbar bliebe.
3. **Ansatz A bricht bei UF3 auf dem Benutzeroberflächen-Datensatz bereits bei Pretty vollständig ein:** Während Ansatz A auf dem Komponenten-Datensatz bei der geometrischen Präzision klar führt (IoU 91,6 % gegenüber 85,8–86,2 % bei den MLLM-Ansätzen), kehrt sich das Bild bei vollständigen Benutzeroberflächen komplett um: EMR nur 36,4 % (Pretty) bzw. 18,0 % (Messy), IoU nur 5,8 % (Pretty) bzw. 2,7 % (Messy) —> gegenüber 58,9–65,5 % EMR und 17,9–22,6 % IoU bei den MLLM-Ansätzen. Bemerkenswert ist, dass dieser Einbruch nicht erst bei unsauberen (Messy-)Mockups auftritt, sondern bereits bei sauber strukturierten (Pretty-)Mockups —> anders als bei der reinen Komponentenerkennung (UF1), wo A auf Pretty noch mit den MLLM-Ansätzen mithalten kann (F1 84,76 % vs. 84,49–90,04 %). Vollständige Benutzeroberflächen scheinen die deterministischen Mapping-Regeln des regelbasierten Ansatzes strukturell zu überfordern, unabhängig von der Figma-Struktur-Qualität.
4. **Prop-Genauigkeit steigt teils mit der Komplexität:** Bei C (Vision) liegt der Degradationsfaktor über 1 (medium 1,16, hard 1,12): Die Prop-Genauigkeit ist bei schwierigeren Mockups höher als bei einfachen (simple 0,41 → hard 0,45). Das läuft dem F1-Verhalten (das erwartungsgemäß fällt) entgegen und ist erklärungsbedürftig —> möglicherweise haben komplexe Komponenten explizitere/eindeutigere oder weniger Props, oder einfache Fälle enthalten mehr implizite Defaults, die schwer zu treffen sind.
5. **Kontext-Dokumentation hilft (vor allem dem schwächsten Ansatz):** Der Kontext-Strategie-Vergleich zeigt: Von „keine Doku" (1) zu „Doku" (2/3) gewinnt C am meisten (F1 0,80 → 0,91), während B und D nur moderat zulegen (0,90 → 0,93). Der Vision-Ansatz profitiert also überproportional von PrimeVue-Dokumentation im Kontext —> plausibel, da er ohne Metadaten am wenigsten strukturelle Information hat. Wichtig fürs Kosten-Argument (siehe Punkt 6): bereinigte Doku (3) ist praktisch gleichauf mit roher Doku (2), teils leicht besser.
6. **Kosten-Qualität (Strategie 3 dominiert Strategie 2):** Bei UF6 zeigt sich ein klares Effizienz-Argument: Rohe Doku (Strategie 2) ist durchgängig die teuerste Variante (Komponenten: b2 = 13,75 \$, c2 = 12,54 \$, d2 = 16,28 \$ Gesamtkosten), während bereinigte Doku (Strategie 3) bei etwa halben Kosten (b3 = 7,89 \$, c3 = 5,55 \$, d3 = 9,46 $) gleich gute oder bessere F1-Werte liefert. Die Bereinigung der Dokumentation ist also fast eine „Gratis-Verbesserung": weniger Tokens, gleiche Qualität.
7. **C ist der Effizienz-Sieger, D der Qualitäts-/Kosten-Verlierer:** Über UF6 hinweg ist C durchgängig am günstigsten (Komponenten 0,040 \$, Messy-UI nur 0,044 $ Ø) bei nur wenig geringerer Qualität. D (Hybrid) ist am teuersten (0,060 \$ Komponenten, 0,182 \$ Pretty-UI) — es verbraucht die meisten Input-Tokens (Metadaten und Screenshot), gewinnt dafür aber nur bei F1 gegenüber B. Der Verarbeitungszeit-Unterschied ist drastisch: A ~0,3 s gegenüber MLLM-Ansätzen mit 13–31 s.
8. **API-Konformität und Wartbarkeit entkoppeln sich bei Ansatz A auf vollständigen Oberflächen:** Bei UF2 führt A überall dort, wo auswertbar (Komponenten-Datensatz, BO-DS Pretty), bei PVR und Binding-Korrektheit (BO-DS Pretty: 89,94 % / 85,53 % gegenüber ~75–81 % bei den MLLM-Ansätzen) —> seine deterministischen Regeln können strukturell nicht von der API abweichen. Bei der Wartbarkeit kippt das jedoch bereits auf der sauberen Pretty-Version: A hat mit 14,88 % die höchste Code-Duplizierung aller vier Ansätze (MLLM: 8,24–8,81 %) und mit 63,09 % den mit Abstand niedrigsten LOC-Ratio (MLLM: 91,78–95,72 %). Ansatz A ist auf vollständigen Oberflächen also strukturell korrekt, aber bereits vor jeder Verschmutzung der Eingabe kaum wartbar —> ein drittes, von UF1 (Komponentenerkennung) und UF3 (visuelle Struktur) unabhängiges Indiz dafür, dass A speziell beim Sprung von Einzelkomponenten zu vollständigen Oberflächen scheitert, nicht erst bei unsauberen Mockups.
 
---
 
## Gesamtfazit
 
Es gibt keinen universellen Sieger; die Wahl des Ansatzes hängt vom Einsatzszenario ab:
 
- **Höchste Erkennungsgenauigkeit bei sauberen Designs:** metadatenbasierter (B) und hybrider (D) Ansatz, praktisch gleichauf.
- **Höchste Robustheit gegenüber unsauberen Designs und beste Effizienz:** visionsbasierter Ansatz (C).
- **Höchste Geschwindigkeit und beste geometrische Präzision (IoU) bei Einzelkomponenten, aber struktureller Kollaps bei vollständigen Benutzeroberflächen bereits auf sauberen (Pretty-)Mockups, der sich bei unstrukturierten (Messy-)Mockups noch verschärft — bei gleichzeitig höchster API-Konformität, aber schlechtester Wartbarkeit (Duplizierung, LOC) genau dort, wo er noch auswertbar ist:** regelbasierter Ansatz (A).
- **Kontext-Dokumentation** hilft durchgängig (~+3 % F1), wobei die bereinigte Variante die wirtschaftlichste ist; **Few-Shot** bringt kleine, aber konsistente Zugewinne, am stärksten bei unstrukturierten Mockups.