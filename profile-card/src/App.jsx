import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'

// import React from 'react';

function App() {

  return (
    <>
    <h1>Profile Card</h1>
      <ProfileCard name="Tomo" age={32} occupation="Student"/>
    </>
  )
}

export default App
