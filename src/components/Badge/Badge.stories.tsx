import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../ui/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color:     { control: 'select', options: ['default','blue','green','red','yellow','purple'] },
    style:     { control: 'select', options: ['light','heavy'] },
    showIcon:  { control: 'boolean' },
    showCount: { control: 'boolean' },
    label:     { control: 'text' },
    count:     { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { color: 'default', style: 'light', label: 'Badge', showIcon: true, showCount: false },
};
export const Blue: Story = {
  args: { color: 'blue', style: 'light', label: 'New', showIcon: false },
};
export const Green: Story = {
  args: { color: 'green', style: 'light', label: 'Active', showIcon: true },
};
export const Red: Story = {
  args: { color: 'red', style: 'light', label: 'Error', showIcon: true },
};
export const Yellow: Story = {
  args: { color: 'yellow', style: 'light', label: 'Pending', showIcon: true },
};
export const Purple: Story = {
  args: { color: 'purple', style: 'light', label: 'Beta', showIcon: true },
};
export const Heavy: Story = {
  args: { color: 'blue', style: 'heavy', label: 'New', showIcon: false },
};
export const WithCount: Story = {
  args: { color: 'red', style: 'light', label: 'Unread', showCount: true, count: 12 },
};
