import React, { useState } from "react";
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContentProvider from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContentProvider>
      <h1>React with Chai</h1>
      <Login />
      <Profile/>
    </UserContentProvider>
  )
}

export default App
