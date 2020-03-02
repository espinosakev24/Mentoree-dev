import React, { Component } from "react";
import axios from "axios";

export default class Students extends Component{
  constructor() {
    super();
    this.state = {
      results: "Not yet gotten"
    };
  }

  componentDidMount = () =>{
    axios.get('http://localhost:4000/api/students/').then(function (response) {
        console.log(response.data.result);
    });
  };

  render() {
    return (
      <div>
        <button> Get all students Names and Ids</button>
      </div>
    )
  }
}