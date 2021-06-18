import React, {useState, useEffect} from "react"

// import {Link} from 'react-router-dom';
import axios from 'axios'
import NavBarUser from './NavBarUser'


function Tickets() {
     const [ticket, setTicket] = useState([])
     
     useEffect(()=> {
          axios.get('http://localhost:7000/api/getTicketUser').then(response => {
               setTicket(response.data)
               console.log(response)
          })
     }, [])


     const deleteTicket = (id) => {
          const qst= window.confirm('Are sure you want to delete  ticket?')
          if (qst === true) {
               axios.delete(`http://localhost:7000/api/deleteTicket/${id}`).then(()=> {
                     window.location.reload()
               })
          }          
     }


     return (
          
          <>
         <NavBarUser/>
          <div id="wrapper">

    
          <div id="page-content-wrapper">
               <div className="container-fluid">
                    <h1> Employee</h1>
                    
                   
                    

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

                              {ticket.map((value, key) => (
                                   <tr key={key}>
                                        <th>{value.date}</th>
                                        <td>{value.title}</td>
                                        <td>{value.type}</td>
                                        <td>{value.priority}</td>
                                        <td>{value.status === 'waiting' ? <b style={{color: "pink"}}>waiting</b> : (value.status === 'assigned' ? <b style={{color: "red"}}>Assigned</b> : <b style={{color: "green"}}>Resolved </b> )}</td>
                                        <td>
                                             <button onClick={()=>{deleteTicket(value._id)}} className="btn btn-secondary sm mr-1"><b style={{color: "red"}}>Delete</b></button>
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
