import {
  CREATE_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  VIEW_ALL_TODOS,
  VIEW_COMPLETED_TODOS,
  VIEW_INCOMPLETED_TODOS,
} from './action-types'

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

export function deleteTodo(id: number): Action {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  }
}

export function viewAllTodos(): Action {
  return {
    type: VIEW_ALL_TODOS,
  }
}

export function viewIncompletedTodos(): Action {
  return {
    type: VIEW_INCOMPLETED_TODOS,
  }
}

export function viewCompletedTodos(): Action {
  return {
    type: VIEW_COMPLETED_TODOS,
  }
}

interface ViewIncompletedodos {
  type: typeof VIEW_INCOMPLETED_TODOS
}

interface ViewCompletedTodos {
  type: typeof VIEW_COMPLETED_TODOS
}

interface ViewAllTodos {
  type: typeof VIEW_ALL_TODOS
}

interface DeleteTodo {
  type: typeof DELETE_TODO
  payload: {
    id: number
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

export type Action =
  | CreateTodo
  | CompleteTodo
  | DeleteTodo
  | ViewAllTodos
  | ViewCompletedTodos
  | ViewIncompletedodos
