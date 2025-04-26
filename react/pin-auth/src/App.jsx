import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import PinInput from './components/PinInput'
import ButterflyGardenImage from './components/ButterflyGardenImage'


function App() {
  const [pin, setPin] = useState("");
  const [showImage, setShowImage] = useState(false)
  const [error, setError] = useState("");
  const [touristName, setTouristName] = useState("");

  useEffect(() => {
    showImage ? setTouristName("John") : setTouristName("");
  }, [showImage]);

  function handlePinChange(event) {
    setPin(event.target.value);
  }

  function handleSubmit() {
    if(pin === "8008") {
      setShowImage(true);
      setError("");
    } else {
      setShowImage(false);
      setError("Incorrect PIN");
    }
  }

  return (
    <div>
      <Header touristName={touristName} showImage={showImage}/>
        {!showImage && <PinInput
        pin={pin}
        handlePinChange={handlePinChange}
        onSubmit={handleSubmit} 
        />}
        {error && <p>{error}</p>}
        {showImage && <ButterflyGardenImage />}
    </div>
  )
}

export default App