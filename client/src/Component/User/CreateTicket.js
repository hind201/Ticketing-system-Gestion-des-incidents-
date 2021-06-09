import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBarUser from './NavBarUser'

function CreateTicket() {

     const [createTicket, setCreateTicket] = useState({
          title: '',
          description: '',
          type: '', // Hardware - Software
          priority: '', // urgent, pas urgent,  trés urgent
     })

     const createTickets = async(e) => {
          e.preventDefault();
         await axios.post('http://localhost:7000/api/creatTicket', createTicket)
          .then((response)=>{
               console.log(response+'Data Inserted!')
          })
          .catch((error) => {console.log(error)})
     }


  
    
     const hundelChange = (e) => {
          setCreateTicket({...createTicket, [e.target.name]: e.target.value})
     }

    
     const form = () =>(
          <form onSubmit={createTickets}>
           
           <button className='btnn'><Link to="/user" className="btn ">
          
          Back to page User
            </Link> </button>
               <h2 className="modal-title" id="exampleModalLabel">Create Ticket</h2>
              <div className="from-group">
              <div className="form-group">
                                   <label htmlFor="registration_number">Title</label>
                                   <input type="text" className="form-control" name="title" onChange={hundelChange} />
                              </div>

               
            </div>
              
            <div className="form-group">
                                   <label htmlFor="mark">Description</label>
                                   <textarea className="form-control" name="description" rows="4"  onChange={hundelChange} ></textarea >
                              </div>
                              <div className="form-group">
                                   <label>Type</label>
                                   <select className="custom-select" name="type"  onChange={hundelChange}  >
                                        <option>Type...</option>
                                        <option value='hardware'>Hardware</option>
                                        <option value='software'>Software</option>
                                   </select>
                              </div>
            
                              <div className="form-group">
                                   <label>Priority</label>
                                   <select className="custom-select" name="priority"  onChange={hundelChange} >
                                        <option>Priority Type...</option>
                                        <option value='urgent'>Urgent</option>
                                        <option value='pas urgent'>Pas urgent</option>
                                        <option value='trés urgent'>Trés urgent</option>
                                   </select>
                              </div>
            <button className="btn btn-lg btn-block btn-outline-success">Create</button>
            <div/>
         
          </form>
     )
     return (
          <>
        <NavBarUser/>
      <div>
         <div title="Contact Us">
             <div className="row"> 
                 <div className="col-md-6 mx-auto">
  
                   { form() }
                 </div>
              </div>
             
  
         </div>
      </div>
      </>
  )
 




}


export default CreateTicket
