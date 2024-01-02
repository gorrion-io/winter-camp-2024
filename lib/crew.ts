/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import fs from "fs";
import yaml from "js-yaml";
import { CrewMember, YamlCrewMember } from "./type";

export const getYamlData = (fileName: string) => {
  const yamlData = fs.readFileSync(fileName, "utf-8");
  return yaml.load(yamlData) as YamlCrewMember[];
};

export const getJSONData = (fileName: string): CrewMember => {
  const jsonData = fs.readFileSync(fileName, "utf-8");
  return JSON.parse(jsonData);
};

export const getMembersData = (fileName: string) => {
  const membersI = getYamlData(`${fileName}.yaml`);
  const membersII = getJSONData(`${fileName}.json`);
  return membersI;
};
