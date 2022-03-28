import React from "react";
import { images, data } from "../../constants";

import "./feature.css";

const FeatureBlock = (props) => {
  return (
    <div className="app__feature-block">
      <img src={props.icon} alt="fdfdf" />
      <h5 className="headtext__h5">{props.title}</h5>
      <p className="p__medium">{props.desc}</p>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="app__feature" id="features">
      <div className="app__feature-content  app__wrapper section__padding">
        <div className="app__wrapper_info">
          <h3 className="app__feature-headline headtext__h3">
            The source of truth for all of your product decisions
          </h3>
          <p className="app__feature-subheading p__large">
            This goes further than what you expected, here you can communicate
            two really important product features with icons.
          </p>
          <div className="app__feature-container">
            {data.feature.map((block) => (
              <FeatureBlock
                key={"block" + block.title}
                icon={block.icon}
                title={block.title}
                desc={block.desc}
              />
            ))}
          </div>
        </div>

        <div className="app__wrapper_img">
          <div className="app__feature-img">
            <img src={images.featureBoy} alt="feature boy" />

            <div className="app__feature-overlay_project">
              <img src={images.feature_project} alt="feature propject" />
            </div>

            <div className="app__feature-overlay_client">
              <img src={images.feature_client} alt="feature client" />
            </div>
          </div>
        </div>
      </div>

      <div className="app__feature-divider">
        <img src={images.dividerDown} alt="divider" />
      </div>
    </div>
  );
};

export default Feature;
