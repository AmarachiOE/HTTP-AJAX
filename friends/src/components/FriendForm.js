import React from 'react';

// Build a form to gather the data we need to make a post request

// we want to control the inputs in this component
// so FriendForm needs to be a class

class FriendForm extends React.Component {
    state = {
        // wrap input fields in an object (friend)
        friend: {
            name: "",
            age: "",
            email: "",
        }
    };

    render() {
        return (
            <div>
                <h2>Add New Friend</h2>
                <form className="friend-form">
                    <input
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.handleChanges}
                        placeholder="What's their name?"
                    />
                    <input
                        type="number"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.handleChanges}
                        placeholder="What's their age?"
                    />
                    <input
                        type="text"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.handleChanges}
                        placeholder="What's their email?"
                    />
                   
                    <button className="friend-form-button">Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;