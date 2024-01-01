import { getCrew } from "@/lib/getCrew"

describe('getCrew', () => {
  it('should return data from API response when fetch is successful', async () => {
    const queryKey = ['getCrew', { page: 1 }]
    const expectedData = {
      pagedCrewMembers: [{ name: 'John Doe' }],
      totalPages: 2,
    }
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(expectedData),
    })
    global.fetch = mockFetch

    const result = await getCrew({ queryKey })

    expect(mockFetch).toHaveBeenCalledWith('/api/crew?page=1')
    expect(result).toEqual(expectedData)
  })

  it('should handle pagination by returning total number of pages and paged crew members', async () => {
    const queryKey = ['getCrew', { page: 1 }]
    const expectedData = {
      pagedCrewMembers: [{ name: 'John Doe' }],
      totalPages: 2,
    }
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(expectedData),
    })
    global.fetch = mockFetch

    const result = await getCrew({ queryKey })

    expect(mockFetch).toHaveBeenCalledWith('/api/crew?page=1')
    expect(result).toEqual(expectedData)
  })

  it('should throw an error when fetch is unsuccessful', async () => {
    const queryKey = ['getCrew', { page: 1 }]
    const mockFetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    })
    global.fetch = mockFetch

    await expect(getCrew({ queryKey })).rejects.toThrowError('Not Found')
  })
})
