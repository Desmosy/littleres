import React from 'react';
import logo from './logo.svg';
import Nav from './nav'; // Import the Nav component
import './header.css'; // You may need to create a CSS file for styling

function Header() {
  const imageStyle = {
    marginLeft: '20px',
    padding: '17px',
  };

  return (
    <div className="header-container"> {/* You can style this container with CSS */}
      <img src={logo} style={imageStyle} alt="Logo" />
      <Nav />
    </div>
  );
}

export default Header;
