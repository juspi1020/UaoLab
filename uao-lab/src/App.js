import React from 'react';
import './App.css';
import Student from './Components/student/Student';
import Laboratorio from './Components/Laboratorio/Laboratorio';
import Login from './Components/Login/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Student" component={Student}/>
        <Route path="/Laboratorio" component={Laboratorio}/>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
