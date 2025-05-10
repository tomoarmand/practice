import { useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState({})

  const fetchJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await response.json();

    console.log(response);
    console.log(data);

    setJoke(data);
  }


  return (
    <>
    <button onClick={fetchJoke}>Get Random Joke</button>
    <p>{joke.setup}</p>
    <p>{joke.punchline}</p>

      
    </>
  )
}

export default App
