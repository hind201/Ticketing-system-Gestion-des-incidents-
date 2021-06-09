


import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

import NavBarAdmin from './navBarAdmin'

function GetTicket() {
    const [getTicket, setGetTicket]=useState([])

    const getAllTicket=()=>{
        axios.get('http://localhost:7000/api/getTicket')
        .then(response=>{
            setGetTicket(response.data) 
        })
    }
   
    useEffect(()=>{
        getAllTicket () 
    },[])

        
   

    return (
      <>
       <NavBarAdmin/>
        <div>
        <div className="container">
            <h1>Ticket List</h1>
             <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name of Employee</th>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Assign</th>
          </tr>
        </thead>
        <tbody>
         {getTicket.map((Data)=>(
              <tr >
               <td>{Data.date}</td>
                <td>{Data.user_id.firstName +'' + Data.user_id.lastName}</td>
                <td>{Data.title}</td>
                <td>{Data.type}</td>
                <td>{Data.priority}</td>
                <td>{Data.status}</td>
               
                <td>
                 
                </td>
                <td><Link to={`/assign=${Data._id}`} className="btn btn-secondary ">Assign</Link></td>
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

export default GetTicket

