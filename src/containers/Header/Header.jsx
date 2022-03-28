import React from "react";
import { images } from "../../constants";
import "./header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h4 className="app__header-microtitle headtext__h4">
          The new way to work online
        </h4>
        <h1 className="app__header-headline headtext__display">
          Get the important work done faster
        </h1>
        <p className="app__header-sub p__xl">
          With Quickly, you can get more productive work done in far less time
          than ever before.
        </p>
        <div className="app__header-sign">
          <button className="button__primary-dark">Sign up</button>
          <button className="button__white">Learn more</button>
        </div>
      </div>

      <div className="app__wrapper_img">
        <div className="app__header-img">
          <div className="app__mainImage">
            <img src={images.bgImage} alt="BG Image" />

            <div className="app__projectUpdated">
              <img src={images.header_project} alt="project updated" />
            </div>

            <div className="app__newTask">
              <img src={images.header_task_assigned} alt="task assigned"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
