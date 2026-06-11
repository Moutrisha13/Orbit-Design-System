import type { Meta, StoryObj } from '@storybook/react';
import Input from '../ui/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state:         { control: 'select', options: ['default','focused','error','disabled'] },
    size:          { control: 'select', options: ['large','medium','small'] },
    showLabel:     { control: 'boolean' },
    showHint:      { control: 'boolean' },
    showLeftIcon:  { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    label:         { control: 'text' },
    placeholder:   { control: 'text' },
    hint:          { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { state: 'default', size: 'medium', showLabel: true, showHint: true, label: 'Email address', placeholder: 'Enter your email' },
};
export const Focused: Story = {
  args: { state: 'focused', size: 'medium', showLabel: true, showHint: true, label: 'Email address', placeholder: 'Enter your email' },
};
export const Error: Story = {
  args: { state: 'error', size: 'medium', showLabel: true, showHint: true, label: 'Email address', hint: 'Please enter a valid email address.' },
};
export const Disabled: Story = {
  args: { state: 'disabled', size: 'medium', showLabel: true, label: 'Email address', placeholder: 'Enter your email' },
};
export const WithIcons: Story = {
  args: { state: 'default', size: 'medium', showLabel: true, showLeftIcon: true, showRightIcon: true, label: 'Email address' },
};
export const Large: Story = {
  args: { state: 'default', size: 'large', showLabel: true, label: 'Email address', placeholder: 'Enter your email' },
};
export const Small: Story = {
  args: { state: 'default', size: 'small', showLabel: true, label: 'Email address', placeholder: 'Enter your email' },
};
