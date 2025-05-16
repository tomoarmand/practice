import { useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import NavBar from './components/NavBar'

import { Link } from 'react-router-dom'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(todoId) {
    const updatedTodos = todos.filter((todo) => todoId !== todo.id);
    setTodos(updatedTodos);
  }

  function handleToggleTodo(todoId) {
    const updatedTodos = todos.map((todo) => {
      if(todoId == todo.id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <>
    <h1 >This is App1</h1>
    <NavBar />

    <Link to="/App2">Go to App2</Link>
    <Header title="Todo App" />
    <TodoForm onAddTodo={handleAddTodo} />
    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </>
  )

}



export default App
