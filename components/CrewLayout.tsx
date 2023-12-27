import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CrewLayoutProps extends PropsWithChildren {
  className?: string;
}

export const CrewLayout = ({ children, className }: CrewLayoutProps) => (
  <div
    className={twMerge(
      "w-screen h-[100svh] flex flex-col justify-around items-center overflow-hidden",
      className,
    )}
  >
    {children}
  </div>
);
