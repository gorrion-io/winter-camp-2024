type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

type CrewResponse = {
  data: CrewMember[];
  pagination: Pagination;
};
