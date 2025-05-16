# 🧭 React Router Setup in Vite + React (Step-by-Step Guide)

This guide walks you through setting up **React Router** in a **Vite + React** project to navigate between two pages: `App1` and `App2`.

---

##  1. Create a New React + Vite Project (if needed)


npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
Skip this if your project already exists.

## 2. Install React Router

npm install react-router

## 3. Project Structure Overview

src/
├── components/
│   ├── Header.jsx
│   ├── TodoForm.jsx
│   └── TodoList.jsx
├── App.jsx              # Main todo app (App1)
├── App2.jsx             # Profile display page (App2)
├── main.jsx             # Entry point with router setup

## 4. App.jsx (Main App)

Import link at the top of the main App:

import { Link } from 'react-router';

## 5. App2.jsx (Second Page)

import { Link } from 'react-router';

function DisplayProfile() {
  return (
    <>
      <h1>This is App2</h1>
      <Link to="/">Go back to App1</Link>
      <img src="https://picsum.photos/200" alt="Random" />
    </>
  );
}

export default DisplayProfile;

## 6. main.jsx (Router Setup)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import DisplayProfile from './DisplayProfile.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/App2" element={<App2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


## Optional Enhancements
404 Page:

jsx
Copy
Edit
<Route path="*" element={<h1>404 - Not Found</h1>} />
Separate Router.jsx for routing logic (optional for large apps)

## Summary
Step	Action
1	Create Vite + React project
2	Install react-router-dom
3	Create App.jsx, App2.jsx, and set up routes in main.jsx
4	Use <Link> for navigation
5	Wrap everything in <BrowserRouter> in main.jsx
6	Run with npm run dev and test URLs

