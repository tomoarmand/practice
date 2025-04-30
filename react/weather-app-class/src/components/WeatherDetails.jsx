function WeatherDetails({ weather }) {
    return (
        <div>
            <h2>Weather Details</h2>
            <p>Temperature: {weather.current.temperature_2m}{weather.current_units.temperature_2m}</p>
            <p>Elevation: {weather.elevation}m</p>
        </div>
    )
}

export default WeatherDetails