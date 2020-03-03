import React, {Component} from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      id: {value: 0}
    };
   /* this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    */
  }

  getPostsById = () => {
    axios.get('').then()
  }

  getAllPosts = () => {
    axios.get('http://localhost:4000/api/posts/').then(response => {
      this.setState({
          results: response.data.result
        }
      );
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.getAllPosts}>Get all Post</button>
        {this.state.results.map(post => (
          <p><h1>The title of the post is {post.title}</h1><br />
          <b>The id of the Student is {post.student_id}</b><br />
          the id of the Teacher is {post.teacher_id}<br />
          The creation date is {post.creation_date}<br />
          the schedule is {post.schedule}<br />
          the price is {post.price}<br />
          the size of people is {post.size}<br />
          the place is {post.location}</p>
        ))}
      </div>
    )
  }
}