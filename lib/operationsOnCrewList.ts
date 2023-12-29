import { CrewMember, JsonCrewMember, YamlCrewMember } from '@/types/crewMember';

export const mapToCrewMember = (
    jsonMembers: JsonCrewMember[],
    yamlMembers: YamlCrewMember[],
): CrewMember[] => {
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
    crewMembers: CrewMember[],
): CrewMember[] => {
    return crewMembers.filter((member) => member.age >= 30 && member.age <= 40);
};
export const sortCrewMembersByName = (
    crewMembers: CrewMember[],
): CrewMember[] => {
    return crewMembers.sort((a, b) => a.fullName.localeCompare(b.fullName));
};
