import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardBase from '../CardBase';

export default {
  title: 'Component/CardBase',
  component: CardBase,
  argTypes: {
  },
} as ComponentMeta<typeof CardBase>;

const Template: ComponentStory<typeof CardBase> = (args) => <CardBase {...args} />;

export const Default = Template.bind({});
Default.args = {
};

