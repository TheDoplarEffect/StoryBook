import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "../Components/Toggle";

export default {
  title: "Example/Toggle",
  component: Toggle,
  argTypes: {
    input: { control: "text" },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
