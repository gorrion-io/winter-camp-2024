/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import { readJsonFile } from './read/readJsonFile';
import { readYamlFile } from './read/readYamlFile';
import {
    CREWMATES_PER_PAGE,
    PATH_TO_JSON_CREW_FILE,
    PATH_TO_YAML_CREW_FILE,
} from './constants';
import {
    filterCrewMembersByAge,
    mapToCrewMember,
    sortCrewMembersByName,
} from './operationsOnCrewList';
import { CrewResponseSchema } from '@/schema/crew/crewResponseSchema';
import {
    JsonCrewMemberSchema,
    jsonCrewMembersArraySchema,
} from '@/schema/crew/jsonCrewMemberSchema';
import {
    YamlCrewMemberSchema,
    yamlCrewMembersArraySchema,
} from '@/schema/crew/yamlCrewMemberSchema';

export const getCrewMembersFromFiles = async (
    pageNumber: number,
): Promise<CrewResponseSchema> => {
    try {
        const [jsonCrewMembers, yamlCrewMembers] = await Promise.all([
            readJsonFile<JsonCrewMemberSchema[]>(PATH_TO_JSON_CREW_FILE),
            readYamlFile<YamlCrewMemberSchema[]>(PATH_TO_YAML_CREW_FILE),
        ]);

        const checkIsValidJson =
            jsonCrewMembersArraySchema.safeParse(jsonCrewMembers);
        const checkIsValidYaml =
            yamlCrewMembersArraySchema.safeParse(yamlCrewMembers);

        if (!checkIsValidJson.success)
            throw new Error('Wrong data in json file');
        if (!checkIsValidYaml.success)
            throw new Error('Wrong data in yaml file');

        const mappedCrewList = mapToCrewMember(
            jsonCrewMembers,
            yamlCrewMembers,
        );
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
