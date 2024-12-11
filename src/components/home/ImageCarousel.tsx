import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920',
    alt: 'Modern Hospital Room',
    caption: 'State-of-the-Art Facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1559721853-0da6e4b92d8e?auto=format&fit=crop&q=80&w=1920',
    alt: 'Mother and Newborn',
    caption: 'Expert Maternity Care'
  },
  {
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1920',
    alt: 'Pregnant Woman',
    caption: 'Comprehensive Pregnancy Care'
  },
  {
    url: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=1920',
    alt: 'Orthopedic Treatment',
    caption: 'Advanced Orthopedic Care'
  },
  {
    url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=1920',
    alt: 'Pediatric Care',
    caption: 'Specialized Pediatric Services'
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920',
    alt: 'Physical Therapy',
    caption: 'Expert Rehabilitation Services'
  },
  {
    url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1920',
    alt: 'Hospital Staff',
    caption: 'Dedicated Healthcare Team'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [isTransitioning]);

  useEffect(() => {
    let intervalId: number;
    if (!isHovered) {
      intervalId = window.setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isHovered, nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="relative h-full w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-label="Image carousel"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{image.caption}</h3>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors z-10"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors z-10"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;