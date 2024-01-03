import type { Meta, StoryFn } from "@storybook/react";
import { Typography } from "./typography";
import {
  BasicTypographyProps,
  TypographyProps,
} from "../../../types/styles/typography";
export default {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {},
} as Meta<typeof Typography>;

const Template: StoryFn<TypographyProps & BasicTypographyProps> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Third = Template.bind({});
export const Fourth = Template.bind({});

Primary.args = {
  tag: "p",
  children: "Hello World",
  textColor: "blue",
  textSize: "xl",
  fontFamily: "sans",
};

Secondary.args = {
  tag: "h1",
  children: "Hello Golang",
  textColor: "red",
  textSize: "2xl",
  fontFamily: "mono",
};

Third.args = {
  tag: "cite",
  children:
    '" In rivers, the water you touch is the last that has passed and the first that comes; so is the present time."',
  textColor: "black",
  textSize: "xl",
  fontFamily: "serif",
};

Fourth.args = {
  tag: "span",
  children: "Hello ju-jitsu",
  textColor: "cashmere",
  textSize: "3xl",
  fontFamily: "sans",
};
