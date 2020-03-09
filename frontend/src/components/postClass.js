import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { postClass } from './postSubscribe';
import HeaderLogged from './headerLogged';

export default class PostClass extends Component {
  constructor () {
    super();
    this.state = {
      post_id: '',
      student_id: '',
      title: '',
      description: '',
      category: '',
      schedule: '',
      price: '',
      size: '',
      location: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit (e) {
    e.preventDefault();

    const post = {
      student_id: jwt_decode(localStorage.studentToken).student_id,
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      schedule: this.state.schedule,
      price: this.state.price,
      size: this.state.size,
      location: this.state.location
    };

    postClass(post).then(res => {
      this.props.history.push('\lobby');
    });
  }

  render () {
    return (
      <div class='container p-4'>
        <HeaderLogged />
        <div class='row'>
          <div class='col-md-4 mx-auto'>
            <div class='cad text-center'>
              <div class='card-header'>
                <h3>Post a class</h3>
              </div>
              <div class='card-body'>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                      type='text'
                      className='form-control'
                      name='title'
                      placeholder='Enter title'
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <input
                      type='text'
                      className='form-control'
                      name='description'
                      placeholder='Enter Description'
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='category'>category</label>
                    <input
                      type='text'
                      className='form-control'
                      name='category'
                      placeholder='Enter category'
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='schedule'>schedule</label>
                    <input
                      type='text'
                      className='form-control'
                      name='schedule'
                      placeholder='Enter schedule'
                      value={this.state.schedule}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='price'>price</label>
                    <input
                      type='number'
                      className='form-control'
                      name='price'
                      placeholder='Enter price'
                      value={this.state.price}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='size'>size</label>
                    <input
                      type='number'
                      className='form-control'
                      name='size'
                      placeholder='Enter size'
                      value={this.state.size}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='location'>location</label>
                    <input
                      type='text'
                      className='form-control'
                      name='location'
                      placeholder='Enter location'
                      value={this.state.location}
                      onChange={this.onChange}
                    />
                  </div>
                  <button type='submit' class='btn btn-success btn-block'>
                                        Post class
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
