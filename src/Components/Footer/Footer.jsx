import React from "react";
import "./Footer.css"; // Import CSS file containing styles
import Common from "../../Common";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="footer-container">
          <p>{`© ${new Date().getFullYear()} by ${
            Common.copywriteTextAmazingMaster
          }`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
