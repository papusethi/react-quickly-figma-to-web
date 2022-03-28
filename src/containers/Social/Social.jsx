import React from "react";
import { images } from "../../constants";

import "./social.css";

const Social = () => {
  return (
    <div className="app__social section__padding">
      <p className="app__social-header">
        We work with some of the world’s <strong>leading</strong> companies
      </p>
      <div className="app__social-container">
        <div className="app__social-img">
          <img src={images.sony} alt="sony" />
        </div>
        <div className="app__social-img">
          <img src={images.louis_vuitton} alt="louis vuitton" />
        </div>
        <div className="app__social-img">
          <img src={images.slack} alt="slack" />
        </div>
        <div className="app__social-img">
          <img src={images.facebook} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Social;
