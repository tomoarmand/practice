// npm create vite@latest

import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { TitleCard } from './TitleCard.jsx'


function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  //   setTodos(storedTodos);
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  function handleDelete(todoId) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  function handleStrike(todoId) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });
    setTodos(updatedTodos)
  }


  function handleSubmit(event) {
    event.preventDefault();
    // Prevents page from refreshing

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };

      // Array literal
      setTodos([...todos, newTodo]);
      // Spread syntax copies each element from the existing todos array
      // into the newly created new array.  newTodo is adding the newly created
      // object to the end of that array

      setInputValue("");
    }

  }


  return (
    <>
      <TitleCard
        name="Tomo"
        age="32"
        occupation="Junior Developer"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue} />
        <button type="submit">Add</button>
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
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </form>

    </>
  )

}



export default App
