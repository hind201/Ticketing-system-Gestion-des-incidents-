
import React, {useState, useEffect} from "react"
import axios from 'axios'
import NavBarTech from './NavBarTech'




function TicketTech() {
     const [ticket, setTicket] = useState([])

     useEffect(()=> {
          axios.get('http://localhost:7000/api/getAssignedTicket').then(response => {
               setTicket(response.data)
               console.log(response)
          })
     }, [])
     const resolvedTicket = (id) => {
        
          axios.post(`http://localhost:7000/api/resolvedTicket/${id}`).then(response => {
               console.log(response)
          })
     }
          
              const refuseTicket = (id) => {
                  axios.post(`http://localhost:7000/api/refuseTicket/${id}`)
                  .then((response) => {
                       console.log(response)
                 
                  })
                  .catch((error) => {
                      console.log(error);
                  })
              }
          


    
     return (
        
          <>
            <NavBarTech/>
               <div className="container-fluid">
                    <h1 className='name'>Ticket technician </h1>

                    <div className="row">     
                         <table className="table mt-4">
                              {/* Header Table */}
                              <thead className="thead">
                              <tr>
                                   <th>Date</th>
                                   <th>Title</th>
                                   <th>Priority</th>
                                   <th>status</th>
                                    {/* <th>Name of user</th> 
                                   <th>Phone</th>  */}
                                   <th>Description</th>
                                   <th>Action</th>
                              </tr>
                              </thead>

                              {/* Body Table */}
                              <tbody>

                              {ticket.map((data, key) => (
                                   <tr key={key}>
                                       
                                             <th>{data.date}</th>
                                             <td>{data.ticket_id.title}</td>
                                             <td>{data.ticket_id.priority === 'urgent' ? <b style={{color: "red"}}>Urgent</b> : (data.ticket_id.priority  === 'tres urgent' ? <b style={{color: "orange"}}>tres urgent</b> : <b style={{color: "grey"}}>Normal</b>)}</td>
                                        <th>{data.ticket_id.status}</th>
                                        {/* <th>{data.user_id.firstName +'' + data.user_id.lastName }</th> 
                                             <th>{data.ticket_id.phone}</th>  */}
                                        <th>{data.ticket_id.description}</th>  

                                          {
                                               (data.ticket_id.status !== 'resolved') &&(
                                                    <>
                                        
                                             <td>
                                       
                                                  <button type="button" className="btn btn-outline-success btn-sm ml-5" onClick={()=> {resolvedTicket( data.ticket_id._id)}} >Resolve</button>
                                                  <button type="button" className="btn btn-outline-danger btn-sm ml-5" onClick={()=> {refuseTicket(data.ticket_id._id)}}  >Refuse</button> 
                                            

                                             
                                        </td> 
                                        </>
                                        )}
                                   
                                     

                                   </tr>
                               ) )}
                             

                              </tbody>
                         </table>
                    </div>
               </div>
     
          </>
     )
}

export default TicketTech