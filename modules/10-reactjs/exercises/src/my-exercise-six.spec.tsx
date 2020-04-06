import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MyExerciseSix } from './my-exercise-six'

describe('MyExerciseSix', () => {
  it('should have a default value', () => {
    const { getByLabelText } = setup()

    const input = getByLabelText('myInput')

    expect(input).toHaveValue('')
  })

  it('should have an initial value', () => {
    const { getByLabelText } = setup({ getItemReturnValue: 'foo' })

    const input = getByLabelText('myInput')

    expect(input).toHaveValue('foo')
  })

  it('should store value when writing', () => {
    const { getByLabelText, storageMock } = setup()
    const input = getByLabelText('myInput')

    fireEvent.change(input, { target: { value: 'foo' } })

    expect(storageMock.setItem).toHaveBeenCalledWith('input', 'foo')
  })
})

export function setup({ getItemReturnValue }: { getItemReturnValue?: string } = {}) {
  const storageMock: Storage = {
    getItem: jest.fn().mockReturnValue(getItemReturnValue),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(),
    length: 10
  }
  const component = render(<MyExerciseSix storage={storageMock} />)

  return {
    ...component,
    storageMock
  }
}
