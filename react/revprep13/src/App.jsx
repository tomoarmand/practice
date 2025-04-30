import { useState, useEffect } from 'react'
import WeatherPage from './components/WeatherPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WeatherPage />
    </>
  )
}

export default App
