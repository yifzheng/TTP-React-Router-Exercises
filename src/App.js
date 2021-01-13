import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';

//import './App.css';
import HomePage from "./Components/HomePage"
import Contacts from "./Components/Contacts"
import About from "./Components/About"

function App() {
  return (
    <Router>
      <div id = "navBar">
        <ul>
          <li><Link to = "/">HomePage</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/contacts">Contacts</Link></li>
        </ul>
      </div>

      <Switch>
        <Route exact path = "/"><HomePage/></Route>
        <Route path = "/about"><About /></Route>
        <Route path = "/contacts"><Contacts /></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
