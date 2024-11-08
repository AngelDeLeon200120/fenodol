import React, { useEffect, useState } from "react";
import "../style/FelicidadesFenodol.css";
import { v4 as uuidv4 } from "uuid";
import IMGfenodol from "../img/fenodol.png";
const FelicidadesFenodol = () => {
  const [userId, setUserId] = useState("");

  // Generar ID único al cargar el componente
  useEffect(() => {
    const storedId = localStorage.getItem("fenodolUserId");

    if (!storedId) {
      const newId = uuidv4();
      localStorage.setItem("fenodolUserId", newId);
      setUserId(newId);
      console.log("ID único generado:", newId);
    } else {
      setUserId(storedId);
      console.log("ID existente recuperado:", storedId);
    }
  }, []);

  return (
    <div className="felicidades-container">
      <header className="felicidades-header">
        <h1>🎉 Felicidades por unirte a Fenodol 🎉</h1>
        <p>
          Bienvenido a la comunidad de Fenodol, donde el alivio y el bienestar son nuestra prioridad.
          Explora nuestros recursos y empieza a sentir el alivio que te mereces.
        </p>
        <p>Tu ID único de usuario es: <strong>{userId}</strong></p>
        <div className="button-container">
        
          <button className="btn-registrate">Regístro de facturas</button>
        </div>
      </header>

      {/* <div className="imagen-movil">
        <img src={IMGfenodol} alt="Teléfono móvil con Fenodol" />
      </div> */}
    </div>
  );
};

export default FelicidadesFenodol;
