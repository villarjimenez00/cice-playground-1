import { fromEvent } from 'rxjs'
import { scan } from 'rxjs/operators'

export const totalTimesClicked = (document: Document, event: string) =>
  fromEvent(document, event).pipe(scan(count => count + 1, 0))
