import React, { Component } from 'react'
import axios from "axios";

export default class profileTeacher extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            id: 2
        };
    }
    componentDidMount = () =>{
        let url = `localhost:4000/api/teachers/${this.state.value}`
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
              <h1> Teacher {this.state.results.first_name}</h1> <br/>
              <h2>{this.state.results.education}</h2><br/>
              <h3>{this.state.results.age}</h3>
              <h3>{this.state.results.location}</h3>
              <h3>{this.state.results.email}</h3>
              <h3>{this.state.results.contact}</h3> <br/>
              <h3>{this.state.results.methodology}</h3> <br/>
              <h3>{this.state.results.fields}</h3>

          </div>
        )
    }
}
