import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
    

    return (
   <nav class="navbar navbar-expand-sm navbar-dark bg-info">
       <a class="navbar-brand" href="#">Technicien</a>
      
       <div class="collapse navbar-collapse" id="collapsibleNavId">
           <ul className="navbar-nav ml-auto">
              
           <li class="nav-item active">
               </li>
               <li class="nav-item active">
               </li>
               
               <li class="nav-item">
               <li class="nav-item active">
                              <Link className="nav-link " to="/ticketTech"><i className="fas fa-sign-in-alt mr-1"></i> Ticket Technicien <span class="sr-only">(current)</span></Link> 
                         </li>
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
