import { CREATE_TODO } from './action-types'

export function createTodo(id: number, todoText: string): Action {
  return {
    type: CREATE_TODO,
    payload: {
      id: id,
      text: todoText,
    },
  }
}

interface CreateTodo {
  type: typeof CREATE_TODO
  payload: {
    id: number
    text: string
  }
}

export type Action = CreateTodo
