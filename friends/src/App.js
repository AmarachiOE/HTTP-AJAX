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

  componentDidMount() {
    // visit http://localhost:5000/friends to look at data being requested
    axios.get("http://localhost:5000/friends").then(res => {
      console.log(res.data);
      this.setState({ friends: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Route 
          path="/" 
          render={props => <FriendsList {...props} friends={this.state.friends}/> }/>
        <Route 
          path="/friend-form" 
          render={props => <FriendForm {...props} /> }/>
      </div>
    );
  }
}

export default App;
