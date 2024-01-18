import React from "react";

import inspiration from "../../assets/Images/inspiration.png";
import businessman from "../../assets/Images/businessman.png";
import technicalSupport from "../../assets/Images/technical-support.png";
import hierarchicalStructure from "../../assets/Images/hierarchical-structure.png";
import budget from "../../assets/Images/budget.png";

import "./ChooseUs.css";
const ChooseUs = () => {
  return (
    <div className="container chooseus-wrapper">
      <div className="chooseus-wrapper-one">
        <h1 className="chooseus-wrapper-one-heading">Why Choose us</h1>
      </div>

      <div className="chooseus-wrapper-two">
        <div>
          <img src={inspiration} alt="inspiration" />
          <h4>innovative</h4>
          <h4>Design</h4>
        </div>
        <div>
          <img src={businessman} alt="businessman" />
          <h4>tallented</h4>
          <h4>engineers</h4>
        </div>
        <div>
          <img src={technicalSupport} alt="technicalSupport" />
          <h4>latest technology</h4>
          <h4>used</h4>
        </div>
        <div>
          <img src={hierarchicalStructure} alt="hierarchicalStructure" />
          <h4>real time</h4>
          <h4>supervision</h4>
        </div>
        <div>
          <img src={budget} alt="budget" />
          <h4>budget friendly</h4>
          <h4>design</h4>
        </div>
      </div>
      <div className="chooseus-wrapper-dots"></div>
    </div>
  );
};

export default ChooseUs;
