import React, { useState, useEffect } from 'react'

const usePressKeys = () => {
  const [keys, setKeys] = useState<string[]>([])

  const getKeys = (e: KeyboardEvent) => {
    setKeys([...keys, e.code])
  }

  useEffect(() => {
    document.addEventListener('keydown', getKeys)
    return () => document.removeEventListener('keydown', getKeys)
  })

  return { keys }
}

export const MyExerciseTen: React.FC = () => {
  const { keys } = usePressKeys()

  return (
    <>
      <h1>Exercise ten</h1>
      <hr />
      <h4>Pressed Keys</h4>
      <ul>
        {keys.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
