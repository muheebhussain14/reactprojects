import React, { useState } from 'react'

export default function Products({component_name, detail}) {
  const [a,b] = useState(false);
  return (
    <div className='bg-zinc-800'>
    <div className='px-4 py-2 rounded-md bg-pink-600 text-white'>
        <p>67</p>
    </div>
    <div>
    <h4 className={`${a === false ? "text-green-600" : "text-blue-600" }`}>{ a === false ? "Hey" : "Bye" }</h4>
    <button className='px-4 py-2 rounded-md bg-pink-600' onClick={()=>b(!a)}>Change</button>
    </div>
    <h2>{component_name}</h2>
    <h2>{detail.component_name}</h2>
    </div>
  )
}
