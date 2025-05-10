import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState();

  const fetchQuotes = async () => {
    
    const response = await fetch("https://gomezmig03.github.io/MotivationalAPI/en.json");

    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);

    setQuote(data[randomIndex])

    console.log(response)
    console.log(data)
  }

  return (
    <>
    <button onClick={fetchQuotes}>Get Random Quote</button>
    <p><b>{quote && quote.phrase}</b></p>
    <p>Author: {quote.author}</p>
      
    </>
  )
}

export default App
