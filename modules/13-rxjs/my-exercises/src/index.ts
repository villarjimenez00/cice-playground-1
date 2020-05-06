import { double } from './exercise-1'
import { tap } from 'rxjs/operators'
import { evenNumbers } from './exercise-2'
import { totalTimesClicked } from './exercise-3'
import { positionClicked } from './exercise-4'

double([1, 2, 3, 4, 5])
  .pipe(
    tap(x => {
      const output = document.querySelector('#exercise-1')!
      output.innerHTML += `Value ${x} emitted<br/>`
    })
  )
  .subscribe()

evenNumbers([1, 2, 3, 4, 5])
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
      output.innerHTML = `Clicked ${count} times<br/>`
    })
  )
  .subscribe()

positionClicked(document.body, 'click')
  .pipe(
    tap(value => {
      const output = document.querySelector('#exercise-4')!
      output.innerHTML += `Click Position x ${value.clientX} <br/>Click Position y ${value.clientY}<br/>`
    })
  )
  .subscribe()
