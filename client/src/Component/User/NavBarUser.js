import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
    

    return (
   <nav class="navbar navbar-expand-sm navbar-dark bg">
       <a class="navbar-brand" href="#">Employee</a>
      
       <div class="collapse navbar-collapse" id="collapsibleNavId">
           <ul className="navbar-nav ml-auto">
              
           <li class="nav-item active">
                   <Link className="nav-link" to="/User"><i className="fas fa-sign-in-alt mr-1"></i>Employee<span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item active">
                   <Link className="nav-link" to="/ticket"><i className="fas fa-sign-in-alt mr-1"></i>Ticket <span class="sr-only">(current)</span></Link>
               </li>
               <li class="nav-item active">
                   <Link className="nav-link" to="/create"><i className="fas fa-sign-in-alt mr-1"></i>Create Ticket<span class="sr-only">(current)</span></Link>
               </li>
              
               <li class="nav-item">
               <li class="nav-item active">
                              <Link className="nav-link " to="/logout"><i className="fas fa-sign-in-alt mr-1"></i> Logout <span class="sr-only">(current)</span></Link> 
                         </li>
               </li> 
              
           </ul>
          
       </div>
   </nav>
    
    )

}

 export default NavBar
