import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="app__cta section__padding">
      <div className="app__cta-div">
        <div>
          <h5>Stop wasting time, start saving it</h5>
        </div>
        <div className="app__cta-headline">
          <h1>Sign up for your free trial, with the world’s best product tool</h1>
        </div>
        <button className="button__primary-dark">Start your trial</button>
      </div>
    </div>
  );
};

export default CTA;
