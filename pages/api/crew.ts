/** @format */

import { getCrewMembers } from "@/lib/crew";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const numberPage = Number(req.query.page);

	const data = await getCrewMembers(numberPage);

	return res.status(200).json(data);
}
