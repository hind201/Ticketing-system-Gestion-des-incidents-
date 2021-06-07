import Login from './Component/Login/Login'

import  Admin from './Component/Admin/Admin'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import User from './Component/User/User'
import Technicien from './Component/Technicien/Technicien'
 import CreateTicket from './Component/User/CreateTicket'
 import GetTicket from './Component/Admin/GetTicket'
 import Assign from './Component/Admin/Assign'
 import GetResolovedTicket from './Component/Admin/GetResolvedTicket'
 import GetRefusedTicket from './Component/Admin/GetRefusedTicket'
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="App">
    
      <Router>
    
      <Switch>
     {/* admin */}
      <Route exact path="/login" component={Login}/>
  
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/getTicket" component={GetTicket}/>
      <Route exact path="/assign=:id" component={Assign}/>
      <Route exact path="/closed" component={GetResolovedTicket}/>
      <Route exact path="/refused" component={GetRefusedTicket}/>

     {/* Employee */}
      <Route exact path="/user" component={User}/> 
     <Route exact path="/create" component={CreateTicket}/>
        {/* technicien */}
        <Route exact path="/technicien" component={Technicien}/>

   
      </Switch>
      </Router>
    
    
    </div>
      
    </div>
  );
}

export default App;
