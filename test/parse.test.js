import { describe, expect, it } from "@jest/globals";
import { parse } from "../src/parser";

describe("parser", () => {
  it("parses a txt file", () => {
    const input = "185 \n     942 \n36";

    const parsed = parse(input);

    expect(parsed).toEqual(["185", "942", "36"]);
  });
});

describe("parser", () => {
  it("parses a txt file 2", () => {
    const input = "-1.204.000,281 \n0,1 \n2.000";

    const parsed = parse(input);

    expect(parsed).toEqual(["-1204000.281", "0.1", "2000"]);
  });
});
describe("parser", () => {
  it("parses a txt file 3", () => {
    const input = "5234e-3 \n6.4e3";

    const parsed = parse(input);

    expect(parsed).toEqual(["5.234", "6400"]);
  });
});
describe("parser", () => {
  it("parses a txt file 4", () => {
    var input = "";

    var parsed = parse(input);

    expect(parsed).toEqual("No Numbers");

    input =
      "hér er bara bull \
        eitthvað óhapp átti sér stað\
        100aaaa\
        aaaa100";

    parsed = parse(input);
    expect(parsed).toEqual([]);
  });
});
describe("parser", () => {
  it("parses a txt file 3", () => {
    const input = "5e2 server 3e4";

    const parsed = parse(input);

    expect(parsed).toEqual(["500", "30000"]);
  });
});
