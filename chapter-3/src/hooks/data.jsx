import { useState,useEffect } from "react";

export function useData(){

 const [data,setData]=useState([])
    
 useEffect( ()=>{

         fetch("https://jsonplaceholder.typicode.com/users")
         .then((res)=>res.json())
         .then((res)=>setData(res))
         
            
    })

    return <>
      <h1> New One Called </h1>
      {console.log(data)}
    </>
}