import React from 'react';
import { NavLink } from "react-router-dom";


class UpdateFriendForm extends React.Component {
    state = {
        friend: this.props.activeFriend,
    };

    changeHandler = event => {

        // implicit return of the object version
        event.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [event.target.name]: event.target.value
            }
        }));
    };


    handleSubmit = (event) => {
        event.preventDefault(); 

        // invoke updateFriend function from App.js
        this.props.updateFriend(this.state.friend);
    }

    render() {
        return (
            <div className="friend-form-container">
                <nav>
                    <NavLink to="/friend-list">Friend List</NavLink>
                </nav>
                <h2>Update Friend</h2>
                <form className="friend-form" onSubmit={this.handleSubmit}>
                    <input
                        type="string"
                        name="name"
                        value={this.state.friend.name}
                        onChange={this.changeHandler}
                        placeholder="What's their name?"
                    />
                    <input
                        type="number"
                        name="age"
                        value={this.state.friend.age}
                        onChange={this.changeHandler}
                        placeholder="What's their age?"
                    />
                    <input
                        type="string"
                        name="email"
                        value={this.state.friend.email}
                        onChange={this.changeHandler}
                        placeholder="What's their email?"
                    />

                    <button className="friend-form-button">Update Friend</button>
                </form>
            </div>
        )
    }
}

export default UpdateFriendForm;