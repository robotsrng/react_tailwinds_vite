import { ComponentStory, ComponentMeta } from '@storybook/react';

import DialogHeader from '../DialogHeader';

export default {
  title: 'Component/DialogHeader',
  component: DialogHeader,
  argTypes: {
  },
} as ComponentMeta<typeof DialogHeader>;

const Template: ComponentStory<typeof DialogHeader> = (args) => <DialogHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
};

