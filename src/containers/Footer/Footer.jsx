import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-content">
        <div className="app__footer-about">
          <h3 className="headtext__h3">Quickly.</h3>
          <p>32 - 44 Upper Rupert Street</p>
          <p>W12 8DY Kensington</p>
          <p>United Kingdom</p>
        </div>

        <div className="app__footer-links">
          <div className="app__footer-links_company">
            <h5>Our Company</h5>
            <a href="#">Our Team</a>
            <a href="#">Company Vision</a>
            <a href="#">Our History</a>
            <a href="#">Investors</a>
          </div>

          <div className="app__footer-links_resources">
            <h5>Our Resources</h5>
            <a href="#">The Blog</a>
            <a href="#">Downloads</a>
            <a href="#">Change Log</a>
            <a href="#">Slack Channel</a>
          </div>

          <div className="app__footer-links_products">
            <h5>Our Products</h5>
            <a href="#">New Features</a>
            <a href="#">Roadmap</a>
            <a href="#">Product Demo</a>
            <a href="#">Pricing</a>
          </div>
        </div>
      </div>

      <hr />
      <div className="app__footer-copyright">
        <p>Copyright 2022 Quickly LTD</p>
      </div>
    </div>
  );
};

export default Footer;
