import { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";




function WeatherPage() {
    const [weather, setWeather] = useState();

    const weatherData = async () => {
        const response = await fetch("http://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m");

        // console.log(await response.json())
        const data = await response.json();
        setWeather(data);
    }

    useEffect(() => {
        weatherData();
    }, [])
    
    return (
        <>
        {weather && <WeatherDetails weather={weather}/>}
        </>
    )
}

export default WeatherPage