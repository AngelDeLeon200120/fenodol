import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "../style/FelicidadesFenodol.css";
import { Link } from "react-router-dom";

const CertificateCompletion = () => {
  useEffect(() => {
    // Configuración del efecto de confeti
    const duration = 15 * 1000;
    const end = Date.now() + duration;
    const colors = ["#bb0000", "#ffffff"];
    let animationFrameId;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        animationFrameId = requestAnimationFrame(frame);
      }
    };

    // Iniciar la animación
    frame();

    // Función de limpieza
    return () => {
      // Cancelar la animación cuando el componente se desmonte
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      // Limpiar cualquier confeti restante
      confetti.reset();
    };
  }, []); 

  return (
    <div className="certificate-container">
      <div className="certificate-content">
        <p className="download-text">DESCARGA TU CERTIFICADO</p>

        <h1 className="title">Curso Completado</h1>

        <div className="stats">
          <span>+4,000 Personas Aprendiendo</span>
        </div>

        <p className="description">
          ¡🎉 Felicidades por completar la plataforma de Fenodol! 🎉 Gracias por
          confiar en nosotros. Ahora estás listo para aprovechar al máximo los
          beneficios de Fenodol para tu bienestar. ¡Nos alegra tenerte aquí!
          💪😊
        </p>

        <div className="code-container">
          <span className="code">ADQWEHJQWJHEQJSHD DASQWE</span>
          <button className="copy-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>

        <div className="buttons">
          <button className="download-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Certificado
          </button>
          <button className="register-btn">Registrar Facturas</button>
        </div>
        <div className="volver">
          <Link to={"/"}>volver</Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateCompletion; 