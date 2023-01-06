import { ComponentStory, ComponentMeta } from '@storybook/react';

import StandardForm from '../StandardForm';

export default {
  title: 'Component/StandardForm',
  component: StandardForm,
  argTypes: {
  },
} as ComponentMeta<typeof StandardForm>;

const Template: ComponentStory<typeof StandardForm> = (args) => <StandardForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};

