import { ComponentStory, ComponentMeta } from '@storybook/react';

import SidebarItem from '../SidebarItem';
import { storybookControlTypes } from '../../../utils/story-helpers';

export default {
  title: 'Component/SidebarItem',
  component: SidebarItem,
  argTypes: {
    icon: storybookControlTypes.iconName,
  },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  link: '#',
};
