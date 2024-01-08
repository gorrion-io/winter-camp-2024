import type { Meta, StoryFn } from "@storybook/react";

import { InfoCard, InfoCardType } from "./infoCard";
export default {
  title: "molecules/InfoCard",
  component: InfoCard,
} as Meta<typeof InfoCard>;

const Template: StoryFn<InfoCardType> = (args) => <InfoCard {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Third = Template.bind({});

Primary.args = {
  message: "Error with your Data",
  type: "ERROR",
};

Secondary.args = {
  message: "Beware of fake people",
  type: "WARRNING",
};

Third.args = {
  message: "Congratulations !",
  type: "SUCCESS",
};
