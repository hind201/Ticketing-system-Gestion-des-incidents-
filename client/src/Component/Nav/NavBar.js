import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
    

    return (
   <nav class="navbar navbar-expand-sm navbar-dark bg">
       <a class="navbar-brand" href="#">Ticket System</a>
      
       <div class="collapse navbar-collapse" id="collapsibleNavId">
           <ul className="navbar-nav ml-auto">
               <li class="nav-item active">
                   <Link className="nav-link" to="/"><i className="fas fa-sign-in-alt mr-1"></i> Home <span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item">
               <li class="nav-item active">
                              <Link className="nav-link " to="/login"><i className="fas fa-sign-in-alt mr-1"></i> Log In <span class="sr-only">(current)</span></Link> 
                         </li>
               </li>
              
           </ul>
          
       </div>
   </nav>
    
    )
//     <div id="sidebar-wrapper">
//     <ul className="sidebar-nav">
//          <li className="sidebar-brand">
//               <Link to="/"> Ticketing System </Link>
//          </li>
         
//          { role === 'Employee' ? 
//          <>
//          <li>
//               <Link to="/create-ticket">Create Ticket</Link> 
//          </li>
//          </> : null }

//          { role === 'Admin' ? 
//          <>
//          <li>
//               <Link to="/register-user">Register user</Link> 
//          </li>
//          <li>
//               <Link to="/ticket-list">Ticket list</Link>
//          </li>
//          <li>
//               <Link to="/ticket-assigned">Ticket assigned</Link>
//          </li>
//          <li>
//               <Link to="/ticket-closed">Ticket closed</Link>
//          </li>
//          <li>
//               <Link to="/ticket-refused">Ticket Refused</Link>
//          </li>
//          </> : null }

//          { role === 'Technician' ?
//          <>
//          <li>
//               <Link to="/ticket-tech">Ticket Technician</Link>
//          </li>
//          </> : null }
//     </ul>
// </div>
}

 export default NavBar
