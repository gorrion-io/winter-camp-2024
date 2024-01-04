import fs from 'fs';
import path from 'path';
// @ts-ignore
import yaml from 'js-yaml';

type CrewMember = {
    fullName: string;
    nationality: string;
    age: number;
    profession: string;
};

type YamlCrewMember = {
    name: string;
    nationality: string;
    years_old: number;
    occupation: string;
};

type JsonCrewMember = {
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    profession: string;
};

type FileType = "json" | "yaml";

type DataParams = {
    type:FileType | string
    path:string
}

const sortBetweenAge = (member: CrewMember) => member.age >= 30 && member.age <= 40;

const paginateAndFilterData = (data: CrewMember[], page: number): CrewMember[] => {
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;

    return data.sort((a, b) => a.fullName.localeCompare(b.fullName)).filter(sortBetweenAge).slice(startIndex, startIndex + itemsPerPage);
}

const getFileData = (item:DataParams, page:number, count:number) =>{
    switch (item.type) {
        case "json":
            const jsonFile = fs.readFileSync(path.resolve(item.path), 'utf8');
            const jsonData: JsonCrewMember[] = JSON.parse(jsonFile);
            const serializedJsonData = jsonData.map((val)=>{
                return {
                    fullName:`${val.firstName} ${val.lastName}`,
                    nationality: val.nationality,
                    age: val.age,
                    profession: val.profession
                }
            })
            return serializedJsonData
        case "yaml":
            const yamlFile = fs.readFileSync(path.resolve(item.path), 'utf8');
            const yamlData: YamlCrewMember[] = yaml.load(yamlFile) as YamlCrewMember[];
            const serializedYamlData = yamlData.map((val)=>{
                return {
                    nationality:val.nationality,
                    fullName:val.name,
                    age:val.years_old,
                    profession:val.occupation
                }
            })
            return serializedYamlData
        default:
            return [];
    }
}

export const astronautsList = (data: DataParams[], page: number): CrewMember[] => {
    const astronauts= data.reduce((acc: CrewMember[], val: DataParams) => {
        return [...acc, ...getFileData(val, page, data.length)];
    }, []);
   return paginateAndFilterData(astronauts,page)
}