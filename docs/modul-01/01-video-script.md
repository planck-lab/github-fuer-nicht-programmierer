---
title: "Modul 1 — Video-Script: GitHub ist nicht was du denkst"
date: 2026-03-23
tags: [github, freebie, lernreise, modul-1, video-script]
category: Projekte
status: completed
---

# Video-Script: GitHub ist nicht was du denkst

**Format:** Screencast / Talking Head + Bildschirm | **Dauer:** ca. 15 Minuten  
**Sprecher:** Jan (Ingenieur, kein Developer)

---

<!-- NEU — Vorbereitungshinweis VOR dem Video -->
## VORBEREITUNG — Bevor du startest

### [Texteinblendung / Talking Head]

**Jan:**

> „**Kurz bevor wir loslegen:** Leg dir am besten jetzt schon einen kostenlosen GitHub-Account an auf [github.com/signup](https://github.com/signup). Dauert 2 Minuten. Dann kannst du beim Walkthrough später schon mitschauen und weißt, wo alles ist.
>
> Hast du schon einen Account? Perfekt, dann kann's losgehen."

---

## TEIL 1 — Begrüßung + Hook (0:00 – 2:30)

### [Talking Head — Jan vor Kamera]

**Jan:**

> „Hey, ich bin Jan — Ingenieur, kein Programmierer. Und ich nutze GitHub fast jeden Tag.
>
> Wenn du jetzt denkst: ‚GitHub? Das ist doch was für Software-Entwickler' — dann ging es mir genauso. Jahrelang. Ich habe GitHub ignoriert, weil ich dachte, das ist ein Ort, an dem Nerds Codezeilen hin- und herschicken.
>
> Und dann habe ich herausgefunden: Die kompletten deutschen Bundesgesetze liegen auf GitHub. Kochrezepte liegen auf GitHub. Die COVID-19-Forschungsdaten der Johns Hopkins University — auf GitHub.
>
> Keines davon ist Code.
>
> GitHub ist kein Programmierer-Tool. GitHub ist ein Kollaborations- und Versionierungstool. Und wenn du Projekte managst, Texte schreibst, Forschungsdaten verwaltest oder einfach mit anderen Menschen an Dokumenten zusammenarbeitest — dann ist das hier für dich.
>
> In den nächsten 15 Minuten zeige ich dir, was GitHub wirklich ist. Ohne eine einzige Zeile Code. Versprochen."

<!-- NEU — Learning Outcomes nach dem Hook -->
### [Texteinblendung — Learning Outcomes]

> **Nach diesem Modul kannst du:**
>
> 1. Erklären, was ein Repository ist
> 2. Verstehen, warum Version Control existiert
> 3. Dein erstes eigenes Repo erstellt haben

---

## TEIL 2 — Was ist ein Repository? (2:30 – 5:00)

### [Bildschirm: Normaler Datei-Explorer / Finder]

**Jan:**

> „Fangen wir mit dem wichtigsten Begriff an: **Repository**. Oder kurz: Repo.
>
> Stell dir einen ganz normalen Projektordner auf deinem Computer vor. Du hast da deine Dokumente drin, Bilder, Tabellen, vielleicht Unterordner. So weit, so normal."

### [Bildschirm: Ordner mit Dateien — Projektplan.docx, Budget.xlsx, Logo.png]

> „Ein Repository ist genau so ein Projektordner. Aber mit einer Superkraft: **Es hat ein Gedächtnis.**
>
> Jede Änderung, die du oder jemand anderes an einer Datei macht, wird gespeichert. Nicht nur die aktuelle Version — sondern die komplette Historie. Wer hat was geändert? Wann? Und warum?
>
> Stell dir vor, du arbeitest an einem Projektplan. Dein Kollege ändert eine Deadline. Deine Chefin ergänzt ein Budget. Ein externer Partner fügt Anforderungen hinzu. Bei einem normalen Ordner hast du am Ende Chaos. Bei einem Repository hast du eine saubere Timeline — wie ein Logbuch für dein Projekt."

### [Bildschirm: Zeige ein echtes GitHub-Repo — z.B. github.com/bundestag/gesetze]

> „Das hier ist ein echtes Repository. Es enthält alle deutschen Bundesgesetze. Keine einzige Zeile Code — nur Texte, organisiert in Ordnern. Und du kannst für jedes einzelne Gesetz nachschauen, wann es zuletzt geändert wurde und was sich geändert hat.
>
> **Ein Repository = ein Projektordner mit Gedächtnis.** Das war's. Nicht mehr, nicht weniger."

---

<!-- GEÄNDERT — Teil 3 entzerrt: Erst emotionaler Moment, dann Pause, dann Konzepterklärung -->
## TEIL 3 — Was bedeutet Version Control im Alltag? (5:00 – 8:00)

### [Bildschirm: Ordner mit Dateien]

**Jan:**

> „Jetzt kommt das Problem, das wir alle kennen. Jeder. Egal in welcher Branche.
>
> Du arbeitest an einem Dokument. Du speicherst es ab:"

### [Bildschirm: Dateien einblenden — nacheinander]

```
Projektplan.docx
Projektplan_v2.docx
Projektplan_v2_überarbeitet.docx
Projektplan_v3_final.docx
Projektplan_v3_final_FINAL.docx
Projektplan_v3_final_FINAL_JAN.docx
Projektplan_v3_AKTUELL_WIRKLICH.docx
```

> „Kennst du das? Natürlich kennst du das. Jeder kennt das.
>
> Das ist das **v3_final_FINAL-Problem.** Und es passiert, weil wir Menschen schlecht darin sind, Versionen manuell zu verwalten. Wir vergessen, welche Version die aktuelle ist. Wir überschreiben die Arbeit von anderen. Wir haben am Ende zehn Kopien und wissen nicht mehr, welche zählt."

<!-- NEU — Regieanweisung: Visuelle Pause zwischen den zwei Konzepten -->
### 🎬 REGIEANWEISUNG: VISUELLE PAUSE

*[2-3 Sekunden Stille. Schnitt auf Talking Head. Jan atmet kurz durch, lässt das Problem sacken. Kein schneller Übergang — der Zuschauer soll den Schmerz fühlen, bevor die Lösung kommt.]*

---

### [Talking Head — Jan vor Kamera, ruhiger Ton]

> „Und jetzt die gute Nachricht.

> **Version Control** löst genau dieses Problem. Die Idee ist simpel:"

### [Bildschirm: Einfaches Diagramm]

> „Du hast **eine** Datei. Immer nur eine. Und jede Änderung wird als eigener Schritt gespeichert — mit Zeitstempel, mit dem Namen der Person, und mit einer kurzen Beschreibung, was geändert wurde. Das nennt man einen **Commit**.
>
> Stell dir Commits vor wie Einträge in einem Logbuch:
>
> - *23. März, 10:15 — Jan: Deadline für Phase 2 auf Juni verschoben*
> - *23. März, 14:30 — Lisa: Budget für Marketing ergänzt*
> - *24. März, 09:00 — Tom: Anhang mit Risikoanalyse hinzugefügt*
>
> Du kannst jederzeit zurückspulen. Du kannst jederzeit sehen, wer was geändert hat. Und du brauchst nie wieder eine Datei ‚_FINAL_v7_wirklich' nennen.
>
> Das ist Version Control. Und das ist das Herzstück von GitHub."

---

<!-- GEÄNDERT — Teil 4: GitLab-Beispiel gestrichen, nur noch 2 Beispiele + Reflexionspause -->
## TEIL 4 — 2 überraschende Beispiele OHNE Code (8:00 – 11:00)

### [Bildschirm: Browser öffnet GitHub]

**Jan:**

> „Okay, genug Theorie. Ich zeige dir jetzt zwei echte Projekte auf GitHub, die nichts — absolut gar nichts — mit Programmierung zu tun haben."

---

### Beispiel 1: Deutsche Bundesgesetze

### [Bildschirm: github.com/bundestag/gesetze]

> „Erstens: Die deutschen Bundesgesetze. Das Repository **bundestag/gesetze** enthält alle Bundesgesetze und Verordnungen im Markdown-Format — das ist ein einfaches Textformat, kein Code.
>
> Warum ist das genial? Weil du damit nachvollziehen kannst, wie sich ein Gesetz über die Zeit verändert hat. Jede Änderung ist ein Commit. Du siehst, wann Paragraphen hinzugefügt, gestrichen oder umformuliert wurden.
>
> Link: [github.com/bundestag/gesetze](https://github.com/bundestag/gesetze)
>
> Das ist Open Government in Aktion."

---

### Beispiel 2: COVID-19-Forschungsdaten

### [Bildschirm: github.com/CSSEGISandData/COVID-19]

> „Zweitens: Die COVID-19-Daten der Johns Hopkins University. Dieses Repository war während der Pandemie **die** zentrale Datenquelle für Regierungen, Medien und Forscher weltweit.
>
> Was ist da drin? CSV-Dateien. Das sind Tabellen — Zahlen zu Infektionen, Todesfällen, Impfungen. Sortiert nach Ländern und Tagen. Kein Code. Reine Daten.
>
> Über 30.000 Leute haben dieses Repo mit einem Stern markiert. Es hatte tausende Forks — also Kopien, mit denen andere Forscher weitergearbeitet haben. Zusammenarbeit an Forschungsdaten, transparent und nachvollziehbar.
>
> Link: [github.com/CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19)"

---

<!-- NEU — Reflexionspause statt drittem Beispiel -->
### 🎬 REGIEANWEISUNG: REFLEXIONSPAUSE (30 Sekunden)

*[Talking Head. Jan schaut direkt in die Kamera. Ruhiger, persönlicher Ton. Hintergrundmusik leiser oder aus.]*

**Jan:**

> „Bundesgesetze. Pandemie-Forschungsdaten. Kein Code, nirgends.
>
> Und jetzt mal kurz du: **Überleg mal — wo hast du selbst ein Versionsproblem?** Wo liegt bei dir ein Ordner mit Dateien, bei denen du nicht mehr weißt, welche die aktuelle ist? Wo arbeiten mehrere Leute am gleichen Dokument und es gibt Chaos?
>
> Nimm dir zehn Sekunden."

*[Pause. 10 Sekunden Stille. Optional: sanftes Ticken oder ruhige Musik.]*

> „Hast du was? Gut. Genau dafür ist GitHub da."

---

## TEIL 5 — Live-Walkthrough (11:00 – 13:30)

### [Bildschirm: github.com/jcallaghan/The-Cookbook]

<!-- NEU — Hinweis: Noch nicht mitmachen -->
**Jan:**

> „Und weil mir keiner glaubt, wenn ich das nur erzähle — jetzt klicken wir uns durch ein echtes Repo. Ich nehme ein besonders sympathisches Beispiel: ein Kochbuch.
>
> **Kurzer Hinweis: Noch nicht mitmachen — das kommt gleich in der Hands-On Challenge. Lehn dich zurück und schau einfach zu.**
>
> Das hier ist ‚The Cookbook' von James Callaghan. Er sammelt seine Lieblingsrezepte — auf GitHub.
>
> Link: [github.com/jcallaghan/The-Cookbook](https://github.com/jcallaghan/The-Cookbook)
>
> Schauen wir uns an, was wir hier sehen:"

### [Klick durch das Repo — folgende Elemente zeigen]

> „**1. Die Dateiliste** — Hier sehen wir Ordner und Dateien. Genau wie auf deinem Computer. Da gibt es Ordner für verschiedene Kategorien — Breakfast, Desserts, Main Courses.
>
> **2. Die README.md** — Das ist die Startseite des Repos. Sie wird automatisch angezeigt, wenn jemand das Repo öffnet. Hier beschreibt James, worum es geht. Die README ist wie das Deckblatt deines Projekts.
>
> **3. Commits** — Hier oben sehe ich, wann zuletzt etwas geändert wurde und wie viele Commits es gibt. Jeder Commit ist ein dokumentierter Änderungsschritt.
>
> **4. Einzelne Datei anklicken** — Ich klicke mal auf ein Rezept. Das ist reiner Text — Zutaten, Zubereitungsschritte. Markdown-formatiert, also mit Überschriften und Listen. Kein Code. Ein Kochrezept."

### [Klick auf "History" einer Datei]

> „Und wenn ich hier auf die History klicke, sehe ich jede einzelne Änderung an diesem Rezept. Vielleicht hat er mal die Menge Salz angepasst — und das ist dokumentiert. Mit Datum.
>
> **Das ist GitHub.** Ordner, Dateien, eine Startseite, und ein lückenloses Änderungsprotokoll. Mehr ist es im Kern nicht."

---

## TEIL 6 — Zusammenfassung (13:30 – 15:00)

### [Talking Head — Jan vor Kamera]

**Jan:**

> „Okay, fassen wir zusammen. Was weißt du jetzt?
>
> **1. Ein Repository ist ein Projektordner mit Gedächtnis.**
> Alles, was sich ändert, wird festgehalten — wer, wann, was, warum.
>
> **2. Version Control löst das v3_final_FINAL-Problem.**
> Eine Datei, viele dokumentierte Änderungen. Nie wieder Datei-Chaos.
>
> **3. GitHub ist nicht nur für Code.**
> Gesetze, Forschungsdaten, Kochrezepte — alles, was sich über die Zeit verändert und an dem mehrere Menschen arbeiten, kann auf GitHub leben.
>
> **4. GitHub ist ein Kollaborationstool.**
> Es geht nicht darum, programmieren zu können. Es geht darum, strukturiert und transparent zusammenzuarbeiten.
>
> Und jetzt bist du dran. Gleich unter diesem Video findest du die **Hands-On Challenge**: In 20 Minuten legst du deinen eigenen GitHub-Account an und erstellst dein erstes Repository. Kein Code. Nur du und ein Projektordner mit Gedächtnis.
>
> Und wenn dir das hier geholfen hat — es gibt noch vier weitere Module. Trag dich in die Liste ein, dann bekommst du eine Nachricht, sobald Modul 2 draußen ist.
>
> Ich bin Jan. Danke fürs Zuschauen. Bis gleich in der Challenge."

---

## TECHNISCHE HINWEISE FÜR DEN SCREENCAST

| Element | Details |
|---------|---------|
| Aufnahme-Software | OBS Studio oder Loom |
| Bildschirm-Auflösung | 1920×1080 |
| Talking Head | Webcam, gutes Licht, neutraler Hintergrund |
| Bildschirm-Aufnahmen | Browser in GitHub, großer Font (Zoom 125-150%) |
| Audio | Externes Mikro, ruhiger Raum |
| Untertitel | Ja — bei YouTube automatisch oder manuell nachbearbeiten |
| Schnitt | Talking Head und Screencast abwechselnd, ca. alle 30-60 Sek. wechseln |
| B-Roll / Grafiken | Einfache Grafiken für "Repository = Ordner mit Gedächtnis" und "v3_final_FINAL" Dateiliste |
