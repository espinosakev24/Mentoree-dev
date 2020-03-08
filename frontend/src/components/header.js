import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import Logo from '../static/images/imglogo.svg';
import hamburguermenu from '../static/images/menu.svg'


export default class Header extends Component {
    render() {
         return (
            <div className="container mt-sm-0 pl-0 pr-0 mb-3 fixed-top" id="header-fix">
            <nav className="navbar navbar-expand-md mentoree-img" id="navbar">
            <Link to='/'>
                <a href="#sect1" className="navbar-brand"><img src={Logo} alt="" width="170" height="auto" className="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle='collapse' data-target="#navbarSupportedContent" id="btn-header">
                  <span className="navbar-toggler-icon" id="hamburguermenu"><img src={hamburguermenu} alt="" width="15" height="auto"/></span>
                </button>
            </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav text-center ml-auto small-phone nav-items">
                {/* <li className="nav-item active l-pad p first">
                  <a href="#" className="nav-link">Take a tour</a>
                </li> */}
                  <Link to='/about'>
                    <li className="nav-item active l-pad p">
                      <a className="nav-link">About Us</a>
                    </li>
                  </Link>
                <Link to='/preLogin'>
                  <li className="nav-item active last p">
                    <a className="nav-link">Log in</a>
                  </li>
                </Link>
              </ul>
              </div>
            </nav>
        </div>
         )};
    }
