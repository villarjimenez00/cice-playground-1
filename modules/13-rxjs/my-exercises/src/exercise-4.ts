import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export const positionClicked = (document: HTMLElement, event: MouseEvent) =>
  fromEvent(document, event).pipe(map(value => value))
