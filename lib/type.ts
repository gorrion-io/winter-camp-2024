export type BaseMemberType = {
  nationality: string;
  age: number;
  profession: "doctor" | "engineer" | "astronaut";
};

export type CrewMember = {
  fullName: string;
} & BaseMemberType;

export type YamlCrewMember = {
  name: string;
  nationality: string;
  years_old: number;
  occupation: "doctor" | "engineer" | "astronaut";
};

export type JSONCrewMember = {
  firstName: string;
  lastName: string;
} & BaseMemberType;
