import React from "react";
import "./AboutUs.css";
import ComponentHeader from "./../ComponentHeader/ComponentHeader";
import Common from "../../Common";

const About_Us = () => {
  const { aboutUs, aboutUsText1AmazingConcept, aboutUsText1AmazingBuilder } =
    Common;
  return (
    <div className="about-section" style={{ height: "auto" }}>
      <div className="about-content">
        <div className="col-6 about-content-container">
          <div className="col-12 about-text">
            <ComponentHeader side={true} text={aboutUs} />
            <div style={{ marginBottom: "2em" }}>
              <p className="about-test">{aboutUsText1AmazingConcept}</p> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
