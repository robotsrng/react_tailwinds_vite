import { ComponentStory, ComponentMeta } from '@storybook/react';

import DialogBase from '../DialogBase';

export default {
  title: 'Component/DialogBase',
  component: DialogBase,
  argTypes: {
  },
} as ComponentMeta<typeof DialogBase>;

const Template: ComponentStory<typeof DialogBase> = (args) => <DialogBase {...args} />;

export const Default = Template.bind({});
Default.args = {
};

