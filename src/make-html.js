import { calculations } from './calculations.js';

export function makeHTML(title, entry) {
  const html = entry;

  let tg = '';

  if (!(entry[0] === 'No Numbers')) {
    const calc = calculations(entry);
    for (let i = 0; i < calc.length; i+=1) {
      tg += `<p> <b>${calc[i][0]}</b> ${calc[i][1]}</p>
        `;
    }

    tg = tg.trim();
  }
  for (let i = 0; i < html.length; i++) {
    html[i] = ' ' + html[i] + ' ';
  }
  const template = `
      <section class="part1">
        <h2>Tölur úr skrá ${title}</h2>
        <p class="numbers">${html}</p>
      </section>
      <section class="part2">
      <h2>Töluleg Greining á Tölunum</h2>
        ${tg}
      </section>`;

  return template;
}

export function makeIndex(skrar) {
  let list = '';
  for (const skra of skrar) {
    const link = `<p><a href="${`${skra}.html`}">${skra}.txt</a></p>`;
    list += link;
  }
  return `<h1 class=part1>Töluleg greining</h1>
  <section class="part3"=>${list}</section>`;
}

export function skraTemplate(title, skra, showBack = false) {
  const back = showBack ? '<p><a href="./index.html">Til baka</a></p>' : "";
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Töluleg greining á tölum úr skrá ${title.slice(0, -4)}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body class="flex-container">
      ${skra}
      ${back}
    </body>
  </html>`;
}
