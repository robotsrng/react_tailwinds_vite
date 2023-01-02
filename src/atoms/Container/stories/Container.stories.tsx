import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '../Container';

export default {
  title: 'atoms/Container',
  component: Container,
  argTypes: {
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Container',
};

