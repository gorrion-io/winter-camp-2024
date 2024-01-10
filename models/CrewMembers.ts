/** @format */

export type JsonFileType = {
	firstName: string;
	lastName: string;
	nationality: string;
	age: number;
	profession: string;
};

export type YamlFileType = {
	name: string;
	nationality: string;
	years_old: number;
	occupation: string;
};

export type FileType = JsonFileType | YamlFileType;

export type CrewMember = {
	fullName: string;
	nationality: string;
	age: number;
	profession: string;
};

export interface SchemaCrewMembers {
	members: CrewMember[] | [];
	countMembers: number;
}
