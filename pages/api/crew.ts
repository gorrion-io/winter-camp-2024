import type { NextApiRequest, NextApiResponse } from "next";
import { getCrewMembers } from "@/lib/crew";
import { getPaginatedData } from "@/lib/utils/get-paginated-data";
import { DEFAULT_TAKE_ITEMS } from "@/config/constants";
import { parseToNumber } from "@/lib/utils/parse-to-number";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const allMembers = await getCrewMembers();

  const { page, take } = req.query;

  const currentPage = parseToNumber(page) || 1;
  const howMuchItems = parseToNumber(take) || DEFAULT_TAKE_ITEMS;

  const totalPages = Math.ceil(allMembers.length / howMuchItems);

  if (currentPage > totalPages) {
    return res.status(404).json({
      message: "Page is out of range",
    });
  }

  const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : null;
  const previousPage = currentPage - 1 > 0 ? currentPage - 1 : null;

  const paginatedData = await getPaginatedData({
    data: allMembers,
    page: currentPage,
    take: howMuchItems,
  });

  res.status(200).json({
    data: paginatedData,
    pagination: {
      currentPage,
      totalPages,
      totalItems: allMembers.length,
      itemsPerPage: howMuchItems,
      previousPage,
      nextPage,
      lastPage: totalPages,
    } as Pagination,
  });
}
