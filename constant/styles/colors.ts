import { InfoType } from "@/components/molecules/InfoCard/Card/infoCard";
import { ColorVariantsType } from "@/types/variants";

export const ColorVariants: ColorVariantsType = {
  black: {
    bg: "bg-primaryBlack",
    text: "text-primaryBlack",
  },
  white: {
    bg: "bg-primaryWhite",
    text: "text-primaryWhite",
  },
  gray: {
    bg: "bg-primaryGray",
    text: "text-primaryGray",
  },
  red: {
    bg: "bg-primaryRed",
    text: "text-primaryRed",
  },
  blue: {
    bg: "bg-oceanBlue",
    text: "text-oceanBlue",
  },
  cashmere: {
    bg: "bg-cashmere",
    text: "text-cashmere",
  },
  glassCard: {
    bg: "bg-glassCard",
    text: "text-glassCard",
  },
  transparent: {
    bg: "bg-transparent text-black border-[1px] border-white",
  },
};

export const BgInfoCardType: Record<InfoType, string> = {
  ERROR: "bg-primaryRed",
  WARRNING: "bg-primaryOrange",
  SUCCESS: "bg-oceanBlue",
};
