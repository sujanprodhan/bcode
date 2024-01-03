import type { Meta, StoryObj } from '@storybook/react';

import { Intro } from './Intro';

const meta = {
  title: 'BCode/Intro',
  component: Intro,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'width' },
  },
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    width: 'fullwidth',
    layout: 'left'
  },
};
