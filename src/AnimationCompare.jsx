import React from 'react';
import './AnimationCompare.css';
import fullLogo from '../Elk Logo.png';
import elkIcon from '../elk.png';

const AnimationCompare = () => {
  return (
    <div className="compare-container">
      <h1 className="compare-title">Preloader Styles</h1>
      <p className="compare-subtitle">7 animation options for Elk Audios</p>
      
      <div className="styles-grid">

        {/* Style 1: Water Ripple */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-ripple">
              <div className="water-ripple w1"></div>
              <div className="water-ripple w2"></div>
              <div className="water-ripple w3"></div>
              <img src={fullLogo} alt="Elk Audios" className="logo-pulse" />
              <div className="waves-below">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">1</span>
            <span className="style-name">Water Ripple</span>
          </div>
          <p className="style-desc">Smooth ripples with audio waves</p>
        </div>

        {/* Style 2: Rotating Rings */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-rotating-ring">
              <div className="outer-ring"></div>
              <div className="inner-ring"></div>
              <img src={fullLogo} alt="Elk Audios" className="logo-center" />
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">2</span>
            <span className="style-name">Rotating Rings</span>
          </div>
          <p className="style-desc">Dual spinning rings around logo</p>
        </div>

        {/* Style 3: Scanner */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-scanner">
              <div className="scan-line"></div>
              <img src={fullLogo} alt="Elk Audios" className="logo-scan" />
              <div className="scan-glow"></div>
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">3</span>
            <span className="style-name">Scanner</span>
          </div>
          <p className="style-desc">Scanning line sweeps across</p>
        </div>

        {/* Style 4: Progress Bar */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-loadbar">
              <img src={fullLogo} alt="Elk Audios" className="logo-loadbar" />
              <div className="loading-bar">
                <div className="loading-fill"></div>
              </div>
              <span className="loading-text">Loading...</span>
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">4</span>
            <span className="style-name">Progress Bar</span>
          </div>
          <p className="style-desc">Classic loading bar animation</p>
        </div>

        {/* Style 5: Bouncing Dots */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-dots">
              <img src={fullLogo} alt="Elk Audios" className="logo-dots" />
              <div className="dots-row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">5</span>
            <span className="style-name">Bouncing Dots</span>
          </div>
          <p className="style-desc">Playful bouncing dots below</p>
        </div>

        {/* Style 6: Circular Progress */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-circular">
              <svg className="progress-ring" viewBox="0 0 120 120">
                <circle className="progress-bg" cx="60" cy="60" r="54" />
                <circle className="progress-fill" cx="60" cy="60" r="54" />
              </svg>
              <img src={elkIcon} alt="Elk" className="elk-circular" />
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">6</span>
            <span className="style-name">Circular Progress</span>
          </div>
          <p className="style-desc">Loading ring around elk</p>
        </div>

        {/* Style 7: Spotlight */}
        <div className="style-card">
          <div className="style-preview">
            <div className="style-spotlight">
              <div className="spotlight-beam"></div>
              <img src={fullLogo} alt="Elk Audios" className="logo-spotlight" />
            </div>
          </div>
          <div className="style-label">
            <span className="style-num">7</span>
            <span className="style-name">Spotlight</span>
          </div>
          <p className="style-desc">Moving spotlight reveal</p>
        </div>

      </div>
    </div>
  );
};

export default AnimationCompare;
