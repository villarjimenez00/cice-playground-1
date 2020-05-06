import { interval } from 'rxjs'
import { filter } from 'rxjs/operators'

export const myInterval = () => interval(1000).pipe(filter(item => item % 3 === 0))
