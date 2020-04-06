import React, { useState, useEffect } from 'react'

export const MyExerciseFour: React.FC = () => {
  const [counter, setCounter] = useState(-1)

  useEffect(() => {
    if (counter !== 0) {
      const currentDate = new Date()
      document.title = currentDate.toString()
    }
  }, [counter])

  return (
    <>
      <h1>Exercise four</h1>
      <button onClick={() => setCounter(counter + 1)}>Pulsar</button>
    </>
  )
}
