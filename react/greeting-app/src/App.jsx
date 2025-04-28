import { useState, useEffect } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import NameInput from './components/NameInput'

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if(submitted) {
      window.alert("Name Submitted!")
    }
  }, [submitted])

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {!submitted && <NameInput
      handleNameChange={handleNameChange}
      handleSubmit={handleSubmit}
      name={name}
       />}
       {submitted && <Greeting name={name} />}
    </>
  )
}

export default App
