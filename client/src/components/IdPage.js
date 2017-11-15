import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';


class IdPage extends Component {
    state = {
        user: {},
        goals:[],
        redirectToUser: false

    }

    async componentWillMount() {
        this.getUser()
        
    }
    getUser = async () => {
        try {
            const { userId } = this.props.match.params
            console.log(userId)
            const response = await axios.get(`/api/users/${userId}`)
            
            this.setState({
                user: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
    getAllGoals = async () => {
        const res = await axios.get('/api/users/:id/goals')
        this.setState({fields: res.data})
    }
    handleDelete = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.delete(`/api/users/${userId}`)
        this.setState({
            redirectToField: true
        })
        // this.props.handleDelete(this.state.field._id)
    }
    handleChange = async (event) => {
        console.log(event)
    
        //getting the input 
        const attribute = event.target.name
    
        const clonedUser = {...this.state.user }
        clonedUser[attribute] = event.target.value
    
        this.setState({ user: clonedUser})
    }
    
    updateBio = async () => {
        const { userId} = this.props.match.params
    
        console.log(userId + ' is being sent')
        const res = await axios.patch(`/api/users/${userId}`, {
            user: this.state.user
        })
        this.setState({
            user: res.data
        })
    
    }
    
    render() {
        return (
            <div className="card">
           
         <h1> {this.state.user.name}</h1> 
           
          </div>
        );
    }
}

export default IdPage;