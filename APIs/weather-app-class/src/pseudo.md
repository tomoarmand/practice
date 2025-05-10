1.  Create a WeatherDetails and a WeatherPage component.
2.  Import WeatherPage into App.jsx and WeatherDetails into WeatherPage.
3.  In WeatherPage, declare a 'weather' useState variable.
4.  Create an async function called weatherData.  It fetches data from an API with 'await fetch' and stores it in a 'response' variable.  It then uses await to convert 'response' into js, and stores it in a 'data' variable.
5.  Use useEffect to ensure weatherData runs only once when the page loads.
6.  Conditionally return WeatherDetails component with the 'weather' state variable.
7.  In WeatherDetails, return a div with a title, and a temperature and evelation accessed through the 'weather' prop.
8.  In App.jsx, return <WeatherPage />.