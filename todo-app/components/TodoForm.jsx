// Adds new todos

function TodoForm(props) {
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (text.trim()) {
            props.addTodo(text);
            setText("");
        }
    }

return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={text}
        onChange={function(event) {
            setText(event.target.value)}}
        placeholder="Add todo..."
        />
        <button>Add</button>
    </form>
)
}

export default TodoForm