import React from "react";

const Friend = props => {

  // deleteFriend function invocation
  const deleteFriend = event => {
    event.preventDefault();
    props.deleteFriend(props.friend.id) //need props.friend.id instead of friend.id
  }
  return (
    <div className="each-friend">
      <h3>
        {props.friend.name}, {props.friend.age}
        <button onClick={deleteFriend} className="delete-button">Delete</button>
      </h3>
    </div>
  );
};

export default Friend;

// DID NOT USE THIS COMPONENT
