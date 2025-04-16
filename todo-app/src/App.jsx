import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  function handleDelete(todoId) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
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
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        onChange={handleInputChange}
        value={inputValue} />
        <button type="submit">Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
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
