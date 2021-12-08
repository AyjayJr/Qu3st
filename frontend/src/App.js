import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import Register from "./register.js";
import CharCreate from "./CharCreate.js";
import Login from "./Login.js";
import Auth from "./auth.js";
import Dash from "./dash.js";
import Add from "./add.js";

export default function App() {

  const token = localStorage.getItem("token")
    // true == active user (logged in)
    const [state, setState] = useState(token !== null && token !== "" ? true : false);



    return (
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> 
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/charcreate" element={<CharCreate/>}/>
          <Route path="/dash" element={<Dash/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
    </Router>
  );
    
}
