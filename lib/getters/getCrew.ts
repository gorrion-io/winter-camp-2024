import fs from "fs";
import yaml from "js-yaml";
import { JsonCrewMember, YamlCrewMember } from "../types/crewTypes";

export const getCrewFromJson = async (
  filePath: string
): Promise<JsonCrewMember[]> => {
  try {
    const members = await fs.promises.readFile(filePath + "/crew.json", "utf8");
    return JSON.parse(members) as JsonCrewMember[];
  } catch (err) {
    throw err;
  }
};

export const getCrewFromYaml = async (
  filePath: string
): Promise<YamlCrewMember[]> => {
  try {
    const members: YamlCrewMember[] = yaml.load(
      fs.readFileSync(filePath + "/crew.yaml", "utf8")
    ) as YamlCrewMember[];
    return members;
  } catch (err) {
    throw err;
  }
};
