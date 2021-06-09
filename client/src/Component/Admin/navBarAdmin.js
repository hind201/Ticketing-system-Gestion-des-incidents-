import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
    

    return (
   <nav class="navbar navbar-expand-sm navbar-dark bg-info">
       <a class="navbar-brand" href="#">ADMIN</a>
      
       <div class="collapse navbar-collapse" id="collapsibleNavId">
           <ul className="navbar-nav ml-auto">
              
               <li class="nav-item active">
                   <Link className="nav-link" to="/register"><i className="fas fa-sign-in-alt mr-1"></i> Register <span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item active">
                   <Link className="nav-link" to="/getTicket"><i className="fas fa-sign-in-alt mr-1"></i>Ticket <span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item active">
                   <Link className="nav-link" to="/closed"><i className="fas fa-sign-in-alt mr-1"></i>Ticket Resolved<span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item active">
                   <Link className="nav-link" to="/refused"><i className="fas fa-sign-in-alt mr-1"></i>Ticket Refused<span class="sr-only">(current)</span></Link>
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

}

 export default NavBar
