import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputLabel from '../InputLabel';

export default {
  title: 'Component/InputLabel',
  component: InputLabel,
  argTypes: {
  },
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
};

