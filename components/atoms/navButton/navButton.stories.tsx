import type { Meta, StoryFn } from "@storybook/react";

import { NavButton, NavButtonType } from "./navButton";
export default {
  title: "Atoms/NavButton",
  component: NavButton,
} as Meta<typeof NavButton>;

const Template: StoryFn<NavButtonType> = (args) => <NavButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 1,
};
