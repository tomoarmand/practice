import { useEffect, useState } from 'react'
import { API_KEY, BASE_URL } from "./constants.js";
import { getWeatherIcon, convertToCelcius } from "./utils.js";
import './App.css'

function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const fetchWeatherData = async (country) => {
    const response = await fetch(`${BASE_URL}/${country}?key=${API_KEY}`);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    const fetchAndDisplayData = async () => {
      const data = await fetchWeatherData("New Zealand");
      setWeatherInfo(data.days);
    };
    fetchAndDisplayData();
  }, []);


  return (
    <>
      <ol>
        {weatherInfo.map((day, index) => {
          const icon = getWeatherIcon(day.iconCode);

          return (
            <li key={index}>
              {`${day.description} ${icon} with a min of ${convertToCelcius(day.tempMin)}°C and a max of ${convertToCelcius(day.tempMax)}°C`}
            </li>
          );
        })}
        </ol>
    </>
  )
}

export default App
