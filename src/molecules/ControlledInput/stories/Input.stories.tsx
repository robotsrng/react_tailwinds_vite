import { ComponentStory, ComponentMeta } from '@storybook/react';

import ControlledInput from '../ControlledInput';

export default {
  title: 'Component/ControlledInput',
  component: ControlledInput,
  argTypes: {
  },
} as ComponentMeta<typeof ControlledInput>;

const Template: ComponentStory<typeof ControlledInput> = (args) => <ControlledInput {...args} />;

export const Default = Template.bind({});
Default.args = {
};

