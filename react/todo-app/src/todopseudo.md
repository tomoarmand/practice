1. In App.jsx, import useState from React.

2. Create a state variable for the list of todos: const [todos, setTodos] = useState([]);

3. Create a state variable for the input value: const [inputValue, setInputValue] = useState('');

4. Add a form element with an input field and a submit button.  Set the value of the input field to inputValue.

5. Create a function called handleInputChange to update the inputValue state as the user types.  This is acheived by passing an event as a parameter, and using setInputValue setter to set inputValue to the value of the target input field.  The function is then used by the onChange property of the returned input field.

6. Create a function called handleSubmit to add a new todo when the form is submitted.  This is acheived by passing an event as a parameter, preventing the default behaviour of the submit button, and creating a newTodo object, which will have a unique ID (id:date.now()), the text key of inputValue and a completed key of false.

setTodos setter then creates an array literal, using spread syntax to copy each element from the existing array, adding it to the new array, and adding the newly created newToDo object at the end of the new array.

setInputValue setter then clears the input field.

7. Use map() to render each object from the todos array inside a <ul>.  An <li> should be returned with the key of the id of the object, the text of the object, and a button, which calls a handleDelete function onClick.  

8. Create a handleDelete function that removes a todo item based on its ID.  This is achieved by passing a todoId parameter to the function, using filter() to return an array with only items which do not match the Id of the current item.

This array is then stored in an updatedTodos variable, and the setTodos setter then sets the value of the todos array to the updatedTodos array.

9.  Create a handleStrike function.  It should take a todoId parameter.  In an updatedTodos variable, if the todoId matched the current object's id, the todos array is mapped to return an object literal containing the current todo with the completed: !todo.completed.  The rest of the todos are then returned, and setTodos sets updatedTodos as the new todos array.

10. A style is added to the returned <li> in the main component.  It should be a textDecoration property with a value conditional to whether todo.completed is true or false.  An checkbox is then added before the text, with checked set to todo.completed, and an onChange listener which calls handleStrike.

handleInputChange, handleSubmit, handleDelete