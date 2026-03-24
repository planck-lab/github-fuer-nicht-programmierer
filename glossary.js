// Glossary Widget — GitHub für Nicht-Programmierer
const glossaryDE = {
  'Repository (Repo)': 'Ein Projektordner mit Gedächtnis — speichert alle Dateien und ihre komplette Änderungshistorie.',
  'Commit': 'Ein gespeicherter Änderungsschritt mit Zeitstempel und Beschreibung. Wie ein Logbuch-Eintrag.',
  'Branch': 'Eine parallele Kopie deines Projekts zum Experimentieren — ohne das Original zu verändern.',
  'Pull Request (PR)': 'Ein Vorschlag, Änderungen aus einem Branch ins Hauptprojekt zu übernehmen — mit Review-Möglichkeit.',
  'Merge': 'Das Zusammenführen von Änderungen aus einem Branch zurück ins Hauptprojekt.',
  'Diff': 'Die Anzeige was sich zwischen zwei Versionen geändert hat. Grün = neu, Rot = entfernt.',
  'Issue': 'Eine Aufgabe, ein Bug oder eine Idee — GitHubs universelle Aufgaben-Einheit.',
  'Label': 'Ein farbiges Schlagwort zum Kategorisieren von Issues (z.B. "Bug", "Feature", "Dringend").',
  'README': 'Die Startseite deines Projekts. Wird automatisch angezeigt wenn jemand dein Repository besucht.',
  'Markdown': 'Einfache Textformatierung mit Zeichen wie # (Überschrift), ** (fett), - (Liste). Kein Code.',
  'GitHub Pages': 'Kostenloser Website-Hosting-Dienst — verwandelt dein Repository in eine echte Website.',
  'GitHub Projects': 'Ein Kanban-Board zum Organisieren von Issues in Spalten (To Do, In Progress, Done).',
  'Fork': 'Eine persönliche Kopie eines fremden Repositories — zum Experimentieren oder Beitragen.'
};

const glossaryEN = {
  'Repository (Repo)': 'A project folder with memory — stores all files and their complete change history.',
  'Commit': 'A saved change step with timestamp and description. Like a logbook entry.',
  'Branch': 'A parallel copy of your project for experimenting — without changing the original.',
  'Pull Request (PR)': 'A proposal to merge changes from a branch into the main project — with review capability.',
  'Merge': 'Combining changes from a branch back into the main project.',
  'Diff': 'The display of what changed between two versions. Green = added, Red = removed.',
  'Issue': 'A task, bug, or idea — GitHub\'s universal task unit.',
  'Label': 'A colored tag for categorizing issues (e.g., "Bug", "Feature", "Urgent").',
  'README': 'The front page of your project. Displayed automatically when someone visits your repository.',
  'Markdown': 'Simple text formatting using characters like # (heading), ** (bold), - (list). Not code.',
  'GitHub Pages': 'Free website hosting service — turns your repository into a real website.',
  'GitHub Projects': 'A Kanban board for organizing issues in columns (To Do, In Progress, Done).',
  'Fork': 'A personal copy of someone else\'s repository — for experimenting or contributing.'
};

function initGlossary() {
  const lang = document.documentElement.lang || 'de';
  const glossary = lang === 'en' ? glossaryEN : glossaryDE;
  const title = lang === 'en' ? 'Glossary' : 'Begriffe';

  // Remove existing
  document.querySelectorAll('.glossary-toggle, .glossary-panel').forEach(el => el.remove());

  const btn = document.createElement('button');
  btn.className = 'glossary-toggle';
  btn.textContent = '📖 ' + title;
  btn.onclick = () => document.querySelector('.glossary-panel').classList.toggle('open');

  const panel = document.createElement('div');
  panel.className = 'glossary-panel';
  let html = '<h3>' + title + '</h3><dl>';
  for (const [term, def] of Object.entries(glossary)) {
    html += '<dt>' + term + '</dt><dd>' + def + '</dd>';
  }
  html += '</dl>';
  panel.innerHTML = html;

  document.body.appendChild(btn);
  document.body.appendChild(panel);
}

document.addEventListener('DOMContentLoaded', initGlossary);
