import { useState } from 'react'
import { Countdown } from './Countdown.jsx'
import './App.css'


function App() {
  return (
    <>
      <h2>Event Countdown</h2>
      <Countdown eventName="Dragon"/>
    </>
  )
}

export default App
