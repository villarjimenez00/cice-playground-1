import React, { useState } from 'react'

import { bind } from './utils/bind'
import styles from './app.module.css'

const cx = bind(styles)

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const list = todos.map(todo => (
    <li
      className={cx({ completed: todo.completed })}
      key={todo.id}
      onClick={() => completeTodo(todo.id)}
    >
      {todo.text}
    </li>
  ))

  function completeTodo(id: number) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
    )
  }

  const [todoText, setTodoText] = useState('')

  function createId() {
    return Math.random() * (20 - 1) + 1
  }

  //function clickOnListElement() {}

  function createTdodo() {
    const id = createId()
    const newTodo = { completed: false, id, text: todoText }

    setTodos([...todos, newTodo])
    setTodoText('')
  }

  return (
    <>
      <form onSubmit={event => event.preventDefault()}>
        <label>
          <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
        </label>
        <button type="submit" onClick={createTdodo}>
          Añadir Tarea
        </button>
      </form>
      <ul>{list}</ul>
    </>
  )
}

export default App
