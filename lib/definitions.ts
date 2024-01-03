export type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

export type Query = { [key: string]: string | string[] | undefined };
