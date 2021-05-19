import React, { useState } from 'react'
import './App.css';
import MainContainer from './containers/MainContainer'

function App() {

  const [todos, setTodos] = useState(["Todo1", "Todo2", "Todo3"])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (todoToDelete) => {
    const newTodoArray = todos.filter(todo => todo !== todoToDelete)
    setTodos(newTodoArray)
  }

  return (
    <div className="App">
      <MainContainer todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
