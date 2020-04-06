import React from 'react'

export const MyExerciseOne: React.FC = () => {
  const range = Array.from({ length: 50 }, (key, value) => value)

  return (
    <>
      <h1>Exercise one</h1>
      <ul>
        {range.map(x => (
          <li key={x + 1}>{x + 1}</li>
        ))}
      </ul>
    </>
  )
}
