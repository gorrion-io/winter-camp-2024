/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */
type YamlCrewMember = {
  name: string;
  nationality: string;
  years_old: number;
  occupation: string;
};

type JsonCrewMember = {
  firstName: string;
  lastName: string;
  nationality: string;
  age: number;
  profession: string;
};

import YAML from "yaml";
import fs from "fs";
import { CrewMember } from "@/types/crewMember";

const joinCrew = (): CrewMember[] => {
  const parsedYamlCrew: YamlCrewMember[] = YAML.parse(
    fs.readFileSync(process.cwd() + "/crew.yaml", "utf-8")
  );
  const parsedJsonCrew: JsonCrewMember[] = JSON.parse(
    fs.readFileSync(process.cwd() + "/crew.json", "utf-8")
  );

  const serailizedYamlCrew: CrewMember[] = parsedYamlCrew.map(
    ({ name, nationality, years_old, occupation }) => {
      return {
        fullName: name,
        nationality: nationality,
        age: years_old,
        profession: occupation,
      };
    }
  );

  const serializedJsonCrew: CrewMember[] = parsedJsonCrew.map(
    ({ firstName, lastName, nationality, age, profession }) => {
      return {
        fullName: `${firstName} ${lastName}`,
        nationality,
        age,
        profession,
      };
    }
  );

  return [...serailizedYamlCrew, ...serializedJsonCrew]
    .sort((a, b) => (a.fullName < b.fullName ? -1 : 1))
    .filter((member) => member.age >= 30 && member.age <= 40);
};

export default joinCrew;
