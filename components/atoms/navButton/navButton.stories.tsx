import type { Meta, StoryFn } from "@storybook/react";

import { NavItem, NavItemType } from "./navButton";
export default {
  title: "Atoms/NavItem",
  component: NavItem,
} as Meta<typeof NavItem>;

const Template: StoryFn<NavItemType> = (args) => <NavItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 1,
};
