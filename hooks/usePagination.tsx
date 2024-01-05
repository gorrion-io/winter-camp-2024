import { useMemo } from "react";

type PaginationType = {
  totalPageCount: number;
  siblingCount: number;
  currentPage: number;
};

export const DOTS = "...";

const calculateRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};

export const usePagination = ({
  totalPageCount,
  siblingCount = 1,
  currentPage,
}: PaginationType) => {
  const paginationRage = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return calculateRange(1, totalPageCount);
    }

    const leftRangeIndex = Math.max(currentPage - siblingCount, 1);
    const rightRangeIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const condition = 2;
    const showLeftDots = leftRangeIndex > condition;
    const showRightDots = rightRangeIndex < totalPageCount;

    const firstPage = 1;
    const lastPage = totalPageCount;
    const adjacentElements = (condition + condition + 1) * siblingCount;

    console.log("showLeftDots", showLeftDots);

    if (!showLeftDots && showRightDots) {
      const leftRange = calculateRange(firstPage, adjacentElements);
      return [...leftRange, DOTS, lastPage] as const;
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = calculateRange(
        totalPageCount - adjacentElements + 1,
        totalPageCount
      );
      return [firstPage, DOTS, ...rightRange] as const;
    }

    if (showLeftDots && showRightDots) {
      const middle = calculateRange(leftRangeIndex, rightRangeIndex);
      return [firstPage, DOTS, ...middle, DOTS, lastPage] as const;
    }
    return [];
  }, [totalPageCount, siblingCount, currentPage]);
  return paginationRage;
};
