import React from "react";
import { images } from "../../constants";
import "./featureCanHelp.css";

const FeatureCanHelp = () => {
  return (
    <div className="app__fch section__padding">
      <div className="app__fch-headline">
        <h3 className="headtext__h3">How Quickly helps you get more done</h3>
      </div>

      <div className="app__fch-container">
        <div className="app__fch-connector">
          <img src={images.feature_connector} alt="connector" />
        </div>

        <div className="app__fch-box">
          <div className="app__fch-box_header">
            <div className="app__fch-box_bg">
              <img src={images.feature_bg_circle_1} alt="bg circle 1" />
            </div>
            <div className="app__box-card">
              <img src={images.feature_card_1} alt="" />
            </div>
          </div>
          <div className="app__fch-box_footer">
            <h4 className="headtext__h4">Quick Project Creation</h4>
            <p className="p__medium">
              Your new projects are simply a click away with our intuitive
              creation flow
            </p>
          </div>
        </div>
        <div className="app__fch-box">
          <div className="app__fch-box_header">
            <div className="app__fch-box_bg">
              <img src={images.feature_bg_circle_2} alt="bg circle 2" />
            </div>
            <div className="app__box-card">
              <img src={images.feature_card_2} alt="" />
            </div>
          </div>

          <h4 className="headtext__h4">Effortless Collaboration</h4>
          <p className="p__medium">
            Need to assign a designer to your new project, that’s easy with
            quickly
          </p>
        </div>
        <div className="app__fch-box">
          <div className="app__fch-box_header">
            <div className="app__fch-box_bg">
              <img src={images.feature_bg_circle_3} alt="bg circle 3" />

              <img
                src={images.feature_card_3}
                alt=""
                className="app__box-card"
              />
            </div>
          </div>

          <h4 className="headtext__h4">Advanced Tracking</h4>
          <p className="p__medium">
            Track project progress with swim lanes, road maps and other tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCanHelp;
