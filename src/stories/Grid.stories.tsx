import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';

import { Grid } from '@/components/ui/Layout/Grid';

const NumberNode = () => {
  return (
    <>
      {[...Array(16)].map((_, index) => (
        <div key={uuidv4()}>{index + 1}</div>
      ))}
    </>
  );
};

const meta: Meta<typeof Grid> = {
  title: 'Example/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    gap: {
      control: 'number',
    },
    columns: {
      control: 'number',
    },
  },
  args: {
    children: <NumberNode />,
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    gap: 10,
    columns: 3,
  },
};

export const ResponsiveColumns: Story = {
  args: {
    gap: 10,
    columns: {
      initial: 1,
      lg: 4,
      md: 3,
      sm: 2,
    },
  },
};
