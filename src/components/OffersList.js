import React, { useEffect, useState } from 'react';
import './OffersList.css';

// Replace these with your actual image imports
import img1 from '../assets/offer1.png';
import img2 from '../assets/offer2.jpg';
import img3 from '../assets/offer3.jpg';
import img4 from '../assets/offer4.jpg';
import img5 from '../assets/offer5.jpg';

const OffersList = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="offer-banner-wrapper"style={{
      background: 'linear-gradient(to right, #8a2be2, #4b0082, #ff1493)', // Blue-violet-pink gradient
      padding: '40px 0',
    }}>
      <div>
        <img
          src={bannerImages[currentImageIndex]}
          alt={`Offer ${currentImageIndex + 1}`}
          className="offer-banner-image"
        />
      </div>
    </div>
  );
};

export default OffersList;
