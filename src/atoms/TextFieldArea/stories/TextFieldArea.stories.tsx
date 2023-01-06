import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextFieldArea from '../TextFieldArea';

export default {
  title: 'Component/TextFieldArea',
  component: TextFieldArea,
  argTypes: {
  },
} as ComponentMeta<typeof TextFieldArea>;

const Template: ComponentStory<typeof TextFieldArea> = (args) => <TextFieldArea {...args} />;

export const Default = Template.bind({});
Default.args = {
};

