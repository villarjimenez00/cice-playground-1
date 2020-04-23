import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { createTodo, completeTodo, deleteTodo } from './action-creators'
import { AppDispatch, RootState } from './store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import styles from './todo-app.module.css'
import { bind } from './utils/bind'

const cx = bind(styles)

const todoSelector = (state: RootState) => state

export const TodoApp: React.FC = () => {
  const todos = useSelector(todoSelector)
  const dispatch: AppDispatch = useDispatch()
  const [value, setValue] = useState('')
  const id = Math.random() * 1000

  const clearTodo = () => setValue('')

  return (
    <>
      <h1>Todos</h1>
      <label>
        Todo
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button
        onClick={() => {
          dispatch(createTodo(id, value))
          clearTodo()
        }}
      >
        Create todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={cx('todoText', { completed: todo.completed })}>
            <span
              onClick={() => {
                dispatch(completeTodo(todo.id))
              }}
            >
              {todo.text}
            </span>
            <span>
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span onClick={() => dispatch(deleteTodo(todo.id))}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
