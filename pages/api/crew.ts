import type { NextApiRequest, NextApiResponse } from "next";

import { mergeCrewData } from "@/lib/crew";
import { CrewMember, Query } from "@/lib/definitions";
import { ValidationError } from "@/Exceptions/validationError";
import { browseQueryParams } from "@/api/queryParams/browseQueryParams";
import { validateMethod } from "@/api/utils/validateMethod";
import { handleErrors } from "@/api/utils/handleErrors";
import { BrowseDto } from "@/api/dto/BrowseDto";

type PaginatedCrewList = {
  collection: CrewMember[];
  totalPages: number;
};

const ITEMS_PER_PAGE = 8;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedCrewList | { error: string }>
) {
  try {
    validateMethod(req, "GET");
    const query = browseQueryParams.validate(req.query);
    const crewList = mergeCrewData();

    // validation
    const totalPages = Math.ceil(crewList.length / ITEMS_PER_PAGE);
    if (query.page > totalPages) {
      throw new ValidationError("Page does not exist");
    }

    // sort
    const sortedCrewList = crewList.sort((a, b) =>
      a.fullName.localeCompare(b.fullName)
    );

    // paginate
    const paginatedCrewList = new BrowseDto(
      sortedCrewList,
      totalPages
    ).paginate(query.page, ITEMS_PER_PAGE);

    return res.status(200).json(paginatedCrewList);
  } catch (error) {
    handleErrors(res, error);
  }
}
