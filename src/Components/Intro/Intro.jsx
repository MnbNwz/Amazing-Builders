import React from "react";
import "./Intro.css";
import Common from "../../Common";

const YourComponent = ({ scrollToComponent2 }) => {
  return (
    <div className="col-12 center-content">
      <div className="col-6 mob-screen">
        <div className="row center-inner-content">
          <h1 className="heading1">{Common.carouselText}</h1>
        </div>
        <div className="row center-inner-content">
          <div onClick={scrollToComponent2} className="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
