import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../src/app/components/footer'
 
test('Footer', () => {
  render(<Footer />)
  expect(screen.getByTestId('footer')).toBeDefined()
})