import './App.css'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
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
      if(todoId == todo.id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={inputValue}
      onChange={handleInputValue}
      />
      <button type="submit">Add</button>
    </form>
    <ul>
      {todos.map((todo) => (
        <li
        key={todo.id}
        style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {handleStrike(todo.id)}}
          />
        {todo.text}
        <button onClick={() => {handleDelete}}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App