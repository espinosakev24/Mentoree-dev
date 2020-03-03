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
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Something has being submitted: ' + this.state.value)
    console.log(this.state.value)
    event.preventDefault();
    this.setState({value: event.target.value});
    this.getStudentById();

  }
  getStudentById = () =>{
    let url = `http://localhost:4000/api/students/${this.state.value}`
    console.log(url)
    axios.get(url).then(response => {
      this.setState({
          results: response.data.result
        }
      );
    })
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
            Student ID:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="reset"/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        {this.state.results.map(student => (
          <p>The student {student.first_name} has the id {student.student_id}</p>
        ))}
      </div>
    )
  }
}