const convertToCelcius = (tempFahrenheit) => {
  console.log(typeof tempFahrenheit);
  const tempCelcius = (tempFahrenheit - 32) / 1.8;
  return tempCelcius.toFixed(1);
};

const getWeatherIcon = (weather) => {
  if (weather === "rain") return "🌧️";
  else if (weather === "clear-day") return "☀️";
  else if (weather === "partly-cloudy-day") return "🌤️";
};

export { convertToCelcius, getWeatherIcon };
