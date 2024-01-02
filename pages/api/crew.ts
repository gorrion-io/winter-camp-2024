import { getJSONData, getMembersData, getYamlData } from "@/lib/crew";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pageOffset = req.body;
  console.log("pageOffset", pageOffset);
  const members = getMembersData("crew");
  res.status(200).json(members);
}
