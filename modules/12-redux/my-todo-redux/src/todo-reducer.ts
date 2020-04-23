import { createTodo, Action } from './action-creators'
import { TodoState, initialTodoState } from './todo-state'

export function todoReducer(todos: TodoState[] = initialTodoState, action: Action): TodoState[] {
  switch (action.type) {
    case 'CREATE_TODO':
      return [...todos, { id: action.payload.id, text: action.payload.text, completed: false }]
    case 'COMPLETE_TODO':
      const updatedTodos = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
      return updatedTodos
    case 'DELETE_TODO':
      const afterDeleleTodos = todos.filter((todo) => todo.id !== action.payload.id)
      return afterDeleleTodos
    default:
      return todos
  }
}
