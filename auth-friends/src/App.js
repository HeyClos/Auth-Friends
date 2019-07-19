import React from 'react';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import {ProtectedRoute} from './components/ProtectedRoute';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const []
  return (
    <div className="App">
     <Login />
     <Route exact path="/" render={Login} />
     <ProtectedRoute />
     <FriendsList />
    </div>
  );
}

export default App;
