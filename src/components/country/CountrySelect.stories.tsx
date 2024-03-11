import { Meta, StoryFn } from "@storybook/react";
import { CountrySelectOptionInterface, CountrySelectProps } from "../../types/country-types";

import CountrySelect from "./CountrySelect";


// Settings
export default {
  title: "Input/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<CountrySelectProps> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
