import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import GoalPage from './components/GoalPage'
import ActionPage from './components/ActionPage'
import UserPage from './components/UserPage'
import IdPage from './components/IdPage'
import SignUpPage from './components/SignUpPage'





class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <Router>

       <Switch>

      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UserPage} />
      <Route exact path="/users/:id" component={IdPage} />
      <Route exact path="/GoalPage" component={GoalPage}/>
      <Route exact path="/ActionPage" component={ActionPage}/>
      <Route exact path="/SignUpPage" component={SignUpPage}/>
      </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
