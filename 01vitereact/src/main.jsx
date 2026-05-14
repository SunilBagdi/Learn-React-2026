import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App with Chai !</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
  
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'Click me to visit google',
  //anotherUser
)

createRoot(document.getElementById('root')).
render(
  /*<MyApp/> */
  /* MyApp() Asa Likhe skte hai but yh good practics nhi hai*/  
  //anotherElement
   <App/>
  //reactElement
)
