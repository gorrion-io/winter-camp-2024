import { ReactNode, memo } from "react";
import { ColorVariants } from "../../../constant/styles/colors";
import { ButtonSizeVariants } from "../../../constant/styles/button";
import {
  PositionVariants,
  SpaceVariants,
} from "../../../constant/styles/common";

type ColorKey = keyof typeof ColorVariants;
type SizeKey = keyof typeof ButtonSizeVariants;
type PositionKey = keyof typeof PositionVariants;
type MarignSpaceKey = keyof typeof SpaceVariants;

export type ButtonProps = {
  children: ReactNode;
  bgColor: ColorKey;
  size: SizeKey;
  position?: PositionKey;
  space?: MarignSpaceKey;
  onClick?: () => void;
  className?: string;
};

const getButtonDynamicProps = ({
  bgColor,
  size,
  space = "default",
  position = "center",
}: Omit<ButtonProps, "children">) => {
  return [
    ColorVariants[bgColor].bg,
    ButtonSizeVariants[size],
    PositionVariants[position],
    SpaceVariants[space],
  ]
    .filter((item) => !!item)
    .join(" ");
};

export const Button = memo<ButtonProps>(
  ({
    children,
    bgColor,
    size,
    onClick,
    space = "default",
    position = "center",
    className,
  }) => {
    return (
      <button
        onClick={() => onClick}
        className={` ${getButtonDynamicProps({
          bgColor,
          size,
          space,
          position,
        })} ${className} flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-300  hover:cursor-pointer text-md shadow-md  tracking-wider  rounded-md text-center`}
      >
        {children}
      </button>
    );
  }
);
