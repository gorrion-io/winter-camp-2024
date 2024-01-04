export type PaginatedResponse<T> = {
  page: number;
  totalPages: number;
  totalData: number;
  data: T[];
};
