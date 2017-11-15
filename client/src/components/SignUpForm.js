import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {Redirect} from 'react-router-dom'


const Sign = styled.div`
body{
	background:#fff;
	margin:0px;
}

.header{
	width:100%;
	background:#3B5998;
	height:85px;
	border-bottom:1px solid #000;
}

.header .logo{
	padding-left:300px;
	padding-top:15px;
	float:left;
}

.header .logo img{
	width:200px;
}

.giris{
	padding-left:370px;
	padding-top:30px;
	float:left;
}

.giris input{
	width:150px;
	height:20px;
	border:1px solid #000;
	padding:3px;
}

.giris input:focus{
	width:150px;
	height:20px;
	border:1px solid blue;
	padding:3px;
}

.giris button{
	width:75px;
	height:28px;
	background:#4267B2;
	color:white;
	border:1px solid #29487D;
	border-radius:2px;
}

.container{
	width:100%;
	height:570px;
	background:#E8EBF3;
}

.container .soltaraf{
	color:#325998;
	font-size:18px;
	font-family:Arial;
	padding-left:320px;
	padding-top:50px;
	width:500px;
	float:left;
}

.container .kayit{
	color:#323232;
	font-size:18px;
	font-family:Arial;
	padding-left:50px;
	padding-top:25px;
	width:380px;
	float:left;
}

.container .kayit p{
	margin-top:-14px;
}

.container .kayit .kutus1{
	float:left;
	width:170px;
	margin-right:10px;
	border:1px solid #999;
	border-radius:4px;
	height:30px;
	padding:3px;
	font-size:18px;
}

.container .kayit .kutus2{
	float:left;
	width:358px;
	margin-top:8px;
	margin-right:10px;
	border:1px solid #999;
	border-radius:4px;
	height:30px;
	padding:3px;
	font-size:18px;
}

.container .kayit button{
	margin-top:8px;
	width:50%;
	height:35px;
	background:#68A253;
	color:white;
	border:1px solid #3B6E22;
	border-radius:4px;
	font-size:19px;
	padding:5px;
}

.container .kayit small{
	font-size:10px;
	font-family:verdana;
}

.footer{
	width:1000px;
	margin:auto;
	margin-top:7px;
	color:#777;
}

.footer a{
	width:1000px;
	margin:auto;
	margin-top:7px;
	color:#3B5998;
	text-decoration:none;
	margin-left:8px;
}

`

class SignUpPage extends Component {
    state = {
        newUser: {
            name: '',
            bio: '',
            age: '',
            image_url: ''
		},
		userId: 0,
		redirect: false
    }
    handleChange = (event) => {
        const attribute = event.target.name 
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }
    handleSubmit = async (event) => {
		event.preventDefault()
		const res = await axios.post('/api/users', {
			"user": this.state.newUser
		})
		
		this.setState({redirect: true, userId: res.data.id})
		
    }
    render() {
		if(this.state.redirect){
			return <Redirect to={`/api/users/${this.state.userId}`}/>
		}
	

        return (
            <Sign>
            <div className="header">
            <div className="logo">
			
		    </div>
            <div className="giris">
			<input type="text" placeholder="Email"/>
			<input type="password" placeholder="Password"/>
			<button>Login</button>
		</div>
        <div className="container">
		<div className="soltaraf">
		<b>This is Be Happy. A place where you can post inspirational quotes and achieve your goals.</b>
		<img src="https://www.facebook.com/rsrc.php/v3/yx/r/pyNVUg5EM0j.png"/>
        </div>
		
        <div className="kayit">
		<h1>Sign Up</h1>
		<p>Please fill out the form to get started</p>
        <form onSubmit={this.handleSubmit}>
		
		<input 
        onChange={this.handleChange} className="kutus1" type="text" name="name" value={this.state.newUser.name} placeholder="Name"/>
		
		<input 
        onChange={this.handleChange} className="kutus1" type="integer" name="age" value={this.state.newUser.age} placeholder="Age"/>
		
		<input 
        onChange={this.handleChange} className="kutus2" type="text" name="image_url" value={this.state.newUser.image_url} placeholder="Image Url"/>
		
		<input 
        onChange={this.handleChange} className="kutus2" type="text" name="bio" value={this.state.newUser.bio} placeholder="Bio"/>
       
	    <small>Be Happy is for everyone who needs a little motivation</small>
		<button><b>Sign Up</b></button>
        </form>  
        </div>
        </div>
        
            </div>
           </Sign>         
        );
    }
}

export default SignUpPage;