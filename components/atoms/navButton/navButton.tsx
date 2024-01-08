import Link from "next/link";
import { Dispatch, SetStateAction, memo } from "react";

export type NavItemType = {
  id: number;
  children: number | "...";
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const NavItem = memo<NavItemType>(
  ({ children, setPage, currentPage, id }) => {
    return (
      <Link href={`/task/${id}`} passHref>
        <li
          onClick={() => setPage(id)}
          className={`border-[1px]  border-black ${
            currentPage === id ? "bg-oceanBlue text-white border-none" : ""
          }  flex size-6 md:size-7 mx-1 justify-center outline-none items-center cursor-pointer hover:bg-oceanBlue  hover:text-white hover:border-none transition-all ease-in-out duration-300 rounded-full `}
        >
          {children}
        </li>
      </Link>
    );
  }
);
