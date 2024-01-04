import { CrewMember, JsonCrewMember, YamlCrewMember } from "../types/crewTypes";

export const mapCrew = (
  jsonCrewMembers: JsonCrewMember[],
  yamlCrewMembers: YamlCrewMember[]
): CrewMember[] => {
  const mappedJsonMembers: CrewMember[] = jsonCrewMembers.map(
    (member: JsonCrewMember): CrewMember => {
      return {
        fullName: `${member.firstName} ${member.lastName}`,
        nationality: member.nationality,
        age: member.age,
        profession: member.profession,
      };
    }
  );

  const mappedYamlMembers: CrewMember[] = yamlCrewMembers.map(
    (member: YamlCrewMember): CrewMember => {
      return {
        fullName: member.name,
        nationality: member.nationality,
        age: member.years_old,
        profession: member.occupation,
      };
    }
  );

  return [...mappedJsonMembers, ...mappedYamlMembers];
};
