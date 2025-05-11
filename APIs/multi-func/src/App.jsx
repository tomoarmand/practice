import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [meal, setMeal] = useState(null)
  const [numberFact, setNumberFact] = useState(null)

  const fetchQuotes = async () => {
    
    const response = await fetch("https://gomezmig03.github.io/MotivationalAPI/en.json");

    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);

    setQuote(data[randomIndex])

    console.log(response)
    console.log(data)
  }

  const fetchAnswers = async () => {
    const response = await fetch("http://answerbook.david888.com/?lang=en");
    const data = await response.json();
    setAnswer(data);
  }

  const fetchMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const data = await response.json();
    setMeal(data)
  }

  // const fetchBirdSounds = async () => {
  //   const response
  // }

  const fetchNumberFact = async () => {
    const response = await fetch("http://numbersapi.com/random/math?json");
    const data = await response.json();
    setNumberFact(data)

  }

 function clearAll() {
  setAnswer(null);
  setQuote(null);
  setMeal(null);
  setNumberFact(null);
 }

  return (
    <>
    <button onClick={fetchQuotes}>Get Random Quote</button>
    {quote && (
      <>
    <p><b>{quote && quote.phrase}</b></p>
    <p>Author: {quote && quote.author}</p>
      </>
    )}
    <button onClick={fetchAnswers}>Answer your question</button>
    <p>{answer && answer.answer}</p>
    <button onClick={fetchMeals}>Dinner Idea</button>
    {meal && meal.meals.map((el) => (
      <p>{el.strMeal}</p>
    ))}
    <button onClick={fetchNumberFact}>Get Number Fact</button>
    <p>{numberFact && numberFact.text}</p>
    <button onClick={clearAll}>Clear All</button>
    </>
  )
}

export default App
