import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarItemWrapper from '../SidebarItemWrapper';

export default {
  title: 'atoms/SidebarItemWrapper',
  component: SidebarItemWrapper,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarItemWrapper>;

const Template: ComponentStory<typeof SidebarItemWrapper> = (args) => <SidebarItemWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sidebar Item Wrapper',
};

