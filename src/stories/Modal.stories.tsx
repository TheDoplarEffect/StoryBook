import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "../Components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    input: { control: "text" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal />;

export const Primary = Template.bind({});
Primary.args = {
  input: "Combobox",
};
