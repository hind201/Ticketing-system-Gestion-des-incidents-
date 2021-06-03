import Login from './Component/Login/Login'
import  Admin from './Component/Admin/Admin'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import User from './Component/User/User'
import Technicien from './Component/Technicien/Technicien'
 import CreateTicket from './Component/User/CreateTicket'
 import GetTicket from './Component/Admin/GetTicket'
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
