import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';
import { addTodo } from './store/todoListSlice';
import { AddTodo } from './components/AddTodo';

const App = () => {

  const dispatch = useDispatch()
  const [note, setNote] = useState('')
  
  const addTask = () => {
    dispatch(addTodo(note))
    setNote('')
  }
  
  const toggleStatus = (id: string) => {
    // setTodos(todos.map(el => {
    //   if (el.id !== id) return el

    //   return {
    //     ...el, 
    //     status: !el.status
    //   }
    // }))
  }

  return (
    <div>
     <InputForm note={note} setNote={setNote} />
     <AddTodo addTodo={addTask}/>
      <TodoList />
    </div>
  )
}

export default App;
