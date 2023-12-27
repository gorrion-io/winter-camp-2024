import { useRouter } from 'next/router';

import { LeftIcon } from '@/components/icons/LeftIcon';
import { RightIcon } from '@/components/icons/RightIcon';
import { PaginationButton } from '@/components/pagination/PaginationButton';

export const Pagination = ({
  nextPage,
  previousPage,
  lastPage,
  currentPage,
}: Pagination) => {
  const { push } = useRouter();
  const handleClick = (goTo: number | null) => {
    if (!goTo) return;
    push(`/task/${goTo}`);
  };
  return (
    <nav
      aria-label='Pagination'
      className='inline-flex m-4 space-x-2 rounded-md shadow-sm'
    >
      <PaginationButton
        disabled={!previousPage}
        onClick={() => handleClick(previousPage)}
      >
        <LeftIcon className='w-5 h-5' />
      </PaginationButton>
      {Array(lastPage)
        .fill(undefined)
        .map((_, i) => (
          <PaginationButton
            key={i}
            disabled={i + 1 === currentPage}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </PaginationButton>
        ))}
      <PaginationButton
        disabled={!nextPage}
        onClick={() => handleClick(nextPage)}
      >
        <RightIcon className='w-5 h-5' />
      </PaginationButton>
    </nav>
  );
};
