function NameInput({ handleNameChange, handleSubmit, name }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Type your name to receive a greeting!"
            />
            <button type="submit">Greet</button>
        </form>
    )
}

export default NameInput