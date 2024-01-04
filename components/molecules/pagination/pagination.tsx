import { NavItem } from "../../atoms/navButton/navButton";
import { memo } from "react";

export type PaginationType = {
  pageAmount: number;
  setPage: (page: number) => Promise<void>;
};

export const Pagination = memo<PaginationType>(({ pageAmount, setPage }) => {
  return (
    <div className="  w-full md:w-2/4 margin-auto h-[60px]  rounded-lg shadow-lg bg-ecru border-[1px] border-black">
      <div className="flex w-full h-full justify-center items-center">
        {new Array(pageAmount).fill(null).map((_, i) => {
          return (
            <NavItem setPage={setPage} key={i + 1} id={i + 1}>
              {i + 1}
            </NavItem>
          );
        })}
      </div>
    </div>
  );
});
