1. Create the WhereAreWe component 
- Create WhereAreWe.jsx
- import React from 'react'
- function WhereAreWe receives a single prop (station)
- Returns a div containing 'You are currently in {station.name}'
- Export default WhereAreWe

2. Import and use in App.jsx
- Modify existing App.jsx
- import React from 'react'
- import WhereAreWe from './WhereAreWe' (Adjust path if neded)
- function App returns a div with the className="App", conaining an h1 and <WhereAreWe name="Onehunga">

3. Create a Weather component
- import React from 'react'
- Create Weather.jsx
- Create a Weather function which returns a div
- Returns a div with the text "19°C" and, an <img> with the alt="It is a but sunny today"

4. In App.jsx, import and add the Weather component after the WhereAreWe component in the function.

* All components and self-closing tags end with /
