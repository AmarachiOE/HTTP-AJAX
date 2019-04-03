import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";

import './App.css';
import FriendsList from "./components/FriendsList";

class App extends Component {
  constructor(){
    super();
    this.state ={
      friends: [],
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends")
    .then(res => {
      console.log(res.data);
      this.setState({ friends: res.data });
    })
  }

  render() {
    return (
      <div className="App">
      <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
