import { describe, it, expect, vi , beforeEach } from 'vitest';
import { fetchApiData } from '@/lib/api/fetch-api-data';

global.fetch = vi.fn();

describe('fetchApiData', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('constructs URL correctly for GET requests with query params', async () => {
    const path = '/test';
    const query = { param1: 'value1', param2: 'value2' };

    await fetchApiData({ path, query });

    expect(global.fetch).toHaveBeenCalledWith('/test?param1=value1&param2=value2', expect.anything());
  });

  it('sets default method to GET and adds default headers', async () => {
    const path = '/test';

    await fetchApiData({ path });

    expect(global.fetch).toHaveBeenCalledWith(path, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  });

});
