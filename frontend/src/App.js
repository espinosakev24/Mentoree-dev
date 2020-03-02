import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Students from "./Api_tests/getUsers";
import landing from "./components/landing";
//import signIn from "./components/signIn";
import signUpStudent from "./components/signUpStudent";
//import signUpTeacher from "./components/signUpTeacher";
//import lobby from "./components/lobby";


function App() {
  return (
    <Router>
      <Route exact path='/' component={ landing } />
      <Route path='/signUpStudent' component={ signUpStudent } />
    </Router>
  );
}

export default App;
