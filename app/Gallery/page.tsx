"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect } from 'react';
import GalleryCard from '../../components/GalleryCard';




const images = [
  '/IMG_0584.JPG',
  '/IMG_0598.JPG',
  '/IMG_0599.JPG',
  '/IMG_1069.JPG',
  '/IMG_1851.JPG',
  '/IMG_2078.JPG',
  '/IMG_2472.JPG',
  '/IMG_2487.JPG',
  '/IMG_2947.JPG',
  '/IMG_2957.JPG',
  '/IMG_3007.JPG',
  '/IMG_3056.JPG',
  '/IMG_3178.JPG',
];

const Page: React.FC = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS on the client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <div
      id="carouselExample"
      className="carousel slide pt-[15vh]"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Auto-slide every 3 seconds
    >
      <p className='absolute left-[40vw] font-bold text-2xl text-[#c6a48e] '>Gallery</p>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <GalleryCard image={image} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ filter: 'invert(80%) sepia(20%) hue-rotate(300deg)' }} // Change color of arrow
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ filter: 'invert(80%) sepia(20%) hue-rotate(300deg)' }} // Change color of arrow
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Page;
