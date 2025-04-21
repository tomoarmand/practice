import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [year, setYear] = useState(2025);
  let [color, setColor] = useState("red")

  function handleClick() {
    if(color === "red") {
      setColor("blue");
    } else {
      console.log(`color is ${color}`)
      setColor("red")
    }
  }

  return (
    <>
      <div style={{ color: color }}>{year}</div>
      <h2>Select Year</h2>
      <button onClick={() => {
        setYear(year - 1);
        handleClick();
        }}>-</button>{" "}
      <button onClick={() => {
        setYear(year + 1);
        handleClick();
        }}>+</button>
    </>
  )
}

export default App
