import React from "react";

const FriendsList = props => {
  return (
    <div className="FriendsList-container">
      <h2>List of Friends:</h2>
      {props.friends.map(friend => (
        <h3>
          {friend.name}, {friend.age}
        </h3>
      ))}
    </div>
  );
};

export default FriendsList;
