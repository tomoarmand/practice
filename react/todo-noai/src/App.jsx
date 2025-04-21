import './App.css'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    setTodos([...todos, newTodo]);

    setInputValue("");
  }

  function handleDelete(todoId) {
    const updatedTodos = todos.filter((todo) => todoId !== todo.id);

    setTodos(updatedTodos);
  }

  function handleStrike(todoId) {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      />
      <button type="submit">
        Add
      </button>
      <ul>
        {todos.map((todo) => (
        <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleStrike(todo.id)}
          />
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </li>
      ))}
      </ul>
    </form>
    </>
  )


}

export default App
