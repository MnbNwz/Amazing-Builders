import React from "react";
import "./Partners.css";
import Common from "../../Common";
import picture from "../../Assets/projects.png";

const Partners = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7", color: "black" }}>
      <div className="col-12 wrapper">
        <h2 className="partner-heading">{Common.partners}</h2>
        <div className="dash-div" />
      </div>

      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-9">
            <img src={picture} style={{ maxWidth: "100%" }} alt="Projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
