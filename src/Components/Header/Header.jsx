import React, { useState } from "react";
import "./Header.css";
import Common from "../../Common";
import { Link, useLocation } from "react-router-dom";
// import logo from "./../../Assets/amazing_concept_logo.png";
import menu from "./../../Assets/menu.png";
import logo from "./../../Assets/amazing_master_logo.png";

const Header = ({ componentRefs, scrollToComponent2, currentComponent }) => {
  const [openMenu, setOpenMenu] = useState(false);
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
  const navTitels = () => (
    <Link to={location.pathname === "/" ? "" : "/"}>
      <ul
        className="header-container ul-list"
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
                if (
                  !(
                    refLookup[value]?.current === null ||
                    refLookup[value]?.current === undefined
                  )
                ) {
                  scrollToComponent2(refLookup[value]);
                }
              }}
            >
              {value.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </Link>
  );

  return (
    <>
      <header className="header-Wrapper">
        <div className="container">
          <div className="row header-container">
            <div className="col-4 logo-container">
              <Link to={location.pathname === "/" ? "" : "/"}>
                <img
                  src={logo}
                  alt="Company Logo"
                  // style={{ width: "292px", height: "82px" }}
                />
              </Link>
            </div>
            <div className="col-8 nav-titles-con">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "relative",
                }}
              >
                <img
                  onClick={() => setOpenMenu((prev) => !prev)}
                  className="nav-menu-logo"
                  src={menu}
                  alt="Menu"
                />
                {openMenu && (
                  <div className="nav-menu-container">{navTitels()}</div>
                )}
              </div>
              <div className="title-con">{navTitels()}</div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ paddingTop: "100px" }} />
    </>
  );
};

export default Header;
