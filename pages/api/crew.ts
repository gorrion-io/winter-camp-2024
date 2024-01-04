import getCrew from "@/lib/crew";
import { CrewMember } from "@/lib/types/crewTypes";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

const paginateCrew = (
  crewMembers: CrewMember[],
  pagination: number,
  pageIndex: number
) => {
  return crewMembers.slice(
    (pageIndex - 1) * pagination,
    pageIndex * pagination
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const PAGINATION = 8;

  const { page } = req.query;
  const pageIndex = page ? Number(page) : 1;

  const crewList = await getCrew();

  const totalPages = Math.ceil(crewList.length / PAGINATION);

  if (pageIndex > totalPages || pageIndex <= 0) {
    res.status(404).json({ message: "This page is out of range" });
  }
  const paginatedCrewList = paginateCrew(crewList, PAGINATION, pageIndex);

  res.status(200).json({ paginatedCrewList, totalPages });
}
