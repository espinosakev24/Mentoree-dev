import React, { Component } from 'react';
import HeaderLogged from './headerLogged';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import '../static/css/lobby.css'
import dollar from '../static/images/dollar-symbol.svg';
import user from '../static/images/user.svg';
import pin from '../static/images/pin.svg';
/*import $ from 'jquery';*/


let cont = 0;
var categoriesclicked = [];
class Owner extends Component {

  state = {
    firstName: '',
    lastName: ''
  }
  componentDidMount(){
    const url = `/api/students/${this.props.ow}`;
    axios.get(url).then(response => {
      this.setState({firstName: response.data.result[cont].first_name,
      lastName: response.data.result[cont].last_name});
      console.log(response.data.result[cont].first_name);
    });
  }
  
  render(){
    return ( <p>Posted by: {this.state.firstName} {this.state.lastName}</p>)
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
  changeDateFormat = (date) => {
    let newDate = '';
    let tempDate = []
    let day = ''

    tempDate = date.split('-');
    day = tempDate[2].split('T')[0];
    newDate = `${day}/${tempDate[1]}/${tempDate[0]} `
    return(newDate);
  }
  filterCategories = (ob) => {
    let filtered = [];
    if (typeof(ob) != "undefined") {
      var element = document.getElementsByClassName(ob);
      if (element) {
        if (element[0].className.split(' ')[1] == 'clicked'){
          element[0].classList.remove('clicked');
          for(let n = 0; n < categoriesclicked.length; n++) {
            console.log(categoriesclicked[n]);
            console.log(ob);
            if(categoriesclicked[n] === ob.split(' ')[0]) {
              categoriesclicked.splice(n, 1);
            }
        }
          /*console.log(`this is the classname: ${ob}`);*/
        }
        else {
          element[0].classList.add("clicked");
          categoriesclicked.push(ob.split(' ')[0]);
        }
      }
      /*console.log(`This is the list of categories: ${categoriesclicked}`);*/
      this.setState({ state: this.state });
    }
    if (categoriesclicked.length === 0) {
      return this.state.posts;
    }
    else {
      this.state.posts.map((post) => {
        if (categoriesclicked.includes(post.category)) {
          filtered.push(post);
        }
      })
      return filtered;
    }
  }
  render () {
    const isStudent = (
      <div class='container pl-10 pr-0 mt-5' id="postclass-cont">
        <HeaderLogged />
        <div className="row d-flex justify-content-between lobby-fields">
          <div className="Art" onClick={ob => this.filterCategories(ob.target.className)}>Art</div>
          <div className="Humanities" onClick={ob => this.filterCategories(ob.target.className)}>Humanities</div>
          <div className="Languages" onClick={ob => this.filterCategories(ob.target.className)}>Languages</div>
          <div className="Wellness" onClick={ob => this.filterCategories(ob.target.className)}>Wellness</div>
          <div className="Technology" onClick={ob => this.filterCategories(ob.target.className)}>Technology</div>
          <div className="Science" onClick={ob => this.filterCategories(ob.target.className)}>Science</div>
        </div>
        <br/><br/>
        <div className="row">
          {this.filterCategories().map((post) => (
          <div class='container col-5 pr-5' id="posts">
            <h3><b>{post.title}</b></h3>
            <div class='d-flex justify-content-between  c-menu'>
          <p id={post.category}>{post.category}</p> <Owner ow={post.student_id}/> <p>{this.changeDateFormat(post.creation_date)}</p>
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
          <div className="Art" onClick={ob => this.filterCategories(ob.target.className)}>Art</div>
          <div className="Humanities" onClick={ob => this.filterCategories(ob.target.className)}>Humanities</div>
          <div className="Languages" onClick={ob => this.filterCategories(ob.target.className)}>Languages</div>
          <div className="Wellness" onClick={ob => this.filterCategories(ob.target.className)}>Wellness</div>
          <div className="Technology" onClick={ob => this.filterCategories(ob.target.className)}>Technology</div>
          <div className="Science" onClick={ob => this.filterCategories(ob.target.className)}>Science</div>
        </div>
        <br/><br/>
        <div className="row">
          {this.filterCategories().map((post) => (
          <div class='container col-5 pr-5' id="posts">
            <h3><b>{post.title}</b></h3>
            <div class='d-flex justify-content-between  c-menu'>
          <p id={post.category}>{post.category}</p> <Owner ow={post.student_id}/> <p>{this.changeDateFormat(post.creation_date)}</p>
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
                Postule
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
function removeItem(list, item) {
  for(let n = 0; n < list.length; n++) {
      if(list[n] === item) {
          list.splice(n, 1);
      }
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