
function WeatherDetails({ weather }) {
    return (
        <>
        <h2>Weather App</h2>
        <p>{weather.current.temperature_2m}{weather.current_units.temperature_2m}</p>
        <p>{weather.elevation}</p>
        </>
    )
}

export default WeatherDetails