import { PersonalAssistant } from './personal-assistant'
import { Greeter } from './greeter'

describe('PersoanalAssistant', () => {
  it('should get the morning routine', () => {
    const mock = jest.fn()
    mock.mockReturnValue('Hello')
    const greeter: Greeter = {
      hello: mock,
    }
    const personalAssistant = new PersonalAssistant(greeter)

    const actual = personalAssistant.morningRoutine('Villar')

    expect(actual).toBe('Hello Mr|Ms Villar')
  })
})
