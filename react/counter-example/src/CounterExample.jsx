import { useState } from 'react'

export function CounterExample() {
  const [year, setYear] = useState(2025);

  // const yearGetterAndSetter = useState(2025);
  // const year = yearGetterAndSetter[0];
  // const setYear = yearGetterAndSetter[1];

  const [food, setFood] = useState('pizza')
  const [yearColor, setYearColor] = useState('black')

  function increaseYear() {
    setYear(year + 1)
    if(year == 2034 - 1) {
      setFood('fries')
      setYearColor('red')
    } else {
      setYearColor('black');
      setFood('pizza')
    }
  }

  
  function decreaseYear() {
    setYear(year - 1)
    setFood('fresh pizza')
    if (year == 2018){
      setFood('seafood')
      setYearColor('blue')
    } else {
      setYearColor('black');
    }
  }

  console.log("Rendering component. Year: " + year + " Year color: " + yearColor);
  return (
    <>
      <div style={{ fontSize:'40px', fontWeight: '700', color: yearColor }}>{year}</div>
      <br/>
      <button className="btn btn-secondary" onClick={()=>decreaseYear()} >-</button>{' '}
      <button className="btn btn-primary" onClick={()=>increaseYear()}>+</button>
      <br/>
      <br/>
      <br/>
      <div style={{ fontSize:'40px', fontWeight: '300', color: yearColor }}>{food}</div>
    </>
  )
}
