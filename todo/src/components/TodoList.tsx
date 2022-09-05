import React from 'react'
import { useSelector } from 'react-redux'
import todoListSlice from '../store/todoListSlice'
import { TodoItem, TodoItemType, TodoListType } from './TodoItem' 

export const TodoList: React.FC<TodoListType> = ({ toggleStatus, deleteTodo}) => {
    const todos = useSelector((state: any) => state.todos.todos)
  return (
    <div>
        TodoList:
        <ul>
            {todos.map((todo: JSX.IntrinsicAttributes & TodoItemType & TodoListType) => (
                <TodoItem
                key={todo.id}
                {...todo}
                toggleStatus={toggleStatus}
                deleteTodo={deleteTodo}
        />
            ))}
        
        </ul>
    </div>
  )
}
