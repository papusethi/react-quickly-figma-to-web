import React from "react";
import { data, images } from "../../constants";

import "./featureCanDo.css";

const FeatureBlock = (props) => {
  return (
    <div className="app__fcd-block">
      <img src={props.icon} alt="fdfdf" />
      <h5 className="headtext__h5">{props.title}</h5>
      <p className="p__medium">{props.desc}</p>
    </div>
  );
};

const FeatureCanDo = () => {
  return (
    <div className="app__fcd">
      <div className="app__fcd-content section__padding">
        <h3 className="app__fcd-headline headtext__h3">
          What Quickly can do for you
        </h3>
        <p className="app__fcd-subheading p__medium">
          We’re more than just anothe project management software.
        </p>
        <div className="app__fcd-container">
          {data.featureCanDo.map((block) => (
            <FeatureBlock
              key={"block" + block.title}
              icon={block.icon}
              title={block.title}
              desc={block.desc}
            />
          ))}
        </div>
      </div>
      <div className="app__fcd-divider">
        <img src={images.dividerUp} alt="divider" />
      </div>
    </div>
  );
};

export default FeatureCanDo;
