type PaginatedDataPayload<T> = {
  data: T[];
  page: number;
  take: number;
};

export const createPaginatedData = <T>({
  take,
  page,
  data,
}: PaginatedDataPayload<T>) => {
  const start = (page - 1) * take;
  const end = start + take;
  return [...data].slice(start, end);
};
