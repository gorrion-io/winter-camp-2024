import type { JsonResult } from '@/lib/schemas/json-result-schema';
import type { YamlResult } from '@/lib/schemas/yaml-result-schema';
import { CREW_MAX_AGE, CREW_MIN_AGE } from '@/config/constants';

export const validateByAge = <T extends { age: number }>({ age }: T) =>
  age >= CREW_MIN_AGE && age <= CREW_MAX_AGE;

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
    .filter(validateByAge);
};

export const mapYamlMemberToValidCrewMember = (
  data: YamlResult,
): CrewMember[] => {
  return data
    .map((member): CrewMember => {
      const { name, years_old, occupation, nationality } = member;
      return {
        fullName: name,
        nationality,
        age: years_old,
        profession: occupation,
      };
    })
    .filter(validateByAge);
};
