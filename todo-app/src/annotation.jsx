// This function toggles the 'completed' status of a todo item
function handleStrike(todoId) {
  // Create a new array by mapping through all existing todos
  const updatedTodos = todos.map((todo) => {
    // Check if this todo matches the one we want to update
    if (todo.id === todoId) {
      // If it matches, create a new todo object with all properties copied (...)
      // but flip/toggle the 'completed' property from true to false or false to true
      return { ...todo, completed: !todo.completed };
    }

    // For todos that don't match the ID, return them unchanged
    return todo;
  });
  
  // Update the state with our new array, replacing the old todos array
  // This triggers a re-render of the component
  setTodos(updatedTodos)
}

// The JSX for rendering the list of todos
<ul>
  {/* Map through each todo in the todos array to create list items */}
  {todos.map((todo) => (
    <li 
      key={todo.id} // Unique React key for each list item for efficient rendering
      style={{ 
        // Conditional styling: if todo is completed, add line-through, otherwise no decoration
        textDecoration: todo.completed ? "line-through" : "none" 
      }}
    >
      <input 
        type="checkbox"
        // When checkbox is clicked, call handleStrike with this todo's ID
        onClick={() => handleStrike(todo.id)}
      />
      {/* Display the todo text */}
      {todo.text}
      {/* Delete button that calls handleDelete with this todo's ID when clicked */}
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  ))}
</ul>