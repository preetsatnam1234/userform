import React from "react";
import './App.css';
import Login from './form/login.jsx';
import Registration from "./form/Registration"
import {Switch, Route} from "react-router-dom"
import Welcome from "./form/Welcome";
import ProtectedRoute from "./common/ProtectedRoute";
function App() {
 

 
  
  
  return (
    <div>
    <Switch>
    <Route exact path="/" component={Login}></Route>
    
    <Route exact path="/register" component={Registration}></Route>
    
    <ProtectedRoute exact path='/welcome' component={Welcome} />
    </Switch>
    </div>
  );
}

export default App;
