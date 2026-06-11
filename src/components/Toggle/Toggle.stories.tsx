import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '../ui/ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/Toggle',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    state:         { control: 'select', options: ['on','off'] },
    size:          { control: 'select', options: ['large','medium','small'] },
    disabled:      { control: 'boolean' },
    withLabel:     { control: 'boolean' },
    withHint:      { control: 'boolean' },
    labelPosition: { control: 'select', options: ['left','right'] },
    label:         { control: 'text' },
    hint:          { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: { state: 'on', size: 'medium', withLabel: true, label: 'Enable notifications' },
};
export const Off: Story = {
  args: { state: 'off', size: 'medium', withLabel: true, label: 'Enable notifications' },
};
export const WithHint: Story = {
  args: { state: 'on', size: 'medium', withLabel: true, withHint: true, label: 'Marketing emails', hint: 'Receive news and promotional offers.' },
};
export const Disabled: Story = {
  args: { state: 'off', size: 'medium', disabled: true, withLabel: true, label: 'Unavailable setting' },
};
export const LabelLeft: Story = {
  args: { state: 'on', size: 'medium', withLabel: true, labelPosition: 'left', label: 'Dark mode' },
};
export const Large: Story = {
  args: { state: 'on', size: 'large', withLabel: true, label: 'Large toggle' },
};
export const Small: Story = {
  args: { state: 'on', size: 'small', withLabel: true, label: 'Small toggle' },
};
