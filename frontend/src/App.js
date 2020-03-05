import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from "./Api_tests/getUsers";
import landing from "./components/landing";
import RegisterStudent from "./components/registerStudent";
import LoginStudent from "./components/loginStudent";
import Lobby from "./components/lobby";
import AboutUs from "./components/aboutUs";
import Posts from "./Api_tests/getPosts";
import Header from './components/header';
import Home from './components/home';
import './static/css/login.css'
import './static/css/header.css';
import './static/css/landinghome.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={ Home } />
      <Route path='/registerStudent' component={ RegisterStudent } />
      <Route path='/loginStudent' component={ LoginStudent } />
      <Route path="/about" component={ AboutUs }/>
      <Route path="/lobby" component={ Lobby }/>
      <Route path="/testingStudents"  component={ Students }/>
      <Route path="/testingPost" component={ Posts}/>

        <Link to='/registerStudent'>
            <h3> Register as an student</h3>
        </Link>
        <Link to='/loginStudent'>
            <h3> Login as an student</h3>
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
