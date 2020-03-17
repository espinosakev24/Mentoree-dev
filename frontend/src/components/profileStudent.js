import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import jwt_decode from 'jwt-decode';
import profileImg from '../static/images/ph_user.svg';
import candelar from '../static/images/candelar.svg';
import equal from '../static/images/equal.svg';
import dollar from '../static/images/dollar-symbol.svg';
import user from '../static/images/user.svg';
import pin from '../static/images/pin.svg';
import at from '../static/images/at.svg';
import phone from '../static/images/phone.svg';
import little_fifi from '../static/images/little_fifi.svg';
import close from '../static/images/correct.svg';
import correct from '../static/images/close.svg';
import HeaderLogged from './headerLogged';
import axios from 'axios';



class Teacher extends Component {

  state = {
    first_name: '',
    last_name: '',
    contact: '',
    location: '',
    age: '',
    email: '',
    education: '',
    biography: '',
    fields: '',
    methodology: '',
    reviews: '',
    opened: false
  }

  componentDidMount(){
    const url = `/api/teachers/${this.props.ti}`;
    axios.get(url).then(response => {
      this.setState({
        first_name: response.data.result[0].first_name,
        last_name: response.data.result[0].last_name,
        contact: response.data.result[0].contact,
        location: response.data.result[0].location,
        age: response.data.result[0].age,
        email: response.data.result[0].email,
        education: response.data.result[0].education,
        biography: response.data.result[0].biography,
        fields: response.data.result[0].fields,
        methodology: response.data.result[0].methodology,
        reviews: response.data.result[0].reviews});
    });
  }

  onOpen = () => {
    this.setState({opened: true});
  }

  onClose = () => {
    this.setState({opened: false});
  }

  render(){
    return (
    <div>
      <Modal isOpen = {this.state.opened}>
        <p>{this.state.first_name} {this.state.last_name}</p>
        <p>{this.state.contact}</p>
        <p>{this.state.location}</p>
        <p>{this.state.age}</p>
        <p>{this.state.email}</p>
        <p>{this.state.education}</p>
        <p>{this.state.biography}</p>
        <p>{this.state.fields}</p>
        <p>{this.state.methodology}</p>
        <p>{this.state.reviews}</p>
        <button onClick={this.onClose}>Close</button>
      </Modal>
      <p>{this.state.first_name} {this.state.last_name}</p>
      <p>{this.state.fields}</p>
      {/*<p>{this.state.methodology}</p>*/}
      <button onClick={this.onOpen} >Click to see full profile!</button>
      <div class='d-flex justify-content-around'>
        <img src={correct} alt='' />
        <img src={close} alt='' />
      </div>
    </div>
    );
  }
}

export default class profileStudent extends Component {
  logOut (e) {
    e.preventDefault();
    localStorage.removeItem('studentToken');
    this.props.history.push('/');
  }

  constructor () {
    super();
    this.state = {
      student_id: '',
      first_name: '',
      last_name: '',
      contact: '',
      password: '',
      location: '',
      age: '',
      email: '',
      education: '',
      posts: []
    };
  }

  componentDidMount () {
    const token = localStorage.studentToken;
    const decoded = jwt_decode(token);
    axios.get(`/api/posts/students/${decoded.student_id}`).then(response => response.data)
      .then((data) => {
        this.setState({
          student_id: decoded.student_id,
          first_name: decoded.first_name,
          last_name: decoded.last_name,
          contact: decoded.contact,
          password: decoded.password,
          location: decoded.location,
          age: decoded.age,
          email: decoded.email,
          education: decoded.education,
          posts: data.result
        });
      });
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

  render () {
    console.log(this.state.posts[0]);
    return (
      <div>
        <HeaderLogged />
        <div class='container pl-10 pr-0 mt-5'>
          <div class='row'>
            <div class='col-3 d-flex flex-column align-items-center l-block'>
              <img src={profileImg} width='150' alt='' /> <br />
              <h3><b>{this.state.first_name} {this.state.last_name}</b></h3>
              <p>{this.state.education}</p> <br />
              <div class='row d-flex justify-content-between w-100'>
                <div class='col-6 d-flex p-0 justify-content-center'>
                  <img src={candelar} alt='' />&nbsp;&nbsp;{this.state.age}
                </div>
                <div class='col-6 d-flex p-0 justify-content-center'>
                  <img src={equal} alt='' />&nbsp;&nbsp;{this.state.location}
                </div>
              </div>
              <br />
              <div class='d-flex'>
                <img src={at} alt='' />&nbsp;&nbsp;{this.state.email}
              </div>
              <br />
              <div>
                <img src={phone} alt='' /> +57 {this.state.contact}
              </div>
              <br /><br />
              <a href='' onClick={this.logOut.bind(this)}>Logout</a>
            </div>

            <div class='col-9 c-cont'>
              <h3 class='not'>Classes you have posted</h3> <br /><br />
              {this.state.posts.map((post) => (
                <div className="row">

                  <div className="col-8">

                    <div class='container p-0 c-post'>
                      <h3><b>{post.title}</b></h3>
                      <div class='d-flex justify-content-between p-0 c-menu'>
                        <p id={post.category}>{post.category}</p> <p>Posted by: {this.state.first_name} {this.state.last_name}</p> <p>
                          {this.changeDateFormat(post.creation_date)}</p>
                      </div>
                      <p>{post.description}</p>
                      <div class='d-flex justify-content-between'>
                        <div><img src={dollar} alt='' /> {post.price}/h</div>
                        <div><img src={user} alt='' /> {post.size}</div>
                        <div><img src={pin} alt='' /> {post.location}</div>
                      </div>
                    </div>

                  </div>

                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center pt-3">
                      <p className="not"><b>Teachers</b></p>
                      <p> { post.teacher_id ? <Teacher ti={post.teacher_id}/>: `No teacher postuled yet!` } </p>
                    </div>
                  </div>



                </div>
              ))}
            </div>

{/*
            <div class='col-2'>
              <p><b>Teachers</b></p>

              <div class='row d-flex l-block-cont'>
                <div class='col-5'>
                  <img src={little_fifi} alt='' />
                </div>
                <div class='col-7'>
                  <h6>Fidel Caicedo</h6>
                  <div class='d-flex justify-content-around'>
                    <img src={correct} alt='' />
                    <img src={close} alt='' />
                  </div>
                </div>
              </div>

              <div class='row d-flex l-block-cont'>
                <div class='col-5'>
                  <img src={little_fifi} alt='' />
                </div>
                <div class='col-7'>
                  <h6>Fidel Caicedo</h6>
                  <div class='d-flex justify-content-around'>
                    <img src={correct} alt='' />
                    <img src={close} alt='' />
                  </div>
                </div>
              </div>

              <div class='row d-flex l-block-cont'>
                <div class='col-5'>
                  <img src={little_fifi} alt='' />
                </div>
                <div class='col-7'>
                  <h6>Fidel Caicedo</h6>
                  <div class='d-flex justify-content-around'>
                    <img src={correct} alt='' />
                    <img src={close} alt='' />
                  </div>
                </div>
              </div>

              <div class='row d-flex l-block-cont'>
                <div class='col-5'>
                  <img src={little_fifi} alt='' />
                </div>
                <div class='col-7'>
                  <h6>Fidel Caicedo</h6>
                  <div class='d-flex justify-content-around'>
                    <img src={correct} alt='' />
                    <img src={close} alt='' />
                  </div>
                </div>
              </div>

              <div class='row d-flex l-block-cont'>
                <div class='col-5'>
                  <img src={little_fifi} alt='' />
                </div>
                <div class='col-7'>
                  <h6>Fidel Caicedo</h6>
                  <div class='d-flex justify-content-around'>
                    <img src={correct} alt='' />
                    <img src={close} alt='' />
                  </div>
                </div>
              </div>
            </div>
*/}
          </div>
        </div>
      </div>
    );
  }
}
