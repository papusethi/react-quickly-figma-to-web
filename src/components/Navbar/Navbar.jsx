import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">Quickly.</div>
      <ul className="app__navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">AboutUs</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#blog">OurBlog</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>

      <div className="app__navbar-sign">
        <button className="button__primary-light">Sign Up</button>
        <button className="button__login">Log In</button>
      </div>

      {/* Navigation Menu for Smallscreen devices */}
      <div className="app__navbar-smallscreen">
        <BiMenuAltRight
          color="#ffffff"
          fontSize={27}
          onClick={() => { setTogglemenu(true); }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom">
            <MdOutlineClose
              color="#ffffff"
              fontSize={27}
              className="overlay__close"
              onClick={() => { setTogglemenu(false); }}
            />

            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">AboutUs</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#blog">OurBlog</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
