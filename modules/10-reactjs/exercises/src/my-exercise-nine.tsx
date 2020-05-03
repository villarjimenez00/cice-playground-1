import React, { useState, useEffect } from 'react'

const useWindowData = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const getSize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', getSize)
    return () => window.removeEventListener('resize', getSize)
  })

  return { width, height }
}

export const MyExerciseNine: React.FC = () => {
  const { width, height } = useWindowData()

  return (
    <>
      <h1>Exercise nine</h1>
      <p>Anchura: {width}</p>
      <p>Altura: {height}</p>

      <hr />
    </>
  )
}
