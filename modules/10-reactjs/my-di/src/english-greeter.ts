import { Greeter } from './greeter'
import { injectable } from 'inversify'

@injectable()
export class EnglishGreeter implements Greeter {
  hello(): string {
    return 'Hi'
  }
}
