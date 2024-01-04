import type { Meta, StoryFn } from "@storybook/react";

import { Card, CardType } from "./card";
export default {
  title: "molecules/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<CardType> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: 1,
  member: {
    fullName: "Hello World",
    age: 26,
    nationality: "Poland",
    profession: "Software Engineer",
  },
};
