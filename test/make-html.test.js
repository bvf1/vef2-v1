import { describe, expect, it } from "@jest/globals";
import { skraTemplate, makeHTML, makeIndex } from "../src/make-html";

describe("html", () => {
  it("creates a html string", () => {
    const title = "9.txt";
    const entry = ["1", "2", "3", "4"];

    const parsed = makeHTML(title, entry);

    const output = `
      <section class="part1">
        <h2>Tölur úr skrá 9.txt</h2>
        <p class="numbers"> 1 , 2 , 3 , 4 </p>
      </section>
      <section class="part2">
      <h2>Töluleg Greining á Tölunum</h2>
        <p> <b>variance: </b> 1.25</p>
        <p> <b>max: </b> 4</p>
        <p> <b>mean: </b> 2.5</p>
        <p> <b>median: </b> 2.5</p>
        <p> <b>min: </b> 1</p>
        <p> <b>standardDeviation: </b> 1.118033988749895</p>
        <p> <b>sum: </b> 10</p>
        <p> <b>range: </b> 3</p>
      </section>`;
    expect(parsed).toBe(output);
  });
  it.skip("creates a html string 2g", () => {
    const title = "9.txt";
    const entry = ["1", "2", "3", "4"];

    const parsed = makeIndex(title, entry);

    const output = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Töluleg greining á tölum úr skrá 6</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body class="flex-container">

        <p> <b>variance: </b> 1.25</p>
        <p> <b>max: </b> 4</p>
        <p> <b>mean: </b> 2.5</p>
        <p> <b>median: </b> 2.5</p>
        <p> <b>min: </b> 1</p>
        <p> <b>standardDeviation: </b> 1.118033988749895</p>
        <p> <b>sum: </b> 10</p>
        <p> <b>range: </b> 3</p>
      </section>`;
    expect(parsed).toBe(output);
  });

  it.skip("creates a html string", () => {
    const title = "9.txt";
    const entry = ["1", "2", "3", "4"];
    const parsed = skraTemplate(title, entry, true);

    const output = `
  <!doctype html>
  <html>
    <head>
      <title>Töluleg greining á tölum úr skrá ${title.slice(0, -4)}</title>
      <link rel='stylesheet' href='styles.css'>
    </head>
    <body>
    </body>
  </html>`;
    expect(parsed).toBe(output);
  });
});
