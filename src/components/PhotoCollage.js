import React, { useState, useEffect } from 'react';
import './PhotoCollage.css';

const images = [
    '/images/1.jpg',
    '/images/0264.jpg',
    '/images/2.jpg',
    '/images/jp2.jpg',
    '/images/3.jpg',
    '/images/jp3.jpg',
];

const PhotoCollage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    // Automatic slideshow logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    // Handle opening and closing of the carousel
    const openCarousel = () => {
        setIsCarouselOpen(true);
    };

    const closeCarousel = () => {
        setIsCarouselOpen(false);
    };

    // Handle navigation within the carousel
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="photo-collage">
            <div className="collage-item" onClick={openCarousel}>
                <img src={images[currentIndex]} alt={`Slideshow ${currentIndex}`} className="full-image" />
            </div>

            {isCarouselOpen && (
                <div className="overlay-collage">
                    <button className="close-button" onClick={closeCarousel}>X</button>
                    <button className="nav-button prev" onClick={prevImage}>&lt;</button>
                    <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} className="full-image-carousel" />
                    <button className="nav-button next" onClick={nextImage}>&gt;</button>
                </div>
            )}
        </div>
    );
};

export default PhotoCollage;
