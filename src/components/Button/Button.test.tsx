import Button from './Button';
import {render, screen} from '@testing-library/react'

// UNIT TESTING
describe('Button', () => {
  it('should render the button correctly', () => {
    render(<Button>Sample Text</Button>)

    const button = screen.getByText('Sample Text')

    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('should render the button with the correct color', () => {
    render(<Button buttonType="blue">Sample Text</Button>)

    const button = screen.getByText('Sample Text')

    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('should render button and onClick should be called', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Sample Text</Button>)
    const button = screen.getByText('Sample Text')
    button.click()
    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
