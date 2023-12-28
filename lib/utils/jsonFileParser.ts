import fs from "fs/promises";

const parseJsonFile = async <T>(filePath: string): Promise<T> => {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error}`);
  }
};

export default parseJsonFile;
