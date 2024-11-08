import React from 'react';
import '../style/CourseCard.css';
import {useNavigate } from 'react-router-dom';

const CourseCard = ({ title, description, duration, image, progress }) => {
  const navigate = useNavigate();
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={title} onClick={function () {
            navigate("/Video");
        }} />
      </div>
      <div className="course-details">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <div className="course-duration">
          <span>{duration}</span>
        </div>
      
      </div>
      <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
    </div>
  );
};

export default CourseCard;