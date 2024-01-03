/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import { CrewMember, JsonCrewMember, YamlCrewMember } from "./types/crewTypes";
import { getCrewFromJson, getCrewFromYaml } from "./getters/getCrew";

const getCrew = async () => {
  const filePath: string = process.cwd();
  const jsonCrewMembers: JsonCrewMember[] = await getCrewFromJson(filePath);
  const yamlCrewMembers: YamlCrewMember[] = await getCrewFromYaml(filePath);
};

export default getCrew;
