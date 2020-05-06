import { double } from './exercise-1'
import { tap } from 'rxjs/operators'
import { pair } from './exercise-2'

import { totalTimesClicked } from './exercise-3'

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

totalTimesClicked(document, 'click')
  .pipe(
    tap(count => {
      const output = document.querySelector('#exercise-3')!
      output.innerHTML = `Value ${count} emitted<br/>`
    })
  )
  .subscribe()

// totalTimesClicked(document, 'click').subscribe(count => {
//   const output = document.querySelector('#exercise-3')!
//   output.innerHTML = `Clicked document ${count} times<br/>`
// })
