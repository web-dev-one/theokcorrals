import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Head from '../src/app/components/head'
 
test('Header', () => {
  render(<Head />)
  expect(screen.getByTestId('phone')).toBeDefined()
})