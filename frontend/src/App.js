import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from "./Api_tests/getUsers";

import landing from "./components/landing";
//import signIn from "./components/signIn";
import signUpStudent from "./components/signUpStudent";
//import signUpTeacher from "./components/signUpTeacher";
import Lobby from "./components/lobby";
import AboutUs from "./components/aboutUs";
import Posts from "./Api_tests/getPosts";


function App() {
  return (
    <Router>
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


      <switch>
        <Route exact path='/' component={ landing } />
        <Route path='/signUpStudent' component={ signUpStudent } />
        <Route path="/about" component={ AboutUs }/>
        <Route path="/lobby" component={ Lobby }/>
        <Route path="/testingStudents"  component={ Students }/>
        <Route path="/testingPost" component={ Posts}/>
      </switch>
    </Router>
  );
}

export default App;
