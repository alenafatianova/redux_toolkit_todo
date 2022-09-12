import { createAction, createSlice } from '@reduxjs/toolkit'

const todos = [{id: new Date().toISOString(), message: 'hello,world', status: false}] 

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {todos},
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(), 
                message: action.payload.message,
                status: false
            })
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleStatus(state, action) {
            state.todos = action.payload
        }
    }
})


export const { toggleStatus, addTodo, deleteTodo } = todoListSlice.actions
export default todoListSlice.reducer