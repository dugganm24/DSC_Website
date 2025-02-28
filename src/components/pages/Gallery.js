import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/img1.jpeg', alt: 'Image 1' },
    { id: 2, src: '/images/img2.jpeg', alt: 'Image 2' },
    { id: 3, src: '/images/img3.jpeg', alt: 'Image 3' },
    // Add more images as needed
  ];

  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

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
  }, [enlargedImageIndex]);

  const enlargeImage = (index) => {
    setEnlargedImageIndex(index);
  };

  const closeEnlargedImage = () => {
    setEnlargedImageIndex(null);
  };

  const goToNextImage = () => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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
