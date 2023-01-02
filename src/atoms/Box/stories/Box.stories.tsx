import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '../Box';

export default {
  title: 'atoms/Box',
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};
