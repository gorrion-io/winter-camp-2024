/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import { JsonCrewMember, YamlCrewMember } from '@/types/crewMember';
import { readJsonFile } from './read/readJsonFile';
import { readYamlFile } from './read/readYamlFile';
import { PATH_TO_JSON_CREW_FILE, PATH_TO_YAML_CREW_FILE } from './constants/filePaths';
import {
	filterCrewMembersByAge,
	mapToCrewMember,
	sortCrewMembersByName,
} from './operationOnCrewList';

export const getCrewMembersFormFiles = async () => {
	try {
		const [jsonCrewMembers, yamlCrewMembers] = await Promise.all([
			readJsonFile<JsonCrewMember[]>(PATH_TO_JSON_CREW_FILE),
			readYamlFile<YamlCrewMember[]>(PATH_TO_YAML_CREW_FILE),
		]);

		const mappedCrewList = mapToCrewMember(jsonCrewMembers, yamlCrewMembers);
		const filteredCrewList = filterCrewMembersByAge(mappedCrewList);

		return sortCrewMembersByName(filteredCrewList);
	} catch (err) {
		throw err;
	}
};
