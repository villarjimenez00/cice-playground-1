import React, { useState, useEffect } from 'react'

interface pokemonData {
  count: number
  next: string
  previous: string | null
  results: { name: string; url: string }[]
}

export const MyExerciseSeven: React.FC = () => {
  const [data, setData] = useState<string[]>([])
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=51')

      const result = (await response.json()) as pokemonData

      const names = result.results.map(result => result.name)

      setData(names)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])

  return (
    <>
      <h1>Exercise seven</h1>

      <hr />

      <ul>
        {data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {error && <p>Error: {error}</p>}
    </>
  )
}
