import React, { useState } from 'react'
import { Todo } from './domain/todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'
import { useEffect } from 'react'
import { TodoRepositoryFactory } from './infrastructure/todo-repository-factory'
import { http } from '../core/http/http'

const cx = bind(styles)

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodo = async (todoText: string) => {
    const newTodo: Todo = { id: Math.random() * 1000, title: todoText, completed: false }
    await TodoRepositoryFactory.get().create(newTodo)
    setTodos([...todos, newTodo])
    fetchTodos()
  }

  const fetchTodos = async () => {
    try {
      const todos = await TodoRepositoryFactory.get().findAll()
      setTodos(todos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map(todo => todo.title).includes(todoText)

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
    <main>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className={cx({ completed: todo.completed })}
          >
            {todo.title}
          </li>
        ))}
      </ul>
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
    </main>
  )
}
