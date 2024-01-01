import { describe, expect, it } from 'vitest';

import { parseToNumber } from '@/lib/utils/parse-to-number';

describe('parseToNumber', () => {
  it('returns a number when a number is provided as a string', () => {
    const result = parseToNumber('123');
    expect(result).toEqual(123);
  });

  it('returns a number when a number is provided', () => {
    const result = parseToNumber(123);
    expect(result).toEqual(123);
  });

  it('returns null when a non-numeric string is provided', () => {
    const result = parseToNumber('abc');
    expect(result).toBeNull();
  });

  it('returns null when undefined is provided', () => {
    const result = parseToNumber(undefined);
    expect(result).toBeNull();
  });
});
