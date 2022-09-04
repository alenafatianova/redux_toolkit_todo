import React from 'react'

export type TodoItemProps = {
    id: string, 
    message: string, 
    status: boolean
}

export const TodoItem: React.FC<TodoItemProps> = ({id, status, message, toggleStatus, deleteTodo}) => {
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
