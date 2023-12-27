import { useRouter } from 'next/router';

type PaginationPayload = Pick<
  Pagination,
  'nextPage' | 'previousPage' | 'lastPage'
>;

export const usePaginationLogic = ({
  nextPage,
  previousPage,
  lastPage,
}: PaginationPayload) => {
  const { push } = useRouter();
  const changePage = (page: number | null) => {
    if (!page || page <= 0 || page > lastPage) return;
    return push(`/task/${page}`);
  };

  const goToPreviousPage = () => changePage(previousPage);

  const goToNextPage = () => changePage(nextPage);

  return { goToPreviousPage, goToNextPage, changePage };
};
