//@ts-nocheck
import handler from '@/pages/api/crew'

it('should return the correct number of crew members and total pages in the response when a valid page number is provided', () => {
  const req = { query: { page: '1' } }
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  }
  handler(req, res)
  expect(res.json).toHaveBeenCalledWith({
    pagedCrewMembers: expect.arrayContaining([
      expect.objectContaining({
        fullName: expect.any(String),
        nationality: expect.any(String),
        age: expect.any(Number),
        profession: expect.any(String),
      }),
    ]),
    totalPages: expect.any(Number),
  })
  expect(res.json.mock.calls[0][0].pagedCrewMembers.length).toBe(8)
})

it('should return an error response with status code 404 when an invalid page number is provided', () => {
  const req = { query: { page: '0' } }
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  }
  handler(req, res)
  expect(res.status).toHaveBeenCalledWith(404)
  expect(res.json).toHaveBeenCalledWith({ error: 'Page not found' })
})
