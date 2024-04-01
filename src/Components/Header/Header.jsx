import React, { useState } from "react";
import "./Header.css"; // Import CSS file containing styles
import Common from "../../Common";

const Header = () => {
  const [first, setfirst] = useState("Home");

  let headerTitles = Object.entries(Common.header).map(([key, value]) => (
    <div
      key={key}
      onClick={() => setfirst(value)}
      className={`${
        first === value ? "yellow-color" : "transparent-color"
      } column`}
    >
      {value.toUpperCase()}
    </div>
  ));
  return (
    <header>
      <div className="header-container">
        <img
          src="https://static.wixstatic.com/media/01cb2a_693a0e06142941aea7fa5ccd21738a19~mv2.png/v1/crop/x_0,y_499,w_3125,h_878/fill/w_292,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/full_margin_transparent_customcolor%20(2).png"
          alt="Company Logo"
        />
        {headerTitles}
      </div>
    </header>
  );
};

export default Header;
