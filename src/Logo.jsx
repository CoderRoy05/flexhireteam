import React from 'react';
import flexhirelogo from '/flexhirelogo.png';
import './logo.css'; // Import your CSS file for additional styling

function Logo() {
  return (
    <div className="container">
      <div className="background">
        <img src={flexhirelogo} alt="flexhirelogo" className="centeredImage" />
      </div>
    </div>
  );
}

export default Logo;
