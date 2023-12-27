import { readFile } from 'fs/promises';
import { extname, join, normalize } from 'path';
import { parse as yamlParse } from 'yaml';

const createSafePath = (filePath: string) =>
  normalize(join(process.cwd(), filePath));

export const readJsonFile = async (filePath: string): Promise<unknown> => {
  const fullPath = createSafePath(filePath);
  if (extname(fullPath) !== '.json')
    throw new Error('Invalid file type must be a json file');

  const data = await readFile(fullPath, 'utf-8');
  return JSON.parse(data);
};

export const readYamlFile = async (filePath: string): Promise<unknown> => {
  const fullPath = createSafePath(filePath);
  if (extname(fullPath) !== '.yaml')
    throw new Error('Invalid file type must be a yaml file');

  const data = await readFile(fullPath, 'utf-8');
  return yamlParse(data);
};
