import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';

function App() {
  
  //const [todos, setTodos] = useState<{id: string, message: string, status: boolean}[]>([])
  const [note, setNote] = useState('')

  // const addTodo = () => {
  //  setTodos([
  //   ...todos, 
  //   {
  //     id: new Date().toISOString(), 
  //     message: note,
  //     status: false
  // } 
  // ])
  //   setNote('')
  // }

  const deleteTodo = (id: string) => {
    //setTodos(todos.filter(el => el.id !== id))
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
      <AddTodo addTodo={addTodo}/>
      <TodoList  
        toggleStatus={toggleStatus} 
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App;
