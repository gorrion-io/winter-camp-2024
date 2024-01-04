import { ButtonSizeVariants } from "@/constant/styles/button";
import { PositionVariants, SpaceVariants } from "@/constant/styles/common";

export type ColorKey =
  | "black"
  | "white"
  | "gray"
  | "red"
  | "blue"
  | "cashmere"
  | "glassCard"
  | "transparent";

export type PositionKey = keyof typeof PositionVariants;
export type MarignSpaceKey = keyof typeof SpaceVariants;
export type SizeKey = keyof typeof ButtonSizeVariants;

export type ColorVariantsType = Record<ColorKey, { bg: string; text?: string }>;
