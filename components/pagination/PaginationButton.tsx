import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  srText?: string;
}

export const PaginationButton = ({
  srText,
  children,
  className,
  ...rest
}: PaginationButtonProps) => (
  <button
    type="button"
    className={twMerge(
      "size-9 select-none  cursor-pointer",
      "aspect-square font-semibold border rounded-md bg-black grid place-items-center hover:bg-white",
      "hover:text-black transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-white/30 disabled:hover:text-white",
      className,
    )}
    {...rest}
  >
    {srText && <span className="sr-only">{srText}</span>}
    {children}
  </button>
);
