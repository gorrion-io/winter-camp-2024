import type { Meta, StoryFn } from "@storybook/react";
import { NavArrowType, NavArrow } from "./navArrow";

import { PiArrowCircleLeftThin } from "react-icons/pi";
export default {
  title: "Atoms/NavArrow",
  component: NavArrow,
} as Meta<typeof NavArrow>;

const Template: StoryFn<NavArrowType> = (args) => <NavArrow {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  Icon: PiArrowCircleLeftThin,
  size: 35,
  pageNumber: 1,
  currentPage: 5,
};
