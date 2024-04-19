// ErrorPopup.js

import React, { useState, useEffect } from 'react';
import '../../css/popup/loadingPopup.css';

const LoadingPopup = ({ loading } ) => {
  const [isVisible, setIsVisible] = useState(loading);

  useEffect(() => {
    setIsVisible(loading);
  }, [loading]);

  const handleAcknowledge = () => {
    setIsVisible(false);
    // You can add additional logic here if needed
    // For example, reload the screen.
    window.location.reload();
  };

  return (
    <div className={`error-popup ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingPopup;