import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from '../ui/Radio';

const OPTIONS = [
  { id: 'opt1', label: 'Option one',   hint: 'This is the first option.' },
  { id: 'opt2', label: 'Option two',   hint: 'This is the second option.' },
  { id: 'opt3', label: 'Option three', hint: 'This is the third option.' },
];

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    size:     { control: 'select', options: ['large','medium','small'] },
    disabled: { control: 'boolean' },
    showHint: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: { options: OPTIONS, selected: 'opt1', size: 'medium', showHint: false },
};
export const WithHints: Story = {
  args: { options: OPTIONS, selected: 'opt2', size: 'medium', showHint: true },
};
export const Disabled: Story = {
  args: { options: OPTIONS, selected: 'opt1', size: 'medium', disabled: true },
};
export const NoneSelected: Story = {
  args: { options: OPTIONS, selected: null, size: 'medium' },
};
export const Large: Story = {
  args: { options: OPTIONS, selected: 'opt1', size: 'large' },
};
export const Small: Story = {
  args: { options: OPTIONS, selected: 'opt1', size: 'small' },
};
