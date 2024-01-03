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

type FileType = "json" | "yaml";

type DataParams = {
    type:FileType | string
    path:string
}

const sortBetweenAge = (member: CrewMember) => member.age >= 30 && member.age <= 40;

const paginateAndFilterData = (data: CrewMember[], page: number): CrewMember[] => {
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;

    return data.filter(sortBetweenAge).slice(startIndex, startIndex + itemsPerPage);
}

const getFileData = (item:DataParams, page:number) =>{
    switch (item.type) {
        case "json":
            const jsonFile = fs.readFileSync(path.resolve(item.path), 'utf8');
            const jsonData: CrewMember[] = JSON.parse(jsonFile);
            return paginateAndFilterData(jsonData, page)
        case "yaml":
            const yamlFile = fs.readFileSync(path.resolve(item.path), 'utf8');
            const yamlData: CrewMember[] = yaml.load(yamlFile) as CrewMember[];
            return paginateAndFilterData(yamlData, page)
        default:
            return [];
    }
}

export const astronautsList = (data: DataParams[], page: number): CrewMember[] => {
    return data.reduce((acc: CrewMember[], val: DataParams) => {
        return [...acc, ...getFileData(val, page)];
    }, []);
}