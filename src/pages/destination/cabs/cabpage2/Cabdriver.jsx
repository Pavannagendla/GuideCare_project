import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cabinside_1 from "../../../../Assets/cabinside_1.png";
import cabinside_2 from "../../../../Assets/cabinside_2.png";
import cabinside_3 from "../../../../Assets/cabinside_3.png";
import "./cabdriver.css";

const Cabdriver = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 361,
        settings: {
          dots:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="cab_driver">
      <div className="driver_details d-flex flex-column ">
        <span className="driver ">Driver & Cab details</span>
        <span className="cab_operator">
          A cab operator will be designated upon booking confirmation, and
          details regarding the cab and driver will be provided up to 30 minutes
          before departure.
        </span>
        <span className="cab_i ">Cab Images</span>

        <div className="slide">
          <div className="slider-container_1">
            <Slider {...settings}>
              <div>
                <img
                  src={cabinside_1}
                  alt="Cab Inside View 1"
                  className="slider-image"
                />
              </div>
              <div>
                <img
                  src={cabinside_2}
                  alt="Cab Inside View 2"
                  className="slider-image"
                />
              </div>
              <div>
                <img
                  src={cabinside_3}
                  alt="Cab Inside View 3"
                  className="slider-image"
                />
              </div>
              <div>
                <img
                  src={cabinside_1}
                  alt="Cab Inside View 4"
                  className="slider-image"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="jou">
          <div className="journey">
            <span>
              Here are some points to consider before traveling in an electric
              vehicle.
            </span>
            <br />
            <span>
              During your eco-friendly electric cab journey, a 20-30 minute
              recharging stop will be necessary to ensure smooth travel.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabdriver;
