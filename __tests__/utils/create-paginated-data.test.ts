import { describe, it, expect } from 'vitest';
import { createPaginatedData } from '@/lib/utils/create-paginated-data';

describe('createPaginatedData', () => {
  const sampleData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  it(`shouldn't manipulate the input`, () => {
    const result = createPaginatedData({ data: sampleData, page: 1, take: 3 });
    expect(result).not.toBe(sampleData);
    expect(sampleData).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

    it('correctly paginates data', () => {
    const result = createPaginatedData({ data: sampleData, page: 2, take: 3 });
    expect(result).toEqual(['d', 'e', 'f']);
  });

  it('handles boundary conditions', () => {
    const result = createPaginatedData({ data: sampleData, page: 4, take: 3 });
    expect(result).toEqual(['j']);
  });

  it('returns empty array for empty data', () => {
    const result = createPaginatedData({ data: [], page: 1, take: 5 });
    expect(result).toEqual([]);
  });

  it('handles page 0 and take 0', () => {
    const result = createPaginatedData({ data: sampleData, page: 0, take: 0 });
    expect(result).toEqual([]);
  });
});
