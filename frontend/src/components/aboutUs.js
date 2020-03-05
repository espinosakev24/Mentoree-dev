import React, { Component } from 'react'
import Cami from '../static/images/Cami.svg'
import Fifi from '../static/images/Fifi.svg'
import Kevin from '../static/images/Kevin.svg'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            <div class="container pl-10 pr-10 mt-5 text-center">
                    <h1 class="display-5">Who we are</h1> <br/>
                    <p class="text-dark">We are three developers passionate about education based on technology. <br/>
                        Motivation is our driving force and breaking the stablished boundaries our goal.</p> <br/>

                    <div class="container-fluid d-flex justify-content-between">
                        <div class="col-4">
                            <img src={Cami} alt="" class="face-img"/> <br/> <br/>
                            <h5 class="display-5"><strong>Camilo Villegas</strong></h5>
                            <p class="text-dark">Backend engineer</p>
                        </div>
                        <div class="col-4">
                            <img src={Fifi} alt="" class="face-img"/> <br/> <br/>
                            <h5 class="display-5"><strong>Fidel Caicedo</strong></h5>
                            <p class="text-dark">Frontend engineer</p>
                        </div>
                        <div class="col-4">
                            <img src={Kevin} alt="" class="face-img"/> <br/> <br/>
                            <h5 class="display-5"><strong>Kevin Espinosa</strong></h5>
                            <p class="text-dark">Full-stack engineer</p>
                        </div>
                    </div>
                </div>
                <style>{"\
                    .face-img { width: 60%; }"}
                </style>
            </div>
        )
    }
}
