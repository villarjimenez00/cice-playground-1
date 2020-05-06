import { from } from 'rxjs'
import { filter } from 'rxjs/operators'

export const evenNumbers = (array: number[]) => from(array).pipe(filter(num => num % 2 === 0))
