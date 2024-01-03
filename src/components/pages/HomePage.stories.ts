import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './HomePage';

const meta = {
  title: 'Page/HomePage',
  component: HomePage,
  parameters: {
    layout: 'centered',
  },
//   tags: ['autodocs'],

  argTypes: {
    width: { control: 'width' },
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    width: 'fullwidth'
  },
};
