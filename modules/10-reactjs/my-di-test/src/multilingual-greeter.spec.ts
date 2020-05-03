import { MultilingualGreeter } from './multilingual-greeter'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'

describe('Multilingual Greeter', () => {
  it('should get the multilingual greeting', () => {
    const spanishGreeter: SpanishGreeter = {
      hello: jest.fn().mockReturnValue('Hola'),
    }
    const englishGreeter: EnglishGreeter = {
      hello: jest.fn().mockReturnValue('Hello'),
    }
    const multilingualGreeter = new MultilingualGreeter(englishGreeter, spanishGreeter)

    const actual = multilingualGreeter.hello()

    expect(actual).toBe('Hello - Hola')
  })
})
