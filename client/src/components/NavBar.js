import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #A7D8DE;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <ul>
  <li><a href="/">Home</a></li>
  <li><a href="/QuotePage">Quotes</a></li>
  <li><a href="/users">User</a></li>
  <li><a href="/">Sign Up</a></li>
</ul>
            </Nav>
        );
    }
}

export default NavBar;