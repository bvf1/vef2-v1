import { describe, expect, it } from "@jest/globals";
import { makeHTML } from "../src/make-html";

describe("html", () => {
  it("creates a html string", () => {
    const title = "9.txt";
    const entry = ["75", "56", "62", "7", "20", "76", "42", "94", "11"];

    const parsed = makeHTML(title, entry);

    const output = `
  <!doctype html>
  <html>
    <head>
      <title>Töluleg greining á tölum úr skrá ${title.slice(0, -4)}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <section>
        <h1>Tölur úr skrá 9.txt</h1>
        75,56,62,7,20,76,42,94,11
      </section>
    </body>
  </html>`;
    expect(parsed).toBe(output);
  });
});
