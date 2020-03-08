import React, { Component } from 'react'
import { loginTeacher } from './registerLogin'
import Header from './header'

export default class LoginTeacher extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const teacher = {
            email: this.state.email,
            password: this.state.password
        }

        loginTeacher(teacher).then(res => {
            this.props.history.push('\lobby')
        })

    }

    render() {
        return (
            <div class="container p-4">
                <Header />
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="cad text-center">
                        <div class="card-header">
                            <h3>Login</h3>
                        </div>
                        <div class="card-body">
                            <form noValidate onSubmit={this.onSubmit}>
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
                                        Login
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
