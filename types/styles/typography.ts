import { ReactNode } from "react";
import { TextBGColorVariants } from "../../constant/styles/colors";
import {
  FontSize,
  FontStyle,
  TextPosition,
} from "../../constant/styles/typography";
import { Space } from "../../constant/styles/common";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "cite";

export type TextColorVariants = keyof typeof TextBGColorVariants;
export type TextSizeVariants = keyof typeof FontSize;
export type TextPosition = keyof typeof TextPosition;
export type TextSpace = keyof typeof Space;
export type FontFamilyVariants = keyof typeof FontStyle;

export type BasicTypographyProps = {
  tag: TagVariants;
  children: ReactNode;
  className?: string;
};

export type TypographyProps = {
  textColor: TextColorVariants;
  textSize: TextSizeVariants;
  fontFamily?: FontFamilyVariants;
  position?: TextPosition;
  textSpace?: TextSpace;
};
