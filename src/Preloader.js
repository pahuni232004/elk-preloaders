import React from 'react';
import './Preloader.css';
import { ReactComponent as ElkLogo } from './elk-logo.svg';

const Preloader = () => (
  <div className="preloader">
    <ElkLogo className="animated-logo" />
  </div>
);

export default Preloader;
