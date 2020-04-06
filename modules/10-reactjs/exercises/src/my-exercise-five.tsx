import React, { useState } from 'react'

export const MyExerciseFive: React.FC = () => {
  const [counter, setCounter] = useState(10)

  return (
    <>
      <h1>Exercise five</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter - 1)} disabled={counter === 0 ? true : false}>
        Restar
      </button>
      {counter === 0 && <h4>Booom!!!</h4>}
      {counter === 0 && <button onClick={() => setCounter(10)}>Reset</button>}
    </>
  )
}
