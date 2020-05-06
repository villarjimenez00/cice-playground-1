import { fromEvent } from 'rxjs'
import { map, throttleTime } from 'rxjs/operators'

export const positionScrolled = () =>
  fromEvent(window, 'scroll').pipe(
    throttleTime(5000),
    map(() => {
      return window
    })
  )
