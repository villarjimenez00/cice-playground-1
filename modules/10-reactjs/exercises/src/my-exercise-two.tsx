import React, { useState } from 'react'

export const MyExerciseTwo: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Exercise two</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>{count}</p>
    </>
  )
}
