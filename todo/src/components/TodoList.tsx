import React from 'react'
import { TodoItem, TodoItemProps } from './TodoItem'

export type TodoListType = {
    todos: TodoItemProps[]
    deleteTodo: (id: string) => void
    toggleStatus: (id: string) => void
}

export const TodoList: React.FC<TodoListType> = ({todos, deleteTodo, toggleStatus}) => {
  return (
    <div>
        TodoList:
        <ul>
            {
                todos.map(element => 
                <TodoItem 
                    key={element.id} 
                    message={element.message} 
                    status={element.status} 
                    id={element.id} 
                    toggleStatus={toggleStatus}
                    deleteTodo={deleteTodo}
                />
                )
            }
        </ul>
    </div>
  )
}
