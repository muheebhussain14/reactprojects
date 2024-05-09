import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
    <h1>hello !</h1>
    </div>
  )
}

// ==== other way of creating element using object ====
// const anotherElement = {
//   <a href="https://google.com" target='_blank'>Visit google</a>
// }

// ==== react element ====
// const reactElement = React.createElement (
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Click me to visit google'
//   // anotherElement // we can use the object created above too
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,

  // anotherElement

  // reactElement
)
 