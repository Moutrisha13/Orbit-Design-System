import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../ui/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    state:     { control: 'select', options: ['unchecked','checked','indeterminate'] },
    size:      { control: 'select', options: ['large','medium','small'] },
    disabled:  { control: 'boolean' },
    showLabel: { control: 'boolean' },
    showHint:  { control: 'boolean' },
    label:     { control: 'text' },
    hint:      { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { state: 'checked', size: 'medium', showLabel: true, label: 'Accept terms and conditions' },
};
export const Unchecked: Story = {
  args: { state: 'unchecked', size: 'medium', showLabel: true, label: 'Subscribe to newsletter' },
};
export const Indeterminate: Story = {
  args: { state: 'indeterminate', size: 'medium', showLabel: true, label: 'Select all items' },
};
export const WithHint: Story = {
  args: { state: 'unchecked', size: 'medium', showLabel: true, showHint: true, label: 'Remember me', hint: 'Keep me signed in on this device.' },
};
export const Disabled: Story = {
  args: { state: 'unchecked', size: 'medium', disabled: true, showLabel: true, label: 'Unavailable option' },
};
export const Large: Story = {
  args: { state: 'checked', size: 'large', showLabel: true, label: 'Large checkbox' },
};
export const Small: Story = {
  args: { state: 'checked', size: 'small', showLabel: true, label: 'Small checkbox' },
};
