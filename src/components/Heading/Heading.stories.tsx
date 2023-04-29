// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import HeadingComponent from './Heading';

const meta: Meta = {
  title: 'Typography',
  component: HeadingComponent,
};

export default meta;
type Story = StoryObj<typeof HeadingComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    < >
     <HeadingComponent as='h1' size='4xl'>
        (4xl) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h2' size='3xl'>
        (3xl) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h2' size='2xl'>
        (2xl) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h2' size='xl'>
        (xl) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h3' size='lg'>
        (lg) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h4' size='md'>
        (md) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h5' size='sm'>
        (sm) In love with React & Next
      </HeadingComponent>
      <HeadingComponent as='h6' size='xs'>
        (xs) In love with React & Next
      </HeadingComponent>
    </>
  ),
};
