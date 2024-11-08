import React, { useState } from "react";

import ImageCarousel from "./ImageCarousel";
import { Link, useNavigate } from "react-router-dom";
import "../style/inicios.css";

import SignUpInicio from "./SignUpInicio";
const Header = () => {
  return (
    <header className="header2">
      <div className="header-title">Fenodol</div>
      <nav className="header-nav">
        <Link to="/Login" className="header-link">
          Log in
        </Link>
        <Link to="/Signup" className="header-link">
          Sign up
        </Link>
      </nav>
    </header>
  );
};

const Description = (props) => {
  return (
    <div className="description description-grid">
      <div className="description-contenedor">
        {props.children}
        <h1 className="description-title">Fenodol</h1>
        <p className="description-text">
          ¡Bienvenidos a la página oficial de Fenodol! Aquí encontrarás la
          solución rápida y eficaz para aliviar tu dolor de cabeza. Fenodol es
          una pastilla especialmente formulada para brindarte el alivio que
          necesitas para seguir adelante sin interrupciones. Regístrate ahora y
          accede a contenido exclusivo: videos con consejos de bienestar,
          recomendaciones para un estilo de vida saludable, y mucho más. Estamos
          aquí para acompañarte en tu bienestar y ayudarte a vivir cada día con
          energía y sin molestias. ¡Tu alivio está a solo un clic de distancia!
        </p>

        <button className="description-button">Learn More</button>
      </div>
      <div className="Signin">
        <SignUpInicio />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-fenodol">
    <div className="footer-top">
      <div className="teach-section">
        <h3>Comparte el alivio con Fenodol</h3>
        <p>
          Descubre cómo puedes ser parte de nuestra comunidad y aliviar el dolor
          de millones. Regístrate para obtener acceso a videos exclusivos.
        </p>
        <button className="cta-button">Únete a Fenodol</button>
      </div>
      <div className="partners-section">
        <h4>Nuestras Marcas Aliadas</h4>
        <div className="partners-logos">
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Aliado 1" />
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Aliado 2" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Aliado 3" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Aliado 4" />
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="links-section">
        <ul>
          <li>Sobre Fenodol</li>
          <li>Contacto</li>
          <li>Términos y Condiciones</li>
          <li>Política de Privacidad</li>
        </ul>
      </div>
      <div className="copyright-section">
        <p>© 2024 Fenodol, Inc. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  );
};

const Inicio = () => {
  return (
    <div className="contenedor">
      {/* <Header /> */}
      <Description>
        <ImageCarousel />
      </Description>
    </div>
  );
};

export default Inicio;
