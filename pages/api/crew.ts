import path from 'path';
import { CrewMember, combineCrewLists } from '../../lib/crew';
import { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
  crew: CrewMember[];
  page: number;
  totalPages: number;
};

export type ErrorResponse = {
  error: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  try {
    const jsonFilePath = path.join(process.cwd(), 'data', 'crew.json');
    const yamlFilePath = path.join(process.cwd(), 'data', 'crew.yaml');

    const pageParam = req.query.page;
    let page: number;

    if (typeof pageParam === 'string') {
      page = parseInt(pageParam, 10);
      if (isNaN(page) || page < 1) {
        res.status(400).json({ error: 'Bad Request', message: 'Page parameter must be a positive integer.' });
        return;
      }
    } else {
      page = 1;
    }

    let crewMembers = await combineCrewLists(jsonFilePath, yamlFilePath);
    crewMembers.sort((a, b) => a.fullName.localeCompare(b.fullName));

    const pageSize = 8;
    const totalCrewMembers = crewMembers.length;
    const totalPages = Math.ceil(totalCrewMembers / pageSize);

    if (page > totalPages) {
      res.status(200).json({
        crew: [],
        page: page,
        totalPages: totalPages,
      });
      return;
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCrewMembers = crewMembers.slice(startIndex, endIndex);

    res.status(200).json({
      crew: paginatedCrewMembers,
      page: page,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error('An error occurred on the crew API:', error);

    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
}
