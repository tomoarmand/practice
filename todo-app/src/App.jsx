import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from '/components/TodoForm'
import TodoItem from '/components/TodoItem'
import TodoList from '/components/TodoList'

// Main App component
function App() {
  const [todos, setTodos] = useState([]);
  
  // Add a new todo
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }
  
  // Toggle todo completion status
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }
  
  // Delete a todo
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;