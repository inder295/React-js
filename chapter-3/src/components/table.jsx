

export default function TableComponent ({users,loading}){

    
    

    return <>

    
     <table style={{width:"70%",margin:"auto",border:"1px solid black",boxShadow:"0 0 10px rgba(1,1,1,0.5)",borderCollapse:"collapse"}}>
       <thead style={{backgroundColor:"lightblue"}}>
            <tr style={{textAlign:"center",border:"1px solid black",text:"bold",padding:"40px"}}>
                <th>Id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
        </thead>
       
       <tbody style={{backgroundColor:"lightgray"}}>
          
        {
            loading ?  <tr  style={{textAlign:"center",border:"1px solid black"}}>
            <td colspan="4" style={{padding:"10px"}}>Loading...</td>
        </tr>:
        
        
        users.length===0   ? 
        <tr  style={{textAlign:"center",border:"1px solid black"}}>
            <td colspan="4" style={{padding:"10px"}}>No Record Found</td>
        </tr>
        
         :users.map((user)=>(
            <tr style={{textAlign:"center",border:"1px solid black"}}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            
        </tr>
         ))}
    </tbody>
        
     </table>
    </>
}