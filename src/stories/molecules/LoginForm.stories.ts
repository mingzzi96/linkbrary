import { within, userEvent, expect } from '@storybook/test';

import { LoginForm } from '@features/authentication';

import type { Meta, StoryObj } from '@storybook/react';

// ? : No QueryClient set, use QueryClientProvider to set one 오류가 남
const meta = {
  title: 'molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogInSuccess: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('submit');
    await expect(loginButton).toBeInTheDocument();
    await userEvent.type(canvas.getByTestId('email'), 'a@naver.com');
    await userEvent.type(canvas.getByTestId('password'), 'aaaa!1234');
    await userEvent.click(loginButton);
  },
};
