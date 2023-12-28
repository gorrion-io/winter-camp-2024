import { JsonCrewMemberType, YamlCrewMemberType } from '../types/crewTypes'

export const transformCrewJsonArray = (jsonCrewArray: JsonCrewMemberType[]) => {
	return jsonCrewArray.map(crewMember => ({
		fullName: `${crewMember.firstName} ${crewMember.lastName}`,
		nationality: crewMember.nationality,
		age: crewMember.age,
		profession: crewMember.profession,
	}))
}

export const transformCrewYamlArray = (yamlCrewArray: YamlCrewMemberType[]) => {
	return yamlCrewArray.map(crewMember => ({
		fullName: crewMember.name,
		nationality: crewMember.nationality,
		age: crewMember.years_old,
		profession: crewMember.occupation,
	}))
}
