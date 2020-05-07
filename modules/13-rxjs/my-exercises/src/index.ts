import { double } from './exercise-1'
import { tap } from 'rxjs/operators'
import { evenNumbers } from './exercise-2'
import { totalTimesClicked } from './exercise-3'
import { positionClicked } from './exercise-4'
import { positionScrolled } from './exercise-5'
import { arrayMapFilter } from './exercise-6'
//import { myInterval } from './exercise-7'
import { scrollClick } from './exercise-8'
import { yesNo } from './exercise-9'
import { counter, watch, pause, play } from './exercise-12'

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

// positionClicked()
//   .pipe(
//     tap(mousePosition => {
//       const output = document.querySelector('#exercise-4')!
//       output.innerHTML += `Click Position X ${mousePosition.x}px <br/>Click Position Y ${mousePosition.y}px<br/>`
//     })
//   )
//   .subscribe()

// positionScrolled()
//   .pipe(
//     tap(window => {
//       const output = document.querySelector('#exercise-5')!
//       output.innerHTML += `Scroll Position X ${window.scrollX}px <br/>Scroll Position Y ${window.scrollY}px<br/>`
//     })
//   )
//   .subscribe()

arrayMapFilter([1, 2, 3, 4, 5])
  .pipe(
    tap(x => {
      const output = document.querySelector('#exercise-6')!
      output.innerHTML += `Value ${x} emitted<br/>`
    })
  )
  .subscribe()

// myInterval()
//   .pipe(
//     tap(x => {
//       const output = document.querySelector('#exercise-7')!
//       output.innerHTML += `Value ${x} emitted<br/>`
//     })
//   )
//   .subscribe()

// scrollClick()
//   .pipe(
//     tap(scrollPosition => {
//       const output = document.querySelector('#exercise-8')!
//       output.innerHTML += `Scroll Position Y ${scrollPosition}px <br/>`
//     })
//   )
//   .subscribe()

// yesNo()
//   .pipe(
//     tap(answer => {
//       const output = document.querySelector('#exercise-9')!
//       output.innerHTML += `Answer is:${answer} <br/>`
//       console.log(answer)
//     })
//   )
//   .subscribe()

counter()
  .pipe(
    tap(value => {
      const output = document.querySelector('#exercise-12')!
      output.innerHTML = `value is:${value} <br/>`
    })
  )
  .subscribe()

watch().subscribe()
pause().subscribe()
play().subscribe()
