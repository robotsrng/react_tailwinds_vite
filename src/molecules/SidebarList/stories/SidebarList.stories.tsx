import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarList from '../SidebarList';

export default {
  title: 'Component/SidebarList',
  component: SidebarList,
  argTypes: {},
} as ComponentMeta<typeof SidebarList>;

const Template: ComponentStory<typeof SidebarList> = (args) => <SidebarList {...args} />;

export const Default = Template.bind({});
Default.args = {
  config: [
    {
      label: 'Home',
      icon: 'home',
      link: '/',
    },
  ],
};
