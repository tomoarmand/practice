function PinInput({ pin, handlePinChange, onSubmit }) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            onSubmit()
        }}>
            <input
            type="password"
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter Pin"
            maxLength="4"
            />
            <button
            type="button"
            onClick={onSubmit}
            >Submit</button>
        </form>
    )
}

export default PinInput