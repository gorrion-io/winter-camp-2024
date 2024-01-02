import fs from 'fs/promises';
import yaml from 'js-yaml';
import 'reflect-metadata';
import { IsString, IsInt, Min, Max, validate } from 'class-validator';

type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

type RawCrewMemberData = {
    fullName?: string;
    nationality?: string;
    age?: number;
    profession?: string;
  };

type ParserFunction = (input: string) => RawCrewMemberData[];

export const loadCrewMembers = async (filePath: string, parser: ParserFunction): Promise<CrewMember[]> => {
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      const parsedData = parser(fileContents);
      const crewMembers: CrewMember[] = [];
      for (const data of parsedData) {
        if (isValidCrewMember(data)) {
          crewMembers.push(data as CrewMember);
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


  export const isValidCrewMember = (object: RawCrewMemberData): object is CrewMember => {
    return (
      typeof object.fullName === 'string' &&
      typeof object.nationality === 'string' &&
      typeof object.age === 'number' &&
      object.age >= 30 && object.age <= 40 &&
      typeof object.profession === 'string'
    );
  };

export const combineCrewLists = async (
    jsonFilePath: string,
    yamlFilePath: string
  ): Promise<CrewMember[]> => {
    try {
      // Ładujemy obie listy równolegle za pomocą Promise.all
      const [jsonCrewMembers, yamlCrewMembers] = await Promise.all([
        loadCrewMembers(jsonFilePath, jsonParser),
        loadCrewMembers(yamlFilePath, yamlParser),
      ]);
      const combinedCrewMembers = [...jsonCrewMembers, ...yamlCrewMembers];
      return combinedCrewMembers;
    } catch (error) {
      // Rzucamy wyjątek, aby wywołujący mógł odpowiednio zareagować
      throw new Error(`Error combining crew lists: ${error}`);
    }
  };
