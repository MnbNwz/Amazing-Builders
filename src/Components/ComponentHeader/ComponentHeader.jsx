import React from "react";
import "./ComponentHeader.css";

const ComponentHeader = ({ text }) => {
  return (
    <div className="col-9 contact-container heading-Content">
      <h2 className="contact-heading">{text}</h2>
      <div className="contact-dash-div" />
    </div>
  );
};

export default ComponentHeader;
