import { createElement } from "react";
import {
  BasicTypographyProps,
  TypographyProps,
} from "../../../types/styles/typography";
import { TextBGColorVariants } from "../../../constant/styles/colors";
import {
  FontSize,
  FontStyle,
  TextPosition,
} from "../../../constant/styles/typography";
import { Space } from "../../../constant/styles/common";

const DynamicTypography = ({
  tag = "p",
  children,
  ...props
}: BasicTypographyProps) => {
  return createElement(tag, props, children);
};

const getTypographyDynamicProps = ({
  textColor,
  textSize,
  position = "center",
  fontFamily = "sans",
  textSpace = "default",
}: TypographyProps) => {
  const dynamiClassName = [
    TextBGColorVariants[textColor],
    FontSize[textSize],
    FontStyle[fontFamily],
    TextPosition[position],
    Space[textSpace],
  ]
    .filter((item) => !!item)
    .join(" ");

  return `${dynamiClassName}`;
};

export const Typography = ({
  tag,
  children,
  ...props
}: TypographyProps & BasicTypographyProps) => {
  const {
    textColor,
    textSize,
    position,
    className,
    textSpace = "default",
    fontFamily = "serif",
  } = props;

  const dynamiClassName = getTypographyDynamicProps({
    textColor,
    textSize,
    position,
    textSpace,
    fontFamily,
  });

  return (
    <DynamicTypography tag={tag} className={`${className} ${dynamiClassName}`}>
      {children}
    </DynamicTypography>
  );
};
