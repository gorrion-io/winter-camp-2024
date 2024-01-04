import { memo } from "react";

export type NavButtonType = {
  children: number;
};

export const NavButton = memo<NavButtonType>(({ children }) => {
  return (
    <div className="border-2 border-black flex size-8 mr-2 justify-center items-center cursor-pointer hover:bg-oceanBlue  hover:text-white hover:border-none transition-all ease-in-out duration-300 rounded-full ">
      {children}
    </div>
  );
});
