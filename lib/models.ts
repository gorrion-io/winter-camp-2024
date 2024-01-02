export type PageRequest = {
  page: number;
  size: number;
};

export type Page<E> = {
  page: number;
  size: number;
  totalSize: number;
  pages: number;
  elements: E[];
};

export type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};
