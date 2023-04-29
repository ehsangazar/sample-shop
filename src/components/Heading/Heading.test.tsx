import Heading from './Heading';
import {render, screen} from '@testing-library/react'

// UNIT TESTING
describe('Heading', () => {
  it('should render the heading correctly', () => {
    render(<Heading as="h1">Sample Text</Heading>)

    const heading = screen.getByText('Sample Text')

    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H1')
  })

  it('should render the heading with the correct size', () => {
    render(<Heading as="h2" size="lg">Sample Text</Heading>)

    const heading = screen.getByText('Sample Text')

    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
    expect(heading).toHaveClass('chakra-heading css-0')
  })
})
