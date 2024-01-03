/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import { CrewMember, JsonCrewMember, YamlCrewMember } from "./types/crewTypes";
import { getCrewFromJson, getCrewFromYaml } from "./getters/getCrew";
import { mapCrew } from "./mapers/mapCrew";

const getCrew = async () => {
  const filePath: string = process.cwd();
  const jsonCrewMembers: JsonCrewMember[] = await getCrewFromJson(filePath);
  const yamlCrewMembers: YamlCrewMember[] = await getCrewFromYaml(filePath);

  const mappedCrew: CrewMember[] = mapCrew(jsonCrewMembers, yamlCrewMembers);
  const crewMembers: CrewMember[] = mappedCrew.filter(
    (member) => member.age >= 30 && member.age <= 40
  );
  crewMembers.sort((a, b) => a.fullName.localeCompare(b.fullName));

  return crewMembers;
};

export default getCrew;
