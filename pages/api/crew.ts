import type { NextApiRequest, NextApiResponse } from "next";
import chosenCrew, { CrewMember } from "../../lib/crew";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

function paginate(array: CrewMember[], page_size: number, page_number: number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function sortArray(array: CrewMember[]) {
  return array.sort((a, b) => {
    let fa = a.fullName.toLowerCase(),
      fb = b.fullName.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const page = typeof req.query.page === "string" ? Number(req.query.page) : 1;
  const pageSize = 8;
  const crewList = await chosenCrew();
  const sortedCrewList = sortArray(crewList);
  res.status(200).json(paginate(sortedCrewList, pageSize, page));
}
