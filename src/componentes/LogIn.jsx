// Login.jsx
import React, { useState } from 'react';
import '../style/Login.css';
import {useNavigate } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí irían las validaciones y la llamada al backend
    };

    
    const Validar =()=>{
        if (formData.email==="angel.eliandeleon@gmail.com") {
            alert("Bienvenido Angel");
           navigate("/Entrada");
        }
    }
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Tu contraseña"
                            />
                            <button 
                                type="button" 
                                className="toggle-password"
                                onClick={togglePassword}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="submit-button" onClick={Validar}>
                        Ingresar
                    </button>
                </form>

                <div className="form-footer">
                    <a href="#" className="forgot-password">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LogIn;