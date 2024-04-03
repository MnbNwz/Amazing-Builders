import React from "react";
import "./Intro.css";
import Common from "../../Common";

function YourComponent() {
  return (
    <div className="col-12 center-content">
      <div className="col-6">
        <div className="row">
          <h1 className="heading1">{Common.carouselText}</h1>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="down-arrow" />
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
