type PaginatedData<T> = {
  data: T[];
  page: number;
  take: number;
};

export const getPaginatedData = async <T>({
  take,
  page,
  data,
}: PaginatedData<T>) => {
  const start = (page - 1) * take;
  const end = start + take;
  return [...data].slice(start, end);
};
