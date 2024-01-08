type Profession = "doctor" | "engineer" | "astronaut";

export type BaseMemberType = {
  nationality: string;
  age: number;
  profession: Profession;
};

export type CrewMember = {
  fullName: string;
} & BaseMemberType;

export type YamlCrewMember = {
  name: string;
  nationality: string;
  years_old: number;
  occupation: Profession;
};

export type JSONCrewMember = {
  firstName: string;
  lastName: string;
} & BaseMemberType;
