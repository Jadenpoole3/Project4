import React, { Component } from 'react';
import axios from 'axios'


class HomePage extends Component {
    state = {
        quotes: []
    }
    componentWillMount() {
        this.getAllQuotes()
    }

    getAllQuotes = async () => {
        const res = await axios.get('')
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