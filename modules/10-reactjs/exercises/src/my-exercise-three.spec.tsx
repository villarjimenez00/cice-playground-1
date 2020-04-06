import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MyExerciseThree } from './my-exercise-three'

describe('MyExerciseThree', () => {
  it('should not include vowel in input', () => {
    const { getByLabelText } = render(<MyExerciseThree />)
    const input = getByLabelText('myInput')

    fireEvent.change(input, { target: { value: 'a' } })

    expect(input).toHaveValue('')
  })

  it('should include consonats in input', () => {
    const { getByLabelText } = render(<MyExerciseThree />)
    const input = getByLabelText('myInput')

    fireEvent.change(input, { target: { value: 'j' } })

    expect(input).toHaveValue('j')
  })

  it('should filter vowels in input', () => {
    const { getByLabelText } = render(<MyExerciseThree />)
    const input = getByLabelText('myInput')

    fireEvent.change(input, { target: { value: 'hola' } })

    expect(input).toHaveValue('hl')
  })
})
