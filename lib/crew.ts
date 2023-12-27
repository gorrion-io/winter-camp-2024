/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */
import { readJsonFile, readYamlFile } from "@/lib/utils/read-files";
import { JSON_FILE_PATH, YAML_FILE_PATH } from "@/config/constants";
import { jsonResultSchema } from "@/lib/schemas/json-result-schema";
import { yamlResultSchema } from "@/lib/schemas/yaml-result-schema";
import {
  mapJsonMemberToValidCrewMember,
  mapYamlMemberToValidCrewMember,
} from "@/lib/utils/crew-mappers";

export const getCrewMembers = async () => {
  const [jsonMember, yamlMembers] = await Promise.all([
    readJsonFile(JSON_FILE_PATH),
    readYamlFile(YAML_FILE_PATH),
  ]);

  const [parsedJsonMembers, parsedYamlMembers] = await Promise.all([
    jsonResultSchema.parseAsync(jsonMember),
    yamlResultSchema.parseAsync(yamlMembers),
  ]);

  // I could use inlined array, but I prefer to use a variable to make it more readable
  const validSortedMembers = [
    ...mapJsonMemberToValidCrewMember(parsedJsonMembers),
    ...mapYamlMemberToValidCrewMember(parsedYamlMembers),
  ].toSorted((a, b) => a.fullName.localeCompare(b.fullName));

  return validSortedMembers;
};
