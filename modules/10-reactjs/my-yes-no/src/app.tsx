import React, { useState, useEffect } from 'react'

export function App() {
  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)
  async function fetchImage() {
    console.log(1)
    const response = await fetch('https://yesno.wtf/api')
    const result = await response.json()
    setImage(result.image)
  }

  useEffect(() => {
    fetchImage()
  }, [counter])
  return (
    <div className="App">
      <img onClick={() => setCounter(counter + 1)} src={image} alt="" />
    </div>
  )
}
