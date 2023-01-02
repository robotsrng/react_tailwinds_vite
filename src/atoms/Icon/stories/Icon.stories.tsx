import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '../Icon';
import { storybookControlTypes } from '../../../utils/story-helpers';

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    name: storybookControlTypes.iconName,
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Puzzle'
};

