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
 
- Ansatz A, B und D liegen mit ~92 % F1-Score (macro) praktisch gleichauf (A 91,71 %, B 91,78 %, D 91,96 %); nur der visionsbasierte Ansatz C fällt mit 86,85 % spürbar ab und weist zugleich die größte Streuung auf (Standardabweichung 5,93 % gegenüber 2,28–2,72 % bei B/D)
  - Ursache: Ansatz C hat keine Figma-JSON-Daten zur genauen Identifikation der PrimeVue-Komponenten und muss allein aus dem Screenshot ableiten
  - Präzision (macro) bei allen Ansätzen hoch zwischen 94,8 % und 96,7 %; der Recall trennt die Ansätze: A/B/D bei 90,1–91,6 %, C nur bei 84,5 %
  - Recall beim hybriden Ansatz D mit 91,57 % am besten
- Über die Kontext-Strategien hinweg liegen die Strategien 2 (rohe Doku) und 3 (bereinigte Doku) am besten und nahezu gleichauf (90–93 %); Strategie 1 (ohne Doku) fällt v. a. bei C stark ab (79,96 % gegenüber 89,77 % / 90,83 %)
  - Der MLLM-Aufruf mit PrimeVue-Kontext bringt also rund +3 % gegenüber dem Aufruf ohne Doku
- Der F1-Score fällt mit steigender Komplexität: von *simple* zu *hard* sinkt er bei allen Ansätzen (A 95,67 % → 87,03 %, B 95,29 % → 85,05 %, C 89,04 % → 82,81 %, D 95,37 % → 85,01 %). Der Degradationsfaktor *hard* liegt zwischen 0,89 (D) und 0,93 (C)
- Kleiner Unterschied zwischen Zero- und Few-Shot: Few-Shot verbessert den F1-Score um ~1,7–1,8 % (B +1,79, C +1,79, D +1,68 Prozentpunkte)

Zusammengefasst über die drei MLLM-Modelle:
  - Der metadatenbasierte (B) und der hybride (D) Ansatz erzielen die höchsten Werte über alle drei Modelle hinweg (91–93 %) und liegen bei Gemini 3.1 Pro Preview mit jeweils 93 % gleichauf
  - Der visionsbasierte Ansatz (C) ist durchgängig am schwächsten (85–89 %)

*Zugehörige Diagramme: UF1: F1-Score je Ansatz (Komponenten-Datensatz); UF1: F1-Score je MLLM-Modell und Ansatz (Komponenten-Datensatz); UF1: F1-Score je Kontext-Strategie und Ansatz (Komponenten-Datensatz); UF5: F1-Score nach Komplexität (Komponenten-Datensatz); UF1: F1-Score Zero-Shot vs. Few-Shot (Komponenten-Datensatz)*
 
#### Benutzeroberflächen-Datensatz
 
- **Pretty-Version:** Die MLLM-basierten Ansätze B und D mit Figma-JSON-Daten (90,04 % / 89,35 %) schneiden besser ab als der regel- und der visionsbasierte Ansatz (A 84,76 %, C 84,49 %)
  - Präzision insgesamt geringer als beim K-DS: B und C bei ~87,7–89,2 %, A bei 83,1 %, D bei 89,4 %
  - Recall beim metadatenbasierten Ansatz B mit 91,81 % am besten
- **Messy-Version:** Drastischer Einbruch beim regelbasierten Ansatz A auf **0 %** bei F1-Score, Präzision und Recall —> es wird keine einzige Komponente korrekt gemappt. Die MLLM-basierten Ansätze liegen dagegen zwischen 79,94 % (B) und 83,82 % (C)
  - Klarer Vorteil der MLLM-basierten Ansätze: Sie verarbeiten auch untrainierte und unstrukturierte Daten (gegenüber der Pretty-Version) dank ihres umfangreichen Trainings, Wissenskorpus und ihrer Generalität noch recht gut
  - Präzision bleibt vergleichbar mit der Pretty-Version (~90 %)
  - Recall geringer: B 73,26 %, D 76,43 %, C 79,52 % —> der vergleichsweise hohe Wert bei Ansatz C ist bemerkenswert (nahe am Pretty-Wert), da es für den rein visionsbasierten Ansatz eigentlich keinen prinzipiellen Unterschied zwischen den beiden Varianten geben sollte
- Nach Modellen: Claude-Sonnet-5 schneidet beim BO-DS im Mittel am besten ab (86,92 % gegenüber 86,09 % bei GPT-5.6-Terra und 81,90 % bei Gemini 3.1 Pro Preview)
  - Pretty: B und D fast immer gleichauf zwischen 87 und 91 %; C durchgängig niedriger, zwischen 81 und 87 % (bei GPT-5.6-Terra)
  - Messy: Der visionsbasierte Ansatz C ist hier im Schnitt am besten mit ~84 %
- Beim BO-DS sind geringere Unterschiede zwischen den verschiedenen Kontext-Strategien zu erkennen als beim K-DS
- Minimal größerer Unterschied zwischen Zero- und Few-Shot als beim K-DS: bei Pretty +3,3–4,7 Prozentpunkte, bei Messy deutlich größer mit +3,5 bis +9,8 Prozentpunkten (B +9,79, C +8,02, D +3,48)

*Zugehörige Diagramme: UF5: F1-Score Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF1: F1-Score je MLLM-Modell und Ansatz (Benutzeroberflächen-Datensatz); UF1: F1-Score je Kontext-Strategie und Ansatz (Benutzeroberflächen-Datensatz); UF1: F1-Score Zero-Shot vs. Few-Shot (Benutzeroberflächen-Datensatz)*
 
#### Fazit UF1 - F1-Score
 
Bei den sauberen Daten (K-DS und BO-DS Pretty) sind der metadatenbasierte (B) und der hybride (D) Ansatz am stärksten und liegen eng beieinander; der visionsbasierte Ansatz (C) bleibt aufgrund der fehlenden Figma-JSON-Daten zurück. Der entscheidende Befund ist die Robustheit: Der regelbasierte Ansatz A bricht bei unstrukturierten Mockups (Messy) vollständig auf 0 % ein, während die MLLM-basierten Ansätze auch dort auf 80–84 % kommen. Kontext-Dokumentation bringt einen moderaten, aber klaren Zugewinn (v. a. für C), und Few-Shot hilft durchgängig leicht, am stärksten bei den unstrukturierten Messy-Mockups.
 
### 1.2 Prop-Genauigkeit (Prop Accuracy)
 
#### Komponenten-Datensatz
 
- Der regelbasierte Ansatz A hat die höchste Prop-Genauigkeit mit 52,41 %, zugleich aber die mit Abstand höchste Missing Rate mit 63,25 % (~+24 Prozentpunkte gegenüber den MLLM-basierten Ansätzen) —> er lässt Props also eher weg, als sie falsch zu setzen
- Ansatz B folgt mit der zweithöchsten Genauigkeit (50,04 %) und der geringsten Missing Rate (36,83 %)
- Danach D (47,72 %) und C (43,90 %)
- Die Genauigkeit steigt teils *mit* der Komplexität: von *simple* zu *hard* bei C von 40,80 % auf 44,85 % (Degradationsfaktor 1,12) und bei A von 50,29 % auf 52,68 % (Faktor 1,05); bei B und D fällt sie dagegen leicht

*Zugehörige Diagramme: UF1: Prop Accuracy je Ansatz (Komponenten-Datensatz); UF1: Missing Rate je Ansatz (Komponenten-Datensatz); UF1: Prop Accuracy je MLLM-Modell und Ansatz (Komponenten-Datensatz); UF5: Prop Accuracy nach Komplexität (Komponenten-Datensatz)*
 
#### Benutzeroberflächen-Datensatz
 
- Beim BO-DS liegen die MLLM-basierten Ansätze vorne. In der Pretty-Version ist Ansatz B erneut vorn mit 46,38 % Genauigkeit und der geringsten Missing Rate (33,50 %)
- In der Messy-Version liegt der hybride Ansatz D knapp vorn mit 43,19 % (Missing Rate 39,23 %), vor Ansatz C mit 42,95 % (40,12 %)
- Ansatz A ist in der Messy-Version nicht auswertbar (keine korrekt gemappte Komponente, siehe UF1-F1 = 0), daher liegt hier keine Prop-Genauigkeit vor

*Zugehörige Diagramme: UF5: Prop Accuracy Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF5: Missing Rate Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF1: Prop Accuracy je MLLM-Modell und Ansatz (Benutzeroberflächen-Datensatz)*
 
#### Fazit UF1 – Prop-Genauigkeit
 
Die Prop-Genauigkeit liegt insgesamt deutlich niedriger als der F1-Score (~44–52 % gegenüber ~87–92 %): Die richtige Komponente wird zuverlässig erkannt, aber ihre Props nur in etwa der Hälfte der Fälle korrekt gesetzt. Bemerkenswert ist der Zielkonflikt zwischen Genauigkeit und Abdeckung: Ansatz A erreicht beim K-DS zwar die höchste Genauigkeit, dies aber durch eine sehr hohe Missing Rate (lässt Props schlicht weg). Beim BO-DS drehen sich die Verhältnisse, dort führen die MLLM-basierten Ansätze (B bei Pretty, D bei Messy).
 
---

## UF2: Code-Qualität & Wartbarkeit
 
#### Komponenten-Datensatz
 
- **Struktur (Parse-OK):** Alle Ergebnisse konnten geparst werden, außer bei Ansatz B, der mit 99,81 % knapp darunter liegt (A, C, D jeweils 100 %)
- **Kompilierung:** Bei Ansatz A konnten alle Ergebnisse kompiliert werden (100 %); bei den MLLM-basierten Ansätzen liegt die Compile Success Rate zwischen 97,22 % (B) und 98,15 % (D)
- **Imports:** Bei allen Mockups wurden alle Imports für die PrimeVue-Komponenten vollständig hinzugefügt (Import Completeness 100 % bei allen Ansätzen)
- **PrimeVue-API-Konformität:** Slot-Korrektheit durchgängig sehr hoch (~99–100 %); Prop-Validitätsrate (PVR) und Binding-Korrektheit niedriger (~77–85 %); Passthrough-Korrektheit nur für die MLLM-Ansätze definiert (A nutzt den Passthrough-Mechanismus nicht)
- **Wartbarkeit:** LOC-Ratio bei A mit 0,73 deutlich unter 1 (kürzer als die Referenz), bei D mit 1,12 am höchsten; Code-Duplizierung (CDR) und Arbitrary Value Usage (AVU) bei C am geringsten
#### Benutzeroberflächen-Datensatz
 
- **Kompilierung:** In der Pretty-Version zwischen 93,33 % (D) und 96,67 % (B); in der Messy-Version niedriger, zwischen 90,00 % (D) und 93,33 % (B) —> komplette Mockups produzieren also etwas häufiger nicht kompilierbaren Code als Einzelkomponenten
- **Imports:** In der Messy-Version ist die Import Completeness für Ansatz A nicht auswertbar (keine korrekt erkannten Komponenten)
- **API-Konformität:** In der Messy-Version für Ansatz A durchgängig nicht auswertbar (`NaN`); bei den MLLM-Ansätzen bleibt die Slot-Korrektheit hoch (~99–100 %), während PVR und Binding-Korrektheit auch hier schwach bleiben
- **Wartbarkeit:** In der Messy-Version fällt bei Ansatz A eine stark erhöhte Code-Duplizierung auf (deutlich über den MLLM-Ansätzen) —> passend zum Bild aus UF1/UF5, wonach der regelbasierte Ansatz mit unsauberen Mockups schlecht zurechtkommt

*Zugehörige Diagramme: Übersichtstabellen; UF2: Struktur, Kompilierung & Imports je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF2: PrimeVue-API-Konformität je Ansatz (Komponenten-/Benutzeroberflächen-Datensatz); UF2: Wartbarkeit – AVU, CDR & Comment Density je Ansatz; UF2: LOC-Ratio je Ansatz*
 
#### Fazit UF2
 
Auf der technischen Ebene (Parsen, Kompilieren, Imports) liefern alle Ansätze durchweg hohe Werte; die MLLM-Ansätze verlieren bei der Kompilierung nur wenige Prozentpunkte, insbesondere beim komplexeren BO-DS. Die eigentliche Differenzierung findet auf der Konformitäts- und Wartbarkeitsebene statt: Slot-Korrektheit ist unkritisch, PVR und Binding-Korrektheit sind das gemeinsame schwächste Glied, und der visionsbasierte Ansatz C erzeugt tendenziell den schlanksten, am wenigsten duplizierten Code. Der regelbasierte Ansatz A zeigt bei unsauberen Mockups (Messy) auch hier seine Schwäche (hohe Duplizierung, teils nicht auswertbare Metriken).
 
---
 
## UF3: Visuelle Treue
 
#### Komponenten-Datensatz
 
- Die MLLM-basierten Ansätze erreichen höhere Element-Match-Raten (EMR) zwischen 83,67 % (B) und 86,30 % (D), gegenüber 78,04 % bei Ansatz A
- Ansatz A liegt jedoch bei der Übereinstimmung von Positionen und Größen der Elemente vorne: Mean IoU 60,28 % gegenüber 45,55–50,03 % bei den MLLM-Ansätzen
  - Positions-Übereinstimmung bei A ~90,2 %, bei den MLLM-Ansätzen 85,3–87,8 %
  - Style- und Text-Übereinstimmung praktisch gleichauf: ~94,3–95,9 % (Style) bzw. ~99,1–99,5 % (Text)

*Zugehörige Diagramme: UF3: Element-Match-Rate je Ansatz (Komponenten-Datensatz); UF3: Visuelle Teilmetriken je Ansatz (Komponenten-Datensatz)*
 
#### Benutzeroberflächen-Datensatz
 
- Die MLLM-basierten Ansätze sind mit Abstand besser: EMR zwischen 90,61 % (B) und 94,86 % (D) bei Pretty sowie 84,46 % (B) und 91,25 % (D) bei Messy, während der regelbasierte Baseline-Ansatz A bei 75,58 % (Pretty) bzw. 69,70 % (Messy) liegt
  - Dies spiegelt sich auch in Positions- und Größen-Übereinstimmung wider
- Auffällig ist der große Unterschied zwischen Makro- und Mikro-EMR **speziell bei Ansatz A** in der Pretty-Version: 75,58 % (macro) gegenüber 40,98 % (micro). Bei den MLLM-Ansätzen liegt die Mikro-EMR dagegen sogar über der Makro-EMR (z.B. D 94,86 % macro / 97,09 % micro). Der Makro-/Mikro-Bruch ist also ein A-spezifisches Phänomen und kein allgemeines der Pretty-Version
  - Ursache ist die unterschiedliche Gewichtung bei stark variierender Mockupgröße: Die Makro-EMR mittelt die Mockup-Werte ungewichtet (jedes Mockup zählt gleich), die Mikro-EMR aggregiert global über alle Elemente (große Mockups dominieren). Ansatz A versagt auf dem einzigen großen Pretty-Mockup (nur 1 von 174 Elementen erkannt) nahezu vollständig. Erst die Mikro-EMR macht diesen Ausfall sichtbar. Bei den MLLM-Ansätzen tritt das nicht auf, da sie auch auf den großen Mockups gut abschneiden —> bei D ist die Mikro-EMR sogar leicht höher, d. h. es ist auf großen Mockups minimal besser als auf kleinen.

*Zugehörige Diagramme: UF3/UF5: Element-Match-Rate Pretty vs. Messy (Benutzeroberflächen-Datensatz); UF3: Visuelle Teilmetriken je Ansatz (Benutzeroberflächen-Datensatz)*
 
#### Fazit UF3
 
Bei der strukturellen/semantischen Übereinstimmung (EMR) sind die MLLM-basierten Ansätze klar überlegen, besonders deutlich beim BO-DS. Der regelbasierte Ansatz A punktet dagegen bei der exakten geometrischen Platzierung (Mean IoU, Position), trifft die Boxen präziser, erkennt aber insgesamt weniger Elemente. Die niedrigen IoU-Werte über alle Ansätze hinweg (45–60 %) zeigen, dass die präzise geometrische Reproduktion generell die schwierigste Teilaufgabe der visuellen Treue bleibt, während Style- und Text-Übereinstimmung durchweg sehr hoch sind.
 
---

## UF4: Nacharbeitsaufwand

---

## UF5: Robustheit
 
- Der visionsbasierte Ansatz C zeigt die höchste Robustheit gegenüber wechselnder struktureller Qualität, da sich seine Eingabe (Screenshot) zwischen Pretty- und Messy-Variante nicht ändert, anders als bei den metadatenbasierten Ansätzen, deren Figma-JSON sich strukturell stark ändert. Der Robustheitsindex liegt bei 0,99 (F1) bzw. 0,97 (EMR). Dass er nicht exakt bei 1,0 liegt, ist dabei nicht durch einen echten strukturbedingten Qualitätsverlust zu erklären, sondern durch die probabilistische Natur der MLLM-Ausgabe: Selbst bei (nahezu) identischem Input liefert das Modell aufgrund des Samplings nicht bei jedem Lauf exakt dasselbe Ergebnis. Die verbleibende Abweichung von wenigen Prozentpunkten entspricht damit im Wesentlichen der reinen Modell-Streuung und nicht einer Sensitivität gegenüber der Eingabestruktur.
- Der regelbasierte Ansatz A ist am wenigsten robust: Sein F1-Robustheitsindex ist 0,00 (vollständiger Einbruch bei Messy)
- Die metadaten- und hybridbasierten Ansätze liegen dazwischen (F1-Robustheitsindex B 0,89, D 0,92)
- Die EMR-Robustheit ist über alle MLLM-Ansätze hinweg hoch (0,94–0,97) —> die visuelle Übereinstimmung bricht bei unsauberen Mockups also weniger stark ein als die reine Komponentenerkennung

#### Fazit UF5
 
Robustheit und Eingabeart hängen eng zusammen: Je weniger ein Ansatz von der sauberen Layer-Struktur des Figma-Designs abhängt, desto stabiler bleibt er. Der visionsbasierte Ansatz C ist deshalb am robustesten, der regelbasierte Ansatz A am anfälligsten (kompletter Kollaps bei Messy). Die relevanten Kennzahlen sind über UF1 (F1), UF1.2 (Prop-Genauigkeit) und UF3 (EMR) jeweils in den Pretty-vs-Messy- und Degradations-/Robustheitsauswertungen abgebildet.
 
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
3. **Die IoU-Anomalie in der visuellen Treue:** Bei UF3 liegen fast alle Teilmetriken hoch (Position 0,85–0,90, Style 0,94–0,96, Text 0,99), aber Mean IoU fällt aus der Reihe: nur 0,46–0,60. Die Bounding-Boxen überlappen also deutlich schlechter, als Position/Größe/Style vermuten lassen. Bemerkenswert: A hat hier den höchsten IoU (0,60), obwohl die MLLM-Ansätze bei der Element-Match-Rate insgesamt vorne liegen. Das deutet darauf hin, dass die MLLM-Ansätze strukturell/semantisch besser treffen, die exakte geometrische Platzierung aber schlechter reproduzieren als der regelbasierte Ansatz.
4. **Prop-Genauigkeit steigt teils mit der Komplexität:** Bei C (Vision) liegt der Degradationsfaktor über 1 (medium 1,16, hard 1,12): Die Prop-Genauigkeit ist bei schwierigeren Mockups höher als bei einfachen (simple 0,41 → hard 0,45). Das läuft dem F1-Verhalten (das erwartungsgemäß fällt) entgegen und ist erklärungsbedürftig —> möglicherweise haben komplexe Komponenten explizitere/eindeutigere oder weniger Props, oder einfache Fälle enthalten mehr implizite Defaults, die schwer zu treffen sind.
5. **Kontext-Dokumentation hilft (vor allem dem schwächsten Ansatz):** Der Kontext-Strategie-Vergleich zeigt: Von „keine Doku" (1) zu „Doku" (2/3) gewinnt C am meisten (F1 0,80 → 0,91), während B und D nur moderat zulegen (0,90 → 0,93). Der Vision-Ansatz profitiert also überproportional von PrimeVue-Dokumentation im Kontext —> plausibel, da er ohne Metadaten am wenigsten strukturelle Information hat. Wichtig fürs Kosten-Argument (siehe Punkt 6): bereinigte Doku (3) ist praktisch gleichauf mit roher Doku (2), teils leicht besser.
6. **Kosten-Qualität (Strategie 3 dominiert Strategie 2):** Bei UF6 zeigt sich ein klares Effizienz-Argument: Rohe Doku (Strategie 2) ist durchgängig die teuerste Variante (Komponenten: b2 = 13,75 \$, c2 = 12,54 \$, d2 = 16,28 \$ Gesamtkosten), während bereinigte Doku (Strategie 3) bei etwa halben Kosten (b3 = 7,89 \$, c3 = 5,55 \$, d3 = 9,46 $) gleich gute oder bessere F1-Werte liefert. Die Bereinigung der Dokumentation ist also fast eine „Gratis-Verbesserung": weniger Tokens, gleiche Qualität.
7. **C ist der Effizienz-Sieger, D der Qualitäts-/Kosten-Verlierer:** Über UF6 hinweg ist C durchgängig am günstigsten (Komponenten 0,040 \$, Messy-UI nur 0,044 $ Ø) bei nur wenig geringerer Qualität. D (Hybrid) ist am teuersten (0,060 \$ Komponenten, 0,182 \$ Pretty-UI) — es verbraucht die meisten Input-Tokens (Metadaten und Screenshot), gewinnt dafür aber nur bei F1 gegenüber B. Der Verarbeitungszeit-Unterschied ist drastisch: A ~0,3 s gegenüber MLLM-Ansätzen mit 13–31 s.
 
---
 
## Gesamtfazit
 
Es gibt keinen universellen Sieger; die Wahl des Ansatzes hängt vom Einsatzszenario ab:
 
- **Höchste Erkennungsgenauigkeit bei sauberen Designs:** metadatenbasierter (B) und hybrider (D) Ansatz, praktisch gleichauf.
- **Höchste Robustheit gegenüber unsauberen Designs und beste Effizienz:** visionsbasierter Ansatz (C).
- **Höchste Geschwindigkeit und beste geometrische Präzision (IoU), aber vollständiger Kollaps bei unstrukturierten Mockups:** regelbasierter Ansatz (A).
- **Kontext-Dokumentation** hilft durchgängig (~+3 % F1), wobei die bereinigte Variante die wirtschaftlichste ist; **Few-Shot** bringt kleine, aber konsistente Zugewinne, am stärksten bei unstrukturierten Mockups.
 



