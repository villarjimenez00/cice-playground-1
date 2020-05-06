import { double } from './exercise-1'
import { tap, scan } from 'rxjs/operators'
import { pair } from './exercise-2'

import { fromEvent } from 'rxjs'

double([1, 2, 3, 4, 5])
  .pipe(
    tap(x => {
      const output = document.querySelector('#exercise-1')!
      output.innerHTML += `Value ${x} emitted<br/>`
    })
  )
  .subscribe()

pair([1, 2, 3, 4, 5])
  .pipe(
    tap(x => {
      const output = document.querySelector('#exercise-2')!
      output.innerHTML += `Value ${x} emitted<br/>`
    })
  )
  .subscribe()

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => {
    const output = document.querySelector('#exercise-3')!
    output.innerHTML = `Clicked document ${count} times<br/>`
  })
