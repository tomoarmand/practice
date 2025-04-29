1. Create separate components for Header, TodoForm and TodoList and import them into App.jsx.  Create another component called TodoItem, and import it into TodoList.

2. Create an App component in App.jsx.  Declare useState variable for todos.

3. Create a function called handleAddTodo, which takes a 'text' parameter and creates a newToDo object with the id: Date.now(), text: text and completed: false. Use setTodos to set todos to a new array containing the newTodo object.

4. Create a handleDeleteTodo function.

5. Create a handleToggleTodo function.

6. Return a div containing the Header (title prop), TodoForm (onAddTodo prop) and TodoList (todos, onDeleteTodo, onToggleTodo prop).

7. The TodoForm component takes an onAddTodo prop and declared an inputValue useState variable.  It contains a handleInputChange function, and a handleSubmit function, which prevents default behaviour, calls onAddTodo with inputValue as the parameter, and clears the input field.  Return the form.

8. The TodoItem component takes 3 props (todo, onDelete, onToggle).  It returns a <li> with conditional styling, containing a checkbox, {todo.text} in a <span>, and a delete button.

9. The TodoList component takes 3 props (todos, onDeleteTodo, onToggleTodo).  It returns an <ul> which contains the mapped todo array, returning a TodoItem component for each todo.  Each TodoItem is given a key and the relevant props.

