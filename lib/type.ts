type BaseMemberType = {
  nationality: string;
  age: number;
  profession: string;
};

export type CrewMember = {
  fullName: string;
} & BaseMemberType;

export type YamlCrewMember = {
  name: string;
  nationality: string;
  years_old: number;
  occupation: string;
};

export type JSONCrewMember = {
  firstName: string;
  lastName: string;
} & BaseMemberType;
