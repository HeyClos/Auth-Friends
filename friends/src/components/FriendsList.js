import React from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friends: {
        id: null,
        name: '',
        age: 0,
        email: ''
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log("get friends response", res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.friends)
  return (
      <>
          <h1>My Friends List</h1>
          <div>
          {this.state.friends.length > 0 ? this.state.friends.map(n => 
              <div>
                  <h3>{n.name} </h3>
                  <p>Age: {n.age} </p>
                  <p>Email: {n.email} </p>
              </div>
          ): null}
          </div>
      </>
  );
}
}

export default FriendsList;