import { useEffect, useState } from 'react'
import WeatherDetails from './WeatherDetails'

function WeatherPage() {
    const [weather, setWeather] = useState();

    const weatherData = async () => {
        const response = await fetch("http://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m")
        const data = await response.json();
        console.log(response)

        setWeather(data)
    }
        useEffect(() => {
            weatherData()
        }, []);

        return (
            <>
                {weather && <WeatherDetails weather={weather} />}
            </>
        )
    }



export default WeatherPage

