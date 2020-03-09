import React, { Component } from 'react';
import { loginTeacher } from './registerLogin';
import Header from './header';
import { HashLink as Link_red } from 'react-router-hash-link';

export default class LoginTeacher extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit (e) {
    e.preventDefault();

    const teacher = {
      email: this.state.email,
      password: this.state.password
    };

    loginTeacher(teacher).then(res => {
      this.props.history.push('\lobby');
    });
  }

  render () {
    return (
      <div class='container pl-10 pr-10 mt-5 d-flex flex-column align-items-center justify-content-start'>
        <Header />
        <h1><strong>Log In</strong></h1><br />
        <form noValidate onSubmit={this.onSubmit} class='form-control h-100' id='form'>
          <div class='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Enter Email'
              value={this.state.email}
              onChange={this.onChange}
              id='in'
            />
          </div>
          <div class='form-group'>
            <input
              type='password'
              className='form-control'
              name='password'
              placeholder='Enter Password'
              value={this.state.password}
              onChange={this.onChange}
              id='in'
            />
          </div>
          <small class='form-text' id='form-text'><strong>Forgot your password?</strong></small> <br />
          <button type='submit' class='btn btn-primary btn-block' id='btn-in'>
                        Login
          </button> <br />
          <div class='form-check'>
            <input type='checkbox' class='form-check-input' id='check1' />
            <label class='form-check-label' for='check1' id='form-text'>Keep me signed in</label>
          </div>
        </form> <br />
        <p class='justify-self-end'>Not a member? <Link_red to='/#sect2'>
          <a href='index.html#sect2'>
            <b>Get started</b>
          </a>
        </Link_red>
        </p>
      </div>
    );
  }
}
