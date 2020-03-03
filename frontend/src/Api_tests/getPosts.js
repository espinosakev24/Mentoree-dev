import React, {Component} from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      id: {value: 0}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <p>The title of the post is {post.data}
          The one posting it is  {post.student_name}
          the id of the student is {post.student_id}
          The date is {post.date}
          the field is {post.field}
          the payment is {post.payment}
          the place is {post.place}</p>
        ))}
      </div>
    )
  }
}