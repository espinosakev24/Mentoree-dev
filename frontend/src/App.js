import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from "./Api_tests/getUsers";
import landing from "./components/landing";
import RegisterStudent from "./components/registerStudent";
import LoginStudent from "./components/loginStudent";
import RegisterTeacher from "./components/registerTeacher";
import LoginTeacher from "./components/loginTeacher";
import Lobby from "./components/lobby";
import AboutUs from "./components/aboutUs";
import Posts from "./Api_tests/getPosts";
import Header from './components/header';
import Home from './components/home';
<<<<<<< HEAD
import About from './components/aboutUs';
import profileStudent from './components/profileStudent'
import profileTeacher from './components/profileTeacher'
=======
import './static/css/login.css'
>>>>>>> a4bd1f9c1b87faf043fbe75fa9b0e3c271643a6b
import './static/css/header.css';
import './static/css/landinghome.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={ Home } />
      <Route path='/registerStudent' component={ RegisterStudent } />
      <Route path='/loginStudent' component={ LoginStudent } />
      <Route path='/registerTeacher' component={ RegisterTeacher } />
      <Route path='/loginTeacher' component={ LoginTeacher } />
      <Route path="/about" component={ AboutUs }/>
      <Route path="/lobby" component={ Lobby }/>
      <Route path="/testingStudents"  component={ Students }/>
      <Route path="/testingPost" component={ Posts}/>
      <Route path="/profileStudent" component={ profileStudent}/>
      <Route path="/profileTeacher" component={ profileTeacher}/>

        <Link to='/registerStudent'>
            <h3> Register as an student</h3>
        </Link>
        <Link to='/loginStudent'>
            <h3> Login as an student</h3>
        </Link>

        <Link to='/registerTeacher'>
            <h3> Register as a teacher</h3>
        </Link>
        <Link to='/loginTeacher'>
            <h3> Login as a teacher</h3>
        </Link>

        <Link to='/'>
            <h3>GO TO LANDING PAGE</h3>
        </Link>
        <Link to='/about'>
            <h3> GO TO ABOUT</h3>
        </Link>
        <Link to='/lobby'>
            <h3>Go TO LOBBY</h3>
        </Link>
        <Link to='/testingStudents'>
            <h3> GO TO STUDENTS API TESTS</h3>
        </Link>
        <Link to='/testingPost'>
            <h3> GO TO POST API TESTS</h3>
        </Link>
    </Router>
  );
}

export default App;
