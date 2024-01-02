import type { NextApiRequest, NextApiResponse } from "next";
import getCrewMembers from "@/lib/crew";
import { PageRequest, CrewMember, Page } from "@/lib/models";
import { paginate } from "@/lib/paginator";

const crewMembers = getCrewMembers() as CrewMember[];

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 8;

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const pageRequest: PageRequest = {
      page: parseInt(req.query.page as string) || DEFAULT_PAGE,
      size: parseInt(req.query.size as string) || DEFAULT_SIZE,
    };
    const crewMembersResponse = paginate(
      pageRequest,
      crewMembers
    ) as Page<CrewMember>;

    res.status(200).json(crewMembersResponse);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
