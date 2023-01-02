import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarItemContent from '../SidebarItemContent';

export default {
  title: 'atoms/SidebarItemContent',
  component: SidebarItemContent,
  argTypes: {},
} as ComponentMeta<typeof SidebarItemContent>;

const Template: ComponentStory<typeof SidebarItemContent> = (args) => <SidebarItemContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sidebar Item Content',
};
