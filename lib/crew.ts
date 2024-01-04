import fs from 'fs/promises';
import yaml from 'js-yaml';

export type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

type RawCrewMemberData = {
  firstName?: string;
  lastName?: string;
  name?: string;
  nationality?: string;
  age?: number;
  years_old?: number;
  profession?: string;
  occupation?: string;
};

type ParserFunction = (input: string) => RawCrewMemberData[];

export const loadCrewMembers = async (filePath: string, parser: ParserFunction): Promise<CrewMember[]> => {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const parsedData = parser(fileContents);
    const crewMembers: CrewMember[] = [];
    for (const data of parsedData) {
      if (isValidCrewMember(data)) {
        crewMembers.push(mapToCrewMember(data));
      }
    }
    return crewMembers;
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error}`);
  }
};

export const jsonParser: ParserFunction = (input: string): RawCrewMemberData[] => {
  return JSON.parse(input);
};

export const yamlParser: ParserFunction = (input: string): RawCrewMemberData[] => {
  const result = yaml.load(input);
  if (!Array.isArray(result)) {
    throw new Error('Parsed YAML content is not an array');
  }
  return result as RawCrewMemberData[];
};

export const isValidCrewMember = (object: RawCrewMemberData): boolean => {
    const fullName = object.name ?? `${object.firstName ?? ''} ${object.lastName ?? ''}`.trim();
    const age = object.age ?? object.years_old;
    const profession = object.profession ?? object.occupation;
  
    return (
      fullName.length > 0 &&
      typeof object.nationality === 'string' &&
      object.nationality.length > 0 &&
      typeof age === 'number' &&
      age >= 30 && age <= 40 &&
      typeof profession === 'string' &&
      profession.length > 0
    );
  };

export const mapToCrewMember = (object: RawCrewMemberData): CrewMember => {
  const fullName = object.name ?? `${object.firstName ?? ''} ${object.lastName ?? ''}`.trim();
  const age = object.age ?? object.years_old ?? 0;
  const profession = object.profession ?? object.occupation ?? '';

  if (!fullName || !age || !profession) {
    throw new Error('Invalid crew member data');
  }

  return {
    fullName,
    nationality: object.nationality ?? '',
    age,
    profession,
  };
};

export const combineCrewLists = async (
    jsonFilePath: string,
    yamlFilePath: string
  ): Promise<CrewMember[]> => {
    try {
      const [jsonCrewMembers, yamlCrewMembers] = await Promise.all([
        loadCrewMembers(jsonFilePath, jsonParser),
        loadCrewMembers(yamlFilePath, yamlParser),
      ]);
      const combinedCrewMembers = [...jsonCrewMembers, ...yamlCrewMembers];
      return combinedCrewMembers;
    } catch (error) {
      throw new Error(`Error combining crew lists: ${error}`);
    }
};
