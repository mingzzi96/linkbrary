import { CommonButton } from '@shared/ui/buttons/common-button';

import type { StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'atoms/CommonButton',
  component: CommonButton,
  // parameters: {
  //   layout: 'centered',
  // },
  argTypes: {
    size: {
      options: ['large', 'medium'],
      control: { type: 'radio' },
    },
    backgroundColor: {
      options: ['gradient', 'violet', 'red'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    onClickHandler: () => {
      return 'click';
    },
    children: '버튼입니다.',
    size: 'large',
    backgroundColor: 'gradient',
  },
};

export const Medium: Story = {
  args: {
    onClickHandler: () => {
      return 'click';
    },
    children: '버튼입니다.',
    size: 'medium',
    backgroundColor: 'gradient',
  },
};
