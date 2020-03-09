import React, { Component } from 'react';
import Header from './header';

import landingImg1 from '../static/images/home_img.svg';
import landingImg2 from '../static/images/img_sect_2.svg';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <section>
          <div class='container pl-10 pr-0 mt-5'>
            <div class='row'>
              <div class='col-md-5 col-xl-5 col-lg-5 col-sm-12' id='sm-center-text'>
                <h1 class='display-3' id='sm-h1'>On demand<br />academic<br />solutions</h1> <br />
                <p>Hundreds of satisfied students and <br />teachers.</p> <br />
                <a href='#sect2'><button type='button' class='button btn-block btn-lg btn-primary' id='btn-sect-1'>Get started</button></a>
              </div>
              <div class='col-7 col-md-7 col-lg-7 col-xl-7 d-flex justify-content-end pr-0'>
                <img src={landingImg1} alt='' id='img-sect-1' class='d-none d-lg-block d-xl-block d-md-block' />
              </div>
            </div>
          </div>
        </section>

        <section id='sect2' class='d-flex align-items-start'>
          <div class='container pl-10 pr-10' id='cont-sect-2'>
            <br class='break-sm' /> <br class='break-sm' /> <br class='break-sm' />
            <h1 class='display-3' id='title2'>Who are you?</h1> <br />
            <img src={landingImg2} alt='' class='img-sect-2' /> <br />
            <div class='btns-sect-2'>
              <Link to='/registerStudent' className='w-100 d-flex justify-content-center'>
                <button class='button w-75 btn-primary btn-sect-2'><p class='b-text1'>I'm a student</p><p class='b-text2'>Student</p></button>
              </Link>
              <Link to='/registerTeacher' className='w-100 d-flex justify-content-center'>
                <button class='button w-75 btn-primary btn-sect-2'><p class='b-text1'>I'm a teacher</p><p class='b-text2'>Teacher</p></button>
              </Link>
            </div> <br />

          </div>
        </section>
      </div>
    );
  }
}
