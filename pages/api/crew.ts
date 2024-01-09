import type { NextApiRequest, NextApiResponse } from "next";
import { mergeData } from "@/lib/crew";

/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */



export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // access merged data from crew.yaml and crew.json
  const combinedData = mergeData();

  const page = Number(req.query.page) || 0;
  const pageSize = 8;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const sortedCombinedData = combinedData.sort((a: any, b: any) => {
    
    // case-insensitive comparison
    a = a.fullName.toLowerCase();
    b = b.fullName.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0; 
  });
  // 8 users per page
  const paginatedData = sortedCombinedData.slice(start, end);

  res.status(200).json(paginatedData);
}