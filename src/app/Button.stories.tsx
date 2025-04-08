import type { Meta, StrictStoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
	component: Button,
} satisfies Meta<typeof Button>;

type Story = StrictStoryObj<typeof Button>;

export const Default = {
	args: {
		children: 'Button',
	},
} satisfies Story;
