import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/custom_homes_home_page.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/about_us_1.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/additions_and_renovations_services.jpeg', alt: 'Image 3' },
    { id: 4, src: '/images/additions_and_renovations_home.jpeg', alt: 'Image 4' },
    { id: 5, src: '/images/about_us_3.jpeg', alt: 'Image 5' },
    { id: 6, src: '/images/kitchens_and_baths.jpeg', alt: 'Image 6' },
  ];

  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const closeEnlargedImage = useCallback(() => {
    setEnlargedImageIndex(null);
  }, []);

  const goToNextImage = useCallback(() => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevImage = useCallback(() => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (enlargedImageIndex !== null) {
        if (event.key === 'ArrowLeft') {
          goToPrevImage();
        } else if (event.key === 'ArrowRight') {
          goToNextImage();
        } else if (event.key === 'Escape') {
          closeEnlargedImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enlargedImageIndex, goToNextImage, goToPrevImage, closeEnlargedImage]); // Dependencies added

  const enlargeImage = (index) => {
    setEnlargedImageIndex(index);
  };

  return (
    <>
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => enlargeImage(index)}
          />
        ))}
      </div>
      {enlargedImageIndex !== null && (
        <div className="enlarged-image-container">
          <span className="close-icon" onClick={closeEnlargedImage}>
            &#120;
          </span>
          <img
            src={images[enlargedImageIndex].src}
            alt={images[enlargedImageIndex].alt}
            className="enlarged-image"
          />
          <button className="nav-arrow prev" onClick={goToPrevImage}>
            &#10094;
          </button>
          <button className="nav-arrow next" onClick={goToNextImage}>
            &#10095;
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
