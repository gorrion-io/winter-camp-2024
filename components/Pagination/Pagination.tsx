import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PaginationButton from "./PaginationButton";

type Props = {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  siblingCount?: number;
};

const DOTS = "…";
const PAGE_ITEM_COUNT_INCREMENT = 5;

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
  siblingCount = 1,
}: Props) => {
  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = (): ("…" | number)[] | undefined => {
    const totalPageNumbers = siblingCount + PAGE_ITEM_COUNT_INCREMENT;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 1 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, lastPageIndex];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 1 * siblingCount;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  };

  const paginationItems = paginationRange();

  const backArrowDisabled = currentPage === 1;
  const nextArrowDisabled = currentPage === totalPages;

  const handleArrowClick = (direction: "left" | "right") => {
    if (
      (direction === "left" && backArrowDisabled) ||
      (direction === "right" && nextArrowDisabled)
    ) {
      return;
    }

    const newPage = direction === "left" ? currentPage - 1 : currentPage + 1;
    onPageChange(newPage);
  };

  return (
    <nav>
      <ul className="flex flex-wrap items-center gap-3">
        <li data-testid="pagination-back">
          <PaginationButton
            disabled={backArrowDisabled}
            onClick={() => handleArrowClick("left")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </PaginationButton>
        </li>

        {paginationItems?.map((item, index) => (
          <li key={index}>
            {item === DOTS ? (
              <span>{DOTS}</span>
            ) : (
              <PaginationButton
                active={item === currentPage}
                onClick={() => onPageChange(item as number)}
              >
                {item}
              </PaginationButton>
            )}
          </li>
        ))}

        <li data-testid="pagination-next">
          <PaginationButton
            disabled={nextArrowDisabled}
            onClick={() => handleArrowClick("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </PaginationButton>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
