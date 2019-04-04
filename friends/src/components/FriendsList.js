import React from "react";
import Friend from "./Friend";
import { NavLink } from "react-router-dom";


const FriendsList = props => {
  return (
    <div className="FriendsList-container">
      <h2>List of Friends:</h2>
      {props.friends.map(friend => (
        <Friend 
          friend={friend} 
          key={friend.id}
          deleteFriend={props.deleteFriend} />
        
      ))}
      <NavLink to="/friend-form">Add a Friend</NavLink>
    </div>
  );
};

export default FriendsList;
