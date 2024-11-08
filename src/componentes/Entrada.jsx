import React from "react";
import "../style/Entrada.css";
import Home from "./Home ";

function Entrada() {
  const videoElements = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="container">
      <header className="header1">
        <div className="logo">Fenodol</div>
        <input
          type="text"
          placeholder="Buscar cualquier cosa"
          className="search-bar"
        />
        <nav className="navbar">
          <a href="#">Desarrollo</a>
          <a href="#">Negocios</a>
        </nav>
        <div className="profile-icon">AE</div>
      </header>

      <div className="welcome-section">
        <div className="profile">
          <div className="profile-initials">AE</div>
          <h2>Hola de nuevo, Angel Elian De Leon</h2>
          {/* <a href="#" className="add-interests">
            Añadir profesión e intereses
          </a> */}
        </div>
        <div className="special-offer">
          <p className="offer-details">
            ¡Bienvenido a la página oficial de Fenodol! Nos alegra tenerte aquí
            en nuestra comunidad. Fenodol es el analgésico de confianza para
            ayudarte a aliviar tus dolores y continuar con tu día sin
            interrupciones. Aquí podrás aprender más sobre cómo cuidar tu
            bienestar, explorar recomendaciones y acceder a contenido exclusivo.
          </p>
        </div>
      </div>

      <Home />

      <section className="learning-section">
        {videoElements.map((item) => (
          <div key={item} className="videos">
            Play
          </div>
        ))}
      </section>
    </div>
  );
}

export default Entrada;
