import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from './Button';
import { Box } from '@chakra-ui/react';

const meta: Meta = {
  title: 'components/Button',
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Index: Story = {
  render: () => (
    <Box display={'grid'} gridTemplateColumns={'1fr'} gridGap={4}>
      <ButtonComponent  buttonType="teal" onClick={()=>{}}>
        Blue Button
      </ButtonComponent>
      <ButtonComponent  buttonType="red" onClick={()=>{}}>
        Red Button
      </ButtonComponent>
    </Box>
  ),
};

export const Primary: Story = {
  render: () => (
    <>
      <ButtonComponent  buttonType="teal" onClick={()=>{}}>
        Blue Button
      </ButtonComponent>
    </>
  ),
};

export const Secondary: Story = {
  render: () => (
    <>
      <ButtonComponent  buttonType="red" onClick={()=>{}}>
        Red Button
      </ButtonComponent>
    </>
  ),
};
