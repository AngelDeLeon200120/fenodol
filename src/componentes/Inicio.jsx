import React, { useState } from "react";

import ImageCarousel from "./ImageCarousel";
import { Link, useNavigate } from 'react-router-dom';
import "../style/inicios.css";
const Header = () => {
  return (
    <header className="header2">
      <div className="header-title">Fenodol</div>
      <nav className="header-nav">
        
        
        <Link to="/Login" className="header-link">Log in</Link>
        <Link to="/Signup" className="header-link">Sign up</Link>
      </nav>
    </header>
  );
};

const Description = (props) => {
  return (
    <div className="description">
        {props.children}
      <h1 className="description-title">Fenodol</h1>
      <p className="description-text">
        ¡Bienvenidos a la página oficial de Fenodol! Aquí encontrarás la
        solución rápida y eficaz para aliviar tu dolor de cabeza. Fenodol es una
        pastilla especialmente formulada para brindarte el alivio que necesitas
        para seguir adelante sin interrupciones.

        Regístrate ahora y accede a contenido exclusivo: videos con consejos de
        bienestar, recomendaciones para un estilo de vida saludable, y mucho
        más. Estamos aquí para acompañarte en tu bienestar y ayudarte a vivir
        cada día con energía y sin molestias. ¡Tu alivio está a solo un clic de
        distancia!
      </p>
    
      <button className="description-button">Learn More</button>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        &copy; 2023 Fenodol. All rights reserved.
      </div>
      <nav className="footer-nav">
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
        <a href="#" className="footer-link">
          Terms of Service
        </a>
        <a href="#" className="footer-link">
          Contact Us
        </a>
      </nav>
    </footer>
  );
};

const Inicio = () => {
  return (
    <div className="contenedor">
      <Header />
      <Description>
        <ImageCarousel/>
      </Description>
    
    </div>
  );
};

export default Inicio;
