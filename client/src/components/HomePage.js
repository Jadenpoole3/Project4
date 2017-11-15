import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



const PostContainer = styled.div`
background-color: #fff;
border-radius: 3px;
width: 95vw;
max-width: 600px;
margin: 20px auto;
border: 1px solid #e6e6e6;
`;

const PostUser = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 16px;
img{
  height: 30px;
  width: 30px;
  border-radius: 100%;
}
span{
  padding-left: 5px;
  font-weight: bold;
}
`;

const PostContent = styled.div`
img{
  max-width: 600px;
  margin: 0 auto;
}
`;

const PostInfo = styled.div`
padding: 5px 16px;
`;

const PostActions = styled.div`
svg{
  padding: 5px;
}
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
                 
                

            </div>
        );
    }
}

export default HomePage;