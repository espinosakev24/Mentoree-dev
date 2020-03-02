import React, { Component } from "react";
import axios from "axios";

export default class Students extends Component{
  constructor() {
    super();
    this.state = {
      results: [],
      id: {value: 0}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getStudentById = () =>{
    axios.get('').then()
  }
  getAllStudents = () =>{
    axios.get('http://localhost:4000/api/students/').then(response => {
      this.setState({
        results: response.data.result
      }
      );
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.getAllStudents}>Get all Students and It's id</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.results.map(student => (
          <p>The student {student.first_name} has the id {student.student_id}</p>
        ))}
      </div>
    )
  }
}