import { useState } from 'react'
import './App.css'

function App() {

const [combinedAttributes, setCombinedAttributes] = useState();

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

  return (
    <>
    <button onClick={fetchCombinedData}>Get Data</button>
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
