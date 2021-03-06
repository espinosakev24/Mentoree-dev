import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import preLogin from './components/preLogin';
import RegisterStudent from './components/registerStudent';
import LoginStudent from './components/loginStudent';
import profileStudent from './components/profileStudent';
import RegisterTeacher from './components/registerTeacher';
import LoginTeacher from './components/loginTeacher';
import profileTeacher from './components/profileTeacher';
import Lobby from './components/lobby';
import PostClass from './components/postClass';
import './static/css/login.css';
import './static/css/header.css';
import './static/css/landinghome.css';
import './static/css/registerStudent.css';
import './static/css/studentProfile.css';

function App () {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/preLogin' component={preLogin} />
      <Route path='/registerStudent' component={RegisterStudent} />
      <Route path='/loginStudent' component={LoginStudent} />
      <Route path='/profileStudent' component={profileStudent} />
      <Route path='/registerTeacher' component={RegisterTeacher} />
      <Route path='/loginTeacher' component={LoginTeacher} />
      <Route path='/profileTeacher' component={profileTeacher} />
      <Route path='/about' component={AboutUs} />
      <Route path='/lobby' component={Lobby} />
      <Route path='/postClass' component={PostClass} />
    </Router>
  );
}

export default App;
