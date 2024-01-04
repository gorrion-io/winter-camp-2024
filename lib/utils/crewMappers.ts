import {
  CrewMember,
  JsonCrewMember,
  YamlCrewMember,
} from "@/lib/types/CrewMemberTypes";

export const mapJsonToCrewMember = (
  jsonMember: JsonCrewMember,
): CrewMember => ({
  fullName: `${jsonMember.firstName} ${jsonMember.lastName}`,
  nationality: jsonMember.nationality,
  age: jsonMember.age,
  profession: jsonMember.profession,
});

export const mapYamlToCrewMember = (
  yamlMember: YamlCrewMember,
): CrewMember => ({
  fullName: yamlMember.name,
  nationality: yamlMember.nationality,
  age: yamlMember.years_old,
  profession: yamlMember.occupation,
});
