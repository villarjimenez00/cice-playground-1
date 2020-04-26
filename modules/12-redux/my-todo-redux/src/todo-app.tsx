import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  createTodo,
  completeTodo,
  deleteTodo,
  viewCompletedTodos,
  viewAllTodos,
  viewIncompletedTodos,
} from './action-creators'
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
  const [editable, setEditable] = useState(false)
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
      <button onClick={() => dispatch(viewAllTodos())}>Ver Todos</button>
      <button onClick={() => dispatch(viewCompletedTodos())}>Ver Completados</button>
      <button onClick={() => dispatch(viewIncompletedTodos())}>Ver No Completados</button>
      <ul>
        {todos.map((todo) => {
          if (todo.vissible === true) {
            return (
              <li key={todo.id} className={cx('todoText', { completed: todo.completed })}>
                <p className={cx({ inputHidden: editable })}>
                  <span
                    onClick={() => {
                      dispatch(completeTodo(todo.id))
                    }}
                  >
                    {todo.text}
                  </span>
                  <span onClick={() => setEditable(true)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span onClick={() => dispatch(deleteTodo(todo.id))}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </p>
                <input
                  className={cx({ inputHidden: !editable })}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
