import { useState } from 'react'

function TodoForm({ onAddTodo }) {
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm