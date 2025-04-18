import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event){
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);

    setInputValue("");
  }

  function handleDelete(todoId) {
    console.log("Deleting todo with id:", todoId)
    console.log("Current todos", todos)
    const updatedTodos = todos.filter(todo => todoId !== todo.id);
    console.log("Updated todos:", updatedTodos)

    setTodos(updatedTodos);

  }



  return (
    <>
    <form onSubmit={handleSubmit}>
    <input
    onChange={handleInputChange}
    type="text"
    value={inputValue}
    />
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