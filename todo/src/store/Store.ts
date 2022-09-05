import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoListSlice'

//const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>