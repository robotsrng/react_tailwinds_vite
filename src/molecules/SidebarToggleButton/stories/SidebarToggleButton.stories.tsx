import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarToggleButton from '../SidebarToggleButton';

export default {
  title: 'Component/SidebarToggleButton',
  component: SidebarToggleButton,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarToggleButton>;

const Template: ComponentStory<typeof SidebarToggleButton> = (args) => <div className='w-20 h-20 relative'><SidebarToggleButton {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
};

