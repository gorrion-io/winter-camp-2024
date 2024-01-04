import {
  CrewMember,
  JsonCrewMember,
  YamlCrewMember
} from "@/lib/types/CrewMemberTypes";
import { mapJsonToCrewMember, mapYamlToCrewMember } from "./utils/crewMappers";
import parseJsonFile from "./utils/jsonFileParser";
import parseYamlFile from "./utils/yamlFileParser";

const mergeJSONwithYAML = async (
  jsonFilePath: string,
  yamlFilePath: string
) => {
  const jsonData = await parseJsonFile<JsonCrewMember[]>(jsonFilePath);
  const yamlData = await parseYamlFile<YamlCrewMember[]>(yamlFilePath);

  const mappedJsonData: CrewMember[] = jsonData.map(mapJsonToCrewMember);
  const mappedYamlData: CrewMember[] = yamlData.map(mapYamlToCrewMember);

  return [...mappedJsonData, ...mappedYamlData];
};

export const getFilteredCrewMembers = async () => {
  const MIN_AGE = 30;
  const MAX_AGE = 40;

  const crewMembers: CrewMember[] = await mergeJSONwithYAML(
    "crew.json",
    "crew.yaml"
  );

  return crewMembers
    .filter((member) => member.age >= MIN_AGE && member.age <= MAX_AGE)
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
};
