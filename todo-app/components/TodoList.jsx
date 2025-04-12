// Container for all todos

import TodoForm from '/components/TodoForm'
import TodoItem from '/components/TodoItem'
import TodoList from '/components/TodoList'

function TodoList(props) {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={props.toggleTodo}
                deleteTodo={props.deleteTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList