import React from 'react';
import './PreloaderRotatingRings.css';
import fullLogo from '../Elk Logo.png';

const PreloaderRotatingRings = () => {
  return (
    <div className="rings-preloader">
      <div className="style-rotating-ring">
        <div className="outer-ring"></div>
        <div className="inner-ring"></div>
        <img src={fullLogo} alt="Elk Audios" className="logo-center" />
      </div>
    </div>
  );
};

export default PreloaderRotatingRings;
