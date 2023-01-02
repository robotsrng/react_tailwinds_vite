import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionHeader from '../SectionHeader';

export default {
  title: 'atoms/SectionHeader',
  component: SectionHeader,
  argTypes: {
  },
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
};

