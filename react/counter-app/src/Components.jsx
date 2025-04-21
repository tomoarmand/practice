import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <br/>
      <button onClick={()=>setCount(count + 1)}>+</button>{"  "}
      <button onClick={()=>setCount(count - 1)}>-</button>
      <br/>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}


export function Greet() {
  const [name, setName] = useState("");

  return (
    <>
    <input
    type="text"
    onChange={(event)=>setName(event.target.value)}
    //onChange does the same thing as an "input" eventlistener
    />
    <div>
      {name ? `Hello ${name}!` : `Please enter your name`}
    </div>
    </>
  )
}


export function Toggle() {
  const [visible, setVisible] = useState(true)

  function toggle() {
    setVisible(!visible)
  }

  return (
    <>
    <p>{visible ? "This text is visible" : ""}</p>
    {visible && <p>This text is visible</p>}
    {/* If true, evaluates right hand operand and returns it's value, 
    if not, returns false and doesn't evaluate right hand operand */}
    <button onClick={toggle}>
      {visible ? "Hide" : "Show"}
    </button>
    </>
  )
}


export function ChangeColor() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div style={{width: "20px", height: "20px", backgroundColor: color}}></div>
    <button onClick={()=>setColor("Red")}>Red</button>{" "}
    <button onClick={()=>setColor("Green")}>Green</button>{" "}
    <button onClick={()=>setColor("Blue")}>Blue</button>{" "}
    <button onClick={()=>setColor("White")}>Reset</button>
    </>
  )
}

export function Todo () {
  const [strike, setStrike] = useState("none")

  function toggle () {
    if(strike == "none") {
      setStrike("line-through")
      // Style objects must be camel case, values are strings,
      // so not camel case
    } else {
      setStrike("none")
    }
  }

  return (
    <>
    <input type="checkbox" onChange={toggle}/>

    <p style={{textDecoration: strike}}>Shopping</p>
    </>
  )
}


export function TodoConcise() {
  const [striked, setStrike] = useState(false);

  function toggle() {
    setStrike(!striked)
  }

return (
  <>
  <input type="checkbox" onChange={toggle}/>
  <p style={{textDecoration: striked ? "line-through" : "none"}}>Shopping</p>
  </>
)
}
