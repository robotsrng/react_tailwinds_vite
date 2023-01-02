import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarItemLabel from '../SidebarItemLabel';

export default {
  title: 'atoms/SidebarItemLabel',
  component: SidebarItemLabel,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarItemLabel>;

const Template: ComponentStory<typeof SidebarItemLabel> = (args) => <SidebarItemLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Sidebar Item Label',
};

