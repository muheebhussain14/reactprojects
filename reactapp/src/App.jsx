import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b] = useState(10);
  return (
    <div className='w-full h-screen bg-zinc-900 text-center text-white grid gap-2 place-content-center'>
      <h1>{a}</h1>
      <h2>{a+1}</h2>
      <button onClick={()=>b(a+1)} className='px-4 py-2 rounded-md bg-blue-500'>Click</button>
      <Products component_name="Product" detail={{component_name:"Details", type:"react-component"}}/>
    </div>
  )
}

export default App