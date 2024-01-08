import { ReactNode, memo, useMemo } from "react";

type GridTemplateType = {
  children: ReactNode;
};

export const GridTemplate = memo<GridTemplateType>(({ children }) => {
  return (
    <div className="relative grid  bg-ecru rounded-xl shadow-lg overflow-y-auto  grid-cols-1 h-[800px] place-items-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full">
      {children}
    </div>
  );
});
