import type { NextApiRequest, NextApiResponse } from "next";
import joinCrew from "@/lib/crew";
import { CrewMember, CrewResponse, ErrorResponse } from "@/types/crewMember";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

const paginateList = (pageNum: number, list: CrewMember[]) =>
  list.slice((pageNum - 1) * 8, pageNum * 8);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CrewResponse | ErrorResponse>
) {
  const { page } = req.query;
  const crewList = joinCrew();

  const paginatedCrewList = paginateList(Number(page), crewList);

  if (paginatedCrewList.length === 0)
    res.status(404).json({ error: "Page not found!" });

  res.status(200).json({
    paginatedCrewList,
    originalListLength: crewList.length,
  });
}
