import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Beers } from "../Components/Beers";

export default {
  title: "Example/Beers",
  component: Beers,
  argTypes: {
    input: { control: "text" },
  },
} as ComponentMeta<typeof Beers>;

const Template: ComponentStory<typeof Beers> = (args) => <Beers />;

export const Primary = Template.bind({});
Primary.args = {};
