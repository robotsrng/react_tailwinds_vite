import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionTitle from '../SectionTitle';

export default {
  title: 'atoms/SectionTitle',
  component: SectionTitle,
  argTypes: {
  },
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
};

