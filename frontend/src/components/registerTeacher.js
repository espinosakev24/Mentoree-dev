import React, { Component } from 'react'
import { registerTeacher } from './registerLogin'


export default class RegisterTeacher extends Component {
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
            education: '',
            biography: '',
            fields: '',
            methodology: ''
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            contact: this.state.contact,
            password: this.state.password,
            location: this.state.location,
            age: this.state.age,
            email: this.state.email,
            education: this.state.education,
            biography: this.state.biography,
            fields: this.state.fields,
            methodology: this.state.methodology
        }

        console.log(teacher);

        registerTeacher(teacher).then(res => {
            this.props.history.push('\loginTeacher')
        })

    }

    render() {
        return (
            <div class="container p-4">
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="cad text-center">
                        <div class="card-header">
                            <h3>Register</h3>
                        </div>
                        <div class="card-body">
                        <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter first name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter Last name"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact">Contact</label>
                                    <input type="text"
                                    className="form-control"
                                    name="contact"
                                    placeholder="Enter Contact"
                                    value={this.state.contact}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input type="text"
                                    className="form-control"
                                    name="location"
                                    placeholder="Enter Location"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input type="number"
                                    className="form-control"
                                    name="age"
                                    placeholder="Enter Age"
                                    value={this.state.age}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="education">Education</label>
                                    <input type="text"
                                    className="form-control"
                                    name="education"
                                    placeholder="Enter Education"
                                    value={this.state.education}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="biography">Biography</label>
                                    <input type="text"
                                    className="form-control"
                                    name="biography"
                                    placeholder="Enter Biography"
                                    value={this.state.biography}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="fields">Fields</label>
                                    <input type="text"
                                    className="form-control"
                                    name="fields"
                                    placeholder="Enter Fields"
                                    value={this.state.fields}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="methodology">Methodology</label>
                                    <input type="text"
                                    className="form-control"
                                    name="methodology"
                                    placeholder="Enter Methodology"
                                    value={this.state.methodology}
                                    onChange={this.onChange}
                                    />
                                </div>
                                    <button type="submit" class="btn btn-success btn-block">
                                        Register
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
