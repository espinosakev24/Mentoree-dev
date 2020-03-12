import React, { Component } from 'react';
import HeaderLogged from './headerLogged';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import '../static/css/lobby.css'
import dollar from '../static/images/dollar-symbol.svg';
import user from '../static/images/user.svg';
import pin from '../static/images/pin.svg';
/*import $ from 'jquery';*/


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
    if (localStorage.teacherToken) {
      const decoded = jwt_decode(localStorage.teacherToken);
      this.setState({ teacher_id: decoded.teacher_id });
    }
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ posts: data.result, fullName: data.fullName })
    })
  }


  postTeacherRequest = (pst_id, tch_id) => {
    axios.put(`/api/posts/${pst_id}`, {
      teacher_id: tch_id
    })
    .then(response => {
      console.log("Teacher suscribed!")
      /*toggle();*/
    })
  }
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
          <p id={post.category}>{post.category}</p> <Owner ow={post.student_id}/> <p>date: date{/*{post.creation_date}*/}</p>
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
      </div>
    );

    const isTeacher = (
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
          <p id={post.category}>{post.category}</p> <Owner ow={post.student_id}/> <p>date: {post.creation_date}</p>
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
            <div className="d-flex justify-content-center">
              <button id="bt" class="nosuscribe boton" onClick={this.postTeacherRequest.bind(this, post.post_id, this.state.teacher_id)}>
                Suscribe
              </button>
            </div>
          </div>
          ))}
        </div>
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
/*
function toggle() {
  var element = document.querySelector("div.boton button");
  if (element.className === 'nosuscribe') {
    element.classList.remove('nosuscribe');
    element.classList.add('suscribe');
  }
  else {
    element.classList.remove('suscribe');
    element.classList.add('nosuscribe');
  }
  console.log("helloooo");
}
function toggle () {
  $('.boton').click(function () {
    let classNam = $(this).attr('class').split(' ')[0];
    if (classNam === 'nosuscribe') {
      $(this).attr('class', 'suscribe');
    }
    else {
      $(this).attr('class', 'nosuscribe');
    }
    return false;
  })
}*/