import { ComponentStory, ComponentMeta } from '@storybook/react';

import DialogTitle from '../DialogTitle';

export default {
  title: 'Component/DialogTitle',
  component: DialogTitle,
  argTypes: {
  },
} as ComponentMeta<typeof DialogTitle>;

const Template: ComponentStory<typeof DialogTitle> = (args) => <DialogTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
};

