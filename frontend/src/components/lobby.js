import React, { Component } from 'react';
import HeaderLogged from './headerLogged';
import axios from 'axios';
import '../static/css/lobby.css'
import dollar from '../static/images/dollar-symbol.svg';
import user from '../static/images/user.svg';
import pin from '../static/images/pin.svg';
import $ from "jquery";


class Owner extends Component {

  state = {
    firstName: '',
    lastName: ''
  }
  componentDidMount(){
    const url = `/api/students/${this.props.ow}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ first_name: data.result[0].first_name, lastName: data.result[0].last_name })
      console.log(`LOST POST SON DE ${this.state.firstName}`);
    });
  }
  
  render(){
    return ( <p>Posted by: {this.getPostOwner}</p>)
  }
}

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

    /*getPostOwner(){
    var urlStudents = `http://localhost:4000/api/students/${id}`;
    $.getJSON(urlStudents, function (data) {
      let name = data.result[0].first_name;
      console.log(`the name is: ${name} ${id}`)
      return name;
    });
  }*/
  
  render () {
    const isStudent = (
      <div class='container pl-10 pr-0 mt-5' id="postclass-cont">
        <HeaderLogged />
        <div className="row d-flex justify-content-between lobby-fields">
          <div>Art</div>
          <div>Humanities</div>
          <div>Languages</div>
          <div>Wellness</div>
          <div>Technology</div>
          <div>Science</div>
        </div>
        <br/><br/>
        <div className="row">
          {this.state.posts.map((post) => (
          <div class='container col-5 pr-5' id="posts">
            <h3><b>{post.title}</b></h3>
            <div class='d-flex justify-content-between  c-menu'>
          <p>{post.category}</p> <Owner ow={post.student_id}/> <p>date: date{/*{post.creation_date}*/}</p>
            </div>
            <p>
              {post.description} <br/>
              <b>Schedule:</b>  {post.schedule}
            </p>
            <div class='d-flex justify-content-between'>
              <div><img src={dollar} alt='' /> {post.price}/h</div>
              <div><img src={user} alt='' /> Group: {post.size}</div>
              <div><img src={pin} alt='' /> {post.location}</div>
            </div>
          </div>
          ))}
        </div>
        student
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
