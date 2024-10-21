import React, { useState } from "react";
import "./hotelname.css";
import hotelimg1 from "../../../../Assets/hotelimg1.png";
import hotelimg2 from "../../../../Assets/hotelimg2.png";
import hotelimg3 from "../../../../Assets/hotelimg3.png";
import hotelimg4 from "../../../../Assets/hotelimg4.png";
import hotelimg5 from "../../../../Assets/hotelimg5.png";
import ratingsh from "../../../../Assets/ratingsh.png";
import freewifi from "../../../../Assets/freewifi.png";
import parking from "../../../../Assets/parking.png";
import acrooms from "../../../../Assets/acrooms.png";
import cityview from "../../../../Assets/cityview.png";
import nosmoking from "../../../../Assets/nosmoking.png";
import housekeeping from "../../../../Assets/housekeeping.png";
import roomservice from "../../../../Assets/roomservice.png";
import transport from "../../../../Assets/transport.png";
import freebreakfast from "../../../../Assets/freebreakfast.png";
import conferencefacility from "../../../../Assets/conferencefacility.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Hotelname = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionToggle = (itemIndex) => {
    setOpenItem((prevItem) => (prevItem === itemIndex ? null : itemIndex));
  };


  const faqData_1 = [
    {
      question: " How can I search for hotels on your website?",
      answer:
        "You can search for hotels by entering your destination, travel dates, and any specific preferences you may have, such as proximity to healthcare facilities or desired amenities.",
    },
    {
      question:
        " Can I book hotels near specific hospitals or medical centers?",
      answer:
        " Yes, our website allows you to search for hotels near specific hospitals or medical centers. Simply enter the name of the hospital or medical center in the search bar, and we will provide you with a list of nearby hotels.",
    },
    {
      question:
        "Are the hotels listed on your website suitable for medical tourists?",
      answer:
        "Yes, we carefully select hotels that are suitable for medical tourists, taking into account factors such as proximity to healthcare facilities, accessibility, and amenities that cater to the needs of medical travelers.",
    },
    {
      question:
        " Can I see reviews and ratings for the hotels listed on your website?",
      answer:
        " Yes, we provide user reviews and ratings for each hotel listed on our website, allowing you to make informed decisions based on the experiences of other travelers..",
    },
    {
      question:
        "Are there any special rates or discounts available for medical tourists?",
      answer:
        "Some hotels may offer special rates or discounts for medical tourists. Please check the individual hotel listings for any available promotions or contact our customer support team for assistance.",
    },
    {
      question:
        "Can I book hotels that offer medical tourism packages or services?",
      answer:
        "Yes, some hotels may offer medical tourism packages or services, such as transportation to and from healthcare facilities, assistance with medical appointments, and discounted rates for medical tourists. Please check the individual hotel listings for any available packages or services..",
    },
  ];

  return (
    <>
      <div className="container-fluid-row-column">
        <div className="container-card1">
          <div className="container-top">
            <div className="card-topleft">
              <div className="title-head">
                <h2 className="card-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="star-rating">
                <img className="rating1" src={ratingsh} alt="" />
                <img className="rating2" src={ratingsh} alt="" />
                <img className="rating3" src={ratingsh} alt="" />
                <img className="rating4" src={ratingsh} alt="" />
                <img className="rating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="card-topright">
              <div className="card-topr1">
                <p className="textgood">Very Good</p>
                <p className="text339">339 Reviews</p>
              </div>
              <div className="ratevalue">
                <p className="textrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="container-middle">
            <div className="middle-left">
              <div className="middle-img">
                <img className="hotelimge" src={hotelimg1} alt="" />
              </div>
              <h5 className="views">View Details</h5>
            </div>
            <div className="middle-right">
                <hr className="topside" />
              <div className="hotelelement1">
                <div className="icon1">
                  <img className="wifi" src={freewifi} alt="" />
                  <p className="fw">Free wifi</p>
                </div>
                <div className="icon2">
                  <img className="parking" src={parking} alt="" />
                  <p className="fp">Free Parking</p>
                </div>
                <div className="icon3">
                  <img className="ac-rooms" src={acrooms} alt="" />
                  <p className="ac">AC Rooms</p>
                </div>
                <div className="icon4">
                  <img className="city" src={cityview} alt="" />
                  <p className="cv">City View</p>
                </div>
                <div className="icon5">
                  <img className="smoking" src={nosmoking} alt="" />
                  <p className="ns">Non smoking Rooms</p>
                </div>

                <div className="hotelelement2">
                  <div className="icon6">
                    <img className="housekeeping" src={housekeeping} alt="" />
                    <p className="hk">House Keeping</p>
                  </div>
                  <div className="icon7">
                    <img className="roomservice" src={roomservice} alt="" />
                    <p className="rs">Room service</p>
                  </div>
                  <div className="icon8">
                    <img className="transport" src={transport} alt="" />
                    <p className="tp">Transportation</p>
                  </div>
                  <div className="icon9">
                    <img className="freebreakfast" src={freebreakfast} alt="" />
                    <p className="fb">Free Breakfast</p>
                  </div>
                  <div className="icon10">
                    <img
                      className="conferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="cf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="price">
                  <hr className="downside" />
                  <div className="pricebottom">
                    <div className="priceleft">
                  <h3 className="roomprice">$ 250</h3>
                  <p className="for">For 1 Night</p>
                  </div>
                  <div className="prime">
                    <Link to='/hotelmainpage2'>
                    <button type="button" className="pricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="container-card1">
          <div className="container-top">
            <div className="card-topleft">
              <div className="title-head">
                <h2 className="card-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="star-rating">
                <img className="rating1" src={ratingsh} alt="" />
                <img className="rating2" src={ratingsh} alt="" />
                <img className="rating3" src={ratingsh} alt="" />
                <img className="rating4" src={ratingsh} alt="" />
                <img className="rating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="card-topright">
              <div className="card-topr1">
                <p className="textgood">Very Good</p>
                <p className="text339">339 Reviews</p>
              </div>
              <div className="ratevalue">
                <p className="textrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="container-middle">
            <div className="middle-left">
              <div className="middle-img">
                <img className="hotelimge" src={hotelimg2} alt="" />
              </div>
              <h5 className="views">View Details</h5>
            </div>
            <div className="middle-right">
                <hr className="topside" />
              <div className="hotelelement1">
                <div className="icon1">
                  <img className="wifi" src={freewifi} alt="" />
                  <p className="fw">Free wifi</p>
                </div>
                <div className="icon2">
                  <img className="parking" src={parking} alt="" />
                  <p className="fp">Free Parking</p>
                </div>
                <div className="icon3">
                  <img className="ac-rooms" src={acrooms} alt="" />
                  <p className="ac">AC Rooms</p>
                </div>
                <div className="icon4">
                  <img className="city" src={cityview} alt="" />
                  <p className="cv">City View</p>
                </div>
                <div className="icon5">
                  <img className="smoking" src={nosmoking} alt="" />
                  <p className="ns">Non smoking Rooms</p>
                </div>

                <div className="hotelelement2">
                  <div className="icon6">
                    <img className="housekeeping" src={housekeeping} alt="" />
                    <p className="hk">House Keeping</p>
                  </div>
                  <div className="icon7">
                    <img className="roomservice" src={roomservice} alt="" />
                    <p className="rs">Room service</p>
                  </div>
                  <div className="icon8">
                    <img className="transport" src={transport} alt="" />
                    <p className="tp">Transportation</p>
                  </div>
                  <div className="icon9">
                    <img className="freebreakfast" src={freebreakfast} alt="" />
                    <p className="fb">Free Breakfast</p>
                  </div>
                  <div className="icon10">
                    <img
                      className="conferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="cf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="price">
                  <hr className="downside" />
                  <div className="pricebottom">
                    <div className="priceleft">
                  <h3 className="roomprice">$ 250</h3>
                  <p className="for">For 1 Night</p>
                  </div>
                  <div className="prime">
                    <Link to='/hotelmainpage2'>
                    <button type="button" className="pricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="container-card1">
          <div className="container-top">
            <div className="card-topleft">
              <div className="title-head">
                <h2 className="card-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="star-rating">
                <img className="rating1" src={ratingsh} alt="" />
                <img className="rating2" src={ratingsh} alt="" />
                <img className="rating3" src={ratingsh} alt="" />
                <img className="rating4" src={ratingsh} alt="" />
                <img className="rating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="card-topright">
              <div className="card-topr1">
                <p className="textgood">Very Good</p>
                <p className="text339">339 Reviews</p>
              </div>
              <div className="ratevalue">
                <p className="textrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="container-middle">
            <div className="middle-left">
              <div className="middle-img">
                <img className="hotelimge" src={hotelimg3} alt="" />
              </div>
              <h5 className="views">View Details</h5>
            </div>
            <div className="middle-right">
                <hr className="topside" />
              <div className="hotelelement1">
                <div className="icon1">
                  <img className="wifi" src={freewifi} alt="" />
                  <p className="fw">Free wifi</p>
                </div>
                <div className="icon2">
                  <img className="parking" src={parking} alt="" />
                  <p className="fp">Free Parking</p>
                </div>
                <div className="icon3">
                  <img className="ac-rooms" src={acrooms} alt="" />
                  <p className="ac">AC Rooms</p>
                </div>
                <div className="icon4">
                  <img className="city" src={cityview} alt="" />
                  <p className="cv">City View</p>
                </div>
                <div className="icon5">
                  <img className="smoking" src={nosmoking} alt="" />
                  <p className="ns">Non smoking Rooms</p>
                </div>

                <div className="hotelelement2">
                  <div className="icon6">
                    <img className="housekeeping" src={housekeeping} alt="" />
                    <p className="hk">House Keeping</p>
                  </div>
                  <div className="icon7">
                    <img className="roomservice" src={roomservice} alt="" />
                    <p className="rs">Room service</p>
                  </div>
                  <div className="icon8">
                    <img className="transport" src={transport} alt="" />
                    <p className="tp">Transportation</p>
                  </div>
                  <div className="icon9">
                    <img className="freebreakfast" src={freebreakfast} alt="" />
                    <p className="fb">Free Breakfast</p>
                  </div>
                  <div className="icon10">
                    <img
                      className="conferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="cf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="price">
                  <hr className="downside" />
                  <div className="pricebottom">
                    <div className="priceleft">
                  <h3 className="roomprice">$ 250</h3>
                  <p className="for">For 1 Night</p>
                  </div>
                  <div className="prime">
                    <Link to='/hotelmainpage2'>
                    <button type="button" className="pricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="container-card1">
          <div className="container-top">
            <div className="card-topleft">
              <div className="title-head">
                <h2 className="card-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="star-rating">
                <img className="rating1" src={ratingsh} alt="" />
                <img className="rating2" src={ratingsh} alt="" />
                <img className="rating3" src={ratingsh} alt="" />
                <img className="rating4" src={ratingsh} alt="" />
                <img className="rating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="card-topright">
              <div className="card-topr1">
                <p className="textgood">Very Good</p>
                <p className="text339">339 Reviews</p>
              </div>
              <div className="ratevalue">
                <p className="textrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="container-middle">
            <div className="middle-left">
              <div className="middle-img">
                <img className="hotelimge" src={hotelimg4} alt="" />
              </div>
              <h5 className="views">View Details</h5>
            </div>
            <div className="middle-right">
                <hr className="topside" />
              <div className="hotelelement1">
                <div className="icon1">
                  <img className="wifi" src={freewifi} alt="" />
                  <p className="fw">Free wifi</p>
                </div>
                <div className="icon2">
                  <img className="parking" src={parking} alt="" />
                  <p className="fp">Free Parking</p>
                </div>
                <div className="icon3">
                  <img className="ac-rooms" src={acrooms} alt="" />
                  <p className="ac">AC Rooms</p>
                </div>
                <div className="icon4">
                  <img className="city" src={cityview} alt="" />
                  <p className="cv">City View</p>
                </div>
                <div className="icon5">
                  <img className="smoking" src={nosmoking} alt="" />
                  <p className="ns">Non smoking Rooms</p>
                </div>

                <div className="hotelelement2">
                  <div className="icon6">
                    <img className="housekeeping" src={housekeeping} alt="" />
                    <p className="hk">House Keeping</p>
                  </div>
                  <div className="icon7">
                    <img className="roomservice" src={roomservice} alt="" />
                    <p className="rs">Room service</p>
                  </div>
                  <div className="icon8">
                    <img className="transport" src={transport} alt="" />
                    <p className="tp">Transportation</p>
                  </div>
                  <div className="icon9">
                    <img className="freebreakfast" src={freebreakfast} alt="" />
                    <p className="fb">Free Breakfast</p>
                  </div>
                  <div className="icon10">
                    <img
                      className="conferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="cf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="price">
                  <hr className="downside" />
                  <div className="pricebottom">
                    <div className="priceleft">
                  <h3 className="roomprice">$ 250</h3>
                  <p className="for">For 1 Night</p>
                  </div>
                  <div className="prime">
                    <Link to='/hotelmainpage2'>
                    <button type="button" className="pricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="container-card1">
          <div className="container-top">
            <div className="card-topleft">
              <div className="title-head">
                <h2 className="card-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="star-rating">
                <img className="rating1" src={ratingsh} alt="" />
                <img className="rating2" src={ratingsh} alt="" />
                <img className="rating3" src={ratingsh} alt="" />
                <img className="rating4" src={ratingsh} alt="" />
                <img className="rating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="card-topright">
              <div className="card-topr1">
                <p className="textgood">Very Good</p>
                <p className="text339">339 Reviews</p>
              </div>
              <div className="ratevalue">
                <p className="textrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="container-middle">
            <div className="middle-left">
              <div className="middle-img">
                <img className="hotelimge" src={hotelimg5} alt="" />
              </div>
              <h5 className="views">View Details</h5>
            </div>
            <div className="middle-right">
                <hr className="topside" />
              <div className="hotelelement1">
                <div className="icon1">
                  <img className="wifi" src={freewifi} alt="" />
                  <p className="fw">Free wifi</p>
                </div>
                <div className="icon2">
                  <img className="parking" src={parking} alt="" />
                  <p className="fp">Free Parking</p>
                </div>
                <div className="icon3">
                  <img className="ac-rooms" src={acrooms} alt="" />
                  <p className="ac">AC Rooms</p>
                </div>
                <div className="icon4">
                  <img className="city" src={cityview} alt="" />
                  <p className="cv">City View</p>
                </div>
                <div className="icon5">
                  <img className="smoking" src={nosmoking} alt="" />
                  <p className="ns">Non smoking Rooms</p>
                </div>

                <div className="hotelelement2">
                  <div className="icon6">
                    <img className="housekeeping" src={housekeeping} alt="" />
                    <p className="hk">House Keeping</p>
                  </div>
                  <div className="icon7">
                    <img className="roomservice" src={roomservice} alt="" />
                    <p className="rs">Room service</p>
                  </div>
                  <div className="icon8">
                    <img className="transport" src={transport} alt="" />
                    <p className="tp">Transportation</p>
                  </div>
                  <div className="icon9">
                    <img className="freebreakfast" src={freebreakfast} alt="" />
                    <p className="fb">Free Breakfast</p>
                  </div>
                  <div className="icon10">
                    <img
                      className="conferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="cf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="price">
                  <hr className="downside" />
                  <div className="pricebottom">
                    <div className="priceleft">
                  <h3 className="roomprice">$ 250</h3>
                  <p className="for">For 1 Night</p>
                  </div>
                  <div className="prime">
                    <Link to='/hotelmainpage2'>
                    <button type="button" className="pricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab responsive */}
      <div className="container-fluid-row-column">
        <div className="tbcontainer-card1">
          <div className="tbcontainer-top">
            <div className="tbcard-topleft">
              <div className="tbtitle-head">
                <h2 className="tbcard-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="tbstar-rating">
                <img className="tbrating1" src={ratingsh} alt="" />
                <img className="tbrating2" src={ratingsh} alt="" />
                <img className="tbrating3" src={ratingsh} alt="" />
                <img className="tbrating4" src={ratingsh} alt="" />
                <img className="tbrating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="tbcard-topright">
              <div className="tbcard-topr1">
                <p className="tbtextgood">Very Good</p>
                <p className="tbtext339">339 Reviews</p>
              </div>
              <div className="tbratevalue">
                <p className="tbtextrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="tbcontainer-middle">
            <div className="tbmiddle-left">
              <div className="tbmiddle-img">
                <img className="tbhotelimge" src={hotelimg1} alt="" />
              </div>
              <h5 className="tbviews">View Details</h5>
            </div>
            <div className="tbmiddle-right">
                <hr className="tbtopside" />
              <div className="tbhotelelement1">
                <div className="tbicon1">
                  <img className="tbwifi" src={freewifi} alt="" />
                  <p className="tbfw">Free wifi</p>
                </div>
                <div className="tbicon2">
                  <img className="tbparking" src={parking} alt="" />
                  <p className="tbfp">Free Parking</p>
                </div>
                <div className="tbicon3">
                  <img className="tbac-rooms" src={acrooms} alt="" />
                  <p className="tbac">AC Rooms</p>
                </div>
                <div className="tbicon4">
                  <img className="tbcity" src={cityview} alt="" />
                  <p className="tbcv">City View</p>
                </div>
                <div className="tbicon5">
                  <img className="tbsmoking" src={nosmoking} alt="" />
                  <p className="tbns">Non smoking Rooms</p>
                </div>

                <div className="tbhotelelement2">
                  <div className="tbicon6">
                    <img className="tbhousekeeping" src={housekeeping} alt="" />
                    <p className="tbhk">House Keeping</p>
                  </div>
                  <div className="tbicon7">
                    <img className="tbroomservice" src={roomservice} alt="" />
                    <p className="tbrs">Room service</p>
                  </div>
                  <div className="tbicon8">
                    <img className="tbtransport" src={transport} alt="" />
                    <p className="tbtp">Transportation</p>
                  </div>
                  <div className="tbicon9">
                    <img className="tbfreebreakfast" src={freebreakfast} alt="" />
                    <p className="tbfb">Free Breakfast</p>
                  </div>
                  <div className="tbicon10">
                    <img
                      className="tbconferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="tbcf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="tbprice">
                  <hr className="tbdownside" />
                  <div className="tbpricebottom">
                    <div className="tbpriceleft">
                  <h3 className="tbroomprice">$ 250</h3>
                  <p className="tbfor">For 1 Night</p>
                  </div>
                  <div className="tbprime">
                  <Link to='/hotelmainpage2'>
                    <button type="button" className="tbpricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="tbcontainer-card1">
          <div className="tbcontainer-top">
            <div className="tbcard-topleft">
              <div className="tbtitle-head">
                <h2 className="tbcard-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="tbstar-rating">
                <img className="tbrating1" src={ratingsh} alt="" />
                <img className="tbrating2" src={ratingsh} alt="" />
                <img className="tbrating3" src={ratingsh} alt="" />
                <img className="tbrating4" src={ratingsh} alt="" />
                <img className="tbrating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="tbcard-topright">
              <div className="tbcard-topr1">
                <p className="tbtextgood">Very Good</p>
                <p className="tbtext339">339 Reviews</p>
              </div>
              <div className="tbratevalue">
                <p className="tbtextrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="tbcontainer-middle">
            <div className="tbmiddle-left">
              <div className="tbmiddle-img">
                <img className="tbhotelimge" src={hotelimg2} alt="" />
              </div>
              <h5 className="tbviews">View Details</h5>
            </div>
            <div className="tbmiddle-right">
                <hr className="tbtopside" />
              <div className="tbhotelelement1">
                <div className="tbicon1">
                  <img className="tbwifi" src={freewifi} alt="" />
                  <p className="tbfw">Free wifi</p>
                </div>
                <div className="tbicon2">
                  <img className="tbparking" src={parking} alt="" />
                  <p className="tbfp">Free Parking</p>
                </div>
                <div className="tbicon3">
                  <img className="tbac-rooms" src={acrooms} alt="" />
                  <p className="tbac">AC Rooms</p>
                </div>
                <div className="tbicon4">
                  <img className="tbcity" src={cityview} alt="" />
                  <p className="tbcv">City View</p>
                </div>
                <div className="tbicon5">
                  <img className="tbsmoking" src={nosmoking} alt="" />
                  <p className="tbns">Non smoking Rooms</p>
                </div>

                <div className="tbhotelelement2">
                  <div className="tbicon6">
                    <img className="tbhousekeeping" src={housekeeping} alt="" />
                    <p className="tbhk">House Keeping</p>
                  </div>
                  <div className="tbicon7">
                    <img className="tbroomservice" src={roomservice} alt="" />
                    <p className="tbrs">Room service</p>
                  </div>
                  <div className="tbicon8">
                    <img className="tbtransport" src={transport} alt="" />
                    <p className="tbtp">Transportation</p>
                  </div>
                  <div className="tbicon9">
                    <img className="tbfreebreakfast" src={freebreakfast} alt="" />
                    <p className="tbfb">Free Breakfast</p>
                  </div>
                  <div className="tbicon10">
                    <img
                      className="tbconferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="tbcf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="tbprice">
                  <hr className="tbdownside" />
                  <div className="tbpricebottom">
                    <div className="tbpriceleft">
                  <h3 className="tbroomprice">$ 250</h3>
                  <p className="tbfor">For 1 Night</p>
                  </div>
                  <div className="tbprime">
                  <Link to='/hotelmainpage2'>
                    <button type="button" className="tbpricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="tbcontainer-card1">
          <div className="tbcontainer-top">
            <div className="tbcard-topleft">
              <div className="tbtitle-head">
                <h2 className="tbcard-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="tbstar-rating">
                <img className="tbrating1" src={ratingsh} alt="" />
                <img className="tbrating2" src={ratingsh} alt="" />
                <img className="tbrating3" src={ratingsh} alt="" />
                <img className="tbrating4" src={ratingsh} alt="" />
                <img className="tbrating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="tbcard-topright">
              <div className="tbcard-topr1">
                <p className="tbtextgood">Very Good</p>
                <p className="tbtext339">339 Reviews</p>
              </div>
              <div className="tbratevalue">
                <p className="tbtextrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="tbcontainer-middle">
            <div className="tbmiddle-left">
              <div className="tbmiddle-img">
                <img className="tbhotelimge" src={hotelimg3} alt="" />
              </div>
              <h5 className="tbviews">View Details</h5>
            </div>
            <div className="tbmiddle-right">
                <hr className="tbtopside" />
              <div className="tbhotelelement1">
                <div className="tbicon1">
                  <img className="tbwifi" src={freewifi} alt="" />
                  <p className="tbfw">Free wifi</p>
                </div>
                <div className="tbicon2">
                  <img className="tbparking" src={parking} alt="" />
                  <p className="tbfp">Free Parking</p>
                </div>
                <div className="tbicon3">
                  <img className="tbac-rooms" src={acrooms} alt="" />
                  <p className="tbac">AC Rooms</p>
                </div>
                <div className="tbicon4">
                  <img className="tbcity" src={cityview} alt="" />
                  <p className="tbcv">City View</p>
                </div>
                <div className="tbicon5">
                  <img className="tbsmoking" src={nosmoking} alt="" />
                  <p className="tbns">Non smoking Rooms</p>
                </div>

                <div className="tbhotelelement2">
                  <div className="tbicon6">
                    <img className="tbhousekeeping" src={housekeeping} alt="" />
                    <p className="tbhk">House Keeping</p>
                  </div>
                  <div className="tbicon7">
                    <img className="tbroomservice" src={roomservice} alt="" />
                    <p className="tbrs">Room service</p>
                  </div>
                  <div className="tbicon8">
                    <img className="tbtransport" src={transport} alt="" />
                    <p className="tbtp">Transportation</p>
                  </div>
                  <div className="tbicon9">
                    <img className="tbfreebreakfast" src={freebreakfast} alt="" />
                    <p className="tbfb">Free Breakfast</p>
                  </div>
                  <div className="tbicon10">
                    <img
                      className="tbconferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="tbcf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="tbprice">
                  <hr className="tbdownside" />
                  <div className="tbpricebottom">
                    <div className="tbpriceleft">
                  <h3 className="tbroomprice">$ 250</h3>
                  <p className="tbfor">For 1 Night</p>
                  </div>
                  <div className="tbprime">
                  <Link to='/hotelmainpage2'>
                    <button type="button" className="tbpricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="tbcontainer-card1">
          <div className="tbcontainer-top">
            <div className="tbcard-topleft">
              <div className="tbtitle-head">
                <h2 className="tbcard-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="tbstar-rating">
                <img className="tbrating1" src={ratingsh} alt="" />
                <img className="tbrating2" src={ratingsh} alt="" />
                <img className="tbrating3" src={ratingsh} alt="" />
                <img className="tbrating4" src={ratingsh} alt="" />
                <img className="tbrating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="tbcard-topright">
              <div className="tbcard-topr1">
                <p className="tbtextgood">Very Good</p>
                <p className="tbtext339">339 Reviews</p>
              </div>
              <div className="tbratevalue">
                <p className="tbtextrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="tbcontainer-middle">
            <div className="tbmiddle-left">
              <div className="tbmiddle-img">
                <img className="tbhotelimge" src={hotelimg4} alt="" />
              </div>
              <h5 className="tbviews">View Details</h5>
            </div>
            <div className="tbmiddle-right">
                <hr className="tbtopside" />
              <div className="tbhotelelement1">
                <div className="tbicon1">
                  <img className="tbwifi" src={freewifi} alt="" />
                  <p className="tbfw">Free wifi</p>
                </div>
                <div className="tbicon2">
                  <img className="tbparking" src={parking} alt="" />
                  <p className="tbfp">Free Parking</p>
                </div>
                <div className="tbicon3">
                  <img className="tbac-rooms" src={acrooms} alt="" />
                  <p className="tbac">AC Rooms</p>
                </div>
                <div className="tbicon4">
                  <img className="tbcity" src={cityview} alt="" />
                  <p className="tbcv">City View</p>
                </div>
                <div className="tbicon5">
                  <img className="tbsmoking" src={nosmoking} alt="" />
                  <p className="tbns">Non smoking Rooms</p>
                </div>

                <div className="tbhotelelement2">
                  <div className="tbicon6">
                    <img className="tbhousekeeping" src={housekeeping} alt="" />
                    <p className="tbhk">House Keeping</p>
                  </div>
                  <div className="tbicon7">
                    <img className="tbroomservice" src={roomservice} alt="" />
                    <p className="tbrs">Room service</p>
                  </div>
                  <div className="tbicon8">
                    <img className="tbtransport" src={transport} alt="" />
                    <p className="tbtp">Transportation</p>
                  </div>
                  <div className="tbicon9">
                    <img className="tbfreebreakfast" src={freebreakfast} alt="" />
                    <p className="tbfb">Free Breakfast</p>
                  </div>
                  <div className="tbicon10">
                    <img
                      className="tbconferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="tbcf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="tbprice">
                  <hr className="tbdownside" />
                  <div className="tbpricebottom">
                    <div className="tbpriceleft">
                  <h3 className="tbroomprice">$ 250</h3>
                  <p className="tbfor">For 1 Night</p>
                  </div>
                  <div className="tbprime">
                  <Link to='/hotelmainpage2'>
                    <button type="button" className="tbpricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-row-column">
        <div className="tbcontainer-card1">
          <div className="tbcontainer-top">
            <div className="tbcard-topleft">
              <div className="tbtitle-head">
                <h2 className="tbcard-titles">
                  Renaissance Bengaluru Race Course Hotel
                </h2>
              </div>
              <div className="tbstar-rating">
                <img className="tbrating1" src={ratingsh} alt="" />
                <img className="tbrating2" src={ratingsh} alt="" />
                <img className="tbrating3" src={ratingsh} alt="" />
                <img className="tbrating4" src={ratingsh} alt="" />
                <img className="tbrating5" src={ratingsh} alt="" />
              </div>
            </div>
            <div className="tbcard-topright">
              <div className="tbcard-topr1">
                <p className="tbtextgood">Very Good</p>
                <p className="tbtext339">339 Reviews</p>
              </div>
              <div className="tbratevalue">
                <p className="tbtextrate">8.6</p>
              </div>
            </div>
          </div>
          <div className="tbcontainer-middle">
            <div className="tbmiddle-left">
              <div className="tbmiddle-img">
                <img className="tbhotelimge" src={hotelimg5} alt="" />
              </div>
              <h5 className="tbviews">View Details</h5>
            </div>
            <div className="tbmiddle-right">
                <hr className="tbtopside" />
              <div className="tbhotelelement1">
                <div className="tbicon1">
                  <img className="tbwifi" src={freewifi} alt="" />
                  <p className="tbfw">Free wifi</p>
                </div>
                <div className="tbicon2">
                  <img className="tbparking" src={parking} alt="" />
                  <p className="tbfp">Free Parking</p>
                </div>
                <div className="tbicon3">
                  <img className="tbac-rooms" src={acrooms} alt="" />
                  <p className="tbac">AC Rooms</p>
                </div>
                <div className="tbicon4">
                  <img className="tbcity" src={cityview} alt="" />
                  <p className="tbcv">City View</p>
                </div>
                <div className="tbicon5">
                  <img className="tbsmoking" src={nosmoking} alt="" />
                  <p className="tbns">Non smoking Rooms</p>
                </div>

                <div className="tbhotelelement2">
                  <div className="tbicon6">
                    <img className="tbhousekeeping" src={housekeeping} alt="" />
                    <p className="tbhk">House Keeping</p>
                  </div>
                  <div className="tbicon7">
                    <img className="tbroomservice" src={roomservice} alt="" />
                    <p className="tbrs">Room service</p>
                  </div>
                  <div className="tbicon8">
                    <img className="tbtransport" src={transport} alt="" />
                    <p className="tbtp">Transportation</p>
                  </div>
                  <div className="tbicon9">
                    <img className="tbfreebreakfast" src={freebreakfast} alt="" />
                    <p className="tbfb">Free Breakfast</p>
                  </div>
                  <div className="tbicon10">
                    <img
                      className="tbconferencefacility"
                      src={conferencefacility}
                      alt=""
                    />
                    <p className="tbcf">Conference Facility</p>
                  </div>
                </div>
              </div>
            <div className="tbprice">
                  <hr className="tbdownside" />
                  <div className="tbpricebottom">
                    <div className="tbpriceleft">
                  <h3 className="tbroomprice">$ 250</h3>
                  <p className="tbfor">For 1 Night</p>
                  </div>
                  <div className="tbprime">
                  <Link to='/hotelmainpage2'>
                    <button type="button" className="tbpricebtn">
                      Book Now
                    </button>
                    </Link>
                  </div>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-container1">
        <div className="accordion-topic">
          <h2 className="faq1">FAQ's</h2>
        </div>
        <div className="accordion" id="accordion_Examplehotel">
          <div className="accordion-itemshotel">
            {faqData_1.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      openItem === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => handleAccordionToggle(index)}
                    aria-expanded={openItem === index ? "true" : "false"}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    openItem === index ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-bodyhotel">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotelname;
