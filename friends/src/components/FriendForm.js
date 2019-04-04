import React from 'react';
import { NavLink } from "react-router-dom";


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

    changeHandler = event => { //implicit binding of this using arrow syntax
        // Dealing with a nested object on state (friend):
        // Inside setState, update friend with a new object (using prevState as a cb ??)
        // Spread in the properties from the old "friend" object in state (...prevState.friend ??),
        // Update/over-write the one field you're trying to update

        // implicit return of the object version

        event.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [event.target.name]: event.target.value
            }
        }));

        // this.setState({
        //     friend: {
        //         ...this.state.friend,
        //         [event.target.name]: event.target.value
        //     }
        // })
    };

    // onSubmit function here:
    // extracted addItem function from onSubmit to add more functionality and organization
    // after submitting form, clear input fields
    // would be handleSubmit fn on trinkets sandbox
    // can be named handleSubmit to avoid confusion
    addFriend = (event) => {
        //event.preventDefault(); done on app.js

        // invoke addFriend function from App.js
        this.props.addFriend(event, this.state.friend)

        // clears form after submitted
        this.setState({
            friend: {
                name: "",
                age: "",
                email: "",
            }
        })
        
        // then redirect to shop under post request in App.js
    }

    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/friend-list">Friend List</NavLink>
                </nav>
                <h2>Add New Friend</h2>
                {/* alternately: onSubmit={this.handleSubmit} */}
                <form className="friend-form" onSubmit={this.addFriend}> 
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

                    <button className="friend-form-button">Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;