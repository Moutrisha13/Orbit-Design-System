import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from '../ui/Button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant:       { control: 'select', options: ['primary','secondary','success','warning','failure','info'] },
    state:         { control: 'select', options: ['default','hover','pressed','loading','disabled'] },
    size:          { control: 'select', options: ['large','medium','small'] },
    withText:      { control: 'boolean' },
    label:         { control: 'text' },
    showLeftIcon:  { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary', label: 'Button', size: 'medium', withText: true, showLeftIcon: true, showRightIcon: true },
};
export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Button', size: 'medium', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Success: Story = {
  args: { variant: 'success', label: 'Button', size: 'medium', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Warning: Story = {
  args: { variant: 'warning', label: 'Button', size: 'medium', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Failure: Story = {
  args: { variant: 'failure', label: 'Button', size: 'medium', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Info: Story = {
  args: { variant: 'info', label: 'Button', size: 'medium', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Loading: Story = {
  args: { variant: 'primary', state: 'loading', label: 'Button', size: 'medium', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Large: Story = {
  args: { variant: 'primary', label: 'Button', size: 'large', withText: true, showLeftIcon: false, showRightIcon: false },
};
export const Small: Story = {
  args: { variant: 'primary', label: 'Button', size: 'small', withText: true, showLeftIcon: false, showRightIcon: false },
};
