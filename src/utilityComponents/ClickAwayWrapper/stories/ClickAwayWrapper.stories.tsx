import { ComponentStory, ComponentMeta } from '@storybook/react';

import ClickAwayWrapper from '../ClickAwayWrapper';

export default {
  title: 'Component/ClickAwayWrapper',
  component: ClickAwayWrapper,
  argTypes: {
  },
} as ComponentMeta<typeof ClickAwayWrapper>;

const Template: ComponentStory<typeof ClickAwayWrapper> = (args) => <ClickAwayWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
};

