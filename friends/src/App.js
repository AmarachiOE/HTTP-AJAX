import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import FriendForm from "./components/FriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
    };
  };


  // GET data -- GET REQUEST
  componentDidMount() {
    // visit http://localhost:5000/friends to look at data being requested
    axios.get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      });
  };

  // POST data -- POST REQUEST
  addFriend = (event, friend) => {
    event.preventDefault();
    axios.post("http://localhost:5000/friends", friend) // friend is the body of data needed to be passed in from FriendForm bc that's where addFriend is invoked
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
        alert('Congrats! You\'ve added a new friend!');

        // redirect to friend's list:
        // withRouter for App on index
        this.props.history.push("/friend-list");
      })
      .catch(err => {
        console.log(err.resolve)
      })
  };

  // DELETE data -- DELETE REQUEST
  deleteFriend = id => { //takes in an argument
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
        // redirect to friend's list/homepage:
        // this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.resolve);
      })
  };

  // UPDATE data -- PUT REQUEST
  updateFriend = (friend) => {
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
        // redirect to friend's list:
        this.props.history.push("/friend-list");
      })
      .catch(err => {
        console.log(err.resolve);
      })
  };

  // ACTIVE FRIEND -- for update form
  setActiveFriend = (friend) => {
    this.setState({ activeFriend: friend });
    // redirect to friend form:
    this.props.history.push("/friend-form");
  };

  render() {
    return (
      <div className="App">
        <Route
          exact path="/friend-list"
          render={props =>
            <FriendsList 
              {...props} 
              friends={this.state.friends} 
            />
          } />
        <Route
          path="/friend-list/:id"
          render={props => (
            <Friend 
            {...props}
          friends={this.state.friends} 
          deleteFriend={this.deleteFriend}
          setActiveFriend={this.setActiveFriend} />
          )}
        />
        <Route
          path="/friend-form"
          render={props =>
            <FriendForm 
              {...props} 
              addFriend={this.addFriend}
            />
          } />
        <Route
          path="/update-form"
          render={props =>
            <UpdateFriendForm 
              {...props} 
              updateFriend={this.updateFriend}
              activeFriend={this.state.activeFriend}
            />
          } />
      </div>
    );
  }
}

export default App;
