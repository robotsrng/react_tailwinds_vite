import { ComponentStory, ComponentMeta } from '@storybook/react';

import [FTName] from '../[FTName]';

export default {
  title: 'Component/[FTName]',
  component: [FTName],
  argTypes: {
  },
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />;

export const Default = Template.bind({});
Default.args = {
};

