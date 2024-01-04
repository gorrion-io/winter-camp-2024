import { ReactNode, memo } from "react";
import {
  ColorKey,
  MarignSpaceKey,
  PositionKey,
  SizeKey,
} from "@/types/variants";
import { getButtonDynamicProps } from "../../../utils";

export type ButtonProps = {
  children: ReactNode;
  bgColor: ColorKey;
  size: SizeKey;
  position?: PositionKey;
  space?: MarignSpaceKey;
  onClick?: () => void;
  className?: string;
};

export const Button = memo<ButtonProps>(
  ({
    children,
    bgColor,
    size,
    onClick,
    space = "default",
    position = "center",
    className = "",
  }) => {
    return (
      <button
        onClick={onClick}
        className={` ${getButtonDynamicProps({
          bgColor,
          size,
          space,
          position,
        })} ${className} flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-300  hover:cursor-pointer text-md text-white shadow-md  tracking-wider  rounded-md text-center`}
      >
        {children}
      </button>
    );
  }
);
