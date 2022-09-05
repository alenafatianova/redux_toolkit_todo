import React from 'react'

type AddTodoType = {
    addTodo: () => void
}

export const AddTodo: React.FC<AddTodoType> = ({addTodo}) => {
  return (
    <div>
        <button onClick={addTodo} style={{marginLeft: '50px'}}>Add note</button>
    </div>
  )
}
