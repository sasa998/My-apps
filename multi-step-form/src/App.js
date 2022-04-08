import './App.css';
import React from 'react';
import FinalForm from './MultiStepForm/FinalForm';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<FinalForm />} />
      </Routes>
    </Router>
  );
}


export default App;
