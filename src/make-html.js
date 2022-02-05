import { calculations } from "./calculations.js";
import { parse } from "./parser.js";

export function makeHTML(title, entry) {
  const html = entry;

  var doCalc = false;
  //Zif (entry)
  //console.log("is entry " + entry[0]);
  let tg = '';
 
  if (!(entry[0] === 'No Numbers')) {
    const calc = calculations(entry);
    doCalc = true;
    
    for (let i = 0; i < calc.length; i++) {
      tg += `<p>${calc[i][0]} ${calc[i][1]} </p>\n`;
      
    }
  }
  //console.log(tg);
 // console.log(entry);

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

/*export function makeIndex(files) {
  let list = '';
  for (const file of files) {
    const 
    
  }
}*/

export function blogTemplate(title, skra, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
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
