import { describe, expect, it } from "@jest/globals";
import { skraTemplate, makeHTML } from "../src/make-html";

describe("html", () => {
  it("creates a html string", () => {
    const title = "9.txt";
    const entry = ["1", "2", "3", "4"];

    const parsed = makeHTML(title, entry);

    const output = `
      <section>
        <h1>Tölur úr skrá 9.txt</h1>
        1,2,3,4
      </section>
      <section>
        <p>variance:  1.25 </p>
        <p>max:  4 </p>
        <p>mean:  2.5 </p>
        <p>median:  2.5 </p>
        <p>min:  1 </p>
        <p>standardDeviation:  1.118033988749895 </p>
        <p>sum:  10 </p>
        <p>range:  3 </p>
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
