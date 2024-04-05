import React, { useState } from "react";
import Header from "../../Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hartLand from "./../../../Assets/hartLand_Img.jpg";
import grazing from "./../../../Assets/grazing_Img.jpg";
import restFull from "./../../../Assets/restFull_Img.jpg";
import sandyGate from "./../../../Assets/sandyGate_Img.jpg";
import matrix from "./../../../Assets/matrix-2.png";
import matrix1 from "./../../../Assets/matrix-intro-min.png";
import "./Projects.css";
import Common from "../../../Common";
import ComponentHeader from "../../ComponentHeader/ComponentHeader";
import Footer from "../../Footer/Footer";
import { Link, useLocation } from "react-router-dom";

const Projects = ({ componentRefs }) => {
  const [imageIndex, setImageIndex] = useState(1);
  const location = useLocation();
  const projectData = location?.state;

  return (
    <div className="col-12">
      <Header componentRefs={componentRefs} />
      <div className="row project-heading">
        <div className="col-6">
          <ComponentHeader side={true} text={projectData} />
        </div>
      </div>

      <div className="row centering">
        <div className="col-6">
          <p
            dangerouslySetInnerHTML={{ __html: Common.prjectsDetail1 }}
            className="rec-proj-text"
          />

          <p
            dangerouslySetInnerHTML={{ __html: Common.prjectsDetail2 }}
            className="rec-proj-text"
          />
        </div>
      </div>

      <div className="row centering">
        <div className="col-6">
          <img
            src={images[imageIndex]}
            className="master-img"
            alt={`Project ${imageIndex}`}
          />
        </div>
      </div>
      <Carousel setImageIndex={(index) => setImageIndex(index)} />
      <div className="row centering" style={{ margin: "20px 0" }}>
        <div className="row">
          <Link to="/">
            <button className="back-btn">BACK TO PROJECT</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const images = [
  hartLand,
  grazing,
  restFull,
  sandyGate,
  matrix,
  matrix1,
  hartLand,
  grazing,
  restFull,
  sandyGate,
  matrix,
  matrix1,
  hartLand,
  grazing,
  restFull,
  sandyGate,
  matrix,
  matrix1,
];

const Carousel = ({ setImageIndex }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5, // Show 4 images
          slidesToScroll: 5, // Scroll 4 images
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4, // Show 3 images
          slidesToScroll: 4, // Scroll 3 images
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 2 images
          slidesToScroll: 3, // Scroll 2 images
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 1 image
          slidesToScroll: 2, // Scroll 1 image
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 1 image
          slidesToScroll: 2, // Scroll 1 image
          dots: false,
        },
      },
    ],
  };

  return (
    <div style={{ display: "block" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              onClick={() => setImageIndex(index)}
              src={image}
              className="carousel-img"
              alt={`Project ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
