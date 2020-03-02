import React, { useState } from 'react'

import './App.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { completed: false, id: 1, text: 'hacer la compra' },
    { completed: false, id: 2, text: 'hacer la compra' },
    { completed: false, id: 3, text: 'hacer la compra' }
  ])

  const list = todos.map(item => (
    <li onClick={() => clickOnListElement(todo.id)} key={item.id}>
      {item.text}
    </li>
  ))

  function clickOnListElement(todoId) {}

  const [input, setInput] = useState('')

  function createId() {
    return Math.random() * (20 - 1) + 1
  }

  function onClickButton() {
    const id = createId()
    const newTodo = { completed: false, id, text: input }

    setTodos([...todos, newTodo])
    setInput('')
  }

  return (
    <>
      <label>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      </label>
      <button onClick={onClickButton}>Añadir Tarea</button>
      <ul>{list}</ul>
    </>
  )
}

export default App
