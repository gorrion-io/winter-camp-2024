import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { CrewMember, combineCrewLists } from '../../lib/crew';

type Data = {
  crew: CrewMember[];
  page: number;
  totalPages: number;
};

type ErrorResponse = {
  error: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  try {
    // Ustawienie ścieżek do plików JSON i YAML
    const jsonFilePath = path.join(process.cwd(), 'data', 'crew.json');
    const yamlFilePath = path.join(process.cwd(), 'data', 'crew.yaml');

    // Walidacja parametru 'page'
    const pageParam = req.query.page;
    let page: number;

    if (typeof pageParam === 'string') {
      console.log(pageParam, 'page param')
      page = parseInt(pageParam, 10);
      if (isNaN(page) || page < 1) {
        res.status(400).json({ error: 'Bad Request', message: 'Page parameter must be a positive integer.' });
        return;
      }
    } else {
      page = 1; // Domyślna wartość, jeśli parametr 'page' nie jest dostarczony
    }

    console.log('before crew members')
    // Łączymy listy członków załogi
    let crewMembers = await combineCrewLists(jsonFilePath, yamlFilePath);

    console.log(crewMembers);
    // Sortujemy alfabetycznie po imieniu
    crewMembers.sort((a, b) => a.fullName.localeCompare(b.fullName));

    // Paginacja
    const pageSize = 8;
    const totalCrewMembers = crewMembers.length;
    console.log(totalCrewMembers, 'total crew members');
    const totalPages = Math.ceil(totalCrewMembers / pageSize);

    // Sprawdzamy, czy żądana strona nie przekracza całkowitej liczby stron
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

    // Zwracamy odpowiedź
    res.status(200).json({
      crew: paginatedCrewMembers,
      page: page,
      totalPages: totalPages,
    });
  } catch (error) {
    // Logowanie błędów na serwerze
    console.error('An error occurred on the crew API:', error);

    // Zwracamy bardziej szczegółowe informacje o błędzie
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
}
