import React, { useState } from "react";
import "../style/Login.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-x1.webp"
          alt="Login illustration"
          className="login-image"
        />
      </div>

      <div className="login-form-container">
        <h1 className="login-title">Registrate con tu cuenta de Fenodol</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <Link to={"/Felicidades"} className="signup-link">
            <button type="submit" className="login-button">
              Log in
            </button>
          </Link>
        </form>

        <div className="forgot-password">
          <a href="#" className="forgot-password-link">
            Forgot Password
          </a>
        </div>

        <div className="other-options">
          <p className="other-options-text">Other log in options</p>
          <div className="social-buttons">
            <button className="social-button">
              <FaGoogle className="google" />
            </button>
            <button className="social-button">
              <FaFacebook className="facebook" />
            </button>
            <button className="social-button">
              <FaApple className="apple" />
            </button>
          </div>
        </div>

        <div className="signup-prompt">
          <p>
            Don't have an account?{" "}
            <Link to={"/Signup"} className="signup-link">
              Sign up
            </Link>
          </p>
        </div>

        <div className="organization-login">
          <a href="#" className="organization-link">
            Log in with your organization
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
