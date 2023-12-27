type Pagination = {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  lastPage: number;

  previousPage: number | null;
  nextPage: number | null;
};
