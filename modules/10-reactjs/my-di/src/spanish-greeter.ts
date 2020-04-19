import { Greeter } from './greeter'
import { injectable } from 'inversify'

@injectable()
export class SpanishGreeter implements Greeter {
  hello(): string {
    return 'Hola'
  }
}
