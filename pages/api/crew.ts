import type { NextApiRequest, NextApiResponse } from 'next';
/**
 * @todo Prepare an endpoint to return a list of crew members
 * @description The endpoint should return a pagination of 8 users per page. The endpoint should accept a query parameter "page" to return the corresponding page.
 */
import path from 'path';
import fs from 'fs/promises';
import YAML from 'yaml';
import crewJSON from '../../crew.json';
import {
  chooseMembersWithRighAgeJSON,
  chooseMembersWithRighAgeYAML,
  joinLists,
  paginateArray,
} from '@/lib/crew';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pageNumber = Number(req.headers.page);
    const entriesOnPage = Number(req.headers.entriesonpage);
    const settings = { actualPageIndex: pageNumber, entriesOnPage: entriesOnPage };

    const crewYAMLPath = path.resolve(process.cwd(), 'crew.yaml');
    const crewYAMLRawContent = await fs.readFile(crewYAMLPath, 'utf-8');
    const crewYAMLParsedConent = YAML.parse(crewYAMLRawContent);

    const chosenCrewFromYAML = chooseMembersWithRighAgeYAML(crewYAMLParsedConent);
    const chosenCrewFromJSON = chooseMembersWithRighAgeJSON(crewJSON);

    const joinedCrew = joinLists(chosenCrewFromYAML, chosenCrewFromJSON);

    const sortedByNameCrew = joinedCrew.sort((a, b) => {
      if (a.fullName < b.fullName) {
        return -1;
      }
      if (a.fullName > b.fullName) {
        return 1;
      }
      return 0;
    });
    const entriesOnAcualPage = paginateArray(sortedByNameCrew, settings);
    res.status(200).json(entriesOnAcualPage);
  } catch (err) {
    console.log(err);
  }
}
