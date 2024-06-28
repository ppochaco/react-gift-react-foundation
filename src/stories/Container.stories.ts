import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '@/components/ui/Container';

const meta: Meta<typeof Container> = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'text',
    },
    children: {
      control: 'text',
      defaultValue: 'Container Content',
    },
    flexDirection: {
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
    },
    justifyContent: {
      control: {
        type: 'radio',
        options: [
          'center',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
        ],
      },
    },
    alignItems: {
      control: {
        type: 'radio',
        options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'Hello, world',
    style: { width: '80vw' },
  },
};

export const FullScreen: Story = {
  args: {
    maxWidth: '100%',
    children: 'Hello, world',
    style: { width: '80vw' },
  },
};
