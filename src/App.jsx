import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import LoginComponent from './components/LoginComponent'
import SignUpComponent from './components/SignUpComponent'
import TodoApp from './components/TodoApp'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginComponent}></Route>
          <Route exact path="/signup" component={SignUpComponent}></Route>
          <Route exact path="/home" component={TodoApp}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
