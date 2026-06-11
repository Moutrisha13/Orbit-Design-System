import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../ui/Accordion';

const ITEMS = [
  { id: '1', trigger: 'What is a design system?', content: 'A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.' },
  { id: '2', trigger: 'How do I get started?', content: 'Clone the repository, install dependencies with npm install, then run npm run dev to start the development server.' },
  { id: '3', trigger: 'Can I customise the tokens?', content: 'Yes — all design tokens are defined as CSS custom properties in src/generated/tokens.css and can be overridden per-theme.' },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type:            { control: 'select', options: ['single','multiple'] },
    variant:         { control: 'select', options: ['default','bordered','filled'] },
    size:            { control: 'select', options: ['large','medium','small'] },
    showChevron:     { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    dividers:        { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: { type: 'single', variant: 'default', size: 'medium', showChevron: true, dividers: true, items: ITEMS },
};
export const Bordered: Story = {
  args: { type: 'single', variant: 'bordered', size: 'medium', showChevron: true, dividers: true, items: ITEMS },
};
export const Filled: Story = {
  args: { type: 'single', variant: 'filled', size: 'medium', showChevron: true, dividers: true, items: ITEMS },
};
export const Multiple: Story = {
  args: { type: 'multiple', variant: 'default', size: 'medium', showChevron: true, dividers: true, items: ITEMS },
};
export const WithLeadingIcon: Story = {
  args: { type: 'single', variant: 'default', size: 'medium', showChevron: true, showLeadingIcon: true, dividers: true, items: ITEMS },
};
export const Large: Story = {
  args: { type: 'single', variant: 'default', size: 'large', showChevron: true, dividers: true, items: ITEMS },
};
export const Small: Story = {
  args: { type: 'single', variant: 'default', size: 'small', showChevron: true, dividers: true, items: ITEMS },
};
