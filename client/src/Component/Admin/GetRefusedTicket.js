
import React, {useState,useEffect}  from "react"
import axios from 'axios'
import NavBarAdmin from './navBarAdmin'


function GetResolvedTicket() {

  const  [refused,setRefused]=useState([])
  const GetAllTicket=()=>{
    axios.get('http://localhost:7000/api/getRefusedTicket')
    .then(response=>{
        setRefused(response.data) 
    })
}

useEffect(()=>{
    GetAllTicket () 
},[])

    

return (
  <>
     <NavBarAdmin/>
    <div>
    <div className="container">
        <h1>Ticket Refused</h1>
         <table class="table">
    <thead>
      <tr>
        <th scope="col">Date</th>
        
        <th scope="col">Title</th>
        <th scope="col">Type</th>
        <th scope="col">Priority</th>
        <th scope="col">Status</th>
       
      </tr>
    </thead>
    <tbody>
     {refused.map((Data)=>(
          <tr >
           <td>{Data.date}</td>
            <td>{Data.title}</td>
            <td>{Data.type}</td>
            <td>{Data.priority}</td>
            <td>{Data.status}</td>
           
            <td>
             
            </td>
           
         </tr>
       ))
     }
    </tbody>
  </table>
</div>
    </div>
    </>
)
}

export default GetResolvedTicket

