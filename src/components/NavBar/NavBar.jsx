// Navbar.js

import React, { useState } from 'react';
import './NavBar.css';  // Create a separate CSS file for styling
import { Link,  } from "react-router-dom";
import { RoutePrefix,Route } from '../../roots';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
  
  const handleLinkClick = () => {
    setIsMobile(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="logo ">
      <Link className="link-for-data" to={`${RoutePrefix}/${Route.Home}`} onClick={handleLinkClick}>EduMatrix</Link>
        
      </div>

      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Home}`} onClick={handleLinkClick}>Home</Link>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Lresources}`} onClick={handleLinkClick}>Learning Resources</Link>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Scholarships}`}  onClick={handleLinkClick}>Scholarships</Link>
        <Link className="link-for-data" to={`${RoutePrefix}/${Route.Internships}`} onClick={handleLinkClick}>Internships</Link>
      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
