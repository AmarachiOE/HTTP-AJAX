import React from "react";

const Friend = props => {

  // deleteFriend function invocation
  const deleteFriend = event => {
    event.preventDefault();
    props.deleteFriend(props.friend.id) //need props.friend.id instead of friend.id
  }

  // updateFriend function invocation
  const updateFriend = event => {
    event.preventDefault();
    props.setActiveFriend(props.friend);
    props.history.push("/update-item"); //add this app.js?
  }

  return (
    <div className="each-friend">
      <h3>
        {props.friend.name}, {props.friend.age}
        <button onClick={deleteFriend} className="friend-btn delete-button">Delete</button>
        <button onClick={updateFriend} className="friend-btn update-button">Update</button>
      </h3>
    </div>
  );
};

export default Friend;

// DID NOT USE THIS COMPONENT
