import { CrewJson, CrewMember, CrewYaml } from "./definitions";

import fs from "fs";
import path from "path";

import yaml from "js-yaml";

function parseCrewJsonToList(files: string[]): CrewMember[] {
  let crewMembers: CrewMember[] = [];

  try {
    const filePath = path.resolve(process.cwd(), ...files);
    const jsonFile = fs.readFileSync(filePath, "utf-8");
    const crewJson: CrewJson[] = JSON.parse(jsonFile);

    crewJson.forEach((member: CrewJson) => {
      if (member.age < 30 || member.age > 40) return;

      const fullName = `${member.firstName}  ${member.lastName}`;
      const crewMember: CrewMember = {
        fullName,
        nationality: member.nationality,
        age: member.age,
        profession: member.profession,
      };
      crewMembers.push(crewMember);
    });
  } catch (error) {
    console.error("Error parsing JSON:", (error as Error).message);
  }

  return crewMembers;
}

function parseCrewYamlToList(files: string[]): CrewMember[] {
  let crewMembers: CrewMember[] = [];

  try {
    const filePath = path.resolve(process.cwd(), ...files);

    const yamlFile = fs.readFileSync(filePath, "utf-8");
    const crewYaml: any = yaml.load(yamlFile);

    if (Array.isArray(crewYaml)) {
      crewYaml.forEach((member: CrewYaml) => {
        if (member.years_old < 30 || member.years_old > 40) return;

        const crewMember: CrewMember = {
          fullName: member.name,
          nationality: member.nationality,
          age: member.years_old,
          profession: member.occupation,
        };
        crewMembers.push(crewMember);
      });
    } else {
      console.error("YAML file does not contain an array of CrewYaml");
    }
  } catch (error) {
    console.error("Error parsing YAML:", (error as Error).message);
  }

  return crewMembers;
}

export function mergeCrewData(): CrewMember[] {
  const crewJsonList = parseCrewJsonToList(["api", "static", "crew.json"]);
  const crewYamlList = parseCrewYamlToList(["api", "static", "crew.yaml"]);

  return crewJsonList.concat(crewYamlList);
}
