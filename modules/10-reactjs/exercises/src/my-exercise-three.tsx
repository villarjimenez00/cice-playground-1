import React, { useState } from 'react'

export const MyExerciseThree: React.FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (characters: string) => {
    const charactersWithoutVowels = characters
      .split('')
      .filter(character => !['a', 'e', 'i', 'o', 'u'].includes(character))
      .join('')
    setValue(charactersWithoutVowels)
  }

  return (
    <>
      <h1>Exercise Three</h1>
      <input
        aria-label="myInput"
        placeholder="Enter characters"
        type="text"
        onChange={event => handleChange(event.target.value)}
        value={value}
      />
    </>
  )
}
