import { createStore } from 'redux'
import { todoReducer } from './todo-reducer'

export const store = createStore(todoReducer)

export type RootState = ReturnType<typeof todoReducer>
export type AppDispatch = typeof store.dispatch
