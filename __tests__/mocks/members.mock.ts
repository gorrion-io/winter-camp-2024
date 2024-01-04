import { CREW_MAX_AGE, CREW_MIN_AGE } from '@/config/constants';
import { JsonResult } from '@/lib/schemas/json-result-schema';
import { YamlResult } from '@/lib/schemas/yaml-result-schema';

export const JSON_MEMBERS_MOCK_DATA: JsonResult = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: CREW_MIN_AGE + 1,
    nationality: 'American',
    profession: 'Engineer',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: CREW_MAX_AGE - 1,
    nationality: 'British',
    profession: 'Doctor',
  },
] as const;

export const INVALID_JSON_MEMBERS_MOCK_DATA: JsonResult = [
  {
    firstName: 'Invalid',
    lastName: 'User',
    age: CREW_MAX_AGE + 1,
    nationality: 'Poland',
    profession: 'Crew',
  },
  ...JSON_MEMBERS_MOCK_DATA,
] as const;

export const YAML_MEMBERS_MOCK_DATA: YamlResult = [
  {
    name: 'John Doe',
    years_old: CREW_MIN_AGE + 1,
    nationality: 'American',
    occupation: 'Engineer',
  },
  {
    name: 'Jane Doe',
    years_old: CREW_MAX_AGE - 1,
    nationality: 'British',
    occupation: 'Doctor',
  },
] as const;

export const INVALID_YAML_MEMBERS_MOCK_DATA: YamlResult = [
  {
    name: 'Invalid User',
    years_old: CREW_MAX_AGE + 1,
    nationality: 'Poland',
    occupation: 'Crew',
  },
  ...YAML_MEMBERS_MOCK_DATA,
]

export const MEMBERS_MOCK_RESULT: CrewMember[] = [
  {
    fullName: 'John Doe',
    age: CREW_MIN_AGE + 1,
    nationality: 'American',
    profession: 'Engineer',
  },
  {
    fullName: 'Jane Doe',
    age: CREW_MAX_AGE - 1,
    nationality: 'British',
    profession: 'Doctor',
  },
] as const;
