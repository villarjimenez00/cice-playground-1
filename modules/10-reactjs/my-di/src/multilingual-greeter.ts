import { Greeter } from './greeter'
import { injectable, inject } from 'inversify'
import { TYPES } from './types'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './english-greeter'

@injectable()
export class MultilingualGreeter implements Greeter {
  constructor(
    @inject(TYPES.SPANISH_GREETER) private readonly spanishGreeter: SpanishGreeter,
    @inject(TYPES.ENGLISH_GREETER) private readonly engilshGreeter: EnglishGreeter
  ) {}
  hello(): string {
    return `${this.spanishGreeter.hello()} - ${this.engilshGreeter.hello()}`
  }
}
