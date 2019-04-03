import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="FriendsList-container">
      <h2>List of Friends:</h2>
      {props.friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
