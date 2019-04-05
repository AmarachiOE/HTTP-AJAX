import React from "react";
//import Friend from "./Friend";
import { Link } from "react-router-dom";


const FriendsList = props => {
  return (
    <div className="friendsList-container">
      <h1>List of Friends:</h1>
      {props.friends.map(friend => (
        <h3 key={friend.id}>
          <Link to={`/friend-list/${friend.id}`}> {friend.name}, {friend.age}</Link>  
        </h3>
        // <Friend 
        //   friend={friend} 
        //   key={friend.id}
        //   deleteFriend={props.deleteFriend}
        //   setActiveFriend={props.setActiveFriend} />
        
      ))}
      <div className="add-friend-btn-div">
      <Link to="/friend-form" className="add-friend-btn">Add a Friend</Link>
      </div>
      
    </div>
  );
};

export default FriendsList;
