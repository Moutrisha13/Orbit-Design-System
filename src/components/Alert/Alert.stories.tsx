import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../ui/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant:  { control: 'select', options: ['default','success','warning','failure','info'] },
    title:    { control: 'text' },
    description: { control: 'text' },
    showIcon: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { variant: 'default', title: 'Heads up', description: 'This is a default alert with some useful information.', showIcon: true },
};
export const Success: Story = {
  args: { variant: 'success', title: 'Changes saved', description: 'Your profile has been updated successfully.', showIcon: true },
};
export const Warning: Story = {
  args: { variant: 'warning', title: 'Storage nearly full', description: 'You have used 90% of your storage quota.', showIcon: true },
};
export const Failure: Story = {
  args: { variant: 'failure', title: 'Something went wrong', description: 'We could not process your request. Please try again.', showIcon: true },
};
export const Info: Story = {
  args: { variant: 'info', title: 'New features available', description: 'Check out the latest updates to the design system.', showIcon: true },
};
export const WithActions: Story = {
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    description: 'You have unsaved changes that will be lost.',
    showIcon: true,
    actions: [{ label: 'Save now' }, { label: 'Discard' }],
  },
};
export const Minimal: Story = {
  args: { variant: 'info', title: 'Update available', showIcon: false },
};
export const Dismissible: Story = {
  args: { variant: 'success', title: 'Email verified', description: 'Your email address has been confirmed.', showIcon: true, onDismiss: () => {} },
};
