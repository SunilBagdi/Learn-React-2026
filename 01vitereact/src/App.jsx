import React, { useState } from 'react'

const App = () => {
  
  const myName = "sunil"

  let [counter, setCounter] = useState(0);

  const increaseValue = () =>{
    if (counter < 20) {
      setCounter(counter + 1)
    }
    else{
      counter = 0;
    }
  }
  const decreaseValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <div>
      <h1>My name is {myName}</h1>
      <h1>Counter Number: {counter}</h1>
      <button onClick={increaseValue}>Increse Vlaue</button>
      <button onClick={decreaseValue}>Decrese Value</button>
    </div>
  )
}

export default App