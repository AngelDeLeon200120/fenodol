import React, { useState } from "react";
import "./style/inicios.css";
import  { Footer } from "./componentes/inicio";
import Inicio from "./componentes/inicio";

import LogIn from "./componentes/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./componentes/SignUp";
import Entrada from "./componentes/Entrada";

import Video from "./componentes/Video";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Entrada" element={<Entrada />} />
          <Route path="/Video" element={<Video />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
