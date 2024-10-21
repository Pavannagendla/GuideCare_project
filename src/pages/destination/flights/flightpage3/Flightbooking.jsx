import React, { useState } from "react";
import "./flightbooking.css";

import Popup from './FlightSavePopup'

import { Link } from "react-router-dom";

import RightsideSeat from "../../../../Assets/flightseatimg1.png";
import LeftsideSeat from "../../../../Assets/flightseatimg2.png";
import MainFlightImage from "../../../../Assets/main-flight-img.png";

import FlightSeats from "../flightpage3/Flightseats";
import FlightSavePopup from "../flightpage3/FlightSavePopup";

const Flightbooking = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [nextButtonText, setNextButtonText] = useState("Next Flight");

  const handleUpgradeClick = () => {
    setNextButtonText("Payment Method");
    setButtonPopup(false);
  };

  return (
    <div className="flightbooking">
      <FlightSavePopup trigger={buttonPopup} setTrigger={setButtonPopup} onUpgradeClick={handleUpgradeClick}/>

      <div className="flightbooking-right">
        <img src={MainFlightImage} alt="" className="main-flight-img" />
        <FlightSeats />
      </div>
      <div className="flightbooking-leftside">
        <div className="flightbooking-left d-flex flex-column justify-content-center align-items-center">
          <div className="flight-process d-flex justify-content-between align-items-center">
            <label className="process-label">
              <input type="radio" name="flight" value="Flights" />
              Flights
            </label>
            <hr className="flight-hr active" />

            <label className="process-label">
              <input type="radio" name="details" value="Details" />
              Details
            </label>
            <hr className="flight-hr" />

            <label className="process-label">
              <input type="radio" name="payment" value="Payment" />
              Payment
            </label>
            <hr className="flight-hr" />

            <label className="process-label">
              <input type="radio" name="preview" value="Preview" />
              Preview
            </label>
          </div>
          <div className="cou-date-time d-flex flex-row">
            <div className="flight-country d-flex flex-row justify-content-evenly">
              <div className="right-country d-flex flex-column">
                <span className="country-text1">USA</span>
                <span className="country-text2">California, US</span>
              </div>
              <i class="bi bi-arrow-right-short"></i>
              <div className="left-country d-flex flex-column">
                <span className="country-text1">INDIA</span>
                <span className="country-text2">Delhi</span>
              </div>
            </div>
            <div className="flight-depart d-flex flex-column">
              <span className="flight-time">Feb 25 | 7:00AM</span>
              <span className="flight-time-text">Departing</span>
            </div>
            <div className="flight-arrive d-flex flex-column">
              <span className="flight-time">Mar 21 | 12:15PM</span>
              <span className="flight-time-text">Arriving</span>
            </div>
          </div>
          <div className="seat-selection d-flex flex-column justify-content-evenly">
            <div className="seat-images">
              <div className="booking-seats d-flex flex-row justify-content-around boder">
                <div className="rightside-seat text-center">
                  <img src={RightsideSeat} alt="" className="seat-img" />
                  <img src={RightsideSeat} alt="" className="seat-img" />
                </div>
                <div className="leftside-seat text-center">
                  <img src={LeftsideSeat} alt="" className="seat-img" />
                  <img src={LeftsideSeat} alt="" className="seat-img" />
                </div>
              </div>
              <div className="eco-business d-flex flex-row justify-content-around gap-5">
                <div className="economy">
                  <div className="eco-head">
                    <span>Economy</span>
                    <button>Selected</button>
                  </div>
                  <p>
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </p>
                  <div className="eco-line"></div>
                  <ul className="eco-list">
                    <li>Built-in entertainment system</li>
                    <li>Complimentary snacks and drinks</li>
                    <li>One free carry-on and personal item</li>
                  </ul>
                </div>
                <div className="business">
                  <span>Business class</span>
                  <p>
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </p>
                  <div className="business-line"></div>
                  <ul className="business-list">
                    <li>Extended leg room</li>
                    <li>First two checked bags free</li>
                    <li>Priority boarding</li>
                    <li>Personalized service</li>
                    <li>Enhanced food and drink service</li>
                    <li>Seats that recline 40% more than economy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="passenger-detail d-flex flex-row justify-content-between align-items-center">
            <div className="pass-seatno d-flex flex-row gap-5">
              <div className="passenger d-flex flex-column">
                <span className="passenger-text1">Passenger 1</span>
                <span className="passenger-text2">Sofia Knowles</span>
              </div>
              <div className="seat-no d-flex flex-column">
                <span className="passenger-text1">Seat number</span>
                <span className="passenger-text2">--</span>
              </div>
            </div>
            <hr className="passenger-seat-line" />
            <div className="passenger-seat-buttons d-flex gap-3">
              <button onClick={() => setButtonPopup(true)}>
                Save and close
              </button>
              <Link to="/flightmainpage4">
                <button>
                  {nextButtonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flightbooking;