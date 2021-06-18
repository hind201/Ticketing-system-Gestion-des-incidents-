import React, { useState } from 'react'
import axios from 'axios'
import NavBarAdmin from './navBarAdmin'




function Register() {

     const [register, setRegister] = useState({
          firstName: '',
          lastName: '',
          email: '',
          password:'',
          phone: '',
          department: '',
          role: 'user',
         
     })

     const [message, setMessage] = useState('')
     const registerUser = (e) => {
         
          e.preventDefault();
          axios.post('http://localhost:7000/api/register', register)
          .then((response) => {
               setMessage(response.data.message)
              
               
          })
          .catch((err) => { console.log(err)})
     }

     // onChange
     const onChange = (e) => {
          setRegister({...register, [e.target.id]: e.target.value})
     }

     return (
         
          <>
        <NavBarAdmin/>
          <div id="wrapper">

        

          <div id="page-content-wrapper">
               <div className="container-fluid">
                    <div className="row justify-content-center">
                         <div className="col-lg-6">
                              <h1 className='name'>Register </h1>
               
                              {/* FORM */}
                              <form onSubmit={registerUser}>
                                 

                                   <div className="form-group">
                                        <label>FirstName</label>
                                        <input type="text" className="form-control border-success" id="firstName" onChange={onChange} />
                                   </div>

                                   <div className="form-group">
                                        <label>LastName</label>
                                        <input type="text" className="form-control border-success" id="lastName" onChange={onChange} />
                                   </div>

                                   <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control border-success" id="email" onChange={onChange} />
                                   </div>
                                    
                                   <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control border-success" id="password" onChange={onChange} />
                                   </div>

                                 
                                   <div className="form-group">
                                        <label>Phone</label>
                                        <input type="number" className="form-control border-success" id="phone" onChange={onChange} />
                                   </div>

                              
                                   <div className="form-group">
                                        <label>Department</label><br/>
                                        <select className="custom-select border-success" id="department" onChange={onChange}>
                                             <option>Department...</option>
                                             <option value='hardware'>Hardware</option>
                                             <option value='software'>Software</option>
                                             <option value='development web'>development web</option>
                                             <option value='Comunication'>Comunication</option>
                                             <option value='Marketing'>Marketing</option>
                                             <option value='finance'>finance</option>
                                        </select>
                                   </div> 
                                   
                              
                                  
                                   <div className="from-group">
                                    <select className="browser-default custom-select border-success" id="role" onChange={onChange}>
          
                                   <option value="user">User</option>
                                   <option value="technicien">Technicien</option>
                                    </select>
                                    </div> <br></br><br></br>

                                   <button className="btn btn-lg btn-block" id='bgg' >Register</button>
                              </form>
                              {message !== '' ? <h4 className="alert alert-primary mt-4"> {message} </h4> : null }
                              

                         </div>
                    </div>




               </div>
          </div>
          </div>


          <div className="container">
               <div className="col-lg-8 py-4">
               
               </div>
          </div>
          </>
     )
}


export default Register