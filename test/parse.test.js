import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser';

describe('parser', () => {
  it('parses a txt file', () => {
    const input = '185 \n     942 \n36';

    const parsed = parse(input);

    expect(parsed).toEqual(['185', '942', '36']);
  });
  it('parses a txt file 2', () => {
    const input = '-1.204.000,281 \n0,1 \n2.000';

    const parsed = parse(input);

    expect(parsed).toEqual(['-1204000.281', '0.1', '2000']);
  });

  it('parses a txt file 3', () => {
    const input = '5234e-3 \n6.4e3';

    const parsed = parse(input);

    expect(parsed).toEqual(['5.234', '6400']);
  });
  it('parses a txt file 4', () => {

    const input = `hér er bara bull
        eitthvað óhapp átti sér stað
        100aaaa
        aaaa100`;

    const parsed = parse(input);
    expect(parsed).toEqual(['No Numbers']);
  });
  it.skip('parses a txt file 5', () => {
    const input = '';

    const parsed = parse(input);

    expect(parsed).toEqual(['No Numbers']);

  });

});
