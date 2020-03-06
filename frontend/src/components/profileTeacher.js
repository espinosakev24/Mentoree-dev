import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


export default class profileTeacher extends Component {
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
            methodology: '',
            reviews: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            contact: decoded.contact,
            password: decoded.password,
            location: decoded.location,
            age: decoded.age,
            email: decoded.email,
            education: decoded.education,
            biography: decoded.biography,
            fields: decoded.fields,
            methodology: decoded.methodology,
            reviews: decoded.reviews
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
                            <tr>
                                <td>First name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>{this.state.contact}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>{this.state.location}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{this.state.age}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Education</td>
                                <td>{this.state.education}</td>
                            </tr>
                            <tr>
                                <td>Biography</td>
                                <td>{this.state.biography}</td>
                            </tr>
                            <tr>
                                <td>Fields</td>
                                <td>{this.state.fields}</td>
                            </tr>
                            <tr>
                                <td>Methodology</td>
                                <td>{this.state.methodology}</td>
                            </tr>
                            <tr>
                                <td>Reviews</td>
                                <td>{this.state.reviews}</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
