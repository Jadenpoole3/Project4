import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import QuotePage from './components/QuotePage'
import UserPage from './components/UserPage'
import IdPage from './components/IdPage'
import SignUpForm from './components/SignUpForm'
import EditPage from './components/EditPage'
import ActionPage from './components/ActionPage'
import styled from 'styled-components'






class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <Router>

       <Switch>

      <Route exact path="/HomePage" component={HomePage} />
      <Route exact path="/users/:userId/edit" component={EditPage} />
      <Route exact path="/users" component={UserPage} />
      <Route exact path="/users/:userId" component={IdPage} />
      <Route exact path="/QuotePage" component={QuotePage}/>
      <Route exact path="/user/:userId/ActionPage" component={ActionPage}/>
      <Route exact path="/" component={SignUpForm}/>
      </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
