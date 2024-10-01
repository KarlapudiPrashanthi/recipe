import './App.css';
import React, { useState } from 'react';
import BreakFast from './components/BreakFast';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/breakfast'  element={<BreakFast/>}/>
      </Routes>
    </Router>
  );
}

export default App;