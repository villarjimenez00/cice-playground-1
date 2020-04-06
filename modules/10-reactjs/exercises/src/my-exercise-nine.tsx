import React, { useState, useEffect } from 'react'

const useWindowData = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [state, setState] = useState(0)

  const getSize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  window.addEventListener('resize', () => setState(state + 1))

  useEffect(() => {
    getSize()
    return () => window.removeEventListener('keyup', () => setState(state - 1))
  }, [state])

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
