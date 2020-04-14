import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExerciseOne } from './exercise-one'
import { MyExerciseOne } from './my-exercise-one'
import { MyExerciseTwo } from './my-exercise-two'
import { MyExerciseThree } from './my-exercise-three'
import { MyExerciseFour } from './my-exercise-four'
import { MyExerciseFive } from './my-exercise-five'
import { MyExerciseSix } from './my-exercise-six'
import { MyExerciseSeven } from './my-exercise-seven'
import { MyExerciseEight } from './my-exercise-eight'
import { MyExerciseNine } from './my-exercise-nine'
import { MyExerciseTen } from './my-exercise-ten'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-one">Exercise one</Link>
      <Link to="/exercise-two">Exercise two</Link>
      <Link to="/exercise-three">Exercise three</Link>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-seven">Exercise seven</Link>
      <Link to="/exercise-eight">Exercise eight</Link>
      <Link to="/exercise-nine">Exercise nine</Link>
      <Link to="/exercise-ten">Exercise ten</Link>
      <Link to="/exercise-eleven">Exercise eleven</Link>

      <Link to="/my-exercise-one">My Exercise one</Link>

      <Link to="/my-exercise-two">My Exercise two</Link>

      <Link to="/my-exercise-three">My Exercise three</Link>

      <Link to="/my-exercise-four">My Exercise four</Link>

      <Link to="/my-exercise-five">My Exercise five</Link>

      <Link to="/my-exercise-six">My Exercise six</Link>

      <Link to="/my-exercise-seven">My Exercise seven</Link>

      <Link to="/my-exercise-eight">My Exercise eight</Link>

      <Link to="/my-exercise-nine">My Exercise nine</Link>

      <Link to="/my-exercise-ten">My Exercise ten</Link>

      <Route path="/exercise-one">
        <ExerciseOne />
      </Route>

      <Route path="/my-exercise-one">
        <MyExerciseOne />
      </Route>
      <Route path="/my-exercise-two">
        <MyExerciseTwo />
      </Route>
      <Route path="/my-exercise-three">
        <MyExerciseThree />
      </Route>
      <Route path="/my-exercise-four">
        <MyExerciseFour />
      </Route>
      <Route path="/my-exercise-five">
        <MyExerciseFive />
      </Route>
      <Route path="/my-exercise-six">
        <MyExerciseSix storage={localStorage} />
      </Route>
      <Route path="/my-exercise-seven">
        <MyExerciseSeven />
      </Route>
      <Route path="/my-exercise-eight">
        <MyExerciseEight />
      </Route>
      <Route path="/my-exercise-nine">
        <MyExerciseNine />
      </Route>
      <Route path="/my-exercise-ten">
        <MyExerciseTen />
      </Route>
    </BrowserRouter>
  )
}
