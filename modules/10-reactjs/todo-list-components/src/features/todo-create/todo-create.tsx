import React, { useState } from 'react'
import { Todo } from '../todo'

interface Props {
  onCreate(todoText: string): void
  todos: Todo[]
}

export const TodoCreate: React.FC<Props> = ({ onCreate, todos }) => {
  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = todos.map((todo) => todo.text).includes(todoText)

  const clearTodo = () => setTodoText('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={(event) => setTodoText(event.target.value)} />
      </label>
      <button onClick={clearTodo}>Clear todo</button>
      <button type="submit" disabled={isTodoDuplicated}>
        Create todo
      </button>
    </form>
  )
}
