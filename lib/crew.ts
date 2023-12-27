/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import { JsonCrewMember, YamlCrewMember } from '@/types/crewMember';
import { readJsonFile } from './read/readJsonFile';
import { readYamlFile } from './read/readYamlFile';
import { CREWMATES_PER_PAGE, PATH_TO_JSON_CREW_FILE, PATH_TO_YAML_CREW_FILE } from './constants';
import {
	filterCrewMembersByAge,
	mapToCrewMember,
	sortCrewMembersByName,
} from './operationsOnCrewList';
import { CrewResponse } from '@/types/crewResponse';

export const getCrewMembersFromFiles = async (pageNumber: number): Promise<CrewResponse> => {
	try {
		const [jsonCrewMembers, yamlCrewMembers] = await Promise.all([
			readJsonFile<JsonCrewMember[]>(PATH_TO_JSON_CREW_FILE),
			readYamlFile<YamlCrewMember[]>(PATH_TO_YAML_CREW_FILE),
		]);

		const mappedCrewList = mapToCrewMember(jsonCrewMembers, yamlCrewMembers);
		const filteredCrewList = filterCrewMembersByAge(mappedCrewList);
		const sortedCrewList = sortCrewMembersByName(filteredCrewList);

		const firstIndex = (pageNumber - 1) * CREWMATES_PER_PAGE;
		const endIndex = firstIndex + CREWMATES_PER_PAGE;

		return {
			crewmates: sortedCrewList.slice(firstIndex, endIndex),
			crewAmmount: sortedCrewList.length,
		};
	} catch (err) {
		throw err;
	}
};
