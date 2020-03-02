import React, { Component } from 'react'

export default class signUpStudent extends Component {
    render() {
        return (
            <div class="container p-4">
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="cad text-center">
                        <div class="card-header">
                            <h3>SignUp</h3>
                        </div>
                        <div class="card-body">
                            <form action="/signup" method="POST">
                                <div class="form-group">
                                    <input type="text" name="first_name" placeholder="First name" class="form-control" autofocus></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="last_name" placeholder="Last Name" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="email" placeholder="E-mail" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="password" placeholder="Password" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="Education" placeholder="Education" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="Age" placeholder="Age" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="Location" placeholder="Location" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-success btn-block">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
