import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partner.css";
import demoPartner from "../../../images/partners/northpark.jpeg";
import demoPartner1 from "../../../images/partners/medica1.jpeg";
import ecurei from "../../../images/partners/ecurei.jpg";
import kam from "../../../images/partners/kam.jpeg";

export default function Partner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="partner">
      <div className="container">
        <h4 className="Rcolor">Our Partners</h4>
        <br />
        <p className="partn">
          Partnerships make our services more equitable & accessible. We thank
          our current partners & invite more new credible partnerships on board.
        </p>
        <Slider {...settings}>
          <div className="slider-item text-image">
            <div className="text-contents">Medical International Clinic</div>
          </div>
          <div className="slider-item">
            <img src={demoPartner} alt="Partner 3" />
          </div>
          <div className="slider-item">
            <img src={ecurei} alt="Partner 2" />
          </div>
          <div className="slider-item">
            <img src={kam} alt="Partner 1" />
          </div>
          <div className="slider-item text-image">
            <div className="text-contents">Phlona Medical Center</div>
          </div>
          <div className="slider-item">
            <img src={demoPartner1} alt="Partner 1" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
