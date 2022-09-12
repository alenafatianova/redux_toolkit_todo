import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/todoListSlice'


export type TodoItemType = {
    id: string, 
    message: string, 
    status: boolean
}

export type TodoListType = {
    //todos: TodoItemType[]
   // deleteTodo: (id: string) => void
    toggleStatus: (id: string) => void
}

export const TodoItem: React.FC<TodoItemType & TodoListType> = ({id, message, status, toggleStatus}) => {
  const dispatch = useDispatch()
  
  const deleteTask = (id: any) => {
    dispatch(deleteTodo({id}))
  }

  return (
    <div>
         <li key={id}>
          <input type="checkbox" checked={status} onChange={() => toggleStatus(id)}/>
          <span>{message}</span>
          <span style={{marginLeft: '30px'}}>Status: {status}</span>
          <span className="delete_btn" onClick={() => deleteTask(id)}>&times;</span>
        </li>
    </div>
  )
}


