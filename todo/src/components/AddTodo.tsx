import React from 'react'
import { addTodo } from '../store/todoListSlice'

type AddTodoType = {
    addTodo: () => void
}

export const AddTodo: React.FC<AddTodoType> = () => {
  return (
    <div>
        <button onClick={() => addTodo} style={{marginLeft: '50px'}}>Add note</button>
    </div>
  )
}
