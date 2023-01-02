import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionActions from '../SectionActions';

export default {
  title: 'molecules/SectionActions',
  component: SectionActions,
  argTypes: {
  },
} as ComponentMeta<typeof SectionActions>;

const Template: ComponentStory<typeof SectionActions> = (args) => <SectionActions {...args} />;

export const Default = Template.bind({});
Default.args = {
  actions: [
    {
      label: 'Action 1',
      onClick: () => console.log('Action 1'),
    },
    {
      label: 'Action 2',
      onClick: () => console.log('Action 2'),
    },
  ],
};

