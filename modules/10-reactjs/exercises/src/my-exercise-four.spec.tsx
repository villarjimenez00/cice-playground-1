import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MyExerciseFour } from './my-exercise-four'

const RealDate = Date

export function mockDate(isoDate: string) {
  global.Date = class extends RealDate {
    constructor() {
      super()
      return new RealDate(isoDate)
    }
  } as DateConstructor
}

export function resetDate() {
  global.Date = RealDate
}

describe('MyExersieFour', () => {
  it('sould be change the document title when button clicked', () => {
    mockDate('2020-04-01')
    const { getByRole } = render(<MyExerciseFour />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(document.title).toBe(
      'Wed Apr 01 2020 02:00:00 GMT+0200 (hora de verano de Europa central)'
    )
    resetDate()
  })
})
