import { memo } from "react";

export type PaginationType = {};

export const Pagination = memo<PaginationType>(() => {
  return (
    <div className="w-full h-[60px] border-2 border-black"> Pagination</div>
  );
});
