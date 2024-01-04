import type { Meta, StoryFn } from "@storybook/react";
import { Pagination, PaginationType } from "./pagination";
export default {
  title: "Molecules/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<PaginationType> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  pageAmount: 8,
};
