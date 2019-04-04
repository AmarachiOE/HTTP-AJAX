import React from "react";
//import Friend from "./Friend";
import { NavLink, Link } from "react-router-dom";


const FriendsList = props => {
  return (
    <div className="FriendsList-container">
      <h2>List of Friends:</h2>
      {props.friends.map(friend => (
        <h3>
          <Link to={`/friend-list/${friend.id}`}> {friend.name}, {friend.age}</Link>  
        </h3>
        // <Friend 
        //   friend={friend} 
        //   key={friend.id}
        //   deleteFriend={props.deleteFriend}
        //   setActiveFriend={props.setActiveFriend} />
        
      ))}
      <NavLink to="/friend-form">Add a Friend</NavLink>
    </div>
  );
};

export default FriendsList;
