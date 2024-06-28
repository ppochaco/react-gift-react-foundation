import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '@/components/ui/Grid';

const NumberNode = () => {
  return (
    <>
      {[...Array(16)].map((_, index) => (
        <div key={index}>{index + 1}</div>
      ))}
    </>
  );
};

const meta: Meta<typeof Grid> = {
  title: 'Example/Grid',
  component: Grid,
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
    columns: 4,
  },
};
