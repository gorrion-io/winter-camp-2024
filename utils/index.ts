import { useRouter } from "next/router";
import { ButtonProps } from "../components/atoms/button/button";
import { ButtonSizeVariants } from "../constant/styles/button";
import { ColorVariants } from "../constant/styles/colors";
import { PositionVariants, SpaceVariants } from "../constant/styles/common";
import {
  FontSize,
  FontStyle,
  TextPosition,
} from "../constant/styles/typography";
import { TypographyProps } from "../types/typography";

export const getButtonDynamicProps = ({
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

export const getTypographyDynamicProps = ({
  textColor,
  textSize,
  position = "center",
  fontFamily = "sans",
  textSpace = "default",
}: TypographyProps) => {
  const dynamiClassName = [
    ColorVariants[textColor].text,
    FontSize[textSize],
    FontStyle[fontFamily],
    TextPosition[position],
    SpaceVariants[textSpace],
  ]
    .filter((item) => !!item)
    .join(" ");

  return `${dynamiClassName}`;
};
