import { createTodo, Action } from './action-creators'
import { TodoState, initialTodoState } from './todo-state'

export function todoReducer(todos: TodoState[] = initialTodoState, action: Action): TodoState[] {
  switch (action.type) {
    case 'CREATE_TODO':
      return [...todos, { id: action.payload.id, text: action.payload.text }]
    default:
      return todos
  }
}
