import React from 'react'


export type TodoItemType = {
    id: string, 
    message: string, 
    status: boolean
}

export type TodoListType = {
    //todos: TodoItemType[]
    deleteTodo: (id: string) => void
    toggleStatus: (id: string) => void
}

export const TodoItem: React.FC<TodoItemType & TodoListType> = ({id, message, status, deleteTodo, toggleStatus}) => {
  return (
    <div>
         <li key={id}>
          <input type="checkbox" checked={status} onChange={() => toggleStatus(id)}/>
          <span>{message}</span>
          <span style={{marginLeft: '30px'}}>Status: {status}</span>
          <span className="delete_btn" onClick={() => deleteTodo(id)}>&times;</span>
        </li>
    </div>
  )
}
