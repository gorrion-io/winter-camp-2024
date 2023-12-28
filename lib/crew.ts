/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */
import { JSON_CREW_FILE_PATH, YAML_CREW_FILE_PATH } from '@/config/constants';
import { jsonResultSchema } from '@/lib/schemas/json-result-schema';
import { yamlResultSchema } from '@/lib/schemas/yaml-result-schema';
import {
  mapJsonMemberToValidCrewMember,
  mapYamlMemberToValidCrewMember,
} from '@/lib/utils/crew-mappers';
import { readJsonFile, readYamlFile } from '@/lib/utils/read-files';

const sortByFullName = <T extends CrewMember>(a: T, b: T) =>
  a.fullName.localeCompare(b.fullName);

export const getCrewMembers = async () => {
  const [jsonMember, yamlMembers] = await Promise.all([
    readJsonFile(JSON_CREW_FILE_PATH),
    readYamlFile(YAML_CREW_FILE_PATH),
  ]);

  const [parsedJsonMembers, parsedYamlMembers] = await Promise.all([
    jsonResultSchema.parseAsync(jsonMember),
    yamlResultSchema.parseAsync(yamlMembers),
  ]);

  return [
    ...mapJsonMemberToValidCrewMember(parsedJsonMembers),
    ...mapYamlMemberToValidCrewMember(parsedYamlMembers),
  ].toSorted(sortByFullName);
};
