import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageInput from '../ImageInput';

export default {
  title: 'Component/ImageInput',
  component: ImageInput,
  argTypes: {
  },
} as ComponentMeta<typeof ImageInput>;

const Template: ComponentStory<typeof ImageInput> = (args) => <ImageInput {...args} />;

export const Default = Template.bind({});
Default.args = {
};

