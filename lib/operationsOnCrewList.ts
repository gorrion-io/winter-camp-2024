import { CrewMemberSchema } from '@/schema/crew/crewMemberSchema';
import { JsonCrewMemberSchema } from '@/schema/crew/jsonCrewMemberSchema';
import { YamlCrewMemberSchema } from '@/schema/crew/yamlCrewMemberSchema';

export const mapToCrewMember = (
    jsonMembers: JsonCrewMemberSchema[],
    yamlMembers: YamlCrewMemberSchema[],
): CrewMemberSchema[] => {
    const jsonCrewMembersMapped = jsonMembers.map((member) => {
        return {
            fullName: `${member.firstName} ${member.lastName}`,
            nationality: member.nationality,
            age: member.age,
            profession: member.profession,
        };
    });

    const yamlCrewMembersMapped = yamlMembers.map((member) => {
        return {
            fullName: member.name,
            nationality: member.nationality,
            age: member.years_old,
            profession: member.occupation,
        };
    });

    return [...jsonCrewMembersMapped, ...yamlCrewMembersMapped];
};

export const filterCrewMembersByAge = (
    crewMembers: CrewMemberSchema[],
): CrewMemberSchema[] => {
    return crewMembers.filter((member) => member.age >= 30 && member.age <= 40);
};
export const sortCrewMembersByName = (
    crewMembers: CrewMemberSchema[],
): CrewMemberSchema[] => {
    return crewMembers.sort((a, b) => a.fullName.localeCompare(b.fullName));
};
