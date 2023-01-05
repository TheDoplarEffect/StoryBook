import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BlogPost } from "../Components/BlogPost";

export default {
  title: "Example/BlogPost",
  component: BlogPost,
  argTypes: {
    title: { control: "text" },
  },
} as ComponentMeta<typeof BlogPost>;

const Template: ComponentStory<typeof BlogPost> = (args) => (
  <BlogPost {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "BlogPost",
};
