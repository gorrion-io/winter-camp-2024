import fs from 'fs/promises';
import yaml from 'js-yaml';
import 'reflect-metadata';

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
      fullName.length > 0 && // Sprawdzamy, czy fullName nie jest pusty
      typeof object.nationality === 'string' &&
      object.nationality.length > 0 && // Sprawdzamy, czy nationality nie jest pusty
      typeof age === 'number' &&
      age >= 30 && age <= 40 &&
      typeof profession === 'string' &&
      profession.length > 0 // Sprawdzamy, czy profession nie jest pusty
    );
  };

export const mapToCrewMember = (object: RawCrewMemberData): CrewMember => {
  const fullName = object.name ?? `${object.firstName ?? ''} ${object.lastName ?? ''}`.trim();
  const age = object.age ?? object.years_old ?? 0; // Default to 0 if both are undefined
  const profession = object.profession ?? object.occupation ?? ''; // Default to empty string if both are undefined

  if (!fullName || !age || !profession) {
    throw new Error('Invalid crew member data');
  }

  return {
    fullName,
    nationality: object.nationality ?? '', // Default to empty string if undefined
    age,
    profession,
  };
};

export const combineCrewLists = async (
    jsonFilePath: string,
    yamlFilePath: string
  ): Promise<CrewMember[]> => {
    try {
        console.log(jsonFilePath)
      // Ładujemy obie listy równolegle za pomocą Promise.all
      const [jsonCrewMembers, yamlCrewMembers] = await Promise.all([
        loadCrewMembers(jsonFilePath, jsonParser),
        loadCrewMembers(yamlFilePath, yamlParser),
      ]);
      const combinedCrewMembers = [...jsonCrewMembers, ...yamlCrewMembers];
      console.log('in combineCrewLists', combinedCrewMembers);
      return combinedCrewMembers;
    } catch (error) {
      // Rzucamy wyjątek, aby wywołujący mógł odpowiednio zareagować
      throw new Error(`Error combining crew lists: ${error}`);
    }
  };
