import React, { Component } from 'react'
import { registerStudent } from './registerLogin'

export default class registerStudent extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            contact: '',
            password: '',
            location: '',
            age: '',
            email: '',
            education: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const student = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            contact: this.state.contact,
            password: this.state.password,
            location: this.state.location,
            age: this.state.location,
            email: this.state.email,
            education: this.state.education
        }

        login(student).then(res => {
            if (res) {
                this.props.history.push(`\loginStudent`)
            }
        })

    }

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
                        <form noValidate onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label htmlFor="email">First Name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    />
                                </div>
                                    <button type="submit" class="btn btn-success btn-block">
                                        Sign Up
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Register
