import React from "react";
import { images, data } from "../../constants";

import "./quotes.css";

const QuotesBlock = (props) => {
  return (
    <div className="app__quotes-block">
      <img src={images.iconQuote} alt="quote icon" />
      <p className="app__quotes-block_message p__xl">{props.message}</p>
      <div>
        <h5 className="headtext__h5">{props.name}</h5>
        <p className="p__medium">{props.designation}</p>
      </div>
    </div>
  );
};

const Quotes = () => {
  return (
    <div className="app__quotes section__padding">
      <div className="app__quotes-header">
        <div>
          <h3 className="headtext__h3">Our customers keep talking</h3>
          <p className="p__medium">
            Listen to what they say about our product offering right here
          </p>
        </div>
        <div>
          <button className="button__primary-dark">Find out more</button>
        </div>
      </div>
      <div className="app__quotes-container">
        {data.quotes.map((block) => (
          <QuotesBlock
            name={block.name}
            designation={block.designation}
            message={block.message}
          />
        ))}
      </div>
      <div className="app__quotes-decoration">
        <img src={images.decoration} alt="decoration" />
      </div>
    </div>
  );
};

export default Quotes;
