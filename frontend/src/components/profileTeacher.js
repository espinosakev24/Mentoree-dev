import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import profileImg from '../static/images/ph_user.svg';
import candelar from '../static/images/candelar.svg';
import equal from '../static/images/equal.svg';
import dollar from '../static/images/dollar-symbol.svg';
import user from '../static/images/user.svg';
import pin from '../static/images/pin.svg';
import at from '../static/images/at.svg';
import phone from '../static/images/phone.svg';
import book from '../static/images/book.svg';
import HeaderLogged from './headerLogged';
import axios from 'axios';

export default class profileTeacher extends Component {
  logOut (e) {
    e.preventDefault();
    localStorage.removeItem('teacherToken');
    this.props.history.push('/');
  }

  constructor () {
    super();
    this.state = {
      teacher_id: '',
      first_name: '',
      last_name: '',
      contact: '',
      password: '',
      location: '',
      age: '',
      email: '',
      education: '',
      biography: '',
      fields: '',
      methodology: '',
      reviews: '',
      posts: []
    };
  }

  componentDidMount () {
    const token = localStorage.teacherToken;
    const decoded = jwt_decode(token);
    axios.get(`/api/posts/teachers/${decoded.teacher_id}`).then(response => response.data)
      .then((data) => {
        this.setState({
          teacher_id: decoded.teacher_id,
          first_name: decoded.first_name,
          last_name: decoded.last_name,
          contact: decoded.contact,
          password: decoded.password,
          location: decoded.location,
          age: decoded.age,
          email: decoded.email,
          education: decoded.education,
          biography: decoded.biography,
          fields: decoded.fields,
          methodology: decoded.methodology,
          reviews: decoded.reviews,
          posts: data.result
        });
      });
  }

  render () {
    return (
      <div>
      <HeaderLogged />
      <div class='container pl-10 pr-0 mt-5'>
        <div class='row'>
          <div class='col-3 d-flex flex-column align-items-center l-block'>
            <img src={profileImg} width='150' alt='' /> <br /><br />
            <h3><b>{this.state.first_name} {this.state.last_name}</b></h3>
            <p>{this.state.education}</p>
            <div class='row d-flex justify-content-center w-100'>
              <div class='col-6 d-flex p-0 justify-content-between'>
                <div class='col-6 d-flex p-0'>
                  <img src={candelar} alt='' />&nbsp;&nbsp;{this.state.age}
                </div>
                <div class='col-6 d-flex p-0 pb-3'>
                  <img src={equal} alt='' />&nbsp;&nbsp;{this.state.location}
                </div>
              </div>
              <br />
              <div class='d-flex justify-content-center align-itmes-center pb-3'>
                <img src={at} alt='' />&nbsp;&nbsp;{this.state.email}
              </div>
              <br />
              <div className="pb-3">
                <img src={phone} alt='' /> +57 {this.state.contact}
              </div> <br />
              <div>
                <img src={book} /> {this.state.methodology}
              </div>
              <div className="pb-3">
                <div className='fields-col'>{this.state.fields}</div>
              </div>
              <a href='' onClick={this.logOut.bind(this)}>Logout</a>
            </div>

        </div>
          <div class='col-9 c-cont'>
            <h3 class='not'><b>Your bio</b></h3>
            <p className="text-dark">{this.state.biography}</p><br />
            <h3 class='not'>Classes where you have applied</h3> <br />
              {this.state.posts.map((post) => (
                <div class='container p-0 c-post'>
                  <h3><b>{post.title}</b></h3>
                  <p>{post.description}</p>
                  <div class='d-flex justify-content-between p-0 c-menu'>
                    <p id={post.category}>{post.category}</p> <p>Posted by: SomeName</p> <p>Date: {post.creation_date}</p>
                  </div>
                  <div class='d-flex justify-content-between'>
                    <div><img src={dollar} alt='' /> {post.price}/h</div>
                    <div><img src={user} alt='' /> {post.size}</div>
                    <div><img src={pin} alt='' /> {post.location}</div>
                  </div>
                </div>
              ))};
          </div>
      </div>
      </div>
      </div>
    );
  }
}
