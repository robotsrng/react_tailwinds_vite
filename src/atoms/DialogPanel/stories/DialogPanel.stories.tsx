import { ComponentStory, ComponentMeta } from '@storybook/react';

import DialogPanel from '../DialogPanel';

export default {
  title: 'Component/DialogPanel',
  component: DialogPanel,
  argTypes: {
  },
} as ComponentMeta<typeof DialogPanel>;

const Template: ComponentStory<typeof DialogPanel> = (args) => <DialogPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
};

