import { injectable } from 'inversify'

@injectable()
export class Greeter {
  hello(): string {
    return 'Hola'
  }
}
