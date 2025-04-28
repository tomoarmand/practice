import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Header from './components/Header'


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
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  function handleToggleTodo(todoId) {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
<div>
  <Header title="Todo App" />
  <TodoForm onAddTodo={handleAddTodo} />
  <TodoList 
  todos={todos}
  onDeleteTodo={handleDeleteTodo}
  onToggleTodo={handleToggleTodo}
  />
</div>
  )
}


export default App
