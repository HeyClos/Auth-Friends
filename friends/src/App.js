import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList'; 

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
