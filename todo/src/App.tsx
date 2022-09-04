import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  
  const [todos, setTodos] = useState<{id: string, message: string, status: boolean}[]>([])
  const [note, setNote] = useState('')

  const addTodo = () => {
   setTodos([
    ...todos, 
    {
      id: new Date().toISOString(), 
      message: note,
      status: false
  } 
  ])
    setNote('')
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(el => el.id !== id))
  }
  
  const toggleStatus = (id: string) => {
    setTodos(todos.map(el => {
      if (el.id !== id) return el

      return {
        ...el, 
        status: !el.status
      }
    }))
  }

  return (
    <div>
      <input 
        style={{marginLeft: '50px', marginTop: '50px'}}
        type="text" 
        value={note}
        onChange={e => setNote(e.currentTarget.value)}
      />
      <button onClick={addTodo} style={{marginLeft: '50px'}}>Add note</button>
      <TodoList 
        todos={todos} 
        toggleStatus={toggleStatus} 
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App;
