import { ComponentStory, ComponentMeta } from '@storybook/react';

import DialogDescription from '../DialogDescription';

export default {
  title: 'Component/DialogDescription',
  component: DialogDescription,
  argTypes: {
  },
} as ComponentMeta<typeof DialogDescription>;

const Template: ComponentStory<typeof DialogDescription> = (args) => <DialogDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
};

