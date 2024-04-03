import React from "react";
import "./AboutUs.css";
import ComponentHeader from "./../ComponentHeader/ComponentHeader";
import Common from "../../Common";

const About_Us = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="col-6">
          <div className="row">
            <ComponentHeader text={Common.aboutUs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
