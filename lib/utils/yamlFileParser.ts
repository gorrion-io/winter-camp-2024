import fs from "fs/promises";
import yaml from "js-yaml";

const parseYamlFile = async <T>(filePath: string): Promise<T> => {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return yaml.load(fileContent) as T;
  } catch (error) {
    throw new Error(`Error reading YAML file: ${error}`);
  }
};

export default parseYamlFile;
