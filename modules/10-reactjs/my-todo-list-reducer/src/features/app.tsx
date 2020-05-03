import React, { useState, useReducer } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

type Action =
  | { type: 'create'; todoText: string }
  | { type: 'clear' }
  | { type: 'completed'; id: number }

function reducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'create':
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1000),
        text: action.todoText,
        completed: false
      }
      return [...todos, newTodo]
    case 'completed':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    case 'clear':
      return todos
  }
}

export const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, [])

  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map((todo: Todo) => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  return (
    <main>
      <ul>
        {todos.map((todo: Todo) => (
          <li
            onClick={() => dispatch({ type: 'completed', id: todo.id })}
            className={cx({ completed: todo.completed })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          dispatch({ type: 'create', todoText: todoText })
          clearTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={event => setTodoText(event.target.value)} />
        </label>
        <button onClick={() => dispatch({ type: 'clear' })}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
    </main>
  )
}
