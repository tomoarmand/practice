import { useState } from 'react';
import './App.css';

function App() {
  const [ferries, setFerries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFerryPositions = async () => {
    setIsLoading(true);
    try {
      const atApiUrl = `https://api.at.govt.nz/realtime/legacy/ferrypositions`;

      const response = await fetch(atApiUrl, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': import.meta.env.VITE_AT_SUBSCRIPTION_KEY,
        }
      });

      if (!response.ok) {
        throw new Error("Error fetching ferry positions");
        // heads straight to the catch block.
      }

      const data = await response.json();
      setFerries(data.response);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching ferry positions:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="userInput">
        <button
          onClick={fetchFerryPositions}
          className="submitBtn"
        >GET FERRY POSITIONS &gt;
        </button>
      </div>

      {isLoading && <div>Loading...</div>}

      <h1>Ferry Positions</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {ferries.length>0 && ferries.map((ferry, index) => (
          <li key={index}>
            <h2>Vessel Name: {ferry.name}</h2>
            <p>Call Sign: {ferry.callsign}</p>
            <p>Operator Name: {ferry.operator}</p>
            <p>Longitude: {ferry.lng}</p>
            <p>Latitude: {ferry.lat}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;