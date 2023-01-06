import { ComponentStory, ComponentMeta } from '@storybook/react';

import Editor from '../Editor';

export default {
  title: 'Component/Editor',
  component: Editor,
  argTypes: {
  },
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '<p>This is some rich text</p>',
};

