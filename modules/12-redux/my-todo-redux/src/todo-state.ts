export interface TodoState {
  id: number
  text: string
  completed: boolean
  vissible: boolean
}

export const initialTodoState: TodoState[] = []
