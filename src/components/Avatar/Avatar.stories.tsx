import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../ui/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    mode:       { control: 'select', options: ['image','icon','initials'] },
    size:       { control: 'select', options: ['xl','large','medium','small'] },
    bg:         { control: 'select', options: ['blue','pink','green','purple','teal'] },
    status:     { control: 'select', options: ['online','offline','busy'] },
    showStatus: { control: 'boolean' },
    initials:   { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { mode: 'initials', initials: 'JD', bg: 'blue', size: 'medium' },
};
export const WithIcon: Story = {
  args: { mode: 'icon', bg: 'purple', size: 'medium' },
};
export const Online: Story = {
  args: { mode: 'initials', initials: 'AB', bg: 'green', size: 'medium', showStatus: true, status: 'online' },
};
export const Offline: Story = {
  args: { mode: 'initials', initials: 'CD', bg: 'pink', size: 'medium', showStatus: true, status: 'offline' },
};
export const Busy: Story = {
  args: { mode: 'initials', initials: 'EF', bg: 'teal', size: 'medium', showStatus: true, status: 'busy' },
};
export const XLarge: Story = {
  args: { mode: 'initials', initials: 'XL', bg: 'blue', size: 'xl' },
};
export const Small: Story = {
  args: { mode: 'initials', initials: 'SM', bg: 'purple', size: 'small' },
};
