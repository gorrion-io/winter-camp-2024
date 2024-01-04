import React from "react";

type Props = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

const PaginationButton = ({ onClick, children, active, disabled }: Props) => {
  return (
    <button
      className={`flex h-[40px] w-[40px]  select-none items-center justify-center rounded-full p-2 ring-1 ring-slate-700 transition ${
        active ? "bg-slate-700/25" : "hover:bg-slate-700/25"
      }
      ${
        disabled
          ? "cursor-default opacity-50 hover:bg-transparent"
          : "cursor-pointer"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
