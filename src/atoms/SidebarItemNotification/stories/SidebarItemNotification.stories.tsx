import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarItemNotification from '../SidebarItemNotification';

export default {
  title: 'atoms/SidebarItemNotification',
  component: SidebarItemNotification,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarItemNotification>;

const Template: ComponentStory<typeof SidebarItemNotification> = (args) => <SidebarItemNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '23',
};

