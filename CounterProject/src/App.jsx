import { useState } from "react"

function App() {
  const [count,setcount]=useState(0)
  // let num  = prompt("enter number")
  const increment=()=>{

    if(count<20)
    setcount(count+1)
  }
  const decrement =()=>{
    if(count>0)
    setcount(count-1)
  }


  return (
    <>
  
    Counter value :{count}
    <br />
    <button onClick={increment} >Increment</button>
    <br />
    <button onClick={decrement} >Decrement</button>

    </>
  )
}

export default App
