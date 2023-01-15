import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputBase from '../InputBase';

export default {
  title: 'Component/InputBase',
  component: InputBase,
  argTypes: {
  },
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => <InputBase {...args} />;

export const Default = Template.bind({});
Default.args = {
};

