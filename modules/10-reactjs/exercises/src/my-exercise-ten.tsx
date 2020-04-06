import React, { useState, useEffect } from 'react'

const usePressKeys = () => {
  const [keys, setKeys] = useState<string[]>([])

  const getKeys = () => {
    document.addEventListener('keypress', (e: KeyboardEvent) => setKeys([...keys, e.code]))
  }

  useEffect(() => {
    getKeys()
    document.removeEventListener('keypress', () => console.log('remove event listener'))
  })
  return { keys }
}

export const MyExerciseTen: React.FC = () => {
  const { keys } = usePressKeys()

  const id = Math.random()
  return (
    <>
      <h1>Exercise ten</h1>
      <hr />
      <h4>Pressed Keys</h4>
      <ul>
        {keys.map(item => (
          <li key={item + id}>{item + id}</li>
        ))}
      </ul>
    </>
  )
}
