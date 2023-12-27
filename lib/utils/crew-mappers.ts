import type { JsonResult } from "@/lib/schemas/json-result-schema";
import { YamlResult } from "@/lib/schemas/yaml-result-schema";

const validateAge = (age: number) => age >= 30 && age <= 40;

export const mapJsonMemberToValidCrewMember = (
  data: JsonResult,
): CrewMember[] => {
  return data
    .map(
      ({ firstName, lastName, ...rest }): CrewMember => ({
        fullName: `${firstName} ${lastName}`,
        ...rest,
      }),
    )
    .filter(({ age }) => validateAge(age));
};

export const mapYamlMemberToValidCrewMember = (
  data: YamlResult,
): CrewMember[] => {
  return data
    .map((member): CrewMember => {
      const { name, years_old, occupation, nationality } = member;
      return {
        fullName: name,
        age: years_old,
        profession: occupation,
        nationality,
      };
    })
    .filter(({ age }) => validateAge(age));
};
