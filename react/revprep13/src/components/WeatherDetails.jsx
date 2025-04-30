function WeatherDetails({ weather }) {
    return (
        <div>
            <h2>Weather App</h2>
            <p>Tempertaure: {weather.current.temperature_2m}{weather.current_units.temperature_2m}</p>
            <p>Elevation: {weather.elevation}</p>
        </div>
    )
}

export default WeatherDetails