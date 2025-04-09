import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import React from 'react';
import WhereAreWe from './WhereAreWe';
import Weather from './Weather';

function App() {

  return (
    <>
      <div className="App">
        <h1>Transit App</h1>
        <WhereAreWe station="Onehunga"/>
        <Weather/>
      </div>
    </>
  )
}

export default App
