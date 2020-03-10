import React, { Component } from 'react';
import HeaderLogged from './headerLogged';
import axios from 'axios';


export default class Lobby extends Component {

  state = {
    posts: [],
    fullName: ''
  }


  componentDidMount() {
    const url = '/api/posts/';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ posts: data.result, fullName: data.fullName })
      console.log(this.state.fullName);
    })
  }



  render () {
    const isStudent = (
      <div>
        {this.state.posts.map((post) => (
          <div>
              <h2>{post.title}</h2>
              <h6>{post.category}</h6>
              <h6>{this.state.fullName}</h6>
              <h6>Date: {post.creation_date}</h6>
              <h5>{post.description}</h5>
              <h6>{post.schedule}</h6>
              <h6>{post.price}/h</h6>
              <h6>Group: {post.size}</h6>
              <h6>{post.location}</h6>
          </div>
        ))}
        I'm Student
      </div>
    );

    const isTeacher = (
      <div>
        I'm Teacher
      </div>
    );
    return (
      <div>
        <HeaderLogged />
        { localStorage.studentToken ? isStudent : isTeacher }
      </div>
    );
  }
}
