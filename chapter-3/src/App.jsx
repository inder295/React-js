
import { useState,useEffect } from 'react';
import TableComponent  from './components/table';


function App() {

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false)
  

  useEffect(()=>{
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setData(data))    
    .catch((err)=> console.log(err.message)
    )
    .finally(()=>setLoading(false))

  },[])


  
  return <>
      <h2 style={{textAlign: 'center'}}>Table Content</h2>
    
     <div>
       <TableComponent users={data} loading={loading} />
     </div>
    </>
}

export default App;
