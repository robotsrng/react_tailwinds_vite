import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dialog from '../Dialog';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  argTypes: {
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
};

