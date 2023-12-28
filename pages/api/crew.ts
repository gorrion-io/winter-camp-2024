import type { NextApiRequest, NextApiResponse } from 'next'
import { filterFetchedArrays } from '../../lib/crew'
import { CREW_PER_PAGE } from '../../constants/fetchCrewConst'
import { YamlCrewMemberType, JsonCrewMemberType } from '../../types/crewTypes'
import { fetchCrewJsonData, fetchCrewYamlData } from '../../api/fetchCrewData'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === 'GET') {
			const { page } = req.query
			const numberPage = Number(page)

			const pageSize = CREW_PER_PAGE
			const startIndex = (Number(page) - 1) * pageSize
			const endIndex = startIndex + pageSize

			const jsonCrewData = (await fetchCrewJsonData()) as JsonCrewMemberType[]
			const yamlCrewData = (await fetchCrewYamlData()) as YamlCrewMemberType[]

			const crewData = filterFetchedArrays(jsonCrewData, yamlCrewData)
			const paginationNumber = Math.ceil(crewData.length / pageSize)

			if (numberPage > paginationNumber || numberPage <= 0 || isNaN(numberPage)) {
				res.status(404).json({ error: 'Please enter a valid page' })
				return
			}

			const paginatedCrewData = crewData.slice(startIndex, endIndex)

			res.status(200).json({ paginatedCrewData, paginationNumber })
		} else {
			res.status(405).json({ error: 'Method Not Allowed' })
		}
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error - please try again later' })
	}
}

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */
