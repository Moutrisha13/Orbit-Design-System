import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../ui/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    content:    { control: 'text' },
    placement:  { control: 'select', options: ['top','bottom','left','right'] },
    style:      { control: 'select', options: ['dark','light'] },
    showArrow:  { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: { content: 'This is a tooltip', placement: 'top', style: 'dark', showArrow: true, children: <span style={{ padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, cursor: 'default' }}>Hover me</span> },
};
export const Bottom: Story = {
  args: { content: 'Tooltip below', placement: 'bottom', style: 'dark', showArrow: true, children: <span style={{ padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, cursor: 'default' }}>Hover me</span> },
};
export const Left: Story = {
  args: { content: 'Tooltip on left', placement: 'left', style: 'dark', showArrow: true, children: <span style={{ padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, cursor: 'default' }}>Hover me</span> },
};
export const Right: Story = {
  args: { content: 'Tooltip on right', placement: 'right', style: 'dark', showArrow: true, children: <span style={{ padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, cursor: 'default' }}>Hover me</span> },
};
export const Light: Story = {
  args: { content: 'Light tooltip', placement: 'top', style: 'light', showArrow: true, children: <span style={{ padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, cursor: 'default' }}>Hover me</span> },
};
export const NoArrow: Story = {
  args: { content: 'No arrow', placement: 'top', style: 'dark', showArrow: false, children: <span style={{ padding: '8px 16px', border: '1px solid #e5e7eb', borderRadius: 8, cursor: 'default' }}>Hover me</span> },
};
