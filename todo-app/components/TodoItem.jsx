// Idividual task in list

import TodoForm from '/components/TodoForm'
import TodoItem from '/components/TodoItem'
import TodoList from '/components/TodoList'

function TodoItem(props) {
    return (
        <ul>
            {props.todos.map(todo => (
                <li key={todo.id}>
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => props.toggleTodo(todo.id)}
                    />
                    <span
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none"
                    }}
                    >
                    {todo.text}
                    </span>
                    <button onClick={() => props.deleteTodo(todo.id)}>
                        Delete
                    </button>
                    </li>
            ))}
        </ul>
    );
}

export default TodoItem