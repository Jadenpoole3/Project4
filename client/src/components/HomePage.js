import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Quote = styled.div`
text-aign:center;
display: flex;
justify-content: space-between;
margin:auto;
text-size: 70px;
`



class HomePage extends Component {
    state = {
        quotes: []
    }
    componentWillMount() {
        this.getAllQuotes()
    }

    getAllQuotes = async () => {
        const res = await axios.get('')
        this.setState({quotes: res.data})
    }
    render() {
        return (
            <div>
                <h1> Feed Page</h1>
                

            </div>
        );
    }
}

export default HomePage;