import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from '../TextField';

export default {
  title: 'Component/TextField',
  component: TextField,
  argTypes: {
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
};

