import React from 'react'
import { MyExerciseOne } from './my-exercise-one'
import { render } from '@testing-library/react'

describe('MyExerciseOne', () => {
  it('sould render 50 items', () => {
    const { getAllByRole } = render(<MyExerciseOne />)

    const listItem = getAllByRole('listitem')

    expect(listItem).toHaveLength(50)
  })
})
