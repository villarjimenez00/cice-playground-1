import { fromEvent } from 'rxjs'
import { map, switchMapTo, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

type Answer = 'yes' | 'no'

export const yesNoDebounced = () =>
  fromEvent(document.querySelector('#ajax-input-2')!, 'keydown').pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMapTo(ajax.getJSON<{ answer: Answer }>('https://yesno.wtf/api')),
    map(({ answer }) => answer)
  )
