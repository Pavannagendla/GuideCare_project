import React, { useState } from "react";
import "./hero.css";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../Assets/icon.png';

function Hero() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="hero-left">
            <Link className="gradient-text" to="/">
              <img src={Logo} alt="Logo" />
              Guide.Care
            </Link>
          </div>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showNav ? "show" : ""}`}>
            <div className="hero-elements">
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
              <Link to="/aboutUs" className={location.pathname === "/aboutUs" ? "active" : ""}>About Us</Link>
              <Link to="/findadoctor" className={location.pathname === "/findadoctor" ? "active" : ""}>Find A Doctor</Link>
              <Link to="/destinations" className={location.pathname === "/destinations" ? "active" : ""}>Destinations</Link>
              <Link to="/guidecaredoc" className={location.pathname === "/guidecaredoc" ? "active" : ""}>Guidecare For Doctors</Link>
              <Link to="/joinusfree" className={location.pathname === "/joinusfree" ? "active" : ""}>Join Us Free</Link>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Hero;
