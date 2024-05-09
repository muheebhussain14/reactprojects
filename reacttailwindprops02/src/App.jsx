import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "Hasnain",
    age: 21
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400'>Tailwind</h1>
      <Card agency="Regal Innovates" tagline="Tech Solution" someObject={myObj} />
      <Card agency="Regal Wear" tagline="Trendy Fashion" someObject={myObj} />
    </>
  )
}

export default App
