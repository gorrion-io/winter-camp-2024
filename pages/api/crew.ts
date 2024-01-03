import type { NextApiRequest, NextApiResponse } from "next";

import { mergeCrewData } from "@/lib/crew";
import { CrewMember, Query } from "@/lib/definitions";
import { ValidationError } from "@/Exceptions/validationError";
import { browseQueryParams } from "@/api/queryParams/browseQueryParams";
import { validateMethod } from "@/api/utils/validateMethod";
import { handleErrors } from "@/api/utils/handleErrors";

type PaginatedCrewList = {
  paginatedCrewList: CrewMember[];
  hasNextPage: boolean;
};

class BrowseDto<T> {
  collection: T[];
  totalPages: number;

  constructor(collection: T[], totalPages: number) {
    this.collection = collection;
    this.totalPages = totalPages;
  }
}

const ITEMS_PER_PAGE = 8;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedCrewList | { error: string }>
) {
  try {
    validateMethod(req, "GET");
    const query = browseQueryParams.validate(req.query);
    const crewList = mergeCrewData();

    // Validation
    const totalPages = Math.ceil(crewList.length / ITEMS_PER_PAGE);
    if (query.page > totalPages) {
      throw new ValidationError("Page does not exist");
    }

    // Sort crewList by fullName
    const sortedCrewList = crewList.sort((a, b) =>
      a.fullName.localeCompare(b.fullName)
    );

    const startIndex = (query.page - 1) * ITEMS_PER_PAGE;
    const endIndex = query.page * ITEMS_PER_PAGE;

    const paginatedCrewList = sortedCrewList.slice(startIndex, endIndex);

    // Check if there is a next page
    const hasNextPage = query.page < totalPages;

    return res.status(200).json({ paginatedCrewList, hasNextPage });
  } catch (error) {
    handleErrors(res, error);
  }
}
