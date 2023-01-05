import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MyCombobox } from "../Components/ComboBox";

export default {
  title: "Example/ComboBox",
  component: MyCombobox,
  argTypes: {
    input: { control: "text" },
  },
} as ComponentMeta<typeof MyCombobox>;

const Template: ComponentStory<typeof MyCombobox> = (args) => (
  <MyCombobox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  listOfPosts: [
    {
      id: 1,
      title: "First Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt purus sed nisi aliquet rhoncus. Duis eu massa vitae neque consectetur aliquam. Sed consectetur nulla at euismod ultrices. Vivamus dui arcu, commodo in ante pharetra, posuere vestibulum ligula. Vestibulum vehicula nunc eu turpis dapibus, tincidunt tempus justo scelerisque. Proin feugiat hendrerit scelerisque. Maecenas hendrerit finibus arcu, ut vulputate enim finibus ut. Maecenas at ipsum imperdiet, lacinia neque sed, dictum quam. Fusce elit lacus, dictum ut mauris quis, blandit ultricies ex. Aliquam erat volutpat. Maecenas a scelerisque orci. Sed dictum porttitor libero ac aliquam. Donec in tortor ultricies, euismod turpis vitae, aliquam augue. Phasellus fringilla nibh euismod orci sodales, sit amet pellentesque urna bibendum.  ",
    },
    {
      id: 2,
      title: "Second Post",
      content:
        "Integer feugiat vulputate pretium. Fusce id efficitur nunc. Cras congue sodales scelerisque. Nulla iaculis dignissim arcu, non commodo sem aliquet eu. Aenean id pulvinar dolor. Mauris mauris sem, viverra ac diam et, dignissim dictum arcu. Donec sodales convallis pulvinar. Donec efficitur metus eget luctus tristique. Morbi sodales porttitor turpis, in consectetur lorem tristique nec. In volutpat eros nisi, ac laoreet justo faucibus vel. Nulla dignissim, massa sed rhoncus consequat, turpis ligula efficitur lectus, dignissim convallis orci tellus sed tortor.  ",
    },
    {
      id: 3,
      title: "Third Post",
      content:
        "Integer feugiat vulputate pretium. Fusce id efficitur nunc. Cras congue sodales scelerisque. Nulla iaculis dignissim arcu, non commodo sem aliquet eu. Aenean id pulvinar dolor. Mauris mauris sem, viverra ac diam et, dignissim dictum arcu. Donec sodales convallis pulvinar. Donec efficitur metus eget luctus tristique. Morbi sodales porttitor turpis, in consectetur lorem tristique nec. In volutpat eros nisi, ac laoreet justo faucibus vel. Nulla dignissim, massa sed rhoncus consequat, turpis ligula efficitur lectus, dignissim convallis orci tellus sed tortor.  ",
    },
    {
      id: 4,
      title: "Fourth Post",
      content:
        "Integer feugiat vulputate pretium. Fusce id efficitur nunc. Cras congue sodales scelerisque. Nulla iaculis dignissim arcu, non commodo sem aliquet eu. Aenean id pulvinar dolor. Mauris mauris sem, viverra ac diam et, dignissim dictum arcu. Donec sodales convallis pulvinar. Donec efficitur metus eget luctus tristique. Morbi sodales porttitor turpis, in consectetur lorem tristique nec. In volutpat eros nisi, ac laoreet justo faucibus vel. Nulla dignissim, massa sed rhoncus consequat, turpis ligula efficitur lectus, dignissim convallis orci tellus sed tortor.  ",
    },
    {
      id: 5,
      title: "Fifth Post",
      content:
        "Integer feugiat vulputate pretium. Fusce id efficitur nunc. Cras congue sodales scelerisque. Nulla iaculis dignissim arcu, non commodo sem aliquet eu. Aenean id pulvinar dolor. Mauris mauris sem, viverra ac diam et, dignissim dictum arcu. Donec sodales convallis pulvinar. Donec efficitur metus eget luctus tristique. Morbi sodales porttitor turpis, in consectetur lorem tristique nec. In volutpat eros nisi, ac laoreet justo faucibus vel. Nulla dignissim, massa sed rhoncus consequat, turpis ligula efficitur lectus, dignissim convallis orci tellus sed tortor.  ",
    },
  ],
};
