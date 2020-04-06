import React, { useState } from 'react'

export const MyExerciseEight: React.FC = () => {
  const [percentage] = useState(0)
  return (
    <>
      <h1>Exercise eight</h1>
      <div className="grafico"></div>
      <p>{percentage}</p>
    </>
  )
}
