import React, { useState } from 'react';
import '../style/SignUp.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-image-container">
        <img 
          src="https://frontends.udemycdn.com/components/auth/desktop-illustration-x1.webp"
          alt="Sign up illustration" 
          className="signup-image"
        />
      </div>

      <div className="signup-form-container">
        <h1 className="signup-title">
          Registrate
        </h1>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>

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

          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>

        <div className="other-options">
          <p className="other-options-text">Or sign up with</p>
          <div className="social-buttons">
          <button className="social-button">
            <FaGoogle className='google' />
            </button>
            <button className="social-button">
            <FaFacebook className='facebook' />
            </button>
            <button className="social-button">
            <FaApple className='apple' />
            </button>
          </div>
        </div>

        <div className="login-prompt">
          <p>
            Already have an account?{' '}
            <Link to={"/"} className="login-link">
              Log in
            </Link>
          </p>
        </div>

        <div className="organization-signup">
          <a href="#" className="organization-link">
            Sign up with your organization
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;