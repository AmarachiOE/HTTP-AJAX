import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  
  // GET data
  componentDidMount() {
    // visit http://localhost:5000/friends to look at data being requested
    axios.get("http://localhost:5000/friends").then(res => {
      console.log(res.data);
      this.setState({ friends: res.data });
    });
  }

  // POST data
  addFriend = (event, friend) => {
    event.preventDefault();
    axios.post("http://localhost:5000/friends", friend) // friend is the body of data needed to be passed in from FriendForm bc that's where addFriend is invoked
    .then(res => {
      console.log(res);
      this.setState({ friends:res.data });
      alert('Congrats! You\'ve added a new friend!');

      // redirect to friend's list/homepage:
      // withRouter for App on index
      this.props.history.push("/");
    })
    .catch(err => {
      console.log(err.resolve)
    })
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact path="/" 
          render={props => 
            <FriendsList {...props} friends={this.state.friends}
            /> 
          }/>
        <Route 
          path="/friend-form" 
          render={props => 
            <FriendForm {...props} addFriend={this.addFriend}
            /> 
          }/>
      </div>
    );
  }
}

export default App;
