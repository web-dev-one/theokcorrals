import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import OkCBarn from '../src/app/components/Barn'

test('Barn', ()=>{
    render(<OkCBarn />)
    expect(screen.getByText('Barn')).toBeDefined()

})