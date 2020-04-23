import { CREATE_TODO, COMPLETE_TODO } from './action-types'

export function createTodo(id: number, todoText: string): Action {
  return {
    type: CREATE_TODO,
    payload: {
      id: id,
      text: todoText,
    },
  }
}

export function completeTodo(id: number): Action {
  return {
    type: COMPLETE_TODO,
    payload: {
      id: id,
      completed: true,
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

interface CompleteTodo {
  type: typeof COMPLETE_TODO
  payload: {
    id: number
    completed: boolean
  }
}

export type Action = CreateTodo | CompleteTodo
