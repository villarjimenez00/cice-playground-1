import {createContext} from 'react'
import { ITodo } from './i-todo';

export const TodoContext = createContext<{todos:ITodo[],deleteTodos:()=>void}>({
    todos:[],
    deleteTodos:()=>{},
});
