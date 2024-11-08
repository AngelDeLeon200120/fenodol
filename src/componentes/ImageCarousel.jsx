// ImageCarousel.jsx
import { useState, useEffect } from 'react';
import '../style/ImageCarousel.css';
import fenodolIMg from "../img/fenodol.png";
import fenodolIMgPastillas from "../img//fenodol_pastillas.png";
import fenodolIMgg from "../img/fenodol.jpg";


const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array de imágenes de ejemplo
  const images = [
    { url: fenodolIMgg, alt: 'Slide 1' },
    { url: fenodolIMgPastillas, alt: 'Slide 2' },
    { url: fenodolIMg, alt: 'Slide 3' }
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   let interval;
  //   if (isAutoPlaying) {
  //     interval = setInterval(nextSlide, 3000);
  //   }
  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // }, [isAutoPlaying]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Imágenes */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image.url} alt={image.alt} />
          </div>
        ))}

        {/* Botones de navegación */}
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Control de autoplay */}
        {/* <button 
          className="autoplay-button"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button> */}
      </div>
    </div>
  );
};

export default ImageCarousel;