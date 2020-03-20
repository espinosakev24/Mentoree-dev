import React, { Component } from 'react';
import Header from './header';

import Cami from '../static/images/Cami.svg';
import Fifi from '../static/images/Fifi.svg';
import Kevin from '../static/images/Kevin.svg';

import github from '../static/images/github.svg'
import linkedin from '../static/images/linkedin.svg'
import twitter from '../static/images/twitter.svg'
/** Returns a Loaded Component with the information of the makers of the WebPage**/
export default class AboutUs extends Component {
  render () {
    return (
      <div>
        <Header />
        <div class='container pl-10 pr-10 mt-5 text-center'>
          <h1 class='display-5'>Who we are</h1> <br />
          <p class='text-dark'>We are three developers passionate about education based on technology. <br />
                        Motivation is our driving force and breaking the stablished boundaries our goal.
          </p> <br />

          <div class='container-fluid d-flex justify-content-between'>
            <div class='col-4'>
              <img src={Cami} alt='' class='face-img' /> <br /> <br />
              <h5 class='display-5'><strong>Camilo Villegas</strong></h5>
              <p class='text-dark mb-2'>Full-stack engineer</p>
              <div>
                <a href="https://github.com/mrdoomus" target="_blank">
                  <img src={github} alt='' />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/mr_doomus" target="_blank">
                  <img src={linkedin} alt='' />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/camilovj/" target="_blank">
                  <img src={twitter} alt='' />
                </a>
              </div>
            </div>
            <div class='col-4'>
              <img src={Fifi} alt='' class='face-img' /> <br /> <br />
              <h5 class='display-5'><strong>Fidel Caicedo</strong></h5>
              <p class='text-dark mb-2'>Devops engineer</p>
              <div>
                <a href="https://github.com/Relaxforever/" target="_blank">
                  <img src={github} alt='' />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/fidel-caicedo/" target="_blank">
                  <img src={linkedin} alt='' />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/relax226" target="_blank">
                  <img src={twitter} alt='' />
                </a>
              </div>
            </div>
            <div class='col-4'>
              <img src={Kevin} alt='' class='face-img' /> <br /> <br />
              <h5 class='display-5'><strong>Kevin Espinosa</strong></h5>
              <p class='text-dark mb-2'>Frontend engineer</p>
              <div>
                <a href="https://github.com/espinosakev24" target="_blank">
                  <img src={github} alt='' />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/espinosakev24" target="_blank">
                  <img src={linkedin} alt='' />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/espinosakev24" target="_blank">
                  <img src={twitter} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{'\
                    .face-img { width: 60%; }'}
        </style>
      </div>
    );
  }
}
