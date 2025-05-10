import { useState } from 'react'
import './App.css'

function App() {

  const [position, setPosition] = useState();

  const fetchPositionData = async () => {
    const apiUrl = `https://api.at.govt.nz/realtime/legacy/`
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key' : "943fa207b9f644128eb0c14fcb9b25c0"
      }
    });

    const positionResponse = await response.json();

    setPosition(positionResponse.response.entity);
    console.log(positionResponse.response.entity.trip_update?.vehicle?.license_plate)
  }

  return (
    <>
    <button onClick={fetchPositionData}>Get Data</button>
    <ul>
      {position && position.map((att, index) => (
        <li key={index}>
          <p>ID: {att.id}</p>
          <p>License Plate: {att.trip_update?.vehicle?.license_plate}</p>
        </li>
      ))}
    </ul>
     
    </>
  )
}

export default App
