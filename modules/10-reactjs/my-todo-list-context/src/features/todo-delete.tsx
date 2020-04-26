import React, { useContext } from 'react'
import { TodoContext } from './todo-context'

export const TodoDelete: React.FC = () => {
  const { deleteTodos } = useContext(TodoContext)
  return <button onClick={deleteTodos}>Clear todos</button>
}