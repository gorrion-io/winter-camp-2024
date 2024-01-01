import { LeftIcon } from '@/components/icons/LeftIcon';
import { RightIcon } from '@/components/icons/RightIcon';
import { PaginationButton } from '@/components/pagination/PaginationButton';
import { usePaginationLogic } from '@/lib/hooks/usePaginationLogic';

export const Pagination = ({
  nextPage,
  previousPage,
  lastPage,
  currentPage,
}: PaginationResponse) => {
  const { goToPreviousPage, goToNextPage, changePage } = usePaginationLogic({
    nextPage,
    previousPage,
    lastPage,
  });
  return (
    <nav
      aria-label='Pagination'
      className='inline-flex m-4 space-x-2 rounded-md shadow-sm'
    >
      <PaginationButton disabled={!previousPage} onClick={goToPreviousPage} data-testid='prev-btn' >
        <LeftIcon className='w-5 h-5' />
      </PaginationButton>
      {Array(lastPage)
        .fill(undefined)
        .map((_, i) => (
          <PaginationButton
            key={i}
            disabled={i + 1 === currentPage}
            onClick={() => changePage(i + 1)}
          >
            {i + 1}
          </PaginationButton>
        ))}
      <PaginationButton disabled={!nextPage} onClick={goToNextPage} data-testid='next-btn'>
        <RightIcon className='w-5 h-5' />
      </PaginationButton>
    </nav>
  );
};
