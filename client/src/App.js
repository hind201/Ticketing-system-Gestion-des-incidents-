import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import Login from './Component/Login/Login'
import  Admin from './Component/Admin/Admin'
import  Register from './Component/Admin/Register'



import User from './Component/User/User'
import Ticket from './Component/User/Ticket'
import  Technicien from './Component/Technicien/Technicien'
import TicketTech from './Component/Technicien/TicketTech'
import CreateTicket from './Component/User/CreateTicket'
import GetTicket from './Component/Admin/GetTicket'
import Home from './Component/Nav/Home'
import Assign from './Component/Admin/Assign'
import GetResolovedTicket from './Component/Admin/GetResolvedTicket'
import GetRefusedTicket from './Component/Admin/GetRefusedTicket'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {UserProvider} from './Component/Context'
import ProtectedTechnicien from './Component/Routes/ProtectedTechnicien'
import ProtectedUser from './Component/Routes/ProtectedUser'
import ProtectedAdmin from './Component/Routes/ProtectedAdmin'

function App() {
  
  return (
    <div className="App">
       <div className="App">
       <UserProvider>  
      <Router> 
    
      <Switch>
       
      {/* home */}
        <Route exact path="/" component={Home}/>

     {/* admin  */}
   
      <Route exact path="/login" component={Login}/>
      <ProtectedAdmin  exact path="/admin"  comp={Admin}  />
      <ProtectedAdmin   exact path="/register" comp={Register} />
      <ProtectedAdmin  exact path="/getTicket" comp={GetTicket} />
      <ProtectedAdmin   exact path="/assign=:id" comp={Assign} />
      <ProtectedAdmin exact path="/closed" comp={GetResolovedTicket} />
      <ProtectedAdmin   exact path="/refused" comp={GetRefusedTicket}/>

     {/* Employee */}
      <ProtectedUser exact path="/user" comp={User}/> 
      <ProtectedUser exact path="/ticket" comp={Ticket}/> 
        <ProtectedUser exact path="/create" comp={CreateTicket}/>

        {/* technicien */}
        <ProtectedTechnicien exact path="/ticketTech" comp={TicketTech }/>
        <ProtectedTechnicien exact path="/technicien" comp={Technicien}/>

      </Switch>
      

      </Router>
    
      </UserProvider>
    </div>
      
    </div>
  );
}

export default App;
