import React from 'react';
import './PreloaderFinal.css';
import fullLogo from '../Elk Logo.png';

const PreloaderFinal = () => {
  return (
    <div className="final-preloader">
      <div className="water-preloader">
        {/* Water ripples */}
        <div className="water-ripple w1"></div>
        <div className="water-ripple w2"></div>
        <div className="water-ripple w3"></div>
        <div className="water-ripple w4"></div>
        <div className="water-ripple w5"></div>
        
        {/* Logo with pulse */}
        <img src={fullLogo} alt="Elk Audios" className="logo-pulse" />
        
        {/* Audio waves below */}
        <div className="waves-below">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PreloaderFinal;
