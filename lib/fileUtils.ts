import { JsonCrewMember, YamlCrewMember } from "@/types";
import fs from "fs/promises";
import yaml from "js-yaml";

export const loadJsonCrewDataFromFile = async (
  path: string
): Promise<JsonCrewMember[]> => {
  try {
    const file = await fs.readFile(path, "utf8");
    return JSON.parse(file);
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Failed to load JSON file, an unknown error happened."
    );
  }
};

export const loadYamlCrewDataFromFile = async (
  path: string
): Promise<YamlCrewMember[]> => {
  try {
    const file = await fs.readFile(path, "utf8");
    return yaml.load(file) as YamlCrewMember[];
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Failed to load JSON file, an unknown error happened."
    );
  }
};
