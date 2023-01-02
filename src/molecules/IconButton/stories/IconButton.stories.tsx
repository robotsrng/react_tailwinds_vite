import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from '../IconButton';

export default {
  title: 'Component/IconButton',
  component: IconButton,
  argTypes: {
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
};

