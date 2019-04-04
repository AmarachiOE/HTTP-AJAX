import React from "react";

const Friend = props => {
  return (
    <div className="each-friend">
      <h3>
        {props.friend.name}, {props.friend.age}
      </h3>
    </div>
  );
};

export default Friend;

// DID NOT USE THIS COMPONENT
