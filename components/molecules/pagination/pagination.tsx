import { NavArrow } from "../../../components/atoms/navArrow/navArrow";
import { DOTS, usePagination } from "../../../hooks/usePagination";
import { NavItem } from "../../atoms/navButton/navButton";
import { Dispatch, SetStateAction, memo } from "react";

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

    if (!currentPage || !paginationRange.length) return <></>;

    const onNext = () => setPage(currentPage + 1);
    const onPrevious = () => setPage(currentPage - 1);

    return (
      <div className="relative w-full my-4 md:w-2/4 margin-auto h-[60px]  rounded-lg shadow-lg bg-ecru outline-none">
        <ul className="flex w-full h-full justify-center items-center outline-none">
          <li className="w-10 mx-2">
            <NavArrow
              pageNumber={1}
              size={35}
              currentPage={currentPage}
              Icon={PiArrowCircleLeftThin}
              onClick={onPrevious}
            />
          </li>

          {paginationRange.map((item) => {
            if (item === DOTS) return <li>{DOTS}</li>;
            return (
              <NavItem
                setPage={setPage}
                currentPage={currentPage}
                key={item}
                id={item}
              >
                {item}
              </NavItem>
            );
          })}
          <li className="w-10 mx-2">
            <NavArrow
              pageNumber={paginationRange[paginationRange.length - 1]}
              size={35}
              currentPage={currentPage}
              Icon={PiArrowCircleRightThin}
              onClick={onNext}
            />
          </li>
        </ul>
      </div>
    );
  }
);
