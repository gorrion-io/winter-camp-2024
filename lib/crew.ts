import * as fs from "fs";
import * as jsonfile from "jsonfile";
import * as yaml from "js-yaml";
import { CrewMember } from "./models";

/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

function getCrewMembers(): CrewMember[] {
  const crewMembers = getCrewFromFiles();
  return getCrewInAgeRange30To40(crewMembers).sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );
}

function getCrewFromFiles(): CrewMember[] {
  const crew1 = parseJsonFile("./crew.json");
  const crew2 = parseYamlFile("./crew.yaml");

  return [...crew1, ...crew2];
}

function getCrewInAgeRange30To40(crewMembers: CrewMember[]): CrewMember[] {
  return crewMembers.filter((member) => 30 <= member.age && member.age <= 40);
}

function parseJsonFile(filePath: string): CrewMember[] {
  const jsonData = jsonfile.readFileSync(filePath);

  return jsonData.map((item: any) => ({
    fullName: `${item.firstName} ${item.lastName}`,
    nationality: item.nationality,
    age: item.age,
    profession: item.profession,
  }));
}

function parseYamlFile(filePath: string): CrewMember[] {
  const yamlData = yaml.load(fs.readFileSync(filePath, "utf8"));

  return yamlData.map((item: any) => ({
    fullName: item.name,
    nationality: item.nationality,
    age: item.years_old,
    profession: item.occupation,
  }));
}

export default getCrewMembers;
