import { CrewMember } from './crewMember';

export type CrewResponse = {
	crewmates: CrewMember[];
	crewAmmount: number;
};

export type CrewResponseError = {
	message: string;
};
