import React from "react";
import "./Header.css";
import Common from "../../Common";
import { Link, useLocation } from "react-router-dom";

const Header = ({ componentRefs, scrollToComponent2, currentComponent }) => {
  const location = useLocation();

  const refLookup = {
    Home: componentRefs?.home,
    Services: componentRefs?.IntroToService,
    About: componentRefs?.aboutUs,
    "Recent Projects": componentRefs?.recentProjects,
    Contact: componentRefs?.contactForm,
  };

  const pageTitles = {
    home: "Home",
    IntroToService: "Services",
    aboutUs: "About",
    recentProjects: "Recent Projects",
    contactForm: "Contact",
  };

  const pageTitle = pageTitles[currentComponent] || "";
  console.log(currentComponent);

  return (
    <>
      <header className="header-Wrapper">
        <div className="container">
          <div className="row header-container">
            <div className="col-4 logo-container">
              <img
                src="https://static.wixstatic.com/media/01cb2a_693a0e06142941aea7fa5ccd21738a19~mv2.png/v1/crop/x_0,y_499,w_3125,h_878/fill/w_292,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/full_margin_transparent_customcolor%20(2).png"
                alt="Company Logo"
              />
            </div>
            <div className="col-8">
              <Link to={location.pathname === "/" ? "" : "/"}>
                <ul
                  className="header-container"
                  style={{
                    justifyContent: "space-around",
                    padding: 0,
                  }}
                >
                  {Common.header.map((value, key) => {
                    return (
                      <li
                        className={`${
                          pageTitle === value
                            ? "yellow-color li-css"
                            : "transparent-color li-css"
                        } column `}
                        key={key}
                        onClick={() => {
                          refLookup[value] &&
                            refLookup[value]?.current !== null &&
                            scrollToComponent2(refLookup[value]);
                        }}
                      >
                        {value.toUpperCase()}
                      </li>
                    );
                  })}
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div style={{ paddingTop: "100px" }} />
    </>
  );
};

export default Header;
