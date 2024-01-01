import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Pagination } from '@/components/pagination/Pagination';
import { usePaginationLogic } from '@/lib/hooks/usePaginationLogic';
import { fireEvent, render, screen } from '@testing-library/react';

vi.mock('@/lib/hooks/usePaginationLogic');

describe('Pagination', () => {
  const mockGoToPreviousPage = vi.fn();
  const mockGoToNextPage = vi.fn();
  const mockChangePage = vi.fn();

  let mockPaginationResponse: PaginationResponse;

  beforeEach(() => {
    vi.mocked(usePaginationLogic).mockReturnValue({
      goToPreviousPage: mockGoToPreviousPage,
      goToNextPage: mockGoToNextPage,
      changePage: mockChangePage,
    });

    mockPaginationResponse = {
      nextPage: 2,
      previousPage: 1,
      lastPage: 3,
      currentPage: 1,
      totalItems: 40,
      totalPages: 3,
      itemsPerPage: 8,
    };
    vi.clearAllMocks();
  });

  it('renders pagination buttons correctly', () => {
    render(<Pagination {...mockPaginationResponse} />);

    const previousButton = screen.getByTestId('prev-btn');
    const nextButton = screen.getByTestId('next-btn');
    const pageButtons = screen.getAllByRole('button');

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageButtons).toHaveLength(mockPaginationResponse.lastPage + 2);
  });

  it('calls the correct function when the prev/next button is clicked', () => {
    render(<Pagination {...mockPaginationResponse} />);

    const previousButton = screen.getByTestId('prev-btn');
    fireEvent.click(previousButton);
    const nextButton = screen.getByTestId('next-btn');
    fireEvent.click(nextButton);

    expect(mockGoToNextPage).toHaveBeenCalledTimes(1);
    expect(mockGoToPreviousPage).toHaveBeenCalledTimes(1);
  });

  it('calls the correct function when a page button is clicked', () => {
    render(<Pagination {...mockPaginationResponse} />);

    const pageButton =
      screen.getAllByRole('button')[mockPaginationResponse.currentPage + 1];
    fireEvent.click(pageButton);

    expect(mockChangePage).toHaveBeenCalledTimes(1);
  });

  it('disables the prev/next button when there is no previous/next page', () => {
    render(
      <Pagination
        {...mockPaginationResponse}
        previousPage={null}
        nextPage={null}
      />,
    );

    const previousButton = screen.getByTestId('prev-btn');
    const nextButton = screen.getByTestId('next-btn');

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('disables the page button when it is the current page', () => {
    render(<Pagination {...mockPaginationResponse} />);

    const pageButton =
      screen.getAllByRole('button')[mockPaginationResponse.currentPage];
    fireEvent.click(pageButton);
    expect(pageButton).toBeDisabled();
    expect(mockChangePage).not.toHaveBeenCalled();
  });
});
