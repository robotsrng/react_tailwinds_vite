import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionContent from '../SectionContent';

export default {
  title: 'Component/SectionContent',
  component: SectionContent,
  argTypes: {
  },
} as ComponentMeta<typeof SectionContent>;

const Template: ComponentStory<typeof SectionContent> = (args) => <SectionContent {...args} />;

export const Default = Template.bind({});
Default.args = {
};

