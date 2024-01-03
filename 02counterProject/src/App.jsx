import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0)

  // let counter = 0;

  const addValue = () =>{
    // console.log("value added", Math.random());
    // counter = counter + 1;
     setCounter( prevCounter => prevCounter + 1)
     setCounter( prevCounter => prevCounter + 1)
     setCounter( prevCounter => prevCounter + 1)
     setCounter( prevCounter => prevCounter + 1)
     setCounter( prevCounter => prevCounter + 1)
  // setCounter(counter + 1)
   console.log("clicked" , counter);
  }

  const subtractValue = () =>{

    if(counter <= 0 ){
      return
    }
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
    <h1>React counter app</h1>
    <h2>Counter Value: {counter} </h2>
    <button onClick={addValue}>Add</button>
    <br/>
    <button onClick={subtractValue}>Subtract</button>
    </>
  )
}

export default App
