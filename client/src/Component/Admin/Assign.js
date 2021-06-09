import React, {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'

import NavBarAdmin from './navBarAdmin'




function Single() {
     const { id } = useParams()
     const [ticket, setTicket] = useState([])
     const [techList, setTechList] = useState([])
  
     const [assign, setAssign] = useState({
        technicien_id: ''
     })


     useEffect(()=> {
          axios.get('http://localhost:7000/api/getTechnicien').then(response => {
               setTechList(response.data)
               console.log(response)
          })
          axios.get(`http://localhost:7000/api/getOneTicket/${id}`).then(response => {
               setTicket(response.data)
              
               
               console.log(response)
          })
     }, [id])

     const {technicien_id} = assign
     const onChange = (e) => {
          setAssign({...assign, [e.target.name]: e.target.value})
     }
     

     // Assign submit
     const assigns = (e) => {
          e.preventDefault()
          axios.post('http://localhost:7000/api/assignTicket', {
            ticket_id: id,
            
            technicien_id: technicien_id
          })
     }


     return (
          <>
         <NavBarAdmin/>
          <div id="wrapper">

      

          <div id="page-content-wrapper">
               <div className="container-fluid">
                    <h1>Assign Ticket</h1>

                    <div className="row justify-content-center">
                         <div className="col-lg-6 mt-4">
                         {/* FORM */}
                         <form onSubmit={assigns}>
                              <fieldset disabled>
                              <div className="form-group">
                                   <label>Date</label>
                                   <input type="text" className="form-control" value={ticket.date} />
                              </div>
                              <div className="form-group">
                                   <label>Title</label>
                                   <input type="text" className="form-control" value={ticket.title} />
                              </div>
                              <div className="form-group">
                                   <label>Type</label>
                                   <input type="text" className="form-control" value={ticket.type} />
                              </div>
                              <div className="form-group">
                                   <label>Description</label>
                                   <textarea className="form-control" value={ticket.description} rows="4"></textarea>
                              </div>
                              <div className="form-group">
                                   <label>Priority</label>
                                   <input type="text" className="form-control" value={ticket.priority} />
                              </div>
                              </fieldset>
                              <div className="form-group">
                                   <label>Technician</label>
                                   <select className="custom-select" name="technicien_id" onChange={onChange}>
                                        <option>Technicien...</option>
                                        {techList.map((tech) => (
                                             ticket.type === tech.department ?
                                             <option value={tech._id}>{tech.firstName} ({tech.department})</option>
                                             : null
                                        ))}
                                   </select>
                              </div>
                              <button type="submit" className="btn btn-primary mt-3">Assign</button>

                         </form>
                         {/* **************************************** */}
                         </div>
                    </div>
               </div>
          </div>
          </div>
          </>
     )
}

export default Single