import { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";




function WeatherPage() {
    const [weather, setWeather] = useState();
    const [contact, setContact] = useState();

    const weatherData = async () => {
        const response = await fetch("http://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m");

        // console.log(await response.json())
        const data = await response.json();
        setWeather(data);
    }

    const contactData = async () => {
        const response = await fetch("http://localhost:3000/contacts");

        // console.log(await response.json())
        const data = await response.json();
        setContact(data);
    }

    useEffect(() => {
        weatherData();
        contactData()
    }, [])
    
    return (
        <>
        <div>
        {weather && <WeatherDetails weather={weather}/>}
        {/* {contact && <div>{contact.name}</div>}
        {contact && <div>{contact.occupation}</div>} */}
        <ul>
            {contact.map}
        </ul>
        </div>
        </>
    )
}

export default WeatherPage