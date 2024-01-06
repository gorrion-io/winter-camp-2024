import { NextApiRequest, NextApiResponse } from "next";
import { mergeAndFilterCrewLists } from "../../lib/crew";
import path from "path";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { ApiError, ApiResponse } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | ApiError>
) {
  try {
    // prevent sending other types of requests than get
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // get page number from path params
    const { page } = req.query;
    const pageNumber = page ? parseInt(page as string, 10) : 1;

    // get path of json and yaml crew files
    const jsonCrewPath = path.join(process.cwd(), "crew.json");
    const yamlCrewPath = path.join(process.cwd(), "crew.yaml");

    // merge and filter json and yaml crews
    const crewMembers = await mergeAndFilterCrewLists(
      jsonCrewPath,
      yamlCrewPath
    );

    // calculate the starting and ending indexes for elements displayed on one page
    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    let endIndex = startIndex + ITEMS_PER_PAGE;

    // correct the logic for the last page if is incomplete (receives less items than ITEMS_PER_PAGE)
    if (endIndex > crewMembers.length) {
      endIndex = crewMembers.length;
    }

    // slice list to get only items needed for visited website path
    const pagedCrewMembers = crewMembers.slice(startIndex, endIndex);

    // return full crew and sliced crew for pagination usage
    const responseData = {
      fullCrew: crewMembers,
      slicedCrew: pagedCrewMembers,
    };

    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
