import { createElement } from "react";
import {
  BasicTypographyProps,
  TypographyProps,
} from "../../../types/typography";

import { getTypographyDynamicProps } from "../../../utils";

export const DynamicTypography = ({
  tag = "p",
  children,
  ...props
}: BasicTypographyProps) => {
  return createElement(tag, props, children);
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
    className = "",
    textSpace = "default",
    fontFamily = "mono",
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
