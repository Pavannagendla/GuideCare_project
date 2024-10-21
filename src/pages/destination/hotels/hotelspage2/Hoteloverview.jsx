import React, { useState } from "react";
import "./hoteloverview.css";
import ratingsh from "../../../../Assets/ratingsh.png";
import location_hotel from "../../../../Assets/location_hotel.png";
import share_hotel from "../../../../Assets/share_hotel.png";
import hotelimg1 from "../../../../Assets/hotelimg1.png";
import hotelpage2_1 from "../../../../Assets/hotelpage2_1.png";
import hotelpage2_2 from "../../../../Assets/hotelpage2_2.png";
import hotelpage2_3 from "../../../../Assets/hotelpage2_3.png";
import hotelpage2_4 from "../../../../Assets/hotelpage2_4.png";
import spark_star from "../../../../Assets/spark_star.png";
import hotel_bed1 from "../../../../Assets/hotel_bed1.png";
import hotel_bed2 from "../../../../Assets/hotel_bed2.png";
import basket from "../../../../Assets/basket.png";
import circle_hotel from "../../../../Assets/circle_hotel.png";
import thumbsup_hotel from "../../../../Assets/thumbsup_hotel.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next_icon from '../../../../Assets/next-icon.png';
import back_icon from '../../../../Assets/back-icon.png';

const NextArrow = ({ onClick }) => {
  return (
    <button className="nexticon-btnm" onClick={onClick}>
      <img src={next_icon} alt="Next" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="backicon-btnm" onClick={onClick}>
      <img src={back_icon} alt="Previous" />
    </button>
  );
};
const Hoteloverview = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 360,
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
    <>
      <div className="hotel_avail">
        <div className="hotel_info d-flex">
          <div className="hotel_right d-flex flex-column">
            <span className="beng_race">
              Renaissance Bengaluru Race Course Hotel
            </span>
            <div className="stars_ratings mt-3 d-flex gap-2">
              <img className="ratings1" src={ratingsh} alt="" />
              <img className="ratings2" src={ratingsh} alt="" />
              <img className="ratings3" src={ratingsh} alt="" />
              <img className="ratings4" src={ratingsh} alt="" />
              <img className="ratings5" src={ratingsh} alt="" />
            </div>

            <div className="hotel_loc d-flex mt-3 gap-3">
              <img className="location_hotel" src={location_hotel} alt="" />
              <span className="loct">
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </span>
            </div>
            <div className="money_night d-flex ">
              <span className="money_price">8,631</span>
              <span className="night_hotel">/ night</span>
            </div>
          </div>
          <div className="hotel_left d-flex flex-column ">
            <span className="value_for_money">Value For Money 8.6/10</span>
            <span className="reviews_hotel">339 Reviews</span>
            <div className="share_book d-flex gap-3 mt-4">
              <img className="share_h" src={share_hotel} alt="" />
              <Link to="/hotelmainpage3">
                <button className="book_hotel">Book Now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hotel_many d-flex gap-2">
          <img className="hotel_img1" src={hotelimg1} alt="" />
          <div className="hotelmid d-flex flex-column gap-2">
            <img className="hotel_mid_img" src={hotelpage2_1} alt="" />
            <img className="hotel_mid_img" src={hotelpage2_2} alt="" />
          </div>
          <div className="hotelmid d-flex flex-column gap-2">
            <img className="hotel_mid_img" src={hotelpage2_3} alt="" />
            <div className="photo_view">
              <img className="hotel_mid_img" src={hotelpage2_4} alt="" />
              <button className="view_photo mb-2">View all photos</button>
            </div>
          </div>
        </div>

        <div className="new_overview">
          <hr className="mid_line mt-5 mx-5" />

          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-rooms-tab" data-bs-toggle="pill" data-bs-target="#pills-rooms" type="button" role="tab" aria-controls="pills-rooms" aria-selected="false">Rooms</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
  <div className="oberoi">
            <span>The Oberoi, Bengaluru Hotel</span>
          </div>
          <div className="para_l">
            Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
            Bosphorus Hotel Istanbul has risen from the ashes of the historic
            Park Hotel, which also served as Foreign Affairs Palace 120 years
            ago and is hosting its guests by assuming this hospitality mission.
            With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness
            area, 18 meeting rooms including 4 dividable ones and 3 terraces
            with Bosphorus view, Istanbuls largest terrace with Bosphorus view
            (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
            Hotel Istanbul is destined to be the popular attraction point of the
            city. Room and suite categories at various sizes with city and
            Bosphorus view, as well as 68 separate luxury suites, are offered to
            its special guests as a wide variety of selection.
          </div>

          <div className="cards_hotel d-flex gap-3">
            <div className="cards_hotel_1 d-flex flex-column ">
              <span className="hotel_rate">4.2</span>
              <div className="revi d-flex flex-column">
                <span>Very good</span>
                <span>371 reviews</span>
              </div>
            </div>
            <div className="cards_hotel_2 d-flex flex-column">
              <img className="spark_star" src={spark_star} alt="" />
              <span className="near">Near park</span>
            </div>
            <div className="cards_hotel_3 d-flex flex-column">
              <img className="spark_star" src={spark_star} alt="" />
              <span className="near">Near nightlife</span>
            </div>
            <div className="cards_hotel_4 d-flex flex-column">
              <img className="spark_star" src={spark_star} alt="" />
              <span className="near">Near theater</span>
            </div>
            <div className="cards_hotel_5 d-flex flex-column">
              <img className="spark_star" src={spark_star} alt="" />
              <span className="near">Clean Hotel</span>
            </div>
          </div>
  </div>
  <div class="tab-pane fade" id="pills-rooms" role="tabpanel" aria-labelledby="pills-rooms-tab">
  <div className="hotel_availability d-flex flex-column">
        <span className="available">Available rooms</span>
        <div className="room_occupy d-flex mt-3 gap-3">
          <div className="bed_1 d-flex flex-column">
            <img className="bed_hotel" src={hotel_bed1} alt="" />
            <div className="standard mt-4 mx-3">
              <span className="twin_bed">Standard twin bed, Multiple beds</span>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="basket" src={basket} alt="" />
                <span className="same">300 sq ft</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="circle" src={circle_hotel} alt="" />
                <span className="same">Sleeps 3t</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="thumbsup" src={thumbsup_hotel} alt="" />
                <span className="same">1 double bed and 1 twin bed</span>
              </div>
            </div>
            <div className="nig_ho mt-3 mx-3">
              <span>$240</span>
              <span className="ni">/night</span>
            </div>
            <button className="now_hotel mt-4 mx-3">Book Now</button>
          </div>

          <div className="bed_1 d-flex flex-column">
            <img className="bed_hotel" src={hotel_bed1} alt="" />
            <div className="standard mt-4 mx-3">
              <span className="twin_bed">Standard twin bed, Multiple beds</span>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="basket" src={basket} alt="" />
                <span className="same">300 sq ft</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="circle" src={circle_hotel} alt="" />
                <span className="same">Sleeps 3t</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="thumbsup" src={thumbsup_hotel} alt="" />
                <span className="same">1 double bed and 1 twin bed</span>
              </div>
            </div>
            <div className="nig_ho mt-3 mx-3">
              <span>$240</span>
              <span className="ni">/night</span>
            </div>
            <button className="now_hotel mt-4 mx-3">Book Now</button>
          </div>

          <div className="bed_1 d-flex flex-column ">
            <img className="bed_hotel" src={hotel_bed2} alt="" />
            <div className="standard mt-4 mx-3">
              <span className="twin_bed">Superiors room bed, 1 Queen bed</span>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="basket" src={basket} alt="" />
                <span className="same">300 sq ft</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="circle" src={circle_hotel} alt="" />
                <span className="same">Sleeps 3t</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="thumbsup" src={thumbsup_hotel} alt="" />
                <span className="same">1 double bed and 1 twin bed</span>
              </div>
            </div>
            <div className="nig_ho mt-3 mx-3">
              <span>$240</span>
              <span className="ni">/night</span>
            </div>
            <button className="now_hotel mt-4 mx-3">Book Now</button>
          </div>
        </div>
      </div>
  </div>
</div>
          <hr className="end_line mt-5 mx-5" />
        </div>
      </div>


      {/* tab responsive */}
      <div className="tab_hotel">
        <div className="hotel_avail_tab">
          <div className="hotel_info_new d-flex">
            <div className="right_hotel">
              <span className="hotel_course">
                Renaissance Bengaluru Race Course Hotel
              </span>
              <div className="stars_hotel d-flex gap-2">
                <img className="rate1" src={ratingsh} alt="" />
                <img className="rate2" src={ratingsh} alt="" />
                <img className="rate3" src={ratingsh} alt="" />
                <img className="rate4" src={ratingsh} alt="" />
                <img className="rate5" src={ratingsh} alt="" />
              </div>
              <div className="new_p_ mt-2">
                <span className="price_hotel">8,631 </span>
                <span className="per_h">/ night</span>
              </div>
            </div>
            <div className="left_hotel  d-flex flex-column ">
              <span className="value_money">Value For Money 8.6/10</span>
              <span className="reviews_ho">339 Reviews</span>
              <div className="share_b d-flex">
                <img className="share_hotel" src={share_hotel} alt="" />
                <Link to="/hotelmainpage3">
                  <button className="hotel_book">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="slide_con">
            <div className="slider-container_hotel">
              <Slider {...settings}>
                <div>
                  <img
                    src={hotelimg1}
                    alt="Cab Inside View 1"
                    className="slider_hot"
                  />
                </div>
                <div>
                  <img
                    src={hotelpage2_1}
                    alt="Cab Inside View 2"
                    className="slider_hot"
                  />
                </div>
                <div>
                  <img
                    src={hotelpage2_2}
                    alt="Cab Inside View 3"
                    className="slider_hot"
                  />
                </div>
                <div>
                  <img
                    src={hotelpage2_3}
                    alt="Cab Inside View 4"
                    className="slider_hot"
                  />
                </div>
                <div>
                  <img
                    src={hotelpage2_3}
                    alt="Cab Inside View 4"
                    className="slider_hot"
                  />
                </div>
                <div>
                  <img
                    src={hotelpage2_3}
                    alt="Cab Inside View 4"
                    className="slider_hot"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="new_overview_tab">
        <hr className="mid_line mt-5 mx-5" />

        <ul class="navhotelavail nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-itemavail" role="presentation">
    <button className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => handleTabClick("overview")}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "overview"} 
 >Overview</button>
  </li>
  <li class="nav-itemavail" role="presentation">
    <button className={`nav-link ${activeTab === "rooms" ? "active" : ""}`}
                  onClick={() => handleTabClick("rooms")}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "rooms"}>Rooms</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
<div className={`tab-pane fade ${activeTab === "overview" ? "show active" : ""}`} role="tabpanel">
  <div className="oberoi">
          <span>The Oberoi, Bengaluru Hotel</span>
        </div>
        <div className="para_l">
          Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
          Bosphorus Hotel Istanbul has risen from the ashes of the historic Park
          Hotel, which also served as Foreign Affairs Palace 120 years ago and
          is hosting its guests by assuming this hospitality mission. With its
          452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18
          meeting rooms including 4 dividable ones and 3 terraces with Bosphorus
          view, Istanbuls largest terrace with Bosphorus view (4500 m2) and
          latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is
          destined to be the popular attraction point of the city. Room and
          suite categories at various sizes with city and Bosphorus view, as
          well as 68 separate luxury suites, are offered to its special guests
          as a wide variety of selection.
        </div>

        <div className="cards_hotel d-flex gap-3">
          <div className="cards_hotel_1 d-flex flex-column ">
            <span className="hotel_rate">4.2</span>
            <div className="revi d-flex flex-column">
              <span>Very good</span>
              <span>371 reviews</span>
            </div>
          </div>
          <div className="cards_hotel_2 d-flex flex-column">
            <img className="spark_star" src={spark_star} alt="" />
            <span className="near">Near park</span>
          </div>
          <div className="cards_hotel_3 d-flex flex-column">
            <img className="spark_star" src={spark_star} alt="" />
            <span className="near">Near nightlife</span>
          </div>
          <div className="cards_hotel_4 d-flex flex-column">
            <img className="spark_star" src={spark_star} alt="" />
            <span className="near">Near theater</span>
          </div>
          <div className="cards_hotel_5 d-flex flex-column">
            <img className="spark_star" src={spark_star} alt="" />
            <span className="near">Clean Hotel</span>
          </div>
        </div>
  </div>
  <div className={`tab-pane fade ${activeTab === "rooms" ? "show active" : ""}`} role="tabpanel">
  <div className="hotel_availability d-flex flex-column">
        <span className="available">Available rooms</span>
        <div className="room_occupy d-flex mt-3 gap-3">
          <div className="bed_1 d-flex flex-column">
            <img className="bed_hotel" src={hotel_bed1} alt="" />
            <div className="standard mt-4 mx-3">
              <span className="twin_bed">Standard twin bed, Multiple beds</span>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="basket" src={basket} alt="" />
                <span className="same">300 sq ft</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="circle" src={circle_hotel} alt="" />
                <span className="same">Sleeps 3t</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="thumbsup" src={thumbsup_hotel} alt="" />
                <span className="same">1 double bed and 1 twin bed</span>
              </div>
            </div>
            <div className="nig_ho mt-3 mx-3">
              <span>$240</span>
              <span className="ni">/night</span>
            </div>
            <button className="now_hotel mt-4 mx-3">Book Now</button>
          </div>

          <div className="bed_1 d-flex flex-column">
            <img className="bed_hotel" src={hotel_bed1} alt="" />
            <div className="standard mt-4 mx-3">
              <span className="twin_bed">Standard twin bed, Multiple beds</span>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="basket" src={basket} alt="" />
                <span className="same">300 sq ft</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="circle" src={circle_hotel} alt="" />
                <span className="same">Sleeps 3t</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="thumbsup" src={thumbsup_hotel} alt="" />
                <span className="same">1 double bed and 1 twin bed</span>
              </div>
            </div>
            <div className="nig_ho mt-3 mx-3">
              <span>$240</span>
              <span className="ni">/night</span>
            </div>
            <button className="now_hotel mt-4 mx-3">Book Now</button>
          </div>

          <div className="bed_1 d-flex flex-column ">
            <img className="bed_hotel" src={hotel_bed2} alt="" />
            <div className="standard mt-4 mx-3">
              <span className="twin_bed">Superiors room bed, 1 Queen bed</span>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="basket" src={basket} alt="" />
                <span className="same">300 sq ft</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="circle" src={circle_hotel} alt="" />
                <span className="same">Sleeps 3t</span>
              </div>
              <div className="icon_hotel d-flex gap-3 mt-2">
                <img className="thumbsup" src={thumbsup_hotel} alt="" />
                <span className="same">1 double bed and 1 twin bed</span>
              </div>
            </div>
            <div className="nig_ho mt-3 mx-3">
              <span>$240</span>
              <span className="ni">/night</span>
            </div>
            <button className="now_hotel mt-4 mx-3">Book Now</button>
          </div>
        </div>
      </div>
  </div>
</div>

        <hr className="end_line mt-5 mx-5" />
      </div>
    </>
  );
};

export default Hoteloverview;
