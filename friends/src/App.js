import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

// x Add a route for a login page and build out a simple login form with 
//   username and password inputs and a submit button (design this however you would like).

// x The login function should save the returned token to localStorage. You can setup isLoading 
//  state in your Login component, and show a spinner on your form or in your button while the 
//  login request is happening.

// When the request returns, save the token to localStorage, then use the history object in 
// your Login component to navigate your user to your FriendsList route

// x Create a <PrivateRoute /> component to protect your other routes. It should check 
//   localStorage for a token, and redirect the user to your login route if there is not a token.

// x  Create a protected route for your friends list. Remember, if the user isn't logged in, 
//   navigating to this protected route will redirect them to the login page.

// In your FriendsList component, rendered with <ProtectedRoute />, you will create a list of 
// your friends that you get from the API.


// ---- Adding New Friends ----

// x Create a form to collects data for a new friend.

// x Make a POST request to add a friend to the database

// Each friend item that is in the friends array should have the following format:

// {
//   id: 1
//   name: 'Joe',
//   age: 24,
//   email: 'joe@lambdaschool.com',
// }
// If you'd like, you can create multiple "view" components for your routes. You could 
// have a component who's sole purpose is to render the login form; one for a form for 
// updating a user; another component who's sole purpose is for creating users; and then another 
// component who's sole purpose is to delete a user.

// It really is up to you how you build this project. I suggest writing down the flow 
// you want to follow, and then writing down each individual piece you need for each step in 
// the flow so that this process doesn't feel as overwhelming.

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
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
