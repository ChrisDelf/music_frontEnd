import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Login from "./components/login/login.js"
import Register from "./components/login/register.js"
import Homepage from "./components/homepage/homepage.js"



function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element=<Login /> />
        <Route exact path="/register" element=<Register /> />
        <Route exact path="/homepage" element=<Homepage /> />
      </Routes>
    </Router>
  );
}

export default App;
