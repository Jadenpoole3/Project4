import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'




class EditPage extends Component {
    state = {
        user: {},
        redirectToUser: false
        
    }
    componentWillMount(){
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
    handleChange = async (event) => {
        console.log(event)
    
        //getting the input 
        const attribute = event.target.name
    
        const clonedUser = {...this.state.user }
        clonedUser[attribute] = event.target.value
    
        this.setState({ user: clonedUser})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { userId } = this.props.match.params 
        const newUser = {...this.state.user}       
		const res = await axios.patch(`/api/users/${userId}`, {
		user: newUser	
		})
		
		this.setState({redirectToUser: !this.state.redirectToUser})
		
    }

    render() {
        if(this.state.redirectToUser === true) {
            return (
                <Redirect to={`/users`}/>
            )
        }
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
		
		<input 
        onChange={this.handleChange} className="kutus1" type="text" name="name" value={this.state.user.name} placeholder="Name"/>
		
		<input 
        onChange={this.handleChange} className="kutus1" type="integer" name="age" value={this.state.user.age} placeholder="Age"/>
		
		<input 
        onChange={this.handleChange} className="kutus2" type="text" name="image_url" value={this.state.user.image_url} placeholder="Image Url"/>
		
		<input 
        onChange={this.handleChange} className="kutus2" type="text" name="bio" value={this.state.user.bio} placeholder="Bio"/>
        <button>Edit</button>
            </form>
            </div>
        );
    }
}

export default EditPage;