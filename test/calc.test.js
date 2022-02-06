import { describe, expect, it } from "@jest/globals";
import { calculations } from "../src/calculations";

describe("build", () => {
  it("reads files from folder", () => {
    const input = [1, 2, 3, 4];
    const parsed = calculations(input);
    const output = [
      { variance: 1.25 },
      { max: 4 },
      { mean: 2.5 },
      { median: 2.5 },
      { min: 1 },
      { standardDeviation: 1.118033988749895 },
      { sum: 10 },
      { range: 3 },
    ];

    expect(parsed).toStrictEqual(output);
  });
});
