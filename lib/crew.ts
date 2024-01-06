import { CrewMember, JsonCrewMember, YamlCrewMember } from "@/types";
import {
  loadJsonCrewDataFromFile,
  loadYamlCrewDataFromFile,
} from "./fileUtils";

export const mergeAndFilterCrewLists = async (
  jsonCrewPath: string,
  yamlCrewPath: string
): Promise<CrewMember[]> => {
  try {
    // load crew data from json and yaml files
    const jsonCrewData = await loadJsonCrewDataFromFile(jsonCrewPath);
    const yamlCrewData = await loadYamlCrewDataFromFile(yamlCrewPath);

    // modify json crew members
    const transformedJsonCrew = (jsonCrewData as JsonCrewMember[]).map(
      (member) => ({
        fullName: `${member.firstName} ${member.lastName}`,
        nationality: member.nationality,
        age: member.age,
        profession: member.profession,
      })
    );

    //modify yaml crew members
    const transformedYamlCrew = (yamlCrewData as YamlCrewMember[]).map(
      (member) => ({
        fullName: member.name,
        nationality: member.nationality,
        age: member.years_old,
        profession: member.occupation,
      })
    );

    // merge json and yaml crew, filter by age, sort alphabetically by first name
    const mergedAndSortedCrew = [...transformedJsonCrew, ...transformedYamlCrew]
      .filter((member) => member.age >= 30 && member.age <= 40)
      .sort((a, b) => a.fullName.localeCompare(b.fullName));

    // return merged and filtered crew
    return mergedAndSortedCrew;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "An unknown error happened while trying to merge and filter crews"
    );
  }
};
