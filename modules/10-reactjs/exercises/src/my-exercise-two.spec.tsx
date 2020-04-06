import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MyExerciseTwo } from './my-exercise-two'

describe('MyExerciseTwo', () => {
  it('sould hace an initial state', () => {
    const { getByRole } = render(<MyExerciseTwo />)
    const button = getByRole('button')

    expect(button).toHaveTextContent('0')
  })

  it('sould update the counter', () => {
    const { getByRole } = render(<MyExerciseTwo />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(button).toHaveTextContent('1')
  })

  it('sould update the counter when clicking more than once', () => {
    const { getByRole } = render(<MyExerciseTwo />)
    const button = getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(button).toHaveTextContent('3')
  })
})
