import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { postClass } from './postSubscribe';
import HeaderLogged from './headerLogged';
import user_big from '../static/images/user_big.svg'
import pin_big from '../static/images/pin_big.svg'
import candelar from '../static/images/candelar.svg'
import '../static/css/post.css';


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
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }
/** Validates that all information is stored is given, else it will return error **/
  validate = () => {
    if (!this.state.title ||
      !this.state.description ||
      !this.state.category ||
      !this.state.schedule ||
      !this.state.price ||
      !this.state.size ||
      !this.state.location) {
      this.setState({ errors: "Please fill every field!" });
      return false;
    } else {
      return true;
    }
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

    const isValid = this.validate();
    if (isValid) {
      postClass(post).then(res => {
        //window.open('/lobby', '_self');
        /*console.log('[Component] - Post created succesfully!');*/
        this.props.history.push('\lobby');
      })
      .catch(e => {
       /* console.log('[Component] - An error has ocurred while creating a post...');*/
      });
    }
  }


  render () {
    /** Returns the Component that is used to visualize the POST class**/
    return (
      <div class='container pl-10 pr-0 mt-5' id="postclass-cont">
        <HeaderLogged />
        <form noValidate onSubmit={this.onSubmit}>
          {this.state.errors ? <div className="alert alert-danger" role="alert">{this.state.errors}</div>: null }
          <div className="row d-flex">
            <div className="col-8">
              <h3><b>Title</b></h3>
              <div className='form-group'>
                <label htmlFor='title' className="upper-text">Try something catchy, remember, less is more!</label>
                  <input
                    type='text'
                    className='form-control'
                    name='title'
                    placeholder='Cooking maestro needed!'
                    value={this.state.title}
                    onChange={this.onChange}
                    id="titlebox"
                  />
                </div>
            </div>

            <div className="col-4 d-flex flex-column">
              <h3><b>Category</b></h3>
              <p className="upper-text">How would you clasify your need?</p>
              <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      name='category'
                      placeholder='Wellness'
                      value={this.state.category}
                      onChange={this.onChange}
                    />
                  </div>
              <div className="categories">
                <div className="cols-cont cols-cont-1">
                  <div className="cols" id="areas">Art</div> <div className="cols" id="areas">Humanities</div> <div className="cols" id="areas">Languages</div>
                </div>
                <div className="cols-cont cols-cont-2">
                  <div className="cols" id="areas">Wellness</div> <div className="cols" id="areas">Technology</div> <div className="cols" id="areas">Science</div>
                </div>
              </div>
            </div>

          </div>

          <div className="row flex-column">
            <div className="col-12">
              <h3><b>Description</b></h3>
              <div className='form-group'>
                <label htmlFor='description' className="upper-text">State your needs in a kind and direct way!</label>
                <textarea
                  type='text'
                  className='form-control'
                  name='description'
                  placeholder='Im looking for a cooking maestro to teach me the best ways and practices while in the kitchen. I really want to improve my cooking... My main goal is to make somthing like a cake att he end of the course!'
                  value={this.state.description}
                  onChange={this.onChange}
                  id="textarea"
                />
              </div>
            </div>
          </div> <br/>

          <div className="row justify-content-between">

            <div className="col-3 d-flex flex-column align-items-center">
              <h3><b>Schedule</b></h3>
              <img src={candelar} width="50"/><br/>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='schedule'
                  placeholder='Saturday, Sunday - 11:00am'
                  value={this.state.schedule}
                  onChange={this.onChange}
                  id="item"
                />
              </div>
            </div>

            <div className="col-3 d-flex flex-column align-items-center">
              <h3><b>Price</b></h3>
              <div className='form-group'> <br/>
                <input
                  type='number'
                  className='form-control'
                  name='price'
                  placeholder='15000'
                  value={this.state.price}
                  onChange={this.onChange}
                  id="price"
                />
                <label htmlFor='price' id="item"> -    Hourly   -</label>
              </div>
            </div>

            <div className="col-3 d-flex flex-column align-items-center">
              <h3><b>Size</b></h3>
              <img src={user_big} width="50"/>
              <div className='form-group'> <br/>
                <input
                  type='number'
                  className='form-control'
                  name='size'
                  placeholder='1'
                  value={this.state.size}
                  onChange={this.onChange}
                  id="item"
                />
                <label htmlFor='size' id="item">Amount of people</label>
              </div>
            </div>

            <div className="col-3 d-flex flex-column align-items-center">
              <h3><b>Location</b></h3>
              <img src={pin_big} width="50"/>
              <div className='form-group'><br/>
                <input
                  type='text'
                  className='form-control'
                  name='location'
                  placeholder='House'
                  value={this.state.location}
                  onChange={this.onChange}
                  id="item"
                />
                <label htmlFor='location' id="item">location</label>
              </div>
            </div>
          </div>
          <br/>
          <div className='row col-12 d-flex justify-content-end'>
            <button type='submit' class='btn btn-1'>
                        Cancel
            </button>

              <button type='submit' class='btn btn-2'>
                          Post class
              </button>
              
          </div>
        </form>
        <br/>
        <br/>
      </div>
    )}
}