import { createTodo, Action } from './todo-action-creators'
import { TodoState, initialTodoState } from './todo-state'

export function todoReducer(todos: TodoState[] = initialTodoState, action: Action): TodoState[] {
  switch (action.type) {
    case 'CREATE_TODO':
      return [
        ...todos,
        { id: action.payload.id, text: action.payload.text, completed: false, vissible: true },
      ]

    case 'COMPLETE_TODO':
      const updatedTodos: TodoState[] = todos.map((todo) => {
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
      const afterDeleleTodos: TodoState[] = todos.filter((todo) => todo.id !== action.payload.id)
      return afterDeleleTodos

    case 'EDIT_TODO':
      const updatedTextTodo: TodoState[] = todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      )
      return updatedTextTodo

    case 'VIEW_COMPLETED_TODOS':
      const completedTodos: TodoState[] = todos.map((todo) => {
        if (todo.completed === false) {
          return {
            ...todo,
            vissible: false,
          }
        } else {
          return {
            ...todo,
            vissible: true,
          }
        }
      })
      return completedTodos

    case 'VIEW_INCOMPLETED_TODOS':
      const incompletedTodos: TodoState[] = todos.map((todo) => {
        if (todo.completed === true) {
          return {
            ...todo,
            vissible: false,
          }
        } else {
          return {
            ...todo,
            vissible: true,
          }
        }
      })
      return incompletedTodos

    case 'VIEW_ALL_TODOS':
      const allTodos: TodoState[] = todos.map((todo) => {
        return {
          ...todo,
          vissible: true,
        }
      })
      return allTodos

    default:
      return todos
  }
}
