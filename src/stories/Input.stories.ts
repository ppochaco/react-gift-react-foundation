import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/ui/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      control: 'boolean',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large', 'response'],
      },
    },
  },
  args: { placeholder: 'placeholder' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
