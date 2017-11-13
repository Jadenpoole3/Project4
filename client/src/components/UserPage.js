import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios'


class UserPage extends Component {
    state = {
        users: []

    }
    componentWillMount () {
        this.getAllUsers()
    }
    getAllUsers = async () =>{
        const res = await axios.get('api/users')
        this.setState({users: res.data})
    }
    render() {
        return (
            <div>
                <h1> User Page</h1>
                {this.state.users.map(user => (
          <Link key={user._id} to={`/${user._id}`}>
                <h3> Name: {user.name}</h3>
                <h3> Age: {user.age}</h3>
                <h3> Image: {user.image_url}</h3>
                <h3> Bio: {user.bio}</h3>
                </Link>
                ))}
            </div>
        );
    }
}

export default UserPage;