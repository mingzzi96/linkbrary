import { CommonInput } from '@shared/ui/inputs/common-input';

import type { StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'input/CommonInput',
  component: CommonInput,
  parameters: {
    layout: 'centered',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'email',
    inputType: 'email',
    placeholder: '이메일을 입력해주세요.',
  },
};

export const WithLabel: Story = {
  args: {
    label: '이메일',
    id: 'email',
    inputType: 'email',
    placeholder: '이메일을 입력해주세요.',
  },
};

export const WithErrorMessage: Story = {
  args: {
    id: 'email',
    inputType: 'email',
    placeholder: '이메일을 입력해주세요.',
    errorMessage: '이메일 형식을 확인해 주세요.',
  },
};
