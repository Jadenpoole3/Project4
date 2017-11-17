import React, { Component } from 'react';
import axios from 'axios'


class QuotePage extends Component {
    state = {
        quote: {}
    }
    
    componentWillMount() {
        this.getQuote()
    }
    
    getQuote = async () => {
        try {
            const res = await axios.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10", {
                headers: {
                    "X-Mashape-Key": "uLWQJ8sGGUmshhdhHDUNrw3OGqbwp183senjsn2mZZpQBfwcQ9",
                    // "Accept": "application/json"
                }
            })
            // .header("X-Mashape-Key", "uLWQJ8sGGUmshhdhHDUNrw3OGqbwp183senjsn2mZZpQBfwcQ9")
            // .header("Accept", "application/json")
            // .end(function (result) {
            //   console.log(result.status, result.headers, result.body);
            // });
            console.log(res)
            var num = Math.floor(Math.random() * 10)
            this.setState({quote: res.data[num]})

           
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <h1>Heres a Random Quote to get you going </h1>
                <h3>Quote by: {this.state.quote.author}</h3>
                <p>Quote: {this.state.quote.quote}</p>
            </div>
        );
    }
}

export default QuotePage;