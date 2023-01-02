import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardContent from '../CardContent';

export default {
  title: 'Component/CardContent',
  component: CardContent,
  argTypes: {
  },
} as ComponentMeta<typeof CardContent>;

const Template: ComponentStory<typeof CardContent> = (args) => <CardContent {...args} />;

export const Default = Template.bind({});
Default.args = {
};

