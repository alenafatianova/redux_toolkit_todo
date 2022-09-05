import { createSlice } from '@reduxjs/toolkit'

const todos = [{id: new Date().toISOString(), message: '', status: false}] 

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
        deleteTodo(state, action) {},
        toggleStatus(state, action) {}
    }
})

export const {addTodo, deleteTodo, toggleStatus } = todoListSlice.actions
export default todoListSlice.reducer