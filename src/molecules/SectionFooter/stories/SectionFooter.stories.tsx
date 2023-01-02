import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionFooter from '../SectionFooter';

export default {
  title: 'Component/SectionFooter',
  component: SectionFooter,
  argTypes: {
  },
} as ComponentMeta<typeof SectionFooter>;

const Template: ComponentStory<typeof SectionFooter> = (args) => <SectionFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
};

