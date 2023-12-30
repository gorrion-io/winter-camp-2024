import { getFilteredCrewMembers } from "@/lib/crew";
import { CrewMember } from "@/lib/types/CrewMemberTypes";
import { PaginatedResponse } from "@/lib/types/PaginatedResponse";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const PAGE_SIZE = 8;

  const page = parseInt(req.query.page as string);

  if (!page || page < 1) {
    return res.status(400).json({ message: "Invalid page number" });
  }

  const crewMembers = await getFilteredCrewMembers();
  const totalCrewMembers = crewMembers.length;
  const totalPages = Math.ceil(totalCrewMembers / PAGE_SIZE);

  if (page > totalPages) {
    return res.status(404).json({ message: "Page number exceeds total pages" });
  }

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedCrewMembers = crewMembers.slice(startIndex, endIndex);

  const resData: PaginatedResponse<CrewMember> = {
    page,
    totalPages,
    totalData: totalCrewMembers,
    data: paginatedCrewMembers,
  };

  return res.status(200).json(resData);
}
