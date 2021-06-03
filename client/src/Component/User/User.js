import React, {useState, useEffect} from "react"

import {Link} from 'react-router-dom';
import axios from 'axios'
// import CreateTicket from "../User/CreateTicket"

function Tickets() {
     const [ticket, setTicket] = useState([])
     
     useEffect(()=> {
          axios.get('http://localhost:7000/api/getTicketUser').then(response => {
               setTicket(response.data)
               console.log(response)
          })
     }, [])


     const deleteTicket = (id) => {
          const ask = window.confirm('Are sure you want to delete this ticket?')
          if (ask === true) {
               axios.delete(`http://localhost:7000/api/deleteTicket/${id}`).then(()=> {
                    window.location.reload()
               })
          }          
     }


     return (
          
          <>
         
          <div id="wrapper">

    
          <div id="page-content-wrapper">
               <div className="container-fluid">
                    <h1> Employee</h1>
                    
                    {/* <button type="button" className="btn btn-primary" data-target="#createTicket">Create Ticket</button> */}
                    <Link to={`/create`}><button className="btn btn-primary">Create Ticket</button></Link>
                    

                    <div className="row">     
                         <table className="table mt-4">
                         <thead className="thead-red"> 
                              <tr>
                                   <th>Date</th>
                                   <th>Title</th>
                                   <th>Type</th>
                                   <th>priority</th>
                                   <th>Status</th>
                                   <th></th>
                              </tr>
                              </thead>

                              {/* Body Table */}
                              <tbody>

                              {ticket.map((val, key) => (
                                   <tr key={key}>
                                        <th>{val.date}</th>
                                        <td>{val.title}</td>
                                        <td>{val.type}</td>
                                        <td>{val.priority}</td>
                                        <td>{val.status === 'waiting' ? <b style={{color: "pink"}}>waiting</b> : (val.status === 'assigned' ? <b style={{color: "yellow"}}>Assigned</b> : <b style={{color: "green"}}>Resolved </b> )}</td>
                                        <td>
                                             <button onClick={()=>{deleteTicket(val._id)}} className="btn btn-secondary sm mr-1"><b style={{color: "red"}}>Delete</b></button>
                                        </td>
                                   </tr>
                              ))}

                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
          </div>
          </>
     )
}

export default Tickets
