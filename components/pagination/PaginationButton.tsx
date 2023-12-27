import { ButtonHTMLAttributes } from "react";

interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  srText?: string;
}

export const PaginationButton = ({
  srText,
  children,
    ...rest
}: PaginationButtonProps) => (
  <button
    type="button"
    className="size-9 select-none aspect-square font-semibold border rounded-md bg-black grid place-items-center hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-white/30 disabled:hover:text-white"
    {...rest}
  >
    {srText && <span className="sr-only">{srText}</span>}
    {children}
  </button>
);
