/**
 * @todo Prepare a method to return a list of crew members
 * @description The list should only include crew members aged 30 to 40
 */

import path from "path";
import fs from 'fs';
import yaml from 'js-yaml';
import { v4 as uuidv4 } from 'uuid'; // added id to make each user unique

type UserJson = {
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    profession: string;
  }
  
type UserYaml = {
    name: string;
    nationality: string;
    years_old: number;
    occupation: string;
}

export const mergeData = () => {
    
    // use absolute paths to make sure it's always correct
    const jsonPath = path.join(process.cwd(), './crew.json');
    const yamlPath = path.join(process.cwd(), './crew.yaml');

    // Read JSON file
    const rawJson = fs.readFileSync(jsonPath, 'utf-8');
    const jsonData: UserJson[] = JSON.parse(rawJson);
    const fixedJson = jsonData.map(({firstName, lastName, nationality, age, profession}) => {
        return {
        id: uuidv4(),
        fullName: `${firstName} ${lastName}`,
        nationality,
        age,
        profession
        }
    }).filter(({ age }) => {
        return age >= 30 && age <= 40;
    });

    // Read Yaml file
    const rawYaml = fs.readFileSync(yamlPath, 'utf-8');
    const yamlData = yaml.load(rawYaml) as UserYaml[];
    const fixedYaml = yamlData.map(({name, nationality, years_old, occupation}) => {
        return {
        id: uuidv4(),
        fullName: name,
        nationality,
        age: years_old,
        profession: occupation
        }
    }).filter(({ age }) => {
        return age >= 30 && age <= 40;
    });
    

    const combinedData = fixedJson.concat(fixedYaml); 

    return combinedData;
}


