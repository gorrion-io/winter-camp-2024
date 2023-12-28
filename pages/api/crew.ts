import { CREWMATES_PER_PAGE } from '@/lib/constants';
import { getCrewMembersFromFiles } from '@/lib/crew';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method !== 'GET') res.status(405).json({ message: 'Method Not Allowed' });

		const { page } = req.query;
		const pageNumber = (page && Number(page)) || 1;

		const crewMembers = await getCrewMembersFromFiles(pageNumber);

		if (crewMembers.crewAmmount < CREWMATES_PER_PAGE * pageNumber)
			res.status(404).json({ message: 'This page is out of range' });

		res.status(200).json(crewMembers);
	} catch (err) {
		let message = 'Server error';
		if (typeof err === 'string') {
			message = err;
		} else if (err instanceof Error) {
			message = err.message;
		}
		res.status(500).json({ message });
	}
}
