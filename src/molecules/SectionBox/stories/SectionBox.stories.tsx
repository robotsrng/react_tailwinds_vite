import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionBox from '../SectionBox';

export default {
  title: 'molecules/SectionBox',
  component: SectionBox,
  argTypes: {},
} as ComponentMeta<typeof SectionBox>;

const Template: ComponentStory<typeof SectionBox> = (args) => <SectionBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Section Title',
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
  footerActions: [
    {
      label: 'Footer Action 1',
      onClick: () => console.log('Footer Action 1'),
    },
    {
      label: 'Footer Action 2',
      onClick: () => console.log('Footer Action 2'),
    },
  ],
  children: 'Section Content',
};
