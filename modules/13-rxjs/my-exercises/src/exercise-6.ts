import { from } from 'rxjs'
import { map, filter } from 'rxjs/operators'

export const arrayMapFilter = (array: number[]) =>
  from(array).pipe(
    map((item: number) => item * 3),
    filter(item => item % 2 === 0)
  )
