import { NavButton } from "../../atoms/navButton/navButton";
import { memo } from "react";

export type PaginationType = {
  pageAmount: number;
};

export const Pagination = memo<PaginationType>(({ pageAmount }) => {
  return (
    <div className="w-2/4 margin-auto h-[60px] border-[1px] rounded-lg shadow-lg border-black">
      <div className="flex w-full h-full justify-center items-center ">
        {new Array(10).fill(null).map((item, i) => {
          return <NavButton key={i + 1}>{i + 1}</NavButton>;
        })}
      </div>
    </div>
  );
});
