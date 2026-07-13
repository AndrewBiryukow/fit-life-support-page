import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Carousel.css';

const slides = [
  '/images/carousel/carousel_bg.jpg',
  '/images/carousel/05ca43bca8db235f7b8bac6064895f3aa70a7c6f.jpg',
  '/images/carousel/89cc41a6c597cfdd8571e65f81b8eabee9bcdbca.jpg',
  '/images/carousel/af92340a5baabbf36a5c6dc82062e241d94e0e3b.jpg',
  '/images/carousel/e5d0ff9c084ea78fc5608ea4047733997886e097.jpg'
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="carousel">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      
      <div className="carousel-overlay"></div>
      
      <button className="slider-btn prev" onClick={prevSlide}><ArrowLeft size={20} /></button>
      <button className="slider-btn next" onClick={nextSlide}><ArrowRight size={20} /></button>
      
      <div className="container carousel-container">
        <div className="carousel-content">
          <h1 className="carousel-title">
            Smart<br />Made Easy
          </h1>
          <p className="carousel-description">
            <span className="text-primary font-bold italic">Fit</span><span className="font-bold">Life</span> provides smart and integrated solutions<br />
            to clients who need connected sports products.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
