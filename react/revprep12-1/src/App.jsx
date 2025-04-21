import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Weather} from "/src/Weather"
import {WhereAreWe} from "/src/WhereAreWe"
function App() {

  return (
    <>
      <div>
        <h1>App</h1>
        <WhereAreWe station="Takapuna" />
        <Weather temperature="19C" />
        
      </div>
    </>
  )
}

export default App
