import React from "react";
import "./ComponentHeader.css";

const ComponentHeader = ({ side, text }) => {
  return (
    <div
      className={
        side
          ? `col-9  heading-Content`
          : "col-9 contact-container heading-Content"
      }
    >
      <h2 className="contact-heading">{text}</h2>
      <div className="contact-dash-div" />
    </div>
  );
};

export default ComponentHeader;
