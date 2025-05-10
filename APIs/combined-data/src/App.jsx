import { useState } from 'react'
import './App.css'

function App() {

const [combinedAttributes, setCombinedAttributes] = useState();
const [answer, setAnswer] = useState({})

  const fetchCombinedData = async () => {
    const apiUrl = `https://api.at.govt.nz/realtime/legacy/`
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': "27583731abd1446eaee4826ef121ba38"
      }
    });

    const combinedDataResponse = await response.json();

    setCombinedAttributes(combinedDataResponse.response.entity);
    console.log(combinedDataResponse.response.entity)
  }

  const fetchAnswers = async () => {
    const response = await fetch("http://answerbook.david888.com/?lang=en");
    const data = await response.json();
    console.log(response)
    console.log(data)

    setAnswer(data)
  }

  function callFunctions() {
    fetchCombinedData();
    fetchAnswers();

  }

  return (
    <>
    <button onClick={callFunctions}>Get Data</button>
    <p>{answer.answer}</p>
    <ul>
      {combinedAttributes && combinedAttributes.map((att, index) => (
        <li key={index}>
          <p>{att.id}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
