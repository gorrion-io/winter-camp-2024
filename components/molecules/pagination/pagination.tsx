import Link from "next/link";
import { NavArrow } from "../../../components/atoms/navArrow/navArrow";
import { DOTS, usePagination } from "../../../hooks/usePagination";
import { NavItem } from "../../atoms/navButton/navButton";
import { Dispatch, SetStateAction, memo, useCallback } from "react";

import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";

export type PaginationType = {
  totalPageCount: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = memo<PaginationType>(
  ({ totalPageCount, currentPage, setPage }) => {
    const paginationRange = usePagination({
      totalPageCount,
      siblingCount: 1,
      currentPage,
    });
    const onNext = useCallback(() => {
      return setPage((prev) => prev + 1);
    }, [setPage]);

    const onPrevious = useCallback(() => {
      return setPage((prev) => prev - 1);
    }, [setPage]);

    if (!currentPage || !paginationRange.length) return <></>;

    return (
      <div className="relative w-full my-4 md:w-2/4 margin-auto h-[60px]  rounded-lg shadow-lg bg-ecru outline-none">
        <ul className="flex w-full h-full justify-center items-center outline-none">
          <Link
            href={`/task/${currentPage - 1}`}
            passHref
            className="w-10 mx-2"
          >
            <NavArrow
              pageNumber={1}
              size={35}
              currentPage={currentPage}
              Icon={PiArrowCircleLeftThin}
              onClick={onPrevious}
            />
          </Link>

          {paginationRange.map((item, i) => {
            if (item === DOTS) return <li key={i}>{DOTS}</li>;
            return (
              <NavItem
                setPage={setPage}
                currentPage={currentPage}
                key={i}
                id={item}
              >
                {item}
              </NavItem>
            );
          })}
          <Link href={`/task/${currentPage + 1}`} className="w-10 mx-2">
            <NavArrow
              pageNumber={paginationRange[paginationRange.length - 1]}
              size={35}
              currentPage={currentPage}
              Icon={PiArrowCircleRightThin}
              onClick={onNext}
            />
          </Link>
        </ul>
      </div>
    );
  }
);
