import { calculator } from './calculator'

describe('calculator', () => {
  it('should add 2 numbers', () => {
    const given = '1 + 1'

    const actual = calculator(given)

    expect(actual).toEqual(2)
  })
  it('should add more than 2 numbers', () => {
    const given = '1 + 1 + 1 + 1'

    const actual = calculator(given)

    expect(actual).toEqual(4)
  })
  it('should rest 2 numbers', () => {
    const given = '2 - 1'

    const actual = calculator(given)

    expect(actual).toEqual(1)
  })
  it('should multiply 2 numbers', () => {
    const given = '3 * 3'

    const actual = calculator(given)

    expect(actual).toEqual(9)
  })
  it('should do complex operations', () => {
    const given = '3 * 3; console.log("Hi")'

    const actual = calculator(given)

    expect(actual).toEqual(9)
  })
})
