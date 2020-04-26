import React, { useContext } from 'react'
import {TodoContext} from './todo-context'

export const TodoCounter:React.FC=()=>{
    const{todos}=useContext(TodoContext)
return <span>{todos.length}</span>
}