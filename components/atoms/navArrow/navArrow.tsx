import { MouseEventHandler, memo } from "react";
import { IconType } from "react-icons";

import { DOTS } from "../../../hooks/usePagination";

export type NavArrowType = {
  Icon: IconType;
  size: number;
  pageNumber: number | typeof DOTS;
  currentPage: number;
  onClick?: MouseEventHandler<SVGElement>;
};

export const NavArrow = memo<NavArrowType>(
  ({ Icon, currentPage, onClick, pageNumber, size }) => {
    return (
      <Icon
        className={`${
          currentPage === pageNumber
            ? "hidden"
            : "flex cursor-pointer hover:text-oceanBlue  transition-all ease-in-out duration-300 outline-none"
        }`}
        size={size}
        onClick={onClick}
      />
    );
  }
);
