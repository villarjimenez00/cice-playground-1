import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export const positionClicked = () =>
  fromEvent(document, 'click').pipe(
    map((event: MouseEventInit) => {
      return { x: event.screenX, y: event.screenY }
    })
  )
