import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { createTodo } from './action-creators'
import { AppDispatch, RootState } from './store'

const todoSelector = (state: RootState) => state

export const TodoApp: React.FC = () => {
  const todos = useSelector(todoSelector)
  const dispatch: AppDispatch = useDispatch()
  const [value, setValue] = useState('')
  const id = Math.random()

  return (
    <>
      <h1>Todos</h1>
      <label>
        Todo
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button onClick={() => dispatch(createTodo(id, value))}>Create todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}
