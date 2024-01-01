import { mergeCrew } from '@/lib/crew'
import { ApiResponse, ErrorResponse } from '@/types/apiDataTypes'
import type { NextApiRequest, NextApiResponse } from 'next'

const PAGE_SIZE = 8

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | ErrorResponse>
) {
  const { page = '1' } = req.query
  const mergedCrew = mergeCrew()
  const totalCrewMembers = mergedCrew.length
  const totalPages = Math.ceil(totalCrewMembers / PAGE_SIZE)
  const requestedPage = Number(page as string)

  if (requestedPage < 1 || requestedPage > totalPages) {
    const errorResponse = { error: 'Page not found' }
    res.status(404).json(errorResponse)
    return
  }

  const startIndex = (requestedPage - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  const pagedCrewMembers = mergedCrew.slice(startIndex, endIndex)
  const apiResponse = { pagedCrewMembers, totalPages }

  res.status(200).json(apiResponse)
}
