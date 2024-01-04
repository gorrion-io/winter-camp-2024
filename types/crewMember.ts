export type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

export type CrewResponse = {
  paginatedCrewList: CrewMember[];
  originalListLength: number;
};

export type ErrorResponse = {
  error: "Page not found!";
};
