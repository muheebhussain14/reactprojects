import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Counter Code to change everywhere

function App() {

  let [counter, setCounter] = useState(15)

  // counter increament
  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter)
  }
  
  // counter decreament and minimum should be 0
  const removeValue = () => {
    console.log("clicked", counter);
    if (counter > 0) { 
      setCounter(counter - 1) 
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <br />
      <button>Remove Value {counter}</button>
    </>
  )
}

// BASIC CODE FOR COUNTER NOT RECOMMENDED 

function App() {

  let counter = 5;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
