export type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

export type Query = { [key: string]: string | string[] | undefined };

export type CrewJson = {
  firstName: string;
  lastName: string;
  nationality: string;
  age: number;
  profession: string;
};

export type CrewYaml = {
  name: string;
  nationality: string;
  years_old: number;
  occupation: string;
};
