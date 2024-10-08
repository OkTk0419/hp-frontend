import type { Meta, StoryObj } from '@storybook/react';

import { CategoryList } from '.';

import { categories } from '@/mocks';

const meta = {
  title: 'CategoryList',
  component: CategoryList,
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    categories,
  },
};
