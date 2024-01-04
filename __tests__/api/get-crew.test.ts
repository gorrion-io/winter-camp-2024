import { beforeEach, describe, expect, it, vi } from 'vitest';

import { fetchApiData } from '@/lib/api/fetch-api-data';
import { getCrew } from '@/lib/api/get-crew';

vi.mock('@/lib/api/fetch-api-data', () => ({
  fetchApiData: vi.fn(),
}));

describe('getCrew', () => {
  beforeEach(() => {
    vi.mocked(fetchApiData).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 'mockData' }),
    } as Response);

    vi.clearAllMocks();
  });

  it('calls fetchApiData with correct parameters', async () => {
    await getCrew({ page: 2, take: 5 });
    expect(fetchApiData).toHaveBeenCalledWith({
      path: '/api/crew',
      query: { take: 5, page: 2 },
    });
  });

  it(`shouldn't call fetchApiData if page less or equal 0`, async () => {
    await getCrew({ page: 0, take: 5 });
    await getCrew({ page: -1, take: 5 });
    expect(fetchApiData).not.toHaveBeenCalled();
  });

  it(`shouldn't call fetchApiData if page is NaN`, async () => {
    await getCrew({ page: NaN, take: 5 });
    expect(fetchApiData).not.toHaveBeenCalled();
  });

});
