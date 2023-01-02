import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';
import { storybookControlTypes } from 'src/utils/story-helpers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    startIcon: storybookControlTypes.iconName,
    endIcon: storybookControlTypes.iconName,
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  variant: 'primary',
  label: 'Button',
};
