import React from "react";
import "./Footer.css"; // Import CSS file containing styles

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-container">
            <p>{`© ${new Date().getFullYear()} by Matrix Designer Builders.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
