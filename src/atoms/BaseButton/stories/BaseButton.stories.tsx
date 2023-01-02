import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseButton from '../BaseButton';

export default {
  title: 'atoms/BaseButton',
  component: BaseButton,
  argTypes: {
  },
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
  className: ''
};

