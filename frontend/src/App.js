import React from 'react';
import './App.css';
import Students from "./Api_tests/getUsers";

import Navigation from './components/navigation'

function App() {
  return (
    <div>
      <Navigation />
      <Students/>
    </div>
  );
}

export default App;
