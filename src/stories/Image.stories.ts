import type { Meta, StoryObj } from '@storybook/react';

import { Image, ImageProps } from '@/components/ui/Image';

const meta = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'object',
      description: '`number` `square`',
    },
    radius: {
      control: 'object',
      description: '`number` `circle`',
    },
    width: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
  },
  args: {
    width: '200px',
    src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  },
} satisfies Meta<ImageProps>;

export default meta;
type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    radius: 0,
  },
};

export const RatioSquare: Story = {
  args: {
    ratio: 'square',
    radius: 0,
  },
};

export const RadiusCircle: Story = {
  args: {
    ratio: 'square',
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    ratio: 16 / 9,
    radius: 16,
  },
};
