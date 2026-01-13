import React from 'react';
import './Preloader.css';

const Preloader = () => (
  <div className="preloader">
    <div className="hero-container">
      {/* Outer glow rings */}
      <div className="glow-ring ring-1"></div>
      <div className="glow-ring ring-2"></div>
      <div className="glow-ring ring-3"></div>
      
      {/* Loading spinner ring */}
      <div className="loader-ring"></div>
      
      {/* Elk hero circle */}
      <div className="elk-hero">
        <svg viewBox="0 0 200 200" className="elk-svg">
          {/* Background circle */}
          <circle cx="100" cy="100" r="95" className="elk-bg"/>
          
          {/* Elk silhouette - simplified artistic version */}
          <g className="elk-silhouette">
            {/* Main head shape */}
            <path d="M100 180 C60 180 35 150 35 110 C35 70 65 45 100 45 C135 45 165 70 165 110 C165 150 140 180 100 180" 
                  fill="white" opacity="0.15"/>
            
            {/* Elk face outline */}
            <path className="elk-face" d="
              M85 155 
              Q75 140 78 120
              Q80 100 95 95
              Q85 85 88 70
              L92 75
              Q95 65 100 60
              Q105 65 108 75
              L112 70
              Q115 85 105 95
              Q120 100 122 120
              Q125 140 115 155
              Q100 165 85 155
            " fill="none" stroke="white" strokeWidth="3"/>
            
            {/* Left antler */}
            <path className="antler antler-left" d="
              M88 70
              Q80 55 65 45
              Q60 42 55 45
              M80 55
              Q70 50 60 55
              M75 48
              Q65 40 55 38
            " fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            
            {/* Right antler */}
            <path className="antler antler-right" d="
              M112 70
              Q120 55 135 45
              Q140 42 145 45
              M120 55
              Q130 50 140 55
              M125 48
              Q135 40 145 38
            " fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            
            {/* Eye */}
            <circle className="elk-eye" cx="100" cy="95" r="4" fill="white"/>
            
            {/* Nose */}
            <ellipse className="elk-nose" cx="100" cy="130" rx="8" ry="5" fill="white" opacity="0.8"/>
            
            {/* Decorative collar/audio wave hint */}
            <path className="audio-wave" d="M70 145 Q85 155 100 145 Q115 155 130 145" 
                  fill="none" stroke="white" strokeWidth="2" opacity="0.6"/>
          </g>
        </svg>
      </div>
      
      {/* Brand text */}
      <div className="brand-text">
        <span className="brand-elk">ELK</span>
        <span className="brand-audios">AUDIOS</span>
      </div>
      
      {/* Loading dots */}
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default Preloader;
