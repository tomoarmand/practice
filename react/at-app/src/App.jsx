import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [stopId, setStopId] = useState("");
  const [stopAttributes, setStopAttributes] = useState({});

  const atApiUrl = `https://api.at.govt.nz/gtfs/v3/stops/${stopId}`;

  function handleInputChange(event) {
    setStopId(event.target.value)
  }

  const stopData = async () => {
    const response = await fetch(atApiUrl, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': '524249b7f4b845859aa6960ed3cc1acf'
      }
    })
    // console.log(response.data)
    const stopResponse = await response.json();
    setStopAttributes(stopResponse.data.attributes);
    console.log(stopResponse.data.attributes);

    setStopId("");
  }


  return (
    <>
    <div>
    <h1>Auckland Transport Stop Info</h1>
    <label style={{ marginRight: "10px" }}>
    Bus Stop Id:⠀
    <input 
    type="text"
    value={stopId}
    onChange={handleInputChange}
    />
    </label>
    <button onClick={stopData}>Get Info</button>
    <h2>Stop: {stopAttributes.stop_name}</h2>
    <p>Stop Code: {stopAttributes.stop_code}</p>
    <p>Location: {stopAttributes.stop_lat} {stopAttributes.stop_lon}</p>
    </div>
    </>
  )
}

export default App
