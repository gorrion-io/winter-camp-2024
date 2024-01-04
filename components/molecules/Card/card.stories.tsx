import type { Meta, StoryFn } from "@storybook/react";

import { Card, CardType } from "./card";
export default {
  title: "molecules/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<CardType> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Third = Template.bind({});

Primary.args = {
  id: 1,
  member: {
    fullName: "Drago",
    age: 26,
    nationality: "Poland",
    profession: "engineer",
  },
};

Secondary.args = {
  id: 2,
  member: {
    fullName: "Adam",
    age: 26,
    nationality: "Poland",
    profession: "doctor",
  },
};

Third.args = {
  id: 3,
  member: {
    fullName: "Edward",
    age: 26,
    nationality: "Poland",
    profession: "astronaut",
  },
};
