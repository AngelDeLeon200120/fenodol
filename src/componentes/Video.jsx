// App.js
import React, { useState, useEffect } from 'react';
import "../style/Video.css";
import FenodolVideo from "../img/Cápsula de FENODOL MAX.mp4";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Video = () => {

    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [ver, setVer] = useState(null);

    const id = uuidv4();
    console.log(id);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setMostrarMensaje(true);
          setVer(true);
        }, 20000);
    
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <>
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

      <div className="app-container">
        <div className="video-container">
          <video controls> 
            <source src={FenodolVideo} type="video/mp4" />
          </video>
        </div>
        <div className="content-container">
          <h1 className="title">
            Aprende Como un Profesional Python 3.12.1 el Lenguaje de
            Programación Más Demandado del Mundo
          </h1>
          <div className="rating-container">
            <div className="rating-stars">4.7 ★</div>
            <div className="rating-count">1339 calificaciones</div>
            <div className="rating-duration">
              37.758 Estudiantes · 1,5 horas Total
            </div>
          </div>
          <div className="description">
            <p>
              Es más, que va a evaluar el número introducido por el usuario.
            </p>
          </div>
          <div className="course-content">
            <h2 className="content-title">Contenido de la guia</h2>
            <div className="content-items">
              <div className="content-item">
                <input type="checkbox" name="" id="" className="checkbox"  defaultChecked={true} />
                <div className="item-title">1.1. Que Es Fenodol.</div>
                <div className="item-duration">1 min</div>
              </div>
              <div className="content-item">
                <input type="checkbox" name="" id="" className="checkbox"  defaultChecked={true}/>
                <div className="item-title">1.2. Cuando surguio fenodol?.</div>
                <div className="item-duration">1 min</div>
              </div>
              <div className="content-item">
                <input type="checkbox" name="" id="" className="checkbox" defaultChecked={true} />
                <div className="item-title">1.3. Donde se creo fenodol?.</div>
                <div className="item-duration">2 min</div>
              </div>
              <div className="content-item">
                <input type="checkbox" name="" id="" className="checkbox" defaultChecked={ver}/>
                <div className="item-title">1.4. Beneficios de fenodol.</div>
                <div className="item-duration">14 s</div>
              </div>
             
              {/* Agrega más contenido de la lista aquí */}
            </div>
          </div>
          <button><Link to={"/Felicidades"}>Felicidades</Link></button>
        </div>
      
          
      </div>
      <div className={`clave ${mostrarMensaje ? 'visible' : ''}`}>
      <p>Felicidades por completar la guía aquí tienes tu clave única para ingresar: {id}</p>
    </div>
    </>
  );
};

export default Video;
