import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const set= ()=>{
    setCount(count+1);
  }
  return (
    <>
    <div>
    <h1>Hello Hello</h1>
     <span >{count}</span>
        
     <button onClick={set}>Increment</button>
    </div>
     
    </>
  )
}

export default App
