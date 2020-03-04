import React, { Component } from 'react'
import axios from "axios";

export default class profileStudent extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            id: 1
        };
    }
    componentDidMount = () =>{
        let url = `http://localhost:4000/api/students/${this.state.value}`
        console.log(url)
        axios.get(url).then(response => {
            this.setState({
                  results: response.data.result
              }
            );
        })
    }
    render() {
        return (
            <div>
                <h1> Student {this.state.results.first_name}</h1> <br/>
                <h2>{this.state.results.education}</h2><br/>
                <h3>{this.state.results.age}</h3>
                <h3>{this.state.results.location}</h3>
                <h3>{this.state.results.email}</h3>
                <h3>{this.state.results.contact}</h3> <br/>
            </div>
        )
    }
}
