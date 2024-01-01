import { CrewMember, JsonYamlArray } from "@/types/apiDataTypes";
import * as fs from "fs";
import * as yaml from "js-yaml";

export const mergeCrew = () => {
  const readDataFile = (filePath: string) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    if (filePath.endsWith(".json")) {
      return JSON.parse(fileContent);
    } else if (filePath.endsWith(".yaml")) {
      return yaml.load(fileContent);
    } else {
      throw new Error("Invalid file type");
    }
  };

  const concatenateData = (crewMembers: JsonYamlArray[]) =>
    crewMembers.map(
      ({
        firstName,
        lastName,
        name,
        age,
        years_old,
        nationality,
        profession,
        occupation,
      }) => ({
        fullName: name || `${firstName} ${lastName}`,
        nationality,
        age: age || years_old,
        profession: profession || occupation,
      })
    );

  const filterCrewMembers = (crewMembers: CrewMember[]) =>
    crewMembers.filter(({ age }) => age >= 30 && age <= 40);

  const sortCrewMembers = (filteredCrewMembers: CrewMember[]) =>
    filteredCrewMembers.sort((a, b) =>
      a.fullName.toUpperCase().localeCompare(b.fullName.toUpperCase())
    );

  const jsonCrewMembers = readDataFile("crew.json");
  const yamlCrewMembers = readDataFile("crew.yaml");
  const crewMembers = concatenateData([...jsonCrewMembers, ...yamlCrewMembers]);
  const filteredCrewMembers = filterCrewMembers(crewMembers);
  const sortedCrewMembers = sortCrewMembers(filteredCrewMembers);

  return sortedCrewMembers;
};
