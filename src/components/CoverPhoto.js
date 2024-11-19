import React, { useState, useEffect } from 'react';
import './CoverPhoto.css';

const CoverPhoto = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Update state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(timer);
        };
    }, []);

    // Calculate time left until the target date
    function calculateTimeLeft() {
        const targetDate = new Date('2025-03-01T00:00:00');
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    }

    const coverPhotoStyle = {
        backgroundImage: `url(${isMobile ? '/images/jp1.jpg' : '/images/jp2.jpg'})`,
    };

    return (
        <div className="cover-photo" style={coverPhotoStyle}>
            <div className="overlay">
                <p className="names">Yadeli & Angel</p>
                <div className="countdown">
                    <div className="countdown-timer">
                        <div className="countdown-values">
                            <span><strong>{timeLeft.days} dias - {timeLeft.hours} hrs - {timeLeft.minutes} min</strong></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverPhoto;
