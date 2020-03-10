import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import profileImg from '../static/images/Kevin.svg';
import candelar from '../static/images/candelar.svg';
import equal from '../static/images/equal.svg';
import dollar from '../static/images/dollar-symbol.svg';
import user from '../static/images/user.svg';
import pin from '../static/images/pin.svg';
import at from '../static/images/at.svg';
import phone from '../static/images/phone.svg';
import HeaderLogged from './headerLogged';
import book from '../static/images/book.svg';

export default class profileTeacher extends Component {
  logOut (e) {
    e.preventDefault();
    localStorage.removeItem('teacherToken');
    this.props.history.push('/');
  }

  constructor () {
    super();
    this.state = {
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
      reviews: ''
    };
  }

  componentDidMount () {
    const token = localStorage.teacherToken;
    const decoded = jwt_decode(token);
    this.setState({
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
      reviews: decoded.reviews
    });
  }

  render () {
    return (
      <div>
      <HeaderLogged />
      <div class='container pl-10 pr-0 mt-5'>
        <div class='row'>
          <div class='col-3 d-flex flex-column align-items-center l-block'>
            <img src={profileImg} width='150' alt='' /> <br />
            <h3><b>{this.state.first_name} {this.state.last_name}</b></h3>
            <p>{this.state.education}</p>
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
            </div> <br/>
            <div>
              <img src={book}/> {this.state.methodology}
            </div>
            <div>
              <div className="fields-col">{this.state.fields}</div>
              <div className="fields-col"></div>
              <div className="fields-col"></div>
            </div>
            <a href='' onClick={this.logOut.bind(this)}>Logout</a>
          </div>

          <div class='col-9 c-cont'>
            <h3 class='not'>Classes you have posted</h3> <br /><br />

            <div class='container p-0 c-post'>
              <h3><b>Help with you are the dog I'm the cat we're in the second video</b></h3>
              <div class='d-flex justify-content-between p-0 c-menu'>
                <p>Science</p> <p>Posted by: {this.state.first_name} {this.state.last_name}</p> <p>date: 24/02/20</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente voluptate blanditiis soluta quis rem, minima odio
                            aperiam qui pariatur. Praesentium veniam impedit sapiente
                            atque et saepe quisquam, quae vero non!
              </p>
              <div class='d-flex justify-content-between'>
                <div><img src={dollar} alt='' /> 30.000/h</div>
                <div><img src={user} alt='' /> Alone(1)</div>
                <div><img src={pin} alt='' /> House</div>
              </div>
            </div>
            <div class='container p-0 c-post'>
              <h3><b>Help with you are the dog I'm the cat we're in the second video</b></h3>
              <div class='d-flex justify-content-between p-0 c-menu'>
                <p>Science</p> <p>Posted by: {this.state.first_name} {this.state.last_name}</p> <p>date: 24/02/20</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente voluptate blanditiis soluta quis rem, minima odio
                            aperiam qui pariatur. Praesentium veniam impedit sapiente
                            atque et saepe quisquam, quae vero non!
              </p>
              <div class='d-flex justify-content-between'>
                <div><img src={dollar} alt='' /> 30.000/h</div>
                <div><img src={user} alt='' /> Alone(1)</div>
                <div><img src={pin} alt='' /> House</div>
              </div>
            </div>
            <div class='container p-0 c-post'>
              <h3><b>Help with you are the dog I'm the cat we're in the second video</b></h3>
              <div class='d-flex justify-content-between p-0 c-menu'>
                <p>Science</p> <p>Posted by: {this.state.first_name} {this.state.last_name}</p> <p>date: 24/02/20</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente voluptate blanditiis soluta quis rem, minima odio
                            aperiam qui pariatur. Praesentium veniam impedit sapiente
                            atque et saepe quisquam, quae vero non!
              </p>
              <div class='d-flex justify-content-between'>
                <div><img src={dollar} alt='' /> 30.000/h</div>
                <div><img src={user} alt='' /> Alone(1)</div>
                <div><img src={pin} alt='' /> House</div>
              </div>
            </div>
          </div>



        </div>
      </div>
      </div>
    );
  }
}
