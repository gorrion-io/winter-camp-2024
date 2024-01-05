import { compositionMembers } from "@/lib/crew";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */

interface CrewApiRequest extends NextApiRequest {
  body: {
    page: number;
  };
}

export default function handler(req: CrewApiRequest, res: NextApiResponse) {
  const { page } = req.body;
  const { members, totalPage } = compositionMembers("crew")(page);

  res.status(200).json({
    members,
    totalPage,
  });
}
