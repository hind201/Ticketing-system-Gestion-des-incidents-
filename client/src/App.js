import Login from './Component/Login/Login'
import  Admin from './Component/Admin/Admin'
import  Register from './Component/Admin/Register'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
// import React, {useContext} from 'react'
// import { Context } from "./Component/Context"

import User from './Component/User/User'
import Ticket from './Component/User/Ticket'
import  Technicien from './Component/Technicien/Technicien'
import TicketTech from './Component/Technicien/TicketTech'
 import CreateTicket from './Component/User/CreateTicket'
 import GetTicket from './Component/Admin/GetTicket'
 import Assign from './Component/Admin/Assign'
 import GetResolovedTicket from './Component/Admin/GetResolvedTicket'
 import GetRefusedTicket from './Component/Admin/GetRefusedTicket'
 import Home from './Component/Nav/Home'
 import 'bootstrap/dist/css/bootstrap.min.css'
 
import './App.css';
// Protected Routes
// import ProtectedAuth from './Component/Routes/ProtectedAuth'
// import ProtectedAdmin from './Component/Routes/ProtectedAdmin'
// import ProtectedTech from './ProtectedTechnicien'
// import ProtectedUser from './ProtectedUser'
// User Context API


function App() {
  // const {role, isAuth} = useContext(Context)
  return (
    <div className="App">
       <div className="App">
         
      <Router>
     
      <Switch>
        {/* home */}
        <Route exact path="/" component={Home}/>

     {/* admin */}
    
      <Route exact path="/login" component={Login} />
      <Route  exact path="/admin" component={Admin} />
      <Route  exact path="/register" component={Register} />
      <Route exact path="/getTicket" component={GetTicket} />
      <Route  exact path="/assign=:id" component={Assign} />
      <Route exact path="/closed" component={GetResolovedTicket} />
      <Route  exact path="/refused" component={GetRefusedTicket}/>

     {/* Employee */}
      <Route exact path="/user" component={User}/> 
      <Route exact path="/ticket" component={Ticket}/> 
     <Route exact path="/create" component={CreateTicket}/>
        {/* technicien */}
        <Route exact path="/ticketTech" component={TicketTech }/>
        <Route exact path="/technicien" component={Technicien}/>

   
      </Switch>
      </Router>
    
    
    </div>
      
    </div>
  );
}

export default App;
