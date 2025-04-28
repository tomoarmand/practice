function TodoItem({ todo, onDelete, onToggle }) {

    return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {onToggle(todo.id)}}
        />
        <span>{todo.text}</span>
        <button onClick={() => {onDelete(todo.id)}}>Delete</button>
    </li>
    )
}

export default TodoItem