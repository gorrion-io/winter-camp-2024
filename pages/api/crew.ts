import type { NextApiRequest, NextApiResponse } from "next";
import joinCrew from "@/lib/crew";
import { CrewMember } from "@/types/crewMember";

type ResponseData = {
  paginatedCrewList: CrewMember[];
  originalListLength: number;
};

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

const paginateList = (pageNum: number, list: CrewMember[]) =>
  list.slice((pageNum - 1) * 8, pageNum * 8);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { page } = req.query;
  const crewList = joinCrew();

  res.status(200).json({
    paginatedCrewList: paginateList(Number(page), crewList),
    originalListLength: crewList.length,
  });
}
