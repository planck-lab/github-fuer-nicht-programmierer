---
title: "Modul 1 — Hands-On Challenge: Dein erstes Repository"
date: 2026-03-23
tags: [github, freebie, lernreise, modul-1, hands-on]
category: Projekte
status: completed
---

# Hands-On Challenge: Dein erstes GitHub-Repository

**Dauer:** ca. 20 Minuten  
**Vorkenntnisse:** Keine. Du brauchst nur einen Browser und eine E-Mail-Adresse.  
**Ergebnis:** Am Ende hast du ein öffentliches Repository mit einer Startseite und einer Datei — live im Internet.

---

<!-- GEÄNDERT — Schritt 1 zur Vorbereitung umgebaut mit Fast Lane -->
## Vorbereitung: GitHub-Account anlegen

> 🚀 **Fast Lane:** Hast du schon einen GitHub-Account? → **[Starte direkt bei Schritt 1: Repository erstellen](#schritt-1-dein-erstes-repository-erstellen-3-min)**

### Was du tust:
1. Öffne **[github.com/signup](https://github.com/signup)** in deinem Browser.
2. Gib deine **E-Mail-Adresse** ein.
3. Wähle ein **Passwort**.
4. Wähle einen **Benutzernamen** — das wird Teil deiner GitHub-URL. Tipps:
   - Nimm deinen echten Namen oder eine professionelle Variante (z.B. `jan-rummel`, `lisa-schmidt`)
   - Keine Sonderzeichen außer Bindestrichen
   - Kurz und merkbar
5. Bestätige, dass du kein Robot bist (Captcha lösen).
6. Klicke **„Create account"**.
7. Du bekommst einen **Bestätigungscode per E-Mail** — gib ihn ein.
8. GitHub fragt dich nach deinen Interessen. Du kannst alles überspringen (**„Skip personalization"**).

<!-- NEU — Hinweis zu E-Mail-Verifikation und 2FA -->
> ⏳ **Gut zu wissen:** Die E-Mail-Verifikation kommt normalerweise sofort, kann aber ein paar Minuten dauern. GitHub empfiehlt außerdem, **Zwei-Faktor-Authentifizierung (2FA)** einzurichten — das ist ein zusätzlicher Schutz für deinen Account. Du kannst das direkt machen (dauert ca. 3 Minuten mit einer Authenticator-App) oder später unter Settings → Password and authentication nachholen. Lass dich davon nicht aufhalten — es geht gleich weiter.

### Was du auf dem Bildschirm siehst:
> *[Screenshot-Beschreibung: Die GitHub-Startseite nach dem Login. Oben rechts dein Avatar-Icon. In der Mitte eine leere Dashboard-Ansicht mit dem Text „Start a new repository" oder „Create repository".]*

### ✅ Checkpoint:
Du bist eingeloggt und siehst dein GitHub-Dashboard. Glückwunsch — du hast jetzt einen GitHub-Account!

---

<!-- GEÄNDERT — Nummerierung angepasst (war Schritt 2, jetzt Schritt 1) -->
## Schritt 1: Dein erstes Repository erstellen (3 Min)

### Was du tust:
1. Klicke auf das **„+"** oben rechts neben deinem Profilbild.
2. Wähle **„New repository"**.
3. Jetzt siehst du ein Formular. Fülle es so aus:

| Feld | Was du eingibst |
|------|----------------|
| **Repository name** | `mein-erstes-projekt` |
| **Description** | `Mein erstes GitHub-Repository — ein Experiment ohne Code.` |
| **Public / Private** | Wähle **Public** (damit du das Ergebnis mit anderen teilen kannst) |
| **Add a README file** | ✅ **Häkchen setzen!** (Das ist wichtig) |

4. Alles andere kannst du ignorieren (kein .gitignore, keine Lizenz nötig).
5. Klicke **„Create repository"**.

### Was du auf dem Bildschirm siehst:
> *[Screenshot-Beschreibung: Die Repository-Erstellungsseite. Ein Formular mit den Feldern „Repository name", „Description", „Public/Private" Toggle, und einer Checkbox „Add a README file". Der grüne Button „Create repository" ist unten.]*

### ✅ Checkpoint:
Du siehst jetzt dein Repository! Es hat eine Datei: `README.md`. Darunter wird der Inhalt der README angezeigt — bisher nur der Titel.

---

<!-- GEÄNDERT — war Schritt 3, jetzt Schritt 2 -->
## Schritt 2: Deine README.md bearbeiten (5 Min)

Die README.md ist die Startseite deines Projekts. Jeder, der dein Repository besucht, sieht sie als erstes. Jetzt machen wir sie schön.

### Was du tust:
1. Klicke auf die Datei **`README.md`** in der Dateiliste.
2. Klicke oben rechts auf das **Stift-Icon** (✏️ „Edit this file").
3. Du siehst jetzt einen Text-Editor im Browser. **Lösche den bestehenden Inhalt** und kopiere stattdessen dieses Template hinein:

---

### 📝 README-Template (kopiere das hier):

```markdown
# Mein erstes Projekt

## Worum geht es?
Dieses Repository ist mein erster Gehversuch auf GitHub.
Ich bin kein Programmierer — ich nutze GitHub als Kollaborations- und Organisationstool.

## Was ist hier drin?
- 📄 Diese README als Startseite
- 📁 Dokumente und Notizen zu meinem Projekt
- 📝 Alles versioniert — jede Änderung wird gespeichert

## Über mich
Ich bin [DEIN NAME] und arbeite als [DEIN BERUF/ROLLE].
Dieses Repo ist Teil der Lernreise "GitHub für Nicht-Programmierer".

## Was ich gelernt habe
- Ein Repository ist ein Projektordner mit Gedächtnis
- Version Control löst das "v3_final_FINAL"-Problem
- GitHub ist nicht nur für Code

---
*Erstellt am [DATUM] als Teil von Modul 1.*
```

---

4. Ersetze die **Platzhalter** `[DEIN NAME]`, `[DEIN BERUF/ROLLE]` und `[DATUM]` mit deinen echten Daten.
5. Klicke oben rechts auf **„Commit changes..."** (grüner Button).
6. Es öffnet sich ein kleines Fenster:
   - **Commit message:** Schreibe `README mit persönlichen Infos ergänzt`
   - **Description:** Kannst du leer lassen
   - Wähle **„Commit directly to the main branch"**
   - Klicke **„Commit changes"**

### Was du auf dem Bildschirm siehst:
> *[Screenshot-Beschreibung: Der Browser-Editor von GitHub. Links der Markdown-Text, der bearbeitet wird. Oben rechts ein grüner Button „Commit changes...". Unten eine Vorschau, wie der Text formatiert aussehen wird.]*

### ✅ Checkpoint:
Du bist zurück auf der Repository-Startseite. Deine README wird jetzt schön formatiert angezeigt — mit Überschriften, Aufzählungspunkten und Emojis. **Das ist dein erster Commit!**

---

<!-- GEÄNDERT — war Schritt 4, jetzt Schritt 3 -->
## Schritt 3: Eine Datei hochladen (3 Min)

Jetzt laden wir eine echte Datei hoch — ein Dokument, ein Bild, eine Tabelle, was auch immer.

### Was du tust:
1. Gehe zurück zur **Hauptseite deines Repositories** (klicke oben auf den Repository-Namen).
2. Klicke auf **„Add file"** → **„Upload files"**.
3. Ziehe eine Datei von deinem Computer in das Upload-Feld. Zum Beispiel:
   - Ein Foto 📸
   - Eine PDF-Datei 📄
   - Eine Excel-Tabelle 📊
   - Ein einfaches Textdokument 📝
   - Oder erstelle kurz eine Textdatei `notizen.txt` mit ein paar Zeilen Text
4. Unten bei **„Commit changes"**:
   - **Commit message:** `Erste Datei hochgeladen`
   - Klicke **„Commit changes"**

### Was du auf dem Bildschirm siehst:
> *[Screenshot-Beschreibung: Die Upload-Seite. Ein großes Drag-and-Drop-Feld in der Mitte mit dem Text „Drag files here to add them to your repository". Darunter das Commit-Message-Feld und der grüne „Commit changes"-Button.]*

### ✅ Checkpoint:
In der Dateiliste deines Repos siehst du jetzt **zwei Einträge**: `README.md` und deine hochgeladene Datei. Jeder Eintrag zeigt rechts die letzte Commit-Message und wann die Änderung war.

---

<!-- GEÄNDERT — war Schritt 5, jetzt Schritt 4 -->
## Schritt 4: Dein Repo bewundern (2 Min)

### Was du tust:
1. Klicke oben auf **deinen Repository-Namen**.
2. Schau dir die Seite an. Das ist jetzt **dein** Projekt auf GitHub.
3. Kopiere die **URL aus der Adresszeile** deines Browsers. Sie sieht so aus:
   ```
   https://github.com/dein-benutzername/mein-erstes-projekt
   ```
4. Diese URL kannst du mit jedem teilen. Jeder kann dein Projekt sehen.
5. Klicke auf **„2 commits"** (oder wie viele es sind) über der Dateiliste. Hier siehst du deine **Commit-Historie** — das Gedächtnis deines Projektordners.

### Was du auf dem Bildschirm siehst:
> *[Screenshot-Beschreibung: Die Commit-Historie. Eine Liste mit 2-3 Einträgen, jeweils mit Commit-Message, deinem Benutzernamen und dem Zeitpunkt. Jeder Commit ist anklickbar und zeigt, was genau geändert wurde.]*

---

## 🎉 Geschafft!

**Dein erstes Repository ist live.**

Du hast gerade:
- ✅ Einen GitHub-Account angelegt
- ✅ Ein Repository erstellt (= Projektordner mit Gedächtnis)
- ✅ Eine README.md geschrieben (= die Startseite deines Projekts)
- ✅ Eine Datei hochgeladen
- ✅ Zwei Commits gemacht (= zwei dokumentierte Änderungen)
- ✅ Deine Commit-Historie angeschaut

Du brauchst dafür **keine Kommandozeile, keinen Code, keine technischen Vorkenntnisse.** Nur einen Browser.

---

## Bonus-Aufgabe (für Neugierige)

Wenn du noch 5 Minuten hast:

1. **Erstelle einen Ordner:** Klicke auf „Add file" → „Create new file". Gib als Dateinamen `notizen/ideen.md` ein (der Schrägstrich erstellt automatisch einen Ordner!). Schreibe ein paar Zeilen rein und committe.

2. **Schau dir ein fremdes Repo an:** Besuche [github.com/bundestag/gesetze](https://github.com/bundestag/gesetze) und klicke dich durch. Schau dir die Commit-Historie an. Du verstehst jetzt, was du siehst!

3. **Gib einem Repo einen Stern:** Wenn dir ein Repo gefällt, klicke oben rechts auf ⭐ „Star". Das ist wie ein Lesezeichen + ein „Daumen hoch" für den Ersteller.

---

<!-- NEU — Glossar-Card -->
## 📖 Glossar: Die wichtigsten Begriffe aus Modul 1

| Begriff | Bedeutung |
|---------|-----------|
| **Repository (Repo)** | Ein Projektordner mit Gedächtnis. Enthält deine Dateien und speichert die komplette Änderungshistorie. |
| **Commit** | Ein gespeicherter Änderungsschritt — mit Zeitstempel, Autor und kurzer Beschreibung. Wie ein Eintrag im Logbuch. |
| **README** | Die Startseite deines Repositories. Wird automatisch angezeigt, wenn jemand dein Repo besucht. Dateiname: `README.md`. |
| **Markdown** | Ein einfaches Textformat, mit dem du Überschriften, Listen und Links schreiben kannst — ohne HTML oder Code. GitHub nutzt es überall. |
| **Branch** | Eine parallele Version deines Projekts. Du kannst Änderungen ausprobieren, ohne das Original zu verändern. Kommt ausführlich in Modul 2. |

> 💡 **Tipp:** Speichere diese Seite als Lesezeichen — so kannst du die Begriffe jederzeit nachschlagen.

---

## Wie geht es weiter?

In **Modul 2** lernst du, wie du Änderungen an den Dateien anderer Leute vorschlagen kannst — ohne dass du deren Projekt kaputt machst. Das nennt sich „Fork" und „Pull Request", und es ist der Grund, warum GitHub die größte Kollaborationsplattform der Welt ist.

👉 **[Trag dich in die Liste ein, um Modul 2 zu bekommen →](#email-signup)**
