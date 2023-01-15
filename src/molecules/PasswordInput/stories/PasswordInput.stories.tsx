import { ComponentStory, ComponentMeta } from '@storybook/react';

import PasswordInput from '../PasswordInput';

export default {
  title: 'Component/PasswordInput',
  component: PasswordInput,
  argTypes: {
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
};

