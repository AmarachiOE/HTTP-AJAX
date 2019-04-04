import React from "react";
import { NavLink } from "react-router-dom";

const Friend = props => {

  const friend = props.friends.find(friend => {
 
    return `${friend.id}` === props.match.params.id;
  });
  console.log("on Friend js:", friend);
  if (!friend) return <h3>Loading data...</h3>;

  // deleteFriend function invocation
  const deleteFriend = event => {
    event.preventDefault();
    props.deleteFriend(friend.id) 
  }

  // updateFriend function invocation
  const updateFriend = event => {
    event.preventDefault();
    props.setActiveFriend(friend);
    props.history.push("/update-form");
  }

  return (
    <div className="each-friend">
    <NavLink to="/friend-list">Friend List</NavLink>

      <h3>
        {friend.name}, {friend.age}
        <button onClick={deleteFriend} className="friend-btn delete-button">Delete</button>
        <button onClick={updateFriend} className="friend-btn update-button">Update</button>
      </h3>
    </div>
  );
};

export default Friend;

