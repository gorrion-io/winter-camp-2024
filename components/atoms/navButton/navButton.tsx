import { memo } from "react";

export type NavButtonType = {
  id: number;
  children: number;
  setPage: (page: number) => Promise<void>;
};

export const NavItem = memo<NavButtonType>(({ children, setPage, id }) => {
  return (
    <div
      onClick={() => setPage(id)}
      className="border-[1px]  border-black  flex size-6 md:size-8 mr-2 justify-center items-center cursor-pointer hover:bg-oceanBlue  hover:text-white hover:border-none transition-all ease-in-out duration-300 rounded-full "
    >
      {children}
    </div>
  );
});
