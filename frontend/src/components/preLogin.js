import React, { Component } from 'react';
import Header from './header';

import landingImg2 from '../static/images/img_sect_2.svg';
import { Link } from 'react-router-dom';

export default class preLogin extends Component {
  render () {
    return (
      <div>
        <Header />
        <section id='sect2' class='d-flex align-items-start'>
          <div class='container pl-10 pr-10' id='cont-sect-2'>
            <br class='break-sm' /> <br class='break-sm' /> <br class='break-sm' />
            <h1 class='display-3' id='title2'>Who are you?</h1> <br />
            <img src={landingImg2} alt='' class='img-sect-2' /> <br />
            <div class='btns-sect-2'>
              <Link to='/loginStudent' className='w-100 d-flex justify-content-center'>
                <button class='button w-75 btn-primary btn-sect-2'><p class='b-text1'>I'm a student</p><p class='b-text2'>Student</p></button>
              </Link>
              <Link to='/loginTeacher' className='w-100 d-flex justify-content-center'>
                <button class='button w-75 btn-primary btn-sect-2'><p class='b-text1'>I'm a teacher</p><p class='b-text2'>Teacher</p></button>
              </Link>
            </div> <br />

          </div>
        </section>
      </div>
    );
  }
}
