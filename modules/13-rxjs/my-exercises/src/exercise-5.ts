import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export const positionScrolled = () =>
  fromEvent(window, 'scroll').pipe(
    map((event: UIEventInit) => {
      return event.currentTarget
    })
  )
