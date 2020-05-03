import { Greeter } from './greeter'
import { injectable, inject } from 'inversify'
import { TYPES } from './types'

@injectable()
export class PersonalAssistant {
  constructor(@inject(TYPES.GREETER) private readonly greeter: Greeter) {}

  morningRoutine(name: string) {
    return `${this.greeter.hello()} Mr|Ms ${name}`
  }
}
