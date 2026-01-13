import React from 'react';
import './PreloaderScanner.css';
import fullLogo from '../Elk Logo.png';

const PreloaderScanner = () => {
  return (
    <div className="scanner-preloader">
      <div className="scanner-container">
        <div className="scan-line"></div>
        <img src={fullLogo} alt="Elk Audios" className="logo-scan" />
        <div className="scan-glow"></div>
      </div>
    </div>
  );
};

export default PreloaderScanner;
