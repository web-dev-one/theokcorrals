import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Shade from '../src/pages/shade/index.jsx'

test('Shade', ()=>{
    render(<Shade />)
    expect(screen.getByTestId('shade')).toBeDefined()
})

test('Shade Lenght', ()=>{
    render(<Shade />)
    expect()

})