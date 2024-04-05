import React from "react";
import "./Partners.css";
import Common from "../../Common";
import picture from "../../Assets/projects.jpeg";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const Partners = () => {
  return (
    <div className="img-wrapper">
      <ComponentHeader text={Common.partners} />
      <div className="container img-container">
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
