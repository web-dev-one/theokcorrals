import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Head from '../src/app/components/head'
import NavBar from '../src/app/components/navbar'

test('NavBar',()=>{
   render(<NavBar />)
   expect(screen.getByText('Home')).toBeDefined()
})