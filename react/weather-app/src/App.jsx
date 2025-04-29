import { API_KEY, BASE_URL } from "./constants.js";
import { getWeatherIcon, convertToCelcius } from "./utils.js";
import './App.css'

function App() {

  const fetchWeatherData = async (country) => {
    const response = await fetch(`${BASE_URL}/${country}?key=${API_KEY}`);
    const result = await response.json();
    return result;
  };

  const fetchAndDisplayData = async (country) => {
    const weatherInfo = await fetchWeatherData(country);


  return (
    <>
      <ol>
        {weatherInfo.map((day) => (
          <li>
            `${day.description}${icon} with a min of ${day.tempMin}C and a max of ${day.tempMax}C`
          </li>
        ))}
      </ol>
    </>
  )
}
}
export default App
