function PinInput({ pin, handlePinChange, onSubmit }) {
    return (
        <form onSubmit={(event)=> {
            event.preventDefault()
        }}>
            <input
            type="password"
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter PIN"
            maxLength="4"
            />
            <button
            type="submit"
            onClick={onSubmit}
            >
            Submit
            </button>
        </form>
    )
}

export default PinInput