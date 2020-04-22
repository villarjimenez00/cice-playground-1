import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <h1>Todos</h1>
      <label>
        Todo
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button>Create todo</button>
    </>
  )
}

export default App
