import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoListSlice, { addTodo } from '../store/todoListSlice'
import { AddTodo } from './AddTodo'
import { TodoItem, TodoItemType, TodoListType } from './TodoItem' 

export const TodoList: React.FC = () => {
    const todos = useSelector((state: any) => state.todos.todos)
  return (
    <div>
        TodoList:
        <ul>
            {todos.map((todo: JSX.IntrinsicAttributes & TodoItemType & TodoListType) => (
                <TodoItem
                key={todo.id}
                {...todo}
        />
            ))}
        
        </ul>
       
    </div>
  )
}
