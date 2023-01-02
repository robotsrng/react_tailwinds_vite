import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionBase from '../SectionBase';

export default {
  title: 'atoms/SectionBase',
  component: SectionBase,
  argTypes: {
  },
} as ComponentMeta<typeof SectionBase>;

const Template: ComponentStory<typeof SectionBase> = (args) => <SectionBase {...args} />;

export const Default = Template.bind({});
Default.args = {
};

