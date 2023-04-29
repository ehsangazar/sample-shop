import type { Meta, StoryObj } from '@storybook/react';

import HeadingComponent from './Heading';

const meta: Meta = {
  title: 'components/Typography',
  component: HeadingComponent,
};

export default meta;
type Story = StoryObj<typeof HeadingComponent>;

export const Headings: Story = {
  render: () => (
    < >
     <HeadingComponent as='h1' size='4xl'>
        Heading 4xl
      </HeadingComponent>
      <HeadingComponent as='h2' size='3xl'>
        Heading 3xl
      </HeadingComponent>
      <HeadingComponent as='h2' size='2xl'>
        Heading 2xl
      </HeadingComponent>
      <HeadingComponent as='h2' size='xl'>
        Heading xl
      </HeadingComponent>
      <HeadingComponent as='h3' size='lg'>
        Heading lg
      </HeadingComponent>
      <HeadingComponent as='h4' size='md'>
        Heading md
      </HeadingComponent>
      <HeadingComponent as='h5' size='sm'>
        Heading sm
      </HeadingComponent>
      <HeadingComponent as='h6' size='xs'>
        Heading xs
      </HeadingComponent>
    </>
  ),
};
