import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Logo from '../static/images/imglogo.svg';
import hamburguermenu from '../static/images/menu.svg';
import notification from '../static/images/notification.svg';

export default class HeaderLogged extends Component {
  constructor () {
    super();
    this.state = {
      first_name: '',
      last_name: ''
    };
  }

  componentDidMount () {
    let token;
    if (localStorage.studentToken) {
      token = localStorage.studentToken;
    } else {
      token = localStorage.teacherToken;
    }
    const decoded = jwt_decode(token);

    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name
    });
  }

  render () {
    const isStudent = (
      <ul class='navbar-nav text-center ml-auto small-phone nav-items'>
        <li class='nav-item active first'>
          <a href='#' class='nav-link profile-text'>
            <img src={notification} width='25' height='auto' alt='' />
          </a>
        </li>
        <Link to='/postClass'>
          <li class='nav-item active white'>
            <a href='about_us.html' class='nav-link post-class profile-text'>+ Post Class</a>
          </li>
        </Link>
        <Link to='/profileStudent'>
          <li class='nav-item active'>
            <a href='login.html' class='nav-link profile-text'>{this.state.first_name + ' ' + this.state.last_name}</a>
          </li>
        </Link>
      </ul>
    );

    const isTeacher = (
      <ul className='navbar-nav text-center ml-auto small-phone nav-items'>
        <li className='nav-item active l-pad p'>
          <a className='nav-link'>Notifications</a>
        </li>
        <Link to='/profileTeacher'>
          <li className='nav-item active last p'>
            <a className='nav-link'>{this.state.first_name + ' ' + this.state.last_name}</a>
          </li>
        </Link>
      </ul>
    );
    return (
      <div className='container mt-sm-0 pl-0 pr-0 mb-3 fixed-top' id='header-fix'>
        <nav className='navbar navbar-expand-md mentoree-img' id='navbar'>
          <Link to='/lobby'>
            <a href='#sect1' className='navbar-brand'><img src={Logo} alt='' width='170' height='auto' className='logo' /></a>
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' id='btn-header'>
            <span className='navbar-toggler-icon' id='hamburguermenu'><img src={hamburguermenu} alt='' width='15' height='auto' /></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            {localStorage.studentToken ? isStudent : isTeacher}
          </div>
        </nav>
      </div>
    );
  }
}
