
import { useState,useEffect } from 'react';

function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setData(data))    
    .catch((err)=> console.log(err)
    )
  },[])


  
  return (
     
    <>
      <h2 style={{textAlign: 'center'}}>Heading on the way</h2>
      <hr />
      
     
     <p style={{color: "black", padding:"10px", }}>
      {data.map((d)=>(
        <div>
          <p> {"Name = "+ d.name}</p>
          <p>{"Email = "+d.email}</p>
          <hr />
          
        </div>
      ))}
     </p>


    </>
  )
}

export default App
