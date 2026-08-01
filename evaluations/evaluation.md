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
 
| Stufe | Grund                   | Metrik                      | Definition                                                                                             | Begründung                                                                                                                      |
|-------|-------------------------|-----------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| 0     | Strukturelle Integrität | Parse-OK-Rate               | Anteil der Outputs mit gültigem `<template>` und `<script>`-Block                                      | Basisindikator für strukturelle Integrität                                                                                      |
| 1     | Technische Korrektheit  | Compile Success Rate        | Anteil der generierten Code-Snippets, die ohne Fehler kompilieren (`vue-tsc --noEmit`)                 | Misst die technische Korrektheit des generierten Codes, was für die praktische Nutzbarkeit entscheidend ist                     |
| 2     | Vollständigkeit         | Import-Completeness         | Anteil der im Template verwendeten PrimeVue-Komponenten, die im Script importiert sind                 | Misst die Vollständigkeit der generierten Code-Snippets hinsichtlich notwendiger Abhängigkeiten                                 |
| 3     | Framework-Konformität   | PrimeVue-API-Konformität    | Anteil der generierten Komponenten, die PrimeVue-API-Konventionen (Slots, Props, Passthrough) erfüllen | Misst die Einhaltung der Framework-spezifischen Konventionen, entscheidend für Wartbarkeit und Erweiterbarkeit                  |
| 4     | Wartbarkeit             | Arbitrary Value Usage (AVU) | Anteil der Tailwind-Klassen-Tokens mit beliebiger Wertsyntax (`w-[123px]`) an allen Klassen-Tokens     | Hoher AVU-Wert zeigt Abweichung von standardisierten Design-Tokens, daraus resultiert ein schwerer wart- und themenfähiger Code |
| 4     | Wartbarkeit             | Code Duplication Rate (CDR) | Anteil dupliziert vorkommender Code-Blöcke (Template und Script) an der Gesamtzeilenzahl der SFC       | Wiederholte statt parametrisierte Blöcke (z. B. manuell kopierte Formularfelder statt `v-for`) erschweren Änderungen            |
| 4     | Wartbarkeit             | Lines of Code (LOC)         | Physische Zeilenzahl der generierten SFC, absolut und im Verhältnis zur Ground Truth                   | Misst Umfang bzw. Unvollständigkeit der Generierung                                                                             |
| 4     | Wartbarkeit             | Comment Density (CD)        | Anteil der Kommentarzeilen an der Gesamtzeilenzahl                                                     | Zu wenige Kommentare erschweren Wartung, zu viele deuten auf triviale/redundante Erklärungen statt Substanz hin                 |
 
#### Teilmetriken für PrimeVue-API-Konformität
 
**Datengrundlage: `primevue-api-type.json`.** Der Abgleich erfolgt gegen einen Katalog, der direkt aus den TypeScript-Typdefinitionen von PrimeVue extrahiert wurde (`.d.ts`-Dateien unter `node_modules/primevue/{component}/index.d.ts`, siehe eigenes Extraktions-Notebook). Für jede Komponente enthält der Katalog:
 
```json
{
  "Dialog": {
    "props":   { "header": "string | undefined", "modal": "boolean | undefined", ... },
    "slots":   ["default", "header", "footer", "closebutton", ...],
    "pt_keys": ["root", "header", "title", "headerActions", ...],
    "emits":   ["update:visible", "hide", "after-hide", ...]
  }
}
```
 
**Geltungsbereich: 25 (+11 Spezial-) Komponenten.** Der Katalog wird bewusst nur für eine Teilmenge aufgebaut (Formularelemente, Buttons, Panels, Overlays, Menüs sowie 11 zusätzliche Sub-/Spezialkomponenten wie z. B. `AccordionPanel`, `TabPanel`, `Column`; siehe `COMPONENTS`-Liste im Extraktions-Notebook), nicht für alle in `PRIMEVUE_COMPONENTS` geführten Komponenten, die Component-F1 zugrunde liegen. Instanzen von Typen außerhalb des Katalogs tragen nicht zu UF2-Stufe-3 bei -> Ausschluss ist im Ergebnisteil als Geltungsbereich zu benennen.
 
**Alle vier Teilmetriken werden über alle generierten Komponenteninstanzen berechnet, deren Typ im Katalog enthalten ist**, unabhängig davon, ob diese Instanz per Component-F1 mit der Ground Truth gematcht werden konnte. Der Abgleich ist damit durchgehend eine Selbstkonsistenzprüfung des generierten Codes gegen die Framework-API, keine Übereinstimmungsprüfung gegen die Referenz: Ein halluzinierter `Card`-Block mit ausschließlich gültigen `Card`-Props/-Slots ist API-konform, auch wenn `Card` an dieser Stelle laut Ground Truth gar nicht hätte generiert werden sollen. Dieser zweite Fehler wird bereits von Component-F1 erfasst und soll hier nicht doppelt gezählt werden.
 
| Teilmetrik                  | Definition                                                                                                                                                                                                                   | Begründung                                                                                                                                                                                                                                                  |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Prop-Validity Rate**      | Anteil der im generierten Code gesetzten Props, die laut Katalog für die jeweilige Komponente existieren (inkl. generischer Props `pt`, `ptOptions`, `dt`, `unstyled`, die in praktisch jeder `*Props`-Interface vorkommen). | Reine Selbstkonsistenzprüfung gegen die Framework-API, unabhängig davon, ob die Komponente selbst korrekt gemappt wurde.                                                                                                                                    |
| **Slot-Korrektheit**        | Validitätsprüfung jedes generierten Slot-Namens gegen `catalog[comp]['slots']`.                                                                                                                                              | Erfasst API-Ungültigkeit (ein Slot, der bei dieser Komponente gar nicht existiert).                                                                                                                                                                         |
| **Binding-Korrektheit**     | Anteil der Props mit korrekt gewählter Bindungsart, geprüft gegen den Katalog-Typ-String über `is_static_bindable()`.                                                                                                        | UF2 nennt Prop-Bindung explizit. Einziger tatsächlicher Fehlerfall: statische Bindung (`prop="wert"`) bei einem Prop, dessen Typ nicht auf `string` reduzierbar ist — dynamische Bindung (`:prop=`) ist syntaktisch immer zulässig und wird nicht bestraft. |
| **Passthrough-Korrektheit** | Anteil syntaktisch gültiger `pt`-Schlüssel (erste Verschachtelungsebene, z. B. `root`, `header`) an allen verwendeten Top-Level-`pt`-Schlüsseln, geprüft gegen `catalog[comp]['pt_keys']`.                                   | UF2 nennt Passthrough explizit. Rekursive Tiefenprüfung verschachtelter Passthrough-Pfade (z. B. `pcCloseButton.root`) ist nicht implementiert, siehe Einschränkung unten.                                                                                  |
 
**Aggregation:** PrimeVue-API-Konformität als Gesamtmetrik ist das ungewichtete Mittel der vier Teilmetriken pro Mockup, anschließend Makro-Mittel über den Datensatz. Da die Teilmetriken unterschiedliche Konstrukte messen (Existenz, Struktur, Bindungsart, Erweiterungsmechanismus), werden sie **zusätzlich einzeln** gespeichert. Die Gesamtmetrik dient nur der Einordnung auf einen Blick, nicht als alleinige Entscheidungsgrundlage.
 
##### Prop-Validity Rate (PVR)
 
$$
\text{PVR}_i = \frac{\big|\{\, p \in \text{props}(g) : p \in \text{catalog}[\text{comp}(g)].\text{props} \,\cup\, \text{GENERIC\_PROPS} \,\}\big|}{|\text{props}(g)|}
$$
 
summiert über alle generierten Instanzen $g$ eines Mockups mit $\text{comp}(g) \in \text{catalog}$, Zähler und Nenner vor der Quotientenbildung über alle Instanzen aufsummiert (Mikro-Logik innerhalb eines Mockups). Komplement $1 - \text{PVR}_i$ ist die Halluzinationsrate bezogen auf die tatsächliche API, zu unterscheiden von der `hallucinated`-Kategorie aus Component-Prop Accuracy, die relativ zur Ground Truth zählt (ein dort „halluziniertes" Prop kann eine gültige, nur von der Referenz abweichende PrimeVue-Prop-Verwendung sein).
 
##### Slot-Korrektheit
 
$$
\text{SlotKorrektheit}_i = \frac{\big|\{\, s \in \text{slots}(g) : s \in \text{catalog}[\text{comp}(g)].\text{slots} \,\}\big|}{|\text{slots}(g)|}
$$
 
summiert über alle generierten Instanzen $g$ eines Mockups mit $\text{comp}(g) \in \text{catalog}$ und $|\text{slots}(g)| > 0$ (Instanzen ohne verwendete Slots tragen nicht zu Zähler oder Nenner bei), analog zur Mikro-Logik von PVR. Die Metrik beantwortet ausschließlich „existiert dieser Slot bei dieser Komponente", nicht „hat das Modell denselben Slot wie die Referenz gewählt". Ob ein Modell einen gültigen, aber von der Referenz abweichenden Slot nutzt (z. B. `#header` statt `#title`), ist ein separater, hier nicht erfasster Aspekt.
 
##### Binding-Korrektheit
 
$$
\text{cat}_{\text{binding}}(p) =
\begin{cases}
\textbf{falsch} & \text{Bindung}(p) = \text{statisch} \ \wedge\ \neg\,\text{is\_static\_bindable}(\tau(p)) \\
\textbf{korrekt} & \text{sonst}
\end{cases}
$$
 
mit $\tau(p)$ = Katalog-Typ-String des Props und `is_static_bindable()` gemäß der im Extraktions-Notebook definierten Heuristik (nur `string` und `HintedString<...>` gelten als statisch bindbar; `| undefined` wird vor der Prüfung entfernt). Props ohne Katalog-Eintrag (z. B. generische Props ohne dokumentierten Typ) werden aus der Berechnung ausgeschlossen statt als Fehler gezählt. Die Kategorisierung wird über alle Props aller generierten Instanzen mit $\text{comp}(g) \in \text{catalog}$ aufsummiert; $\text{BindingKorrektheit}_i$ ergibt sich als Anteil **korrekt** an allen kategorisierten Props.
 
##### Passthrough-Korrektheit
 
$$
\text{PTKorrektheit}_i = \frac{\big|\{\, k \in \text{pt\_keys}(g) : k \in \text{catalog}[\text{comp}(g)].\text{pt\_keys} \,\}\big|}{|\text{pt\_keys}(g)|}
$$
 
summiert über alle generierten Instanzen $g$ eines Mockups mit $\text{comp}(g) \in \text{catalog}$ und $|\text{pt\_keys}(g)| > 0$ (Instanzen ohne `pt`-Nutzung tragen nicht bei), analog zu Slot-Korrektheit. Geprüft wird nur die erste Verschachtelungsebene der `pt`-Struktur (siehe Einschränkung unten).
 
##### Einschränkungen
 
- **Nur ein Teil der PrimeVue-Komponenten abgedeckt** (25 + 11 Spezialkomponenten, siehe Geltungsbereich oben) — bei der Diskussion der UF2-Ergebnisse anzugeben, welcher Anteil aller generierten Instanzen überhaupt in die Stufe-3-Auswertung eingehen konnte.
- **Passthrough-Korrektheit prüft nur die erste Verschachtelungsebene.** Verschachtelte Pfade wie `pcCloseButton.root` (Button-Passthrough innerhalb von Dialog) würden eine rekursive Auflösung über die Katalogeinträge der referenzierten Unterkomponente erfordern; das ist nicht implementiert, da verschachteltes `pt` in generiertem Code vermutlich selten vorkommt.
- **Veraltete („deprecated") Slots zählen als gültig.** Der Katalog übernimmt alle Mitglieder der `*Slots`-Interfaces unverändert, auch mit `@deprecated`-JSDoc-Hinweis markierte (z. B. `hideicon`/`showicon` bei Password, ersetzt durch `maskicon`/`unmaskicon`). Ein generierter veralteter Slot ist damit laut Slot-Korrektheit „gültig", obwohl er stilistisch nicht dem aktuellen Stand der Bibliothek entspricht — bei Bedarf lässt sich das über eine zusätzliche Nachbearbeitung des Katalogs (Filterung von JSDoc-`@deprecated`-Blöcken vor der Extraktion) verschärfen; aktuell nicht umgesetzt.
- **Binding-Korrektheit ist eine grobe Heuristik.** Union-Types wie `string | number` gelten aktuell als nicht statisch bindbar, obwohl eine statische Bindung dort für den `string`-Teil technisch zulässig wäre — konservativ in Richtung „als Fehler zählen", nicht umgekehrt.
- **Keine Referenzierung der Ground Truth mehr in Stufe 3.** Da alle vier Teilmetriken unabhängig vom F1-Matching berechnet werden, sagt ein hoher UF2-Stufe-3-Wert nichts darüber aus, ob die *richtigen* Komponenten überhaupt verwendet wurde, das bleibt ausschließlich Aufgabe von Component-F1 (UF1). Beide Metriken sind bei der Ergebnisinterpretation komplementär zu lesen, nicht gegeneinander austauschbar.

**Teilemetriken for Wartbarkeit:**

| Teilmetrik                      | Definition                                                                                                                                                                                                                          | Begründung                                                                                                                                                                                                                                                                                                                                             |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Arbitrary Value Usage (AVU)** | Anteil der Tailwind-Klassen-Tokens mit beliebiger Wertsyntax (`w-[123px]`, `bg-[#ff0000]`, `top-[10.5px]`) an allen Klassen-Tokens im `class`-Attribut: $\text{AVU} = n_{\text{arbitrary}} / n_{\text{total}}$.                     | Arbitrary Values umgehen das Design-System und sind nicht themenfähig; ein hoher Wert zeigt, dass Pixel-genaue statt standardisierter Werte verwendet werden —> typische Folge von Ansätzen, die Layout aus absoluten Figma-Koordinaten statt aus Auto-Layout-Constraints ableiten.                                                                    |
| **Code Duplication Rate (CDR)** | Anteil der Zeilen, die Teil eines duplizierten Blocks sind (Mindestlänge z. B. 5 Token), an der Gesamtzeilenzahl der SFC — getrennt für `<template>` und `<script>` ermittelt, per Token-basierter Clone-Detection (z. B. `jscpd`). | Erfasst copy-paste-artige Wiederholung statt Parametrisierung, etwa drei manuell ausgeschriebene, fast identische `<RadioButton>`-Blöcke statt eines `v-for` über ein Options-Array. Eine Änderung müsste sonst an mehreren Stellen statt an einer vorgenommen werden.                                                                                 |
| **Lines of Code (LOC)**         | Physische Zeilenzahl der generierten SFC (`<template>` + `<script>` getrennt und gesamt), absolut sowie als Verhältnis $\text{LOC}_{gen}/\text{LOC}_{gt}$ zur Ground Truth.                                                         | Misst Umfang (deutlich mehr Zeilen als die Referenz bei gleichem Funktionsumfang) oder Unvollständigkeit (deutlich weniger, z. B. bei abgebrochener Generierung).                                                                                                                                                                                      |
| **Comment Density (CD)**        | Anteil der Kommentarzeilen (`//`, `/* */` im Script, `<!-- -->` im Template) an der Gesamtzeilenzahl: $\text{CD} = n_{\text{comment}} / n_{\text{total}}$.                                                                          | Anders als bei den übrigen Metriken ist „niedriger = besser" hier **nicht** zutreffend: Fehlende Kommentare bei nicht-trivialer Logik erschweren die Wartung, exzessive Kommentierung trivialer Markup-Zeilen deutet auf Redundanz statt Substanz hin. Interpretation erfolgt relativ zur Ground-Truth-Kommentardichte, nicht als isolierter Zielwert. |
 
**Aggregation:** AVU, CDR und CD sind Anteilswerte; hier wird analog zu Component-F1 sowohl das **Makro-Mittel** (Durchschnitt der Pro-Mockup-Anteile) als auch das **Mikro-Mittel** (globale Summen vor der Quotientenbildung) berichtet. LOC ist ein absoluter Zählwert mit typischerweise rechtsschiefer Verteilung; hier werden **Median und Interquartilsabstand** statt Mittelwert berichtet, konsistent mit der Behandlung der Verarbeitungszeit in UF6. Alle vier Metriken werden zusätzlich nach Komplexitätsstufe (`simple`/`medium`/`hard`) aufgeschlüsselt berichtet.
 
**Praktische Umsetzung:**
 
```
AVU  -- Regex auf class-Attributwerte: r'-\[[^\]]+\]' als Zähler, Gesamtzahl
        der Klassen-Tokens (Split auf Leerzeichen) als Nenner.
CDR  -- jscpd (oder aequivalent) pro SFC, getrennt für <template> und <script>,
        Mindest-Tokenlänge 5, exakte Duplikate.
LOC  -- len(text.splitlines()), getrennt fuer <template> und <script>-Block
        (via extract_template_block(), siehe Component-F1).
CD   -- Kommentar-Regex je Blocktyp gegen Gesamtzeilenzahl.
```
 
`extract_template_block()` wird hier wiederverwendet, um Template- und Script-Anteil sauber zu trennen; dieselbe tiefenrobuste Extraktion wie bei Component-F1, aus denselben Gründen (verschachtelte Named-Slot-Templates dürfen die Blockgrenzen nicht verfälschen).
 
**Randfallbehandlung:** Ist die SFC nicht parsbar (`parse_ok = False`, Stufe 0), werden keine Wartbarkeitswerte berechnet (`None`), nicht der ungünstigste Wert eingesetzt —> das würde einen strukturellen Fehler doppelt bestrafen.


### UF3: Visuelle Treue

| Metrik                         | Definition                                                                                                                                 | Begründung                                                                                                                                                                    |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Element-Match-Rate (EMR)       | F1-artige Kennzahl über eine bipartite (Hungarian) Zuordnung von DOM-Elementen zwischen generiertem und Referenz-Snapshot                  | Erfasst, ob die generierte UI überhaupt die "richtigen" Elemente in der richtigen ungefähren Anordnung enthält, bevor Detailmerkmale (Position, Größe, Style) bewertet werden |
| Mean IoU                       | Mittlere Intersection-over-Union der Bounding-Boxen gematchter Elementpaare                                                                | Kombiniertes Maß für Positions- *und* Größenübereinstimmung eines Elements                                                                                                    |
| Mean Position-/Size-Similarity | Mittlere, auf Viewport bzw. Elementgröße normalisierte Abweichung von Zentrumsposition bzw. Breite/Höhe gematchter Paare                   | Trennt IoU in seine zwei Ursachen auf, sodass unterscheidbar ist, ob ein Element falsch platziert oder falsch dimensioniert wurde                                             |
| Mean Style-Match-Rate          | Anteil übereinstimmender CSS-Properties (Farbe, Typografie, Spacing, Layout) an allen geprüften Properties, gemittelt über gematchte Paare | Erfasst visuelle Detailtreue jenseits von Layout (Farbgebung, Schriftgewicht, Abstände), die reine Bounding-Box-Metriken nicht abbilden                                       |
| Mean Text-Similarity           | Mittlere Zeichenketten-Ähnlichkeit (SequenceMatcher-Ratio) des Eigentexts gematchter Paare                                                 | Zusatzwert, der eine hohe EMR bei niedriger Text-Similarity zeigt korrekt platzierte, aber falsch beschriftete Elemente an (ein von EMR bewusst nicht bestrafter Fehler)      |

#### Datengrundlage: DOM-Snapshots

Grundlage sind keine Screenshots, sondern strukturierte DOM-Snapshots pro Story (Ground Truth und generiert), erzeugt über eine zweistufige Pipeline:

1. **`storybook-generate-stories.ipynb`** injiziert für jede generierte SFC eine Storybook-Story (benannter Export in der jeweiligen GT-Story-Datei) und schreibt einen Story-Manifest (`stories_manifest_{TYPE}.json`), inkl. der pro Mockup vorgesehenen Viewport-Größe.
2. **`evaluation_visual_fidelity_helper_render_and_extract.ipynb`** (Notebook-Fassung von `render_and_extract.py`) läuft gegen eine bereits gestartete Storybook-Instanz (`STORYBOOK_URL`, Voraussetzung: `npm run storybook`), löst für jeden Manifest-Eintrag die tatsächliche Live-Story-ID über `/index.json` auf (Abgleich von `importPath` und normalisiertem `exportName`, statt sie zu erraten, sodass es robust gegenüber Storybooks interner ID-Sanitisierung ist) und rendert die Story per Playwright im vorgesehenen Viewport.

Pro Story wird via injiziertem `EXTRACTION_JS`-Skript der gesamte DOM-Baum unterhalb `#storybook-root` traversiert und für jedes Element erfasst: Tag-Name, `data-pc-name`/`data-pc-section` (PrimeVue-Komponentenkennung, falls vorhanden), Eigentext (nur direkte Text-Kindknoten, nicht der der Nachfahren), Bounding-Box (`getBoundingClientRect()`) sowie 14 `getComputedStyle()`-Properties (Farbe, Typografie, Spacing, Layout). Ergebnis ist ein JSON-Snapshot pro Story unter `evaluations/visual_fidelity_snapshots/{components|uis}/<approach>/...`. Das `extract_snapshot()`-Retry-Handling fängt dabei nicht nur Timeouts, sondern beliebige Playwright-Fehler ab (z. B. durch Storybooks HMR-Websocket zerstörte Execution-Contexts), da diese bei mehreren hundert bis tausend Stories pro Lauf üblicherweise auftauchen können.

Wie bei UF1/UF2 wird zwischen zwei Datensatz-Typen unterschieden (`TYPE = 'components' | 'uis'`): Bei `components` erfolgt die Gruppierung nach Komplexitätsstufe (`simple`/`medium`/`hard`), bei `uis` nach struktureller Qualität (`pretty`/`messy`).

#### Element-Matching (bipartite / Hungarian)

Da generierte und Referenz-Snapshots unterschiedlich viele Elemente enthalten können und keine explizite ID-Korrespondenz zwischen ihnen besteht, wird die Zuordnung nicht positionsbasiert (z. B. per Dokumentreihenfolge, wie bei Component-Prop Accuracy in UF1), sondern als Zuordnungsproblem gelöst: Für jedes Paar (generiertes Element $g$, Referenzelement $r$) wird eine Match-Kosten-Funktion berechnet,

$$
\text{cost}(g, r) = w_c \cdot \mathbb{1}[\text{comp}(g) \ne \text{comp}(r)] \;+\; w_t \cdot \big(1 - \text{textsim}(g, r)\big) \;+\; w_p \cdot \text{posdist}(g, r)
$$

mit $w_c = 1{,}0$, $w_t = 0{,}5$, $w_p = 0{,}5$. $\text{comp}(\cdot)$ ist `data-pc-name`, wenn auf mindestens einer Seite vorhanden, sonst der HTML-Tag-Name als Fallback; `textsim` ist die Sørensen-Dice-artige `difflib.SequenceMatcher`-Ratio des Eigentexts (leer/leer $=1{,}0$); `posdist` ist die auf Viewport-Breite/-Höhe normalisierte Chebyshev-Distanz der Bounding-Box-Zentren. Die global kostenminimale 1:1-Zuordnung wird per Ungarischem Algorithmus (`scipy.optimize.linear_sum_assignment`) über die vollständige Kostenmatrix aller generierten × aller Referenz-Elemente bestimmt; Paare mit $\text{cost} > \text{MAX\_MATCH\_COST} = 1{,}2$ werden verworfen, auch wenn sie im Optimum lägen, um bei stark abweichender Elementanzahl keine sinnlosen Zuordnungen zu erzwingen. Nicht gematchte generierte Elemente zählen als **FP**, nicht gematchte Referenzelemente als **FN**, gematchte Paare als **TP**.

**Bewusste Nachrangigkeit von Text im Matching:** Die Gewichtung ($w_c = 2 \cdot w_t$) sorgt dafür, dass Komponentenidentität dominiert, sodass zwei `Button`-Instanzen mit unterschiedlicher Beschriftung i. d. R. dennoch einander zugeordnet statt als FP+FN gezählt werden. Das hält Position/Größe/Style zwischen inhaltlich entsprechenden Elementen vergleichbar, bedeutet aber, dass EMR allein Textkorrektheit **nicht** erfasst, dafür wird `mean_text_similarity` separat ausgewiesen.

#### Per-Paar- und Per-Mockup-Metriken

Für jedes gematchte Paar $(g, r)$ werden vier Einzelwerte berechnet und anschließend pro Mockup gemittelt:

- **IoU:** Standard-Intersection-over-Union der beiden Bounding-Boxen; deckungsgleiche Nullflächen (beide Boxen $0\times0$) gelten als perfekter Treffer (IoU $=1$), disjunkte Boxen ohne Fläche als Treffer $=0$.
- **Position-Similarity:** $1 - \max\!\big(|\Delta c_x| / vw,\ |\Delta c_y| / vh\big)$, mit $\Delta c_x, \Delta c_y$ = Differenz der Bounding-Box-Zentren und $vw, vh$ = Viewport-Breite/-Höhe.
- **Size-Similarity:** Mittelwert der dimensionsweisen Ähnlichkeit $1 - \min(|\Delta w| / \max(w_g, w_r), 1)$ für Breite und Höhe separat; $0\times0$ auf beiden Seiten zählt als perfekter Treffer.
- **Style-Match-Rate:** Anteil übereinstimmender Properties an 13 geprüften `STYLE_PROPS`, je nach Property-Klasse mit unterschiedlicher Vergleichslogik: Farbwerte (`color`, `backgroundColor`, `borderColor`) werden geparst und kanalweise mit Toleranz 12 verglichen, wobei zwei vollständig transparente Farben unabhängig vom RGB-Kanal als gleich gelten; Längenwerte (`fontSize`, `padding`, `margin`, `borderRadius`, `gap`, `borderWidth`) werden auf `px`-Zahlenlisten geparst und mit Toleranz 2 px elementweise verglichen (Shorthand-Werte mit 1–4 Komponenten); kategoriale Properties (`fontWeight`, `display`, `justifyContent`, `alignItems`, `textAlign`) werden auf exakte String-Gleichheit geprüft.
- **Text-Similarity:** wie im Matching-Kosten, aber getrennt für die finale Kennzahl berechnet.

Die **Element-Match-Rate** pro Mockup ist die F1-artige Kennzahl über die Zuordnungsergebnisse:

$$
\text{EMR}_i = \frac{2 \cdot TP_i}{2 \cdot TP_i + FP_i + FN_i}
$$

(analog zur Component-F1-Berechnung in UF1, hier jedoch auf DOM-Elementebene statt auf Komponententyp-Multiset-Ebene). Die vier Mittelwerte (Mean IoU/Position/Size/Style/Text-Similarity) werden nur über tatsächlich gematchte Paare gebildet.

**Randfallbehandlung:** Enthält eine der beiden Seiten gar keine Elemente, werden alle Elemente der anderen Seite direkt als FP bzw. FN gezählt, ohne Kostenmatrix-Berechnung. Gibt es keine gematchten Paare überhaupt, werden die IoU-/Position-/Size-/Style-/Text-Mittelwerte als `None` geführt statt als `0`, um einen fehlenden Vergleich nicht mit einem vollständigen Fehlschlag zu verwechseln; $\text{EMR}_i$ ist in diesem Fall weiterhin über TP/FP/FN definiert ($=1{,}0$ nur im Sonderfall, dass auch keine Elemente vorhanden waren).

#### Aggregation über den Datensatz

Wie bei UF1/UF2 werden Makro- und Mikro-Mittel berechnet, gruppiert nach Ansatz, Strategie, Modell und Prompt-Strategie sowie zusätzlich nach Komplexitätsstufe:

$$
\text{EMR}_{macro} = \frac{1}{N}\sum_{i=1}^N \text{EMR}_i
\qquad\qquad
\text{EMR}_{micro} = \frac{2 \cdot \sum_i TP_i}{2 \cdot \sum_i TP_i + \sum_i FP_i + \sum_i FN_i}
$$

Mean IoU/Position/Size/Style/Text-Similarity werden ausschließlich als Makro-Mittel geführt (arithmetisches Mittel der Pro-Mockup-Werte, `None`-Werte ausgeschlossen), da für sie keine TP/FP/FN-Grundlage für ein Mikro-Mittel existiert. Export erfolgt wie bei den übrigen UF-Notebooks zweistufig als CSV: eine Langform pro Mockup (`eval_visual_fidelity_{TYPE}_by_mockup.csv`) und eine Zusammenfassung pro Methode/Strategie/Modell/Prompt-Strategie (`eval_visual_fidelity_{TYPE}_summary.csv`).

#### Einschränkungen

- **Kein Bildvergleich.** Es werden keine CLIP-Embeddings oder Pixel-/Screenshot-Vergleiche verwendet; die Metrik basiert vollständig auf DOM-Struktur, Bounding-Boxen und `getComputedStyle()`-Werten. Rein visuelle Abweichungen ohne DOM-Entsprechung (z. B. Custom-CSS-Effekte, die keine der 13 geprüften Properties betreffen) werden dadurch nicht erfasst.
- **Matching ist textnachrangig** (s. o.) —> EMR bewertet primär Vorhandensein, Typ und Grobposition eines Elements, nicht dessen Beschriftung. Interpretation von EMR und Mean-Text-Similarity ist daher stets gemeinsam vorzunehmen.
- **Style-Match-Rate prüft nur 13 vordefinierte Properties**, keine vollständige CSSOM-Differenz; Properties außerhalb dieser Liste (z. B. `boxShadow`, `transform`) fließen nicht ein.
- **Abhängigkeit von einer laufenden Storybook-Instanz.** Die Snapshot-Erzeugung (Helper-Notebook) setzt einen erreichbaren, vollständig indizierten Storybook-Dev-Server voraus; nicht auflösbare Manifest-Einträge (z. B. wegen Story-ID-Mismatch nach nachträglicher Story-Generierung) werden übersprungen und nicht in die Auswertung einbezogen.


### UF4: Nacharbeitsaufwand

| Metrik                       | Definition                                                                                                                         | Begründung                                                                                                                                     |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Manueller Nacharbeitsaufwand | Kategoriale Einstufung jedes generierten Codes in eine von drei Stufen (Trivial / Moderat / Grundlegend) durch manuelle Inspektion | Automatisierte Metriken (UF1–UF3) erfassen Teilaspekte, aber nicht, wie viel tatsächlicher menschlicher Aufwand zur Produktionsreife nötig ist |

**Erfassung als manuelle Metrik in drei Stufen** (kein Notebook, da inhärent nicht automatisierbar):

- **Trivial**: keine oder nur minimale Anpassungen nötig (z. B. kleinere Prop-Wertkorrekturen).
- **Moderat**: deutliche, aber lokal begrenzte Anpassungen nötig, Grundstruktur bleibt erkennbar und wiederverwendbar (z. B. Umstrukturierung einzelner Komponenten, Ergänzen fehlender Imports).
- **Grundlegend**: generierter Code ist in dieser Form nicht brauchbar und muss größtenteils neu geschrieben werden.

Umsetzung: manuelle Sichtung der generierten SFCs pro Methode/Strategie/Komplexitätsstufe und Variante, Vergabe je einer der drei Stufen pro Sichtung. Ergebnis ist eine Verteilung (Anteil Trivial/Moderat/Grundlegend) je Methode, keine kontinuierliche Kennzahl. Diese dient als qualitatives Korrektiv zu den automatisierten UF1–UF3-Metriken, die einen Code z. B. trotz hoher F1/EMR-Werte als in Summe kaum wiederverwendbar einstufen können (oder umgekehrt).

### UF5: Robustheit

| Metrik             | Definition                                                                                              | Begründung                                                                                                    |
|--------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Degradationsfaktor | Verhältnis einer Leitmetrik (F1, PropAcc, EMR, ...) zwischen dem `messy`- und dem `pretty`-UI-Datensatz | Quantifiziert Robustheit gegenüber struktureller Qualität der Figma-Eingabe als relative Qualitätsveränderung |

**Kein eigenes Notebook.** UF5 ist eine reine Nachauswertung bereits vorhandener Ergebnisse: Alle UF1-/UF2-/UF3-Notebooks unterstützen neben dem `components`-Datensatz (Gruppierung nach Komplexität `simple`/`medium`/`hard`) auch den `uis`-Datensatz (`TYPE = 'uis'`), bei dem statt der Komplexität die strukturelle Qualität des Figma-Mockups die Gruppierungsdimension ist: `pretty` (sauber strukturiertes Auto-Layout, konsistente Benennung) vs. `messy` (unstrukturiert, z. B. absolute Positionierung, inkonsistente Layer-Namen). Für UF5 werden dieselben Metriken wie in UF1–UF3 verwendet, aber auf den `uis`-Datensatz angewendet und zwischen den beiden Gruppen verglichen statt zwischen Komplexitätsstufen.

$$
\text{Degradation} = \frac{\text{Score}_{messy}}{\text{Score}_{pretty}}
$$

berechnet für ausgewählte Leitmetriken je UF: $F1_{macro}$ und $\text{PropAcc}_{macro}$ (UF1), die Wartbarkeits-Teilmetriken bzw. PrimeVue-API-Konformität (UF2), sowie $\text{EMR}_{macro}$ (UF3). Werte nahe 1 zeigen, dass ein Verfahren auch bei unsauber strukturierten Mockups eine vergleichbare Ergebnisqualität liefert (hohe Robustheit); Werte deutlich unter 1 zeigen eine starke Abhängigkeit von einer sauberen Figma-Struktur. Da alle zugrunde liegenden Metriken bereits nach `pretty`/`messy` aufgeschlüsselt aus den UF1-/UF2-/UF3-CSV-Exports vorliegen, ist für UF5 keine zusätzliche Datenerhebung nötig — lediglich eine Quotientenbildung über die bestehenden Summary-CSVs.


### UF6: Effizienz

| Metrik            | Definition                                                            | Begründung                                                                                                 |
|-------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Verarbeitungszeit | Dauer einer einzelnen Figma-zu-Vue-Transformation                     | Misst die Effizienz der Verfahren, insbesondere im Hinblick auf die Skalierbarkeit bei komplexeren Designs |
| Token-Verbrauch   | Input-/Output-Tokens pro Transformation (nur Ansatz B/C, LLM-basiert) | Grundlage der API-Kosten und unabhängiges Effizienzmaß jenseits der reinen Laufzeit                        |
| API-Kosten        | Token-basierte monetäre Kosten pro Transformation                     | Quantifiziert die wirtschaftlichen Kosten der Verfahren, insbesondere bei Skalierung auf größere Projekte  |

**Datengrundlage bereits vorhanden.** Anders als UF1–UF3 wird UF6 nicht aus dem generierten Code selbst berechnet, sondern direkt aus den Pipeline-Reports, die bereits während der Codegenerierung durch die drei Transformationsansätze pro Mockup mitgeschrieben werden: `duration_ms` für die Verarbeitungszeit sowie, nur für die LLM-basierten Ansätze B/C und D, da Ansatz A (regelbasiert) keine API nutzt, `input_tokens`, `output_tokens` und `cost_usd`. Es ist damit kein eigenes Extraktions-Notebook nötig; UF6 reduziert sich auf eine Aggregation dieser bereits erfassten Werte (Mittelwert und Median pro Methode/Strategie/Komplexität bzw. `pretty`/`messy`, Summe der Kosten pro Strategie).