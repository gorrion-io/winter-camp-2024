import { CrewMember } from "./definitions";

import crewJson from "../crew.json";
import fs from "fs";
import yaml from "js-yaml";

function parseCrewJsonToList(): CrewMember[] {
  let crewMembers: CrewMember[] = [];

  crewJson.forEach((member) => {
    if (member.age < 30 || member.age > 40) return;

    const fullName = member.firstName + " " + member.lastName;
    const crewMember: CrewMember = {
      fullName,
      nationality: member.nationality,
      age: member.age,
      profession: member.profession,
    };
    crewMembers.push(crewMember);
  });

  return crewMembers;
}

function parseCrewYamlToList(): CrewMember[] {
  let crewMembers: CrewMember[] = [];

  const yamlFile = fs.readFileSync("crew.yaml", "utf-8");
  const crewYaml: any = yaml.load(yamlFile);

  crewYaml.forEach((member: any) => {
    if (member.years_old < 30 || member.years_old > 40) return;

    const crewMember: CrewMember = {
      fullName: member.name,
      nationality: member.nationality,
      age: member.years_old,
      profession: member.occupation,
    };
    crewMembers.push(crewMember);
  });

  return crewMembers;
}

export function mergeCrewData(): CrewMember[] {
  const crewJsonList = parseCrewJsonToList();
  const crewYamlList = parseCrewYamlToList();

  return crewJsonList.concat(crewYamlList);
}
