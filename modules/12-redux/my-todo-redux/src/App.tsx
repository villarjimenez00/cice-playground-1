import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { TodoApp } from './todo-app'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {' '}
      <TodoApp />
    </Provider>
  )
}

export default App
