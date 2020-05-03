import React, { useState } from 'react'
import { ITodo } from './i-todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'
import{TodoContext} from './todo-context'
import { TodoCounter } from './todo-counter'
import { TodoDelete } from './todo-delete'

const cx = bind(styles)

export const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  function createTodo(todoText: string) {
    const newTodo: ITodo = { id: Math.floor(Math.random() * 1000), text: todoText, completed: false }
    setTodos([...todos, newTodo])
  }

  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

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

  return (
<TodoContext.Provider value={{todos,deleteTodos:()=>setTodos([])}}>
    <main>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => completeTodo(todo.id)} className={cx({ completed: todo.completed })}>
            {todo.text}
          </li>
        ))}
      </ul>
      <TodoCounter/>
      <form
        onSubmit={event => {
          event.preventDefault()
          createTodo(todoText)
          clearTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={event => setTodoText(event.target.value)} />
        </label>
        <button onClick={clearTodo}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
      <TodoDelete/>
    </main>
</TodoContext.Provider>
  )
}
