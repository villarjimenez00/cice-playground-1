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
  editTodo,
} from './todo-action-creators'
import { AppDispatch, RootState } from './store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './todo-app.module.css'
import { bind } from './utils/bind'

const cx = bind(styles)

const todoSelector = (state: RootState) => state

export const TodoApp: React.FC = () => {
  const todos = useSelector(todoSelector)
  const dispatch: AppDispatch = useDispatch()
  const [value, setValue] = useState('')
  const [editable, setEditable] = useState(false)
  const [updateText, setUpdateText] = useState('')
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
                <p>
                  <span
                    onClick={() => {
                      dispatch(completeTodo(todo.id))
                    }}
                  >
                    {todo.text}
                  </span>
                  <span onClick={() => setEditable(!editable)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span onClick={() => dispatch(deleteTodo(todo.id))}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </p>
                {editable && (
                  <>
                    <input
                      type="text"
                      onChange={(event) => setUpdateText(event.target.value)}
                      value={updateText}
                    />
                    <button onClick={() => dispatch(editTodo(todo.id, updateText))}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </>
                )}
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
