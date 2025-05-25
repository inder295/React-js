import { useRef } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [iLoading,setILoading]=useState(false);
  const [dLoading,setDLoading]=useState(false);

  const incrementRunning=useRef(false);
  const decrementRunning=useRef(false);

  function increment(){
    setCount((pre)=> pre+1);
  }

  function decrement(){
    setCount(pre=> pre-1)
  }

  const handleClick = async (fn,setLoading,running) =>{
     
    if(running.current){
      return;
    }

    running.current=true;

     setLoading(true);
     await new Promise((resolve)=> setTimeout(resolve, 1000))
     fn()
     setLoading(false)

    running.current=false; 
  }

  return (
    <>
      
      <h1>Button testing</h1>
      <h2>Count is here {count}</h2>
      <p>click on button to increment</p>
    
      <button onClick={()=> handleClick(increment,setILoading,incrementRunning)}>{iLoading? "Incremnenting...": "Increment"}</button>
      <br /><br />
      <button onClick={()=>handleClick(decrement,setDLoading,decrementRunning)}>{dLoading? "Decrementing..": "Decrement"}</button>
      
    </>
  )
}

export default App
