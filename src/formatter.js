// Форматування звіту лабораторної роботи
const TITLE = 'Звіт лабораторної роботи';

export function formatReport(author, date) {
  let line = TITLE + ': ' + author;
  line += ' (' + date + ')';
  return line;
}
