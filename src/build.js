import { join } from "path";
import { readFile, readdir, writeFile } from "fs/promises";
import { min, max } from "simple-statistics"

import { parse } from "./parser.js";
import { blogTemplate, makeHTML } from "./make-html.js";

const DATA_DIR = "./data";
const OUTPUT_DIR = "./dist";

async function main() {
  const files = await readdir(DATA_DIR);
  console.log("files :>> ", files);

  const sites = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);

    const data = await readFile(path);
    const str = data.toString("utf-8");

    const parsed = parse(str);
    console.log(min(parsed));
    const html = makeHTML(file, parsed);
   /* const skra = blogTemplate(file, html, true);

    const slug = file.slice(0, -4);
    const filename = join(OUTPUT_DIR, `${slug}.html`);


    await writeFile(filename, skra);
   // console.log("skra :>> ", skra);*/
  }
}

main().catch((err) => console.error(err));
