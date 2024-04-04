import React, { useState, useEffect, useRef } from "react";
import "./RecentProjects.css"; // Importing CSS file

const ProjectsCount = () => {
  const [animate, setAnimate] = useState(false);
  // const [Flag, setFlag] = useState(true);
  const observerRef = useRef(null);
  // useEffect(() => {
  //   let observer = null;
  //   let cleanup = () => {}; // Initialize with a no-op function

  //   if (Flag && observerRef.current) {
  //     observer = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         console.log("Arrived");
  //         setAnimate(true);
  //         setTimeout(() => {
  //           setAnimate(false);
  //           setFlag(false);
  //           if (observer) {
  //             observer.disconnect(); // Disconnect the observer after animation
  //           }
  //         }, 500);
  //       }
  //     });

  //     observer.observe(observerRef.current);

  //     cleanup = () => {
  //       if (observer) {
  //         observer.disconnect();
  //       }
  //     };
  //   }

  //   return cleanup;
  // }, [Flag]);
  // console.log(animate, Flag);
  return (
    <div
      ref={observerRef}
      className="col-12"
      style={{ backgroundColor: "black" }}
    >
      <div className="row">
        <div className="col-12">
          <div className="row row-container">
            <div className={`heading-container ${animate ? "animate" : ""}`}>
              <h1 className="heading-1 headings">2019</h1>
              <h2 className="heading-2 headings">
                Year <br /> Established
              </h2>
            </div>
            <div className="project-dash" />
            <div className={`heading-container ${animate ? "animate" : ""}`}>
              <h1 className="heading-1 headings">+50</h1>
              <h2 className="heading-2 headings">
                Projects <br /> Completed
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCount;
