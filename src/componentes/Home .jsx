import React from 'react';
import CourseCard from '../componentes/CourseCard ';

const Home = () => {
  const courses = [
    {
      title: 'Aprende todo de fenodol',
      description: 'La importancia de tomar fenodol',
    //   duration: 'Lectura • Queda 1 min',
      image: 'https://picsum.photos/id/1/400/300',
      progress: 95
    }
    
  ];

  return (
    <div className="home-page">
      <h1 className="page-title">Empecemos a aprender</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            duration={course.duration}
            image={course.image}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;