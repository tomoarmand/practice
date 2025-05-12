import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [meal, setMeal] = useState(null);
  const [numberFact, setNumberFact] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [birdRecording, setBirdRecording] = useState(null);

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

  const fetchBirdSounds = async () => {
    const response = await fetch("https://xeno-canto.org/api/2/recordings?query=cnt:brazil");
    const data = await response.json()

    console.log(data.recordings)

    const randomIndex = Math.floor(Math.random() * data.recordings.length)

    console.log(data.recordings[randomIndex].id)

    setBirdRecording(data.recordings[randomIndex])

    setAudioUrl(`https://xeno-canto.org/${data.recordings[randomIndex].id}/download`)
  }

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
    setAudioUrl(null);
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
      <button onClick={fetchBirdSounds}>Get Brazilian Bird Sound</button>
      {audioUrl &&
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>}
      {audioUrl &&
        <>
          <p>Genus: {birdRecording.gen}</p>
          <p>Species: {birdRecording.sp}</p>
        </>
      }
    </>
  )
}

export default App
