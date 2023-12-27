enum Professions {
	astronaut = 'astronaut',
	doctor = 'doctor',
	engineer = 'engineer',
}

export type CrewMember = {
	fullName: string;
	nationality: string;
	age: number;
	profession: Professions;
};

export type JsonCrewMember = {
	firstName: string;
	lastName: string;
	nationality: string;
	age: number;
	profession: Professions;
};

export type YamlCrewMember = {
	name: string;
	nationality: string;
	years_old: number;
	occupation: Professions;
};
