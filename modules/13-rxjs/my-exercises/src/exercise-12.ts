import { BehaviorSubject, fromEvent, interval } from 'rxjs'
import { map, tap, filter } from 'rxjs/operators'

export const subject = new BehaviorSubject({ count: 0, isPaused: true })

export const counter = () => subject.asObservable().pipe(map(x => x.count))

export const watch = () =>
  interval(1000).pipe(
    filter(() => !subject.value.isPaused),
    tap(() => subject.next({ ...subject.value, count: subject.value.count + 1 }))
  )

export const pause = () =>
  fromEvent(document.querySelector('#pause-button')!, 'click').pipe(
    tap(() => subject.next({ ...subject.getValue(), isPaused: true }))
  )

export const play = () =>
  fromEvent(document.querySelector('#play-button')!, 'click').pipe(
    tap(() => subject.next({ ...subject.getValue(), isPaused: false }))
  )
