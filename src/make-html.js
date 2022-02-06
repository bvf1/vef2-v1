import { calculations } from './calculations.js';

export function makeHTML(title, entry) {
  const html = entry;

  let tg = '';

  if (!(entry[0] === 'No Numbers')) {
    const calc = calculations(entry);
    for (let i = 0; i < calc.length; i+=1) {
      tg += `<p>${calc[i][0]} ${calc[i][1]} </p>
        `;
    }

    tg = tg.trim();
  }


  const template = `
      <section>
        <h1>Tölur úr skrá ${title}</h1>
        ${html}
      </section>
      <section>
        ${tg}
      </section>`;

  return template;
}

export function makeIndex(skrar) {
  let list = '';
  for (const skra of skrar) {
    const link = `<li><a href="${`${skra}.html`}">${skra}.txt</a></li>`;
    list += link;
  }
  return `<ul>${list}</ul>`;
}

export function skraTemplate(title, skra, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : "";
  return `
  <!doctype html>
  <html>
    <head>
      <title>Töluleg greining á tölum úr skrá ${title.slice(0, -4)}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${skra}
      ${back}
    </body>
  </html>`;
}
